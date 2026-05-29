'use client';
import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { imgIMockupIPhone14 } from "@/landing/ui/components/assets/images";

type CardProps = {
  number: string;
  title: string;
  subtitle: string;
  cardTop: number;
  animRef: RefObject<HTMLDivElement | null>;
};

function PainCard({ number, title, subtitle, cardTop, animRef }: CardProps) {
  return (
    <div
      ref={animRef}
      className="absolute"
      style={{ top: cardTop, left: 721.96, width: 470.688, height: 112.378 }}
    >
      <div
        className="absolute inset-0 bg-white border-[#d9d9d9] border-[1.5px] border-solid rounded-[56.189px]"
        style={{ boxShadow: "0px 3px 15.6px 0px rgba(84,84,84,0.08)" }}
      />
      <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[51px] text-[#8aafe6] text-[40px] whitespace-nowrap"
        style={{ top: 30.69, left: 29.5 }}>
        {number}
      </p>
      <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[51px] text-[#2a4874] text-[22px] whitespace-nowrap"
        style={{ top: 15.19, left: 98.23 }}>
        {title}
      </p>
      <p className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[51px] text-[#7d7d7d] text-[16px] whitespace-nowrap"
        style={{ top: 46.19, left: 98.23 }}>
        {subtitle}
      </p>
    </div>
  );
}

function StressQuote() {
  return (
    <div
      className="-translate-x-1/2 absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[32.064px] left-1/2 text-[#2d2e30] text-[21.862px] text-center top-[1603.96px] whitespace-nowrap"
      style={{ fontVariationSettings: "'wght' 400" }}
    >
      <span>아직도 데이트코스 계획 때문에 </span>
      <span
        className="relative inline-block bg-[#333] rounded-[3px]"
        style={{ width: 97, height: 26, verticalAlign: "-3px" }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-white text-[21.862px] leading-none pb-[2px]">
          스트레스
        </span>
      </span>
      <span> 받고 계신가요?</span>
    </div>
  );
}

const CARD_DELAYS = [0, 200, 400];

export default function PainPointSection() {
  const markerRef = useRef<HTMLDivElement>(null);
  const card1Ref  = useRef<HTMLDivElement>(null);
  const card2Ref  = useRef<HTMLDivElement>(null);
  const card3Ref  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = [card1Ref, card2Ref, card3Ref];

    // 초기 상태: 오른쪽에서 슬라이드 + 투명
    cards.forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateX(48px)';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        cards.forEach((ref, i) => {
          const el = ref.current;
          if (!el) return;
          setTimeout(() => {
            el.style.transition = 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)';
            el.style.opacity = '1';
            el.style.transform = 'translateX(0)';
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
        className="-translate-x-1/2 absolute bg-white h-[850px] left-[calc(50%-1.62px)] top-[847.99px] w-[1443.247px]"
      />

      <div className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[0] left-[130px] text-[#2d2e30] text-[40px] top-[930.95px] whitespace-nowrap">
        <p className="leading-[51px] mb-0">혹시...</p>
        <p className="leading-[51px] mb-0">이런 대화,</p>
        <p className="leading-[51px]">해본 적 있죠?</p>
      </div>

      <div className="-translate-x-1/2 absolute h-[418.344px] left-[calc(50%-269.89px)] top-[1145.57px] w-[405.503px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[198.22%] left-0 max-w-none top-0 w-full" src={imgIMockupIPhone14} />
        </div>
      </div>

      <PainCard number="01" title="인터넷, SNS 에서 찾는 시간"  subtitle="검색하다 결국 지쳐서 결국 아무데나 가는 악순환" cardTop={1146.78} animRef={card1Ref} />
      <PainCard number="02" title="동선이 엉망인 코스"           subtitle="맛집은 강남, 카페는 홍대... 이동만 2시간"       cardTop={1299.16} animRef={card2Ref} />
      <PainCard number="03" title="준비하다 기분 다 날림"         subtitle="데이트 전날 밤이 더 힘든 경험, 이제 없애드려요" cardTop={1451.53} animRef={card3Ref} />

      <StressQuote />
    </>
  );
}
