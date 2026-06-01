"use client";

import Link from "next/link";
import { useLogoTracking } from "@/home/hooks/useLogoTracking";
import { useHomeTabTracking } from "@/home/hooks/useHomeTabTracking";
import { imgLogo1102 } from "@/landing/ui/components/assets/images";

export default function LandingNavbarMobile() {
  const { handleLogoClick } = useLogoTracking();
  const { handleHomeTabClick } = useHomeTabTracking();

  return (
    <>
      {/* White bar background */}
      <div className="absolute bg-white border-[#d7d7d7] border-b-[1.5px] border-solid h-[56px] left-0 top-0 w-[393px] z-20" />

      {/* Logo */}
      <Link
        href="/home"
        onClick={handleLogoClick}
        aria-label="홈으로 이동"
        className="absolute h-[20px] left-[16px] top-[18px] w-[97px] z-20"
      >
        <img
          alt="dehangsa"
          className="absolute inset-0 max-w-none object-cover size-full"
          src={imgLogo1102}
        />
      </Link>

      {/* Home tab */}
      <Link
        href="/home"
        onClick={handleHomeTabClick}
        aria-label="홈으로 이동"
        className="absolute font-['Prompt:Regular',sans-serif] leading-[normal] left-[133px] not-italic text-[14px] text-black text-center top-[20px] whitespace-nowrap z-20"
      >
        Home
      </Link>

      {/* Home underline */}
      <div className="absolute h-0 left-[133px] top-[40px] w-[36px] pointer-events-none z-20">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 2">
            <line stroke="black" strokeWidth="1.5" x2="36" y1="1" y2="1" />
          </svg>
        </div>
      </div>

      {/* Get Started button (static, mirrors desktop) */}
      <div className="absolute bg-[#333] h-[30px] left-[301px] rounded-[15px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.25)] top-[13px] w-[76px] z-20" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular',sans-serif] leading-[normal] left-[339px] not-italic text-[10px] text-center text-white top-[21px] whitespace-nowrap pointer-events-none z-20">
        Get Started
      </p>
    </>
  );
}
