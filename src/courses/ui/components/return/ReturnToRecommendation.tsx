"use client";

import { usePathname, useRouter } from "next/navigation";
import { trackReturnClick } from "@/courses/ui/components/return/event_tracking";

function ArrowLeftIcon() {
  return (
    <svg
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.78829 17.5766L0 8.78829L8.78829 0L9.96014 1.17185L2.34371 8.78829L9.96014 16.4047L8.78829 17.5766Z"
        fill="#222222"
      />
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
      className="flex w-fit items-center gap-[15px] text-[14px] text-[#222222]/90 font-semibold"
    >
      <ArrowLeftIcon />
      추천 코스
    </button>
  );
}
