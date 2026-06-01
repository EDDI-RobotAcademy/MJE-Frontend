"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { Group73, Group74, Group75 } from "./canvasParts";

function AnimGroup({ children, divRef }: { children: React.ReactNode; divRef: RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={divRef} className="absolute inset-0 pointer-events-none">
      {children}
    </div>
  );
}

export default function TimeToHealSectionMobile() {
  const markerRef = useRef<HTMLDivElement>(null);
  const g1Ref = useRef<HTMLDivElement>(null);
  const g2Ref = useRef<HTMLDivElement>(null);
  const g3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const groups = [
      { ref: g1Ref, delay: 0 },
      { ref: g2Ref, delay: 220 },
      { ref: g3Ref, delay: 440 },
    ];

    groups.forEach(({ ref }) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(22px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        groups.forEach(({ ref, delay }) => {
          const el = ref.current;
          if (!el) return;
          setTimeout(() => {
            el.style.transition =
              "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
        });
        observer.disconnect();
      },
      { threshold: 0.6 }
    );

    if (markerRef.current) observer.observe(markerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={markerRef} className="-translate-x-1/2 absolute h-px left-1/2 top-[2800px] w-px" />
      <div
        className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[0] left-[calc(50%-171px)] text-[#2d2e30] text-[0px] top-[2728.47px] whitespace-nowrap"
      >
        <p className="leading-[55px] mb-0 text-[32px]">복잡한 서치는 끝</p>
        <p className="text-[32px]">
          <span className="leading-[55px] text-[#2a4874]">터치 3번</span>
          <span className="leading-[55px]">이면 충분해요</span>
        </p>
      </div>
      <AnimGroup divRef={g1Ref}><Group73 /></AnimGroup>
      <AnimGroup divRef={g2Ref}><Group74 /></AnimGroup>
      <AnimGroup divRef={g3Ref}><Group75 /></AnimGroup>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[0] left-1/2 text-[#6f7176] text-[13px] text-center top-[3321.29px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        <p className="leading-[25px] mb-0">맛집 검색부터 동선 계산까지 머리 아픈 과정은 전부 건너뛰세요</p>
        <p className="leading-[25px]">데행사가 알아서 다 짜드리니까요</p>
      </div>
    </>
  );
}
