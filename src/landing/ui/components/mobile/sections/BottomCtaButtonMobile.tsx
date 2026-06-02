"use client";

import Link from "next/link";
import { useLandingBottomTracking } from "@/landing/hooks/useLandingBottomTracking";
import { Group81 } from "./canvasParts";

export default function BottomCtaButtonMobile() {
  const { handleLandingBottomClick } = useLandingBottomTracking();

  return (
    <>
      <Group81 />
      <Link
        href="/home"
        onClick={handleLandingBottomClick}
        aria-label="데이트 코스 만들러가기"
        className="-translate-x-1/2 absolute left-1/2 top-[4104.93px] h-[65.79px] w-[303.193px] rounded-[34.685px] z-10 transition-all duration-200 ease-out hover:-translate-y-[2px] active:scale-[0.98]"
      />
    </>
  );
}
