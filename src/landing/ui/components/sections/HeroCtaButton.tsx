"use client";

import Link from "next/link";
import svgPaths from "@/landing/ui/components/assets/svgPaths";
import { useLandingTopTracking } from "@/landing/hooks/useLandingTopTracking";

export default function HeroCtaButton() {
  const { handleLandingTopClick } = useLandingTopTracking();

  return (
    <Link
      href="/home"
      onClick={handleLandingTopClick}
      aria-label="데이트 코스 만들기"
      className="absolute h-[44.184px] left-[130px] rounded-[22.092px] top-[599.21px] w-[271.569px] block overflow-hidden transition-all duration-200 ease-out hover:scale-[1.02] hover:-translate-y-[2px] active:scale-[0.98] active:translate-y-0 shadow-[3px_5px_8px_0px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.75)] hover:shadow-[3px_10px_18px_0px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.75)]"
      style={{
        background: "linear-gradient(135deg, #6e9dd9 0%, #8aaee6 35%, #b8d4f0 65%, #d5e6f6 100%)",
        border: "1px solid rgba(255,255,255,0.8)",
      }}
    >
      <span
        className="absolute inset-0 rounded-[22.092px] pointer-events-none"
        style={{
          background: "linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0.0) 100%)",
          backdropFilter: "blur(2px)",
        }}
      />
      <span
        className="[word-break:break-word] absolute font-['Prompt','Noto_Sans_KR',sans-serif] font-medium leading-[22px] left-[53.84px] text-[#2a4874] text-[15px] top-[12.09px] whitespace-nowrap pointer-events-none"
      >
        데이트 코스 만들기 !
      </span>
      <span className="absolute left-[197.78px] size-[19.943px] top-[13.12px] pointer-events-none">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9434 19.9434">
          <g>
            <mask height="20" id="mask_arrow_right_btn" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
              <rect fill="#D9D9D9" height="19.9434" width="19.9434" />
            </mask>
            <g mask="url(#mask_arrow_right_btn)">
              <path d={svgPaths.pde23d00} fill="#2A4874" />
            </g>
          </g>
        </svg>
      </span>
    </Link>
  );
}
