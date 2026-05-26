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
}
interface KakaoGeocoder {
  addressSearch(
    addr: string,
    cb: (res: Array<{ y: string; x: string }>, status: string) => void,
  ): void;
}
interface KakaoMaps {
  Map: new (el: HTMLElement, opts: { center: KakaoLatLng; level: number }) => KakaoMap;
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
const SEGMENT_COLORS = ["#2A4874"];
const POLYLINE_WEIGHT = 3;
const POLYLINE_OPACITY = 1;
const POLYLINE_STYLE = "solid";

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
}


function markerContent(order: number, name: string): string {
  const color = "#F1354D";
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
    <div style="background:#fff;color:#2A4874;font-size:10px;font-weight:600;font-family:sans-serif;padding:2px 6px 2px 3px;border-radius:10px;white-space:nowrap;box-shadow:0 1px 3px rgba(0,0,0,0.2);display:flex;align-items:center;gap:4px;">
      <span style="width:16px;height:16px;border-radius:50%;background:${color};color:#fff;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${order}</span>
      ${name}
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36" fill="none">
      <path d="M14 0C6.268 0 0 6.268 0 14c0 9.625 14 22 14 22S28 23.625 28 14C28 6.268 21.732 0 14 0z" fill="${color}"/>
      <path d="M14 20C14 20 6.5 15.5 6.5 10.5C6.5 8 8.5 6.5 11 6.5C12.5 6.5 13.5 7.3 14 7.8C14.5 7.3 15.5 6.5 17 6.5C19.5 6.5 21.5 8 21.5 10.5C21.5 15.5 14 20 14 20Z" fill="#fff"/>
    </svg>
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
    entries.map(({ addr, place, sortedIndex }) =>
      new Promise<{ pos: KakaoLatLng; place: Place; sortedIndex: number } | null>(resolve => {
        geocoder.addressSearch(addr, (result, s) => {
          if (s === maps.services.Status.OK && result[0]) {
            resolve({ pos: new maps.LatLng(+result[0].y, +result[0].x), place, sortedIndex });
          } else {
            resolve(null);
          }
        });
      }),
    ),
  ).then(results =>
    results.filter((r): r is { pos: KakaoLatLng; place: Place; sortedIndex: number } => r !== null),
  );
}

export default function CourseMap({ places, location, totalDistanceM, transport }: CourseMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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
          yAnchor: 1,
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
          const result = await fetchOsrmRoute(from.getLat(), from.getLng(), to.getLat(), to.getLng());
          if (cancelled) return;
          const path = result
            ? result.coords.map(([lng, lat]) => new maps.LatLng(lat, lng))
            : [from, to];
          if (result) totalDist += result.distanceM;
          const color = SEGMENT_COLORS[i] ?? SEGMENT_COLORS[SEGMENT_COLORS.length - 1];
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
        map.setCenter(positions[0].pos);
        map.setLevel(SINGLE_MARKER_ZOOM);
      } else {
        const bounds = new maps.LatLngBounds();
        positions.forEach(({ pos }) => bounds.extend(pos));
        map.setBounds(bounds);
      }
    }

    async function renderMarkers(maps: KakaoMaps, map: KakaoMap) {
      if (cancelled) return;

      const sorted = sortPlacesByOrder(places);

      const withCoords = sorted
        .map((place, sortedIndex) => ({ place, sortedIndex }))
        .filter(({ place }) => place.latitude != null && place.longitude != null);

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
        .map((place, sortedIndex) => ({ addr: place.address ?? place.location, place, sortedIndex }))
        .filter((e): e is { addr: string; place: Place; sortedIndex: number } => Boolean(e.addr));

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
    };
  }, [places]);

  return (
    <div className="relative h-[200px] w-full rounded-[20px] overflow-hidden" style={{ opacity: 0.93, border: "1px solid #D4D4D4" }}>
      {status === "loading" && (
        <div className="absolute inset-0">
          <CourseMapSkeleton />
        </div>
      )}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#f0f4f8]">
          <span className="text-[12px] text-[#959595]">지도를 불러올 수 없어요</span>
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
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            background: "rgba(0,0,0,0.05)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
            borderRadius: 9999,
            padding: "5px 12px",
            fontSize: 11,
            fontWeight: 600,
            color: "#1A1A1A",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#1A1A1A" style={{ display: "inline", marginRight: 4, flexShrink: 0 }}>
            <path d="M2 12L22 2L12 22L10 14L2 12Z"/>
          </svg>
          {location}
        </div>
      )}

      {status === "ready" && (
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            zIndex: 10,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            padding: "8px 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            minWidth: 72,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>
            {osrmDistanceM != null ? formatDistance(osrmDistanceM) : totalDistanceM != null ? formatDistance(totalDistanceM) : "—"}
          </span>
          <span style={{ fontSize: 10, color: "#959595", lineHeight: 1.3, textAlign: "center", whiteSpace: "nowrap" }}>
            {(transport ? (TRANSPORT_LABEL[transport] ?? transport) : "이동")} 이동 기준
          </span>
        </div>
      )}
    </div>
  );
}
