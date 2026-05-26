"use client";

import { useEffect, useRef, useState } from "react";
import { Place } from "@/courses/types/course";
import CourseMapSkeleton from "./CourseMapSkeleton";
import { sortPlacesByOrder } from "@/courses/utils/sortPlaces";

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

type Status = "loading" | "ready" | "error";

interface CourseMapProps {
  places: Place[];
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

export default function CourseMap({ places }: CourseMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    setStatus("loading");

    if (!MAP_KEY) {
      setStatus("error");
      return;
    }

    let cancelled = false;
    const overlays: KakaoCustomOverlay[] = [];

    function applyBounds(
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

      if (positions.length === 1) {
        map.setCenter(positions[0].pos);
        map.setLevel(SINGLE_MARKER_ZOOM);
      } else {
        const bounds = new maps.LatLngBounds();
        positions.forEach(({ pos }) => bounds.extend(pos));
        map.setBounds(bounds);
      }
    }

    function renderMarkers(maps: KakaoMaps, map: KakaoMap) {
      if (cancelled) return;

      const sorted = sortPlacesByOrder(places);

      // lat/lng 직접 사용 경로
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
          applyBounds(maps, map, positions);
          setStatus("ready");
        }
        return;
      }

      // 주소 geocoding 폴백
      const addressEntries = sorted
        .map((place, sortedIndex) => ({ addr: place.address ?? place.location, place, sortedIndex }))
        .filter((e): e is { addr: string; place: Place; sortedIndex: number } => Boolean(e.addr));

      if (addressEntries.length === 0) {
        if (!cancelled) setStatus("ready");
        return;
      }

      const geocoder = new maps.services.Geocoder();
      const resolved: Array<{ pos: KakaoLatLng; place: Place; sortedIndex: number }> = [];
      let remaining = addressEntries.length;

      addressEntries.forEach(({ addr, place, sortedIndex }) => {
        geocoder.addressSearch(addr, (result, s) => {
          if (!cancelled && s === maps.services.Status.OK && result[0]) {
            resolved.push({
              pos: new maps.LatLng(+result[0].y, +result[0].x),
              place,
              sortedIndex,
            });
          }
          remaining -= 1;
          if (remaining === 0 && !cancelled) {
            if (resolved.length > 0) {
              resolved.sort((a, b) => a.sortedIndex - b.sortedIndex);
              applyBounds(maps, map, resolved);
            }
            setStatus("ready");
          }
        });
      });
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
        };
      }
    } else {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${MAP_KEY}&libraries=services&autoload=false`;
      script.onload = initMap;
      script.onerror = () => {
        if (!cancelled) setStatus("error");
      };
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      overlays.forEach((o) => o.setMap(null));
    };
  }, [places]);

  return (
    <div className="relative h-[200px] w-full rounded-[20px] overflow-hidden">
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
    </div>
  );
}
