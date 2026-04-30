"use client";

import Link from "next/link";
import { useLogoTracking } from "@/home/hooks/useLogoTracking";

export default function Logo() {
  const { handleLogoClick } = useLogoTracking();

  return (
    <Link href="/" aria-label="홈으로 이동" onClick={handleLogoClick}>
      <span className="text-xl font-bold tracking-tight text-gray-900">MJE</span>
    </Link>
  );
}
