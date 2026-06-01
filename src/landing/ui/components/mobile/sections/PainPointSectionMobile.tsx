"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { imgIMockupIPhone14 } from "@/landing/ui/components/mobile/assets/images";

type CardProps = {
  number: string;
  title: string;
  subtitle: string;
  top: number;
  animRef: RefObject<HTMLDivElement | null>;
};

function PainCardMobile({ number, title, subtitle, top, animRef }: CardProps) {
  return (
    <div
      ref={animRef}
      className="absolute flex items-center gap-[10px]"
      style={{ top, left: 83.41, width: 235.183, height: 56.151, paddingLeft: 14.74, paddingRight: 14.74 }}
    >
      <div
        className="absolute inset-0 bg-white border-[#d9d9d9] border-[0.749px] border-solid rounded-[28.075px]"
        style={{ boxShadow: "0px 1.5px 7.8px 0px rgba(84,84,84,0.08)" }}
      />
      <p className="relative font-['Pretendard',sans-serif] font-medium text-[#8aafe6] text-[19.986px] whitespace-nowrap shrink-0 leading-none">
        {number}
      </p>
      <div className="relative flex flex-col gap-[3px]">
        <p className="font-['Pretendard',sans-serif] font-medium text-[#2a4874] text-[10.992px] whitespace-nowrap leading-tight">
          {title}
        </p>
        <p className="font-['Pretendard',sans-serif] font-medium text-[#7d7d7d] text-[7.995px] whitespace-nowrap leading-tight">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function StressQuoteMobile() {
  return (
    <div
      className="-translate-x-1/2 absolute left-1/2 top-[1621.07px] text-[#2d2e30] text-[13.394px] text-center w-[320px]"
      style={{
        fontFamily: "'Prompt', 'Noto Sans KR', sans-serif",
        fontVariationSettings: "'wght' 400",
        lineHeight: "19.644px",
      }}
    >
      <span>아직도 데이트코스 계획 때문에 </span>
      <span
        className="relative inline-block bg-[#333] rounded-[3.063px]"
        style={{ width: 48.779, height: 13.098, verticalAlign: "-2px" }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] leading-none">
          스트레스
        </span>
      </span>
      <span> 받고 계신가요?</span>
    </div>
  );
}

const CARD_DELAYS = [0, 200, 400];

export default function PainPointSectionMobile() {
  const markerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = [card1Ref, card2Ref, card3Ref];

    cards.forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateX(48px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        cards.forEach((ref, i) => {
          const el = ref.current;
          if (!el) return;
          setTimeout(() => {
            el.style.transition =
              "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)";
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          }, CARD_DELAYS[i]);
        });
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    if (markerRef.current) observer.observe(markerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={markerRef}
        className="-translate-x-1/2 absolute bg-white h-[874px] left-1/2 top-[874px] w-[402px]"
      />
      <div className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[0] left-[30px] text-[#2d2e30] text-[32px] top-[980.47px] whitespace-nowrap">
        <p className="leading-[40.101px] mb-0">혹시...</p>
        <p className="leading-[40.101px] mb-0">이런 대화,</p>
        <p className="leading-[40.101px]">해본 적 있죠?</p>
      </div>
      <div className="-translate-x-1/2 absolute h-[199.094px] left-1/2 top-[1156.39px] w-[192.983px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[198.22%] left-0 max-w-none top-0 w-full" src={imgIMockupIPhone14} />
        </div>
      </div>
      <PainCardMobile
        number="01"
        title="인터넷, SNS 에서 찾는 시간"
        subtitle="검색하다 결국 지쳐서 결국 아무데나 가는 악순환"
        top={1373.88}
        animRef={card1Ref}
      />
      <PainCardMobile
        number="02"
        title="동선이 엉망인 코스"
        subtitle="맛집은 강남, 카페는 홍대... 이동만 2시간"
        top={1438.96}
        animRef={card2Ref}
      />
      <PainCardMobile
        number="03"
        title="준비하다 기분 다 날림"
        subtitle="데이트 전날 밤이 더 힘든 경험, 이제 없애드려요"
        top={1504.03}
        animRef={card3Ref}
      />
      <StressQuoteMobile />
    </>
  );
}
