'use client';
import { useEffect, useRef } from 'react';
import { imgCtaBottomPhoto } from "@/landing/ui/components/assets/images";
import BottomCtaButton from "@/landing/ui/components/sections/BottomCtaButton";

function CozyCafeTag() {
  return (
    <div className="absolute contents h-[55.76px] left-[147px] top-[3653.87px] w-[125.402px]">
      <div className="absolute flex h-[55.76px] items-center justify-center left-[147px] top-[3653.87px] w-[125.402px]">
        <div className="flex-none rotate-[-6.4deg]">
          <div className="bg-[#ffce77] h-[42.489px] relative rounded-[8.396px] w-[121.423px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[32.017px] items-center justify-center left-[209.75px] top-[3665.75px] w-[101.718px]">
        <div className="flex-none rotate-[-6.4deg]">
          <p className="[word-break:break-word] font-['Prompt',sans-serif] leading-[20.989px] not-italic relative text-[20.15px] text-black text-center whitespace-nowrap">Cozy Cafe</p>
        </div>
      </div>
    </div>
  );
}

function CocktailBarTag() {
  return (
    <div className="absolute contents h-[44.028px] left-[196.91px] top-[3698.75px] w-[146.784px]">
      <div className="absolute flex h-[44.028px] items-center justify-center left-[196.91px] top-[3698.75px] w-[146.784px]">
        <div className="flex-none rotate-[-0.6deg]">
          <div className="bg-[#ffe9ca] h-[42.489px] relative rounded-[8.396px] w-[146.344px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[22.231px] items-center justify-center left-[272.13px] top-[3709.64px] w-[117.215px]">
        <div className="flex-none rotate-[-0.6deg]">
          <p className="[word-break:break-word] font-['Prompt',sans-serif] leading-[20.989px] not-italic relative text-[20.15px] text-black text-center whitespace-nowrap">Cocktail Bar</p>
        </div>
      </div>
    </div>
  );
}

function PopUpStoresTag() {
  return (
    <div className="absolute contents left-[1103.19px] top-[3700.29px]">
      <div className="absolute bg-[#dbecfe] h-[42.489px] left-[1103.19px] rounded-[8.396px] top-[3700.29px] w-[174.145px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt',sans-serif] leading-[20.989px] left-[1190.08px] not-italic text-[20.15px] text-black text-center top-[3711.04px] whitespace-nowrap">Pop-up Stores</p>
    </div>
  );
}

function ParkTag() {
  return (
    <div className="absolute contents h-[58.242px] left-[1090.22px] top-[3594.67px] w-[125.991px]">
      <div className="absolute flex h-[58.242px] items-center justify-center left-[1090.22px] top-[3594.67px] w-[125.991px]">
        <div className="flex-none rotate-[-7.63deg]">
          <div className="bg-[#cae594] h-[42.489px] relative rounded-[8.396px] w-[121.423px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[26.526px] items-center justify-center left-[1153.3px] top-[3610.52px] w-[45.408px]">
        <div className="flex-none rotate-[-7.63deg]">
          <p className="[word-break:break-word] font-['Prompt',sans-serif] leading-[20.989px] not-italic relative text-[20.15px] text-black text-center whitespace-nowrap">Park</p>
        </div>
      </div>
    </div>
  );
}

function HotSpotsTag() {
  return (
    <div className="absolute contents h-[66.497px] left-[1153.21px] top-[3639.32px] w-[127.557px]">
      <div className="absolute flex h-[66.497px] items-center justify-center left-[1153.21px] top-[3639.32px] w-[127.557px]">
        <div className="flex-none rotate-[11.84deg]">
          <div className="bg-[#f9ddf6] h-[42.489px] relative rounded-[8.396px] w-[121.423px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[40.249px] items-center justify-center left-[1219.19px] top-[3652.91px] w-[98.266px]">
        <div className="flex-none rotate-[11.84deg]">
          <p className="[word-break:break-word] font-['Prompt',sans-serif] leading-[20.989px] not-italic relative text-[20.15px] text-black text-center whitespace-nowrap">Hot Spots</p>
        </div>
      </div>
    </div>
  );
}

function BottomImageBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';

    // 이미지 div 자체를 관찰 — 이미지가 20% 보이면 트리거
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.transition = 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute left-[20.52px] top-[3797.78px] w-[1388.96px]">
      <img
        alt=""
        className="w-full rounded-[30px] pointer-events-none"
        src={imgCtaBottomPhoto}
      />
    </div>
  );
}

export default function CtaSection() {
  return (
    <>
      {/* Gray section background covering y=3397.99 to y=4615.02 */}
      <div className="-translate-x-1/2 absolute bg-[#f5f5f5] h-[1252px] left-[calc(50%-0.5px)] top-[3397.99px] w-[1441px]" />

      {/* Backdrop image with masks */}
      <BottomImageBackdrop />

      {/* Headings */}
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium h-[32.38px] leading-[25px] left-1/2 text-[48px] text-black text-center top-[3527.92px] w-[699px]"
      >
        지금은 완벽한 데이트를 만들 시간!
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt',sans-serif] leading-[25px] left-1/2 not-italic text-[#656565] text-[20px] text-center top-[3589.91px] whitespace-nowrap">
        Time to build your date!
      </p>

      {/* Category tags left side */}
      <CozyCafeTag />
      <CocktailBarTag />

      {/* Category tags right side */}
      <ParkTag />
      <PopUpStoresTag />
      <HotSpotsTag />

      {/* Final CTA button */}
      <BottomCtaButton />

      {/* Small gray square at bottom-right (off-canvas anchor) */}
      <div className="absolute bg-[#d9d9d9] left-[1571.33px] size-[28.86px] top-[4662.91px]" />
    </>
  );
}
