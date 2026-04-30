"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeTab() {
  const pathname = usePathname();
  const isActive = pathname === "/";

  return (
    <Link
      href="/"
      className={`text-sm font-medium px-3 py-1 rounded transition-colors ${
        isActive
          ? "text-gray-900 font-semibold"
          : "text-gray-500 hover:text-gray-900"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      Home
    </Link>
  );
}
