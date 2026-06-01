"use client";

import Link from "next/link";
import { useLogoTracking } from "@/home/hooks/useLogoTracking";
import { useHomeTabTracking } from "@/home/hooks/useHomeTabTracking";
import { imgLogo1102 } from "@/landing/ui/components/assets/images";

export default function LandingNavbar() {
  const { handleLogoClick } = useLogoTracking();
  const { handleHomeTabClick } = useHomeTabTracking();

  return (
    <>
      {/* White bar background */}
      <div className="absolute bg-white border-[#d7d7d7] border-b-[1.5px] border-solid h-[73.622px] left-0 top-0 w-[1440px]" />

      {/* Underline below "Home" */}
      <div className="absolute h-0 left-[281.89px] top-[73.62px] w-[49.241px] pointer-events-none">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.2406 2">
            <line stroke="black" strokeWidth="2" x2="49.2406" y1="1" y2="1" />
          </svg>
        </div>
      </div>

      {/* Get Started button (static for now) */}
      <div className="absolute bg-[#333] h-[41.802px] left-[1283.99px] rounded-[20.901px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] top-[15.91px] w-[106.012px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular',sans-serif] leading-[22px] left-[1337.49px] not-italic text-[12px] text-center text-white top-[25.81px] whitespace-nowrap pointer-events-none">
        Get Started
      </p>

      {/* Home tab — clickable, fires home_click */}
      <Link
        href="/home"
        onClick={handleHomeTabClick}
        aria-label="홈으로 이동"
        className="-translate-x-1/2 absolute font-['Prompt:Regular',sans-serif] leading-[normal] left-[calc(50%-413.91px)] not-italic text-[17px] text-black text-center top-[26.81px] whitespace-nowrap"
      >
        Home
      </Link>

      {/* Logo — clickable, fires logo_click */}
      <Link
        href="/home"
        onClick={handleLogoClick}
        aria-label="홈으로 이동"
        className="absolute h-[29.264px] left-[50px] top-[25.18px] w-[141.492px]"
      >
        <img
          alt="dehangsa"
          className="absolute inset-0 max-w-none object-cover size-full"
          src={imgLogo1102}
        />
      </Link>
    </>
  );
}
