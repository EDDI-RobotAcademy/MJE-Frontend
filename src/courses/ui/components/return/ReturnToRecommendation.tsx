"use client";

import { usePathname, useRouter } from "next/navigation";
import { trackReturnClick } from "@/courses/ui/components/return/event_tracking";

function ArrowLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 5 5 12 12 19" />
    </svg>
  );
}

export default function ReturnToRecommendation() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = async () => {
    await trackReturnClick(pathname);
    router.push("/recommendation");
  };

  return (
    <button
      onClick={handleClick}
      className="flex w-fit items-center gap-1.5 text-[16px] text-[#2a4874] transition-opacity hover:opacity-75"
    >
      <ArrowLeftIcon />
      추천 코스로 돌아가기
    </button>
  );
}
