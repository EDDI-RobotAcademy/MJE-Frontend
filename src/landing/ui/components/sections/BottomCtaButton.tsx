"use client";

import Link from "next/link";
import svgPaths from "@/landing/ui/components/assets/svgPaths";
import { useLandingBottomTracking } from "@/landing/hooks/useLandingBottomTracking";

export default function BottomCtaButton() {
  const { handleLandingBottomClick } = useLandingBottomTracking();

  return (
    <Link
      href="/home"
      onClick={handleLandingBottomClick}
      aria-label="데이트 코스 만들러가기"
      className="-translate-x-1/2 absolute left-1/2 top-[3673.41px] block h-[69.37px] w-[319.69px] rounded-[34.685px] border border-black shadow-[0px_3px_10.9px_0px_rgba(0,0,0,0.22)] transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-[0px_6px_16px_0px_rgba(0,0,0,0.28)] active:scale-[0.98] active:translate-y-0"
    >
      {/* Inner black pill */}
      <span className="-translate-x-1/2 absolute bg-[#333] h-[59.371px] left-1/2 rounded-[45.361px] top-[5px] w-[309.919px] pointer-events-none" />

      {/* Text */}
      <span
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[25px] left-[137.535px] text-[20px] text-center text-white top-[22.19px] whitespace-nowrap pointer-events-none"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        데이트 코스 만들러가기
      </span>

      {/* Arrow */}
      <span className="absolute flex items-center justify-center left-[252.805px] size-[30.849px] top-[19.26px] pointer-events-none">
        <span className="flex-none rotate-[-90.29deg]">
          <span className="relative size-[30.696px] block">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.6956 30.6956">
              <g>
                <mask height="31" id="mask_bottom_cta_btn" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="31" x="0" y="0">
                  <rect fill="#D9D9D9" height="30.1956" stroke="#333333" strokeWidth="0.5" width="30.1956" x="0.25" y="0.25" />
                </mask>
                <g mask="url(#mask_bottom_cta_btn)">
                  <path d={svgPaths.p33357600} fill="white" stroke="#333333" strokeWidth="0.5" />
                </g>
              </g>
            </svg>
          </span>
        </span>
      </span>
    </Link>
  );
}
