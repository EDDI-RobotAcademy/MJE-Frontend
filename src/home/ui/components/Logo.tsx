"use client";

import Link from "next/link";
import Image from "next/image";
import { useLogoTracking } from "@/home/hooks/useLogoTracking";

export default function Logo() {
  const { handleLogoClick } = useLogoTracking();

  return (
    <Link href="/" aria-label="홈으로 이동" onClick={handleLogoClick}>
      <Image src="/logo.png" alt="dahangsa" width={120} height={24} priority className="w-[90px] md:w-[120px]" style={{ objectFit: "contain" }} />
    </Link>
  );
}
