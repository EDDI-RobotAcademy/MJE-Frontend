"use client";

import Link from "next/link";
import svgPaths from "@/landing/ui/components/mobile/assets/svgPaths";
import { useLandingTopTracking } from "@/landing/hooks/useLandingTopTracking";

export default function HeroCtaButtonMobile() {
  const { handleLandingTopClick } = useLandingTopTracking();

  return (
    <Link
      href="/home"
      onClick={handleLandingTopClick}
      aria-label="데이트 코스 만들기"
      className="absolute left-[49.03px] top-[577.33px] h-[49.39px] w-[303.567px] rounded-[24.695px] z-10 block overflow-hidden transition-all duration-200 ease-out hover:scale-[1.02] hover:-translate-y-[2px] active:scale-[0.98] active:translate-y-0 shadow-[3px_5px_8px_0px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.75)] hover:shadow-[3px_10px_18px_0px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.75)]"
      style={{
        background: "linear-gradient(135deg, #6e9dd9 0%, #8aaee6 35%, #b8d4f0 65%, #d5e6f6 100%)",
        border: "1px solid rgba(255,255,255,0.8)",
      }}
    >
      <span
        className="absolute inset-0 rounded-[24.695px] pointer-events-none"
        style={{
          background: "linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0.0) 100%)",
          backdropFilter: "blur(2px)",
        }}
      />
      <span className="[word-break:break-word] absolute font-figma-prompt font-medium leading-[24.592px] left-[60px] text-[#2a4874] text-[17.885px] top-[12px] whitespace-nowrap pointer-events-none">
        데이트 코스 만들기 !
      </span>
      <span className="absolute left-[221px] size-[22.293px] top-[14px] pointer-events-none">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2932 22.2932">
          <g>
            <mask height="23" id="mask_mobile_cta_arrow" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="23" x="0" y="0">
              <rect fill="#D9D9D9" height="22.2932" width="22.2932" />
            </mask>
            <g mask="url(#mask_mobile_cta_arrow)">
              <path d={svgPaths.p28f1a8f0} fill="#2A4874" />
            </g>
          </g>
        </svg>
      </span>
    </Link>
  );
}
