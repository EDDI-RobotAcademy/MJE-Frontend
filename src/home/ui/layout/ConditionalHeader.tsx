"use client";

import { usePathname } from "next/navigation";
import Header from "@/home/ui/layout/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Header />;
}
