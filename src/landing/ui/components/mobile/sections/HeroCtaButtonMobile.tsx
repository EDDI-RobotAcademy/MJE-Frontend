"use client";

import Link from "next/link";
import { useLandingTopTracking } from "@/landing/hooks/useLandingTopTracking";

export default function HeroCtaButtonMobile() {
  const { handleLandingTopClick } = useLandingTopTracking();

  return (
    <Link
      href="/home"
      onClick={handleLandingTopClick}
      aria-label="데이트 코스 만들기"
      className="absolute left-[49.03px] top-[665.33px] h-[49.39px] w-[303.567px] rounded-[24.695px] z-10 transition-all duration-200 ease-out hover:-translate-y-[1px] active:scale-[0.98]"
    />
  );
}
