"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { Group39, Group40, Group38, Group37, Group79 } from "./canvasParts";

function AnimGroup({ children, divRef }: { children: React.ReactNode; divRef: RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={divRef} className="absolute inset-0 pointer-events-none">
      {children}
    </div>
  );
}

export default function HotSpotSectionMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = [card1Ref, card2Ref, card3Ref, card4Ref];

    // 그룹별로 묶기 (같은 그룹 번호 = 동시 등장)
    const groupMap = new Map<number, HTMLElement[]>();
    section.querySelectorAll<HTMLElement>("[data-hotspot-group]").forEach((el) => {
      const g = Number(el.getAttribute("data-hotspot-group"));
      if (!groupMap.has(g)) groupMap.set(g, []);
      groupMap.get(g)!.push(el);
    });
    const stickerGroups = [...groupMap.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([, els]) => els);

    // 초기 상태
    cards.forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
    });
    stickerGroups.flat().forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(10px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // 1단계: 카드 4개 순서대로
        cards.forEach((ref, i) => {
          const el = ref.current;
          if (!el) return;
          setTimeout(() => {
            el.style.transition =
              "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, i * 150);
        });

        // 2단계: 그룹 단위로 stagger
        stickerGroups.forEach((els, i) => {
          setTimeout(() => {
            els.forEach((el) => {
              el.style.transition =
                "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)";
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            });
          }, 700 + i * 180);
        });

        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    const marker = section.querySelector("[data-hotspot-marker]");
    if (marker) observer.observe(marker);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <div
        className="-translate-x-1/2 absolute bg-[#f5f5f5] h-[874px] left-1/2 top-[1748px] w-[402px]"
        data-hotspot-marker
      />
      <div
        className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[0] left-[30px] text-[#2d2e30] text-[32px] top-[1854.47px] whitespace-nowrap"
      >
        <p className="leading-[55px] mb-0 whitespace-pre">{`요즘 가장 핫한 코스만 `}</p>
        <p className="leading-[55px] whitespace-pre">쏙쏙 골라드려요 !</p>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[0] left-1/2 text-[#6f7176] text-[13px] text-center top-[2447.29px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        <p className="leading-[21px] mb-0">실제 데행사가 추천하는 코스예요</p>
        <p className="leading-[21px]">지도와 장소, 동선까지 한 번에 정리해 드려요</p>
      </div>

      {/* 카드 4개 — AnimGroup 으로 감싸서 개별 애니메이션 */}
      <AnimGroup divRef={card1Ref}><Group39 /></AnimGroup>
      <AnimGroup divRef={card2Ref}><Group40 /></AnimGroup>
      <AnimGroup divRef={card3Ref}><Group38 /></AnimGroup>
      <AnimGroup divRef={card4Ref}><Group37 /></AnimGroup>

      {/* 스티커 + 말풍선 */}
      <Group79 />
    </div>
  );
}
