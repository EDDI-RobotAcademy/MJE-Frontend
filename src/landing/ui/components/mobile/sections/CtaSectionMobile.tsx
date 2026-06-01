"use client";

import { useEffect, useRef } from "react";
import { Group77 } from "./canvasParts";
import BottomCtaButtonMobile from "./BottomCtaButtonMobile";

export default function CtaSectionMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const GROUP_COUNT = 5;
    const groups: HTMLElement[][] = Array.from({ length: GROUP_COUNT }, () => []);

    section.querySelectorAll<HTMLElement>("[data-cta-tag]").forEach((el) => {
      const idx = Number(el.getAttribute("data-cta-tag"));
      if (!isNaN(idx) && idx < GROUP_COUNT) groups[idx].push(el);
    });

    groups.flat().forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(-20px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        groups.forEach((els, i) => {
          setTimeout(() => {
            els.forEach((el) => {
              el.style.transition =
                "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)";
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            });
          }, i * 130);
        });
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    const marker = section.querySelector("[data-cta-marker]");
    if (marker) observer.observe(marker);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <div
        className="-translate-x-1/2 absolute bg-[#f5f5f5] h-[874px] left-1/2 top-[3497px] w-[402px]"
        data-cta-marker
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[55px] left-1/2 text-black text-[23px] text-center top-[3843.44px] whitespace-nowrap"
      >
        지금은 완벽한 데이트를 만들 시간!
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt',sans-serif] leading-[25px] left-[calc(50%+0.5px)] not-italic text-[#656565] text-[16px] text-center top-[3898.44px] whitespace-nowrap">
        Time to build your date!
      </p>
      <Group77 />
      <BottomCtaButtonMobile />
    </div>
  );
}
