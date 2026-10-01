"use client";

import { usePathname, useRouter } from "next/navigation";
import { trackTryAgainClick } from "@/courses/ui/components/try_again/event_tracking";

export default function TryAgain() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = async () => {
    await trackTryAgainClick(pathname);
    router.push("/home");
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <button
        type="button"
        onClick={handleClick}
        className="relative flex w-[200px] h-[44px] items-center justify-center overflow-hidden px-8 transition-all duration-300 md:h-[44px]"
        style={{
          borderRadius: "25px",
          background:
            "radial-gradient(68.32% 145.43% at 54.1% 47.19%, rgba(191, 219, 254, 0.74) 0%, rgba(191, 219, 254, 0.074) 100%)",
          boxShadow: "3px 5px 8px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* 반투명 틴트 레이어 (Rectangle 2713) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: "25px",
            background: "rgba(250, 250, 248, 0.1)",
          }}
        />

        {/* 유리 재질 라이트 하이라이트 (Glass: 135deg, 80%) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: "25px",
            background:
              "linear-gradient(135deg, rgba(255,255,255,.8) 0%, rgba(255,255,255,0) 55%)",
          }}
        />

        <span
          className="relative z-10 whitespace-nowrap text-[13px] md:text-[14px]"
          style={{
            fontFamily: "'Prompt', sans-serif",
            color: "#222222",
            fontWeight: 500,
          }}
        >
          다시 검색하기
        </span>
      </button>
    </div>
  );
}
