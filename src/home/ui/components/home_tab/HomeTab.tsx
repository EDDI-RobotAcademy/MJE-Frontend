"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHomeTabTracking } from "@/home/hooks/useHomeTabTracking";

export default function HomeTab() {
  const pathname = usePathname();
  const isActive = pathname === "/";
  const { handleHomeTabClick } = useHomeTabTracking();

  return (
    <Link
      href="/"
      className={`pb-1 text-[17px] transition-colors ${
        isActive
          ? "text-black border-b-2 border-black"
          : "text-[#5e5e5e] hover:text-black"
      }`}
      style={{ fontFamily: "'Prompt', sans-serif" }}
      aria-current={isActive ? "page" : undefined}
      onClick={handleHomeTabClick}
    >
      Home
    </Link>
  );
}
