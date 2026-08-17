"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHomeTabTracking } from "@/home/hooks/useHomeTabTracking";

export default function HomeTab() {
  const pathname = usePathname();
  const isActive = pathname === "/home";
  const { handleHomeTabClick } = useHomeTabTracking();

  return (
    <Link
      href="/home"
      className={`h-full flex items-center justify-center items-start pt-[38px] text-[11px] transition-colors border-b-2 font-semibold w-[46px] ${
        isActive
          ? "text-black border-black"
          : "text-[#222222]/50 border-transparent hover:text-black"
      }`}
      style={{ fontFamily: "'Prompt', sans-serif" }}
      aria-current={isActive ? "page" : undefined}
      onClick={handleHomeTabClick}
    >
      Home
    </Link>
  );
}
