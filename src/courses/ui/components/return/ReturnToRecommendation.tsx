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

  const handleClick = () => {
    void trackReturnClick(pathname);
    router.push("/recommendation");
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 rounded-[28px] text-[15px] font-light text-white transition-opacity hover:opacity-90"
        style={{
          width: "220px",
          height: "52px",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2a4874 0%, #8aaee6 100%)",
          boxShadow: "0px 4px 16px 0px rgba(42,72,116,0.30)",
        }}
      >
        <ArrowLeftIcon />
        추천 코스로 돌아가기
      </button>
    </div>
  );
}
