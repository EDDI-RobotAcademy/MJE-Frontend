"use client";

import { useEffect, useRef, useState } from "react";
import { Place } from "@/courses/types/course";
import CourseMapSkeleton from "./CourseMapSkeleton";
import { sortPlacesByOrder } from "@/courses/utils/sortPlaces";
import { formatDistance } from "@/courses/utils/formatDistance";

interface KakaoLatLng {
  getLat(): number;
  getLng(): number;
}
interface KakaoLatLngBounds {
  extend(latlng: KakaoLatLng): void;
}
interface KakaoCustomOverlay {
  setMap(map: KakaoMap | null): void;
}
interface KakaoPolyline {
  setMap(map: KakaoMap | null): void;
}
interface KakaoMap {
  setBounds(bounds: KakaoLatLngBounds): void;
  setCenter(latlng: KakaoLatLng): void;
  setLevel(level: number): void;
  relayout(): void;
}
interface KakaoGeocoder {
  addressSearch(
    addr: string,
    cb: (res: Array<{ y: string; x: string }>, status: string) => void,
  ): void;
}
interface KakaoMaps {
  Map: new (
    el: HTMLElement,
    opts: { center: KakaoLatLng; level: number },
  ) => KakaoMap;
  CustomOverlay: new (opts: {
    position: KakaoLatLng;
    content: string;
    yAnchor?: number;
    xAnchor?: number;
    zIndex?: number;
  }) => KakaoCustomOverlay;
  LatLng: new (lat: number, lng: number) => KakaoLatLng;
  LatLngBounds: new () => KakaoLatLngBounds;
  Polyline: new (opts: {
    path: KakaoLatLng[];
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: string;
  }) => KakaoPolyline;
  load(cb: () => void): void;
  services: { Geocoder: new () => KakaoGeocoder; Status: { OK: string } };
}

declare global {
  interface Window {
    kakao?: { maps: KakaoMaps };
  }
}

const MAP_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY ?? "";
const SCRIPT_ID = "kakao-map-sdk";
const SINGLE_MARKER_ZOOM = 5;
const SEGMENT_COLORS = ["#05A66B"];
const POLYLINE_WEIGHT = 3;
const POLYLINE_OPACITY = 1;
const POLYLINE_STYLE = "shortdot";

type Status = "loading" | "ready" | "error";

const TRANSPORT_LABEL: Record<string, string> = {
  walk: "도보",
  public_transit: "대중교통",
  transit: "대중교통",
  car: "자동차",
};

interface CourseMapProps {
  places: Place[];
  location?: string;
  totalDistanceM?: number;
  transport?: string;
  heightClassName?: string;
  expanded?: boolean;
}

function markerContent(order: number, name: string): string {
  const color = "#05A66B";
  return `<div style="background:#FAFAF8;color:#222;font-size:12px;font-weight:700;font-family:sans-serif;padding:8px 10px;border-radius:9999px;white-space:nowrap;box-shadow:0 2.17px 5.64px rgba(0,0,0,0.23);display:flex;align-items:center;gap:9px;">
    <span style="color:${color}; font-size:11px; font-weight:700;flex-shrink:0;">${order}</span>
    ${name}
  </div>`;
}

async function fetchOsrmRoute(
  fromLat: number,
  fromLng: number,
  toLat: number,
  toLng: number,
): Promise<{ coords: Array<[number, number]>; distanceM: number } | null> {
  try {
    const url = `https://router.project-osrm.org/route/v1/foot/${fromLng},${fromLat};${toLng},${toLat}?overview=full&geometries=geojson`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.code === "Ok" && data.routes?.[0]?.geometry?.coordinates) {
      return {
        coords: data.routes[0].geometry.coordinates as Array<[number, number]>,
        distanceM: data.routes[0].distance as number,
      };
    }
  } catch {
    // fall back to direct line
  }
  return null;
}

function geocodeAll(
  geocoder: KakaoGeocoder,
  maps: KakaoMaps,
  entries: Array<{ addr: string; place: Place; sortedIndex: number }>,
): Promise<Array<{ pos: KakaoLatLng; place: Place; sortedIndex: number }>> {
  return Promise.all(
    entries.map(
      ({ addr, place, sortedIndex }) =>
        new Promise<{
          pos: KakaoLatLng;
          place: Place;
          sortedIndex: number;
        } | null>((resolve) => {
          geocoder.addressSearch(addr, (result, s) => {
            if (s === maps.services.Status.OK && result[0]) {
              resolve({
                pos: new maps.LatLng(+result[0].y, +result[0].x),
                place,
                sortedIndex,
              });
            } else {
              resolve(null);
            }
          });
        }),
    ),
  ).then((results) =>
    results.filter(
      (r): r is { pos: KakaoLatLng; place: Place; sortedIndex: number } =>
        r !== null,
    ),
  );
}

export default function CourseMap({
  places,
  location,
  totalDistanceM,
  transport,
  heightClassName = "h-[200px]",
  expanded = false,
}: CourseMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<KakaoMap | null>(null);
  const boundsRef = useRef<KakaoLatLngBounds | null>(null);
  const singlePosRef = useRef<KakaoLatLng | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [osrmDistanceM, setOsrmDistanceM] = useState<number | null>(null);

  useEffect(() => {
    setStatus("loading");

    if (!MAP_KEY) {
      setStatus("error");
      return;
    }

    let cancelled = false;
    const overlays: KakaoCustomOverlay[] = [];
    const polylines: KakaoPolyline[] = [];

    async function applyBounds(
      maps: KakaoMaps,
      map: KakaoMap,
      positions: Array<{ pos: KakaoLatLng; place: Place; sortedIndex: number }>,
    ) {
      positions.forEach(({ pos, place, sortedIndex }) => {
        const overlay = new maps.CustomOverlay({
          position: pos,
          content: markerContent(sortedIndex + 1, place.name),
          yAnchor: 0.5,
          xAnchor: 0.5,
          zIndex: 3,
        });
        overlay.setMap(map);
        overlays.push(overlay);
      });

      if (positions.length >= 2) {
        let totalDist = 0;
        for (let i = 0; i < positions.length - 1; i++) {
          if (cancelled) return;
          const from = positions[i].pos;
          const to = positions[i + 1].pos;
          const result = await fetchOsrmRoute(
            from.getLat(),
            from.getLng(),
            to.getLat(),
            to.getLng(),
          );
          if (cancelled) return;
          const path = result
            ? result.coords.map(([lng, lat]) => new maps.LatLng(lat, lng))
            : [from, to];
          if (result) totalDist += result.distanceM;
          const color =
            SEGMENT_COLORS[i] ?? SEGMENT_COLORS[SEGMENT_COLORS.length - 1];
          const polyline = new maps.Polyline({
            path,
            strokeWeight: POLYLINE_WEIGHT,
            strokeColor: color,
            strokeOpacity: POLYLINE_OPACITY,
            strokeStyle: POLYLINE_STYLE,
          });
          polyline.setMap(map);
          polylines.push(polyline);
        }
        if (!cancelled && totalDist > 0) setOsrmDistanceM(totalDist);
      }

      if (positions.length === 1) {
        singlePosRef.current = positions[0].pos;
        map.setCenter(positions[0].pos);
        map.setLevel(SINGLE_MARKER_ZOOM);
      } else {
        const bounds = new maps.LatLngBounds();
        positions.forEach(({ pos }) => bounds.extend(pos));
        boundsRef.current = bounds;
        map.setBounds(bounds);
      }
    }

    async function renderMarkers(maps: KakaoMaps, map: KakaoMap) {
      if (cancelled) return;

      const sorted = sortPlacesByOrder(places);

      const withCoords = sorted
        .map((place, sortedIndex) => ({ place, sortedIndex }))
        .filter(
          ({ place }) => place.latitude != null && place.longitude != null,
        );

      if (withCoords.length > 0) {
        const positions = withCoords.map(({ place, sortedIndex }) => ({
          pos: new maps.LatLng(place.latitude!, place.longitude!),
          place,
          sortedIndex,
        }));
        if (!cancelled) {
          await applyBounds(maps, map, positions);
          if (!cancelled) setStatus("ready");
        }
        return;
      }

      const addressEntries = sorted
        .map((place, sortedIndex) => ({
          addr: place.address ?? place.location,
          place,
          sortedIndex,
        }))
        .filter((e): e is { addr: string; place: Place; sortedIndex: number } =>
          Boolean(e.addr),
        );

      if (addressEntries.length === 0) {
        if (!cancelled) setStatus("ready");
        return;
      }

      const geocoder = new maps.services.Geocoder();
      const resolved = await geocodeAll(geocoder, maps, addressEntries);

      if (!cancelled) {
        if (resolved.length > 0) {
          resolved.sort((a, b) => a.sortedIndex - b.sortedIndex);
          await applyBounds(maps, map, resolved);
        }
        if (!cancelled) setStatus("ready");
      }
    }

    function initMap() {
      if (cancelled || !containerRef.current) return;
      const kakao = window.kakao;
      if (!kakao?.maps) {
        setStatus("error");
        return;
      }

      kakao.maps.load(() => {
        if (cancelled || !containerRef.current) return;
        const { maps } = kakao;

        const map = new maps.Map(containerRef.current, {
          center: new maps.LatLng(37.5665, 126.978),
          level: SINGLE_MARKER_ZOOM,
        });
        mapInstanceRef.current = map;

        renderMarkers(maps, map);
      });
    }

    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      if (window.kakao?.maps) {
        initMap();
      } else {
        existing.addEventListener("load", initMap);
        return () => {
          cancelled = true;
          existing.removeEventListener("load", initMap);
          overlays.forEach((o) => o.setMap(null));
          polylines.forEach((p) => p.setMap(null));
        };
      }
    } else {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${MAP_KEY}&libraries=services&autoload=false&lang=en`;
      script.onload = initMap;
      script.onerror = () => {
        if (!cancelled) setStatus("error");
      };
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      overlays.forEach((o) => o.setMap(null));
      polylines.forEach((p) => p.setMap(null));
      mapInstanceRef.current = null;
      boundsRef.current = null;
      singlePosRef.current = null;
    };
  }, [places]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (status !== "ready" || !map) return;

    const timer = setTimeout(() => {
      map.relayout();
      if (boundsRef.current) {
        map.setBounds(boundsRef.current);
      } else if (singlePosRef.current) {
        map.setCenter(singlePosRef.current);
        map.setLevel(SINGLE_MARKER_ZOOM);
      }
    }, 320);

    return () => clearTimeout(timer);
  }, [expanded, status]);

  return (
    <div
      className={`relative w-full rounded-[20px] overflow-hidden transition-[height] duration-300 ${heightClassName}`}
      style={{ opacity: 0.93, border: "1px solid #FAFAF8" }}
    >
      {status === "loading" && (
        <div className="absolute inset-0">
          <CourseMapSkeleton />
        </div>
      )}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#f0f4f8]">
          <span className="text-[12px] text-[#959595]">
            지도를 불러올 수 없어요
          </span>
        </div>
      )}
      <div
        ref={containerRef}
        className="h-full w-full"
        style={{ visibility: status === "ready" ? "visible" : "hidden" }}
      />

      {status === "ready" && location && (
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexWrap: "nowrap",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            background: "rgba(255,255,255,0.55)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            borderRadius: 9999,
            padding: "5px 12px",
            fontSize: 11,
            fontWeight: 600,
            color: "#1A1A1A",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M0.0188968 4.37352L0.000187621 3.9437L10.2612 -5.72885e-07L6.31749 10.261L5.88767 10.2423L4.20557 6.05562L0.0188968 4.37352ZM1.34966 4.14925L4.75129 5.5099L6.11194 8.91153L9.07621 1.18498L1.34966 4.14925Z"
              fill="#222222"
            />
          </svg>
          <span>{location}</span>
        </div>
      )}

      {status === "ready" && (
        <div
          style={{
            position: "absolute",
            width: 30,
            bottom: 12,
            right: 12,
            zIndex: 10,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.45)",
            borderRadius: 20,
            boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            minWidth: 100,
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#222222",
              lineHeight: 1.2,
            }}
          >
            {osrmDistanceM != null
              ? formatDistance(osrmDistanceM)
              : totalDistanceM != null
                ? formatDistance(totalDistanceM)
                : "—"}
          </span>
          <div
            style={{
              width: "calc(100% + 8px)",
              margin: "0 -4px",
              borderTop: "2px dashed #222222",
            }}
          />
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#222222",
              lineHeight: 1.3,
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            {transport ? (TRANSPORT_LABEL[transport] ?? transport) : "이동"}{" "}
            이동 기준
          </span>
        </div>
      )}
    </div>
  );
}
