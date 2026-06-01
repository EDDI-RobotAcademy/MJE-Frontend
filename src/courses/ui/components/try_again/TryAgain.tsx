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
    <div className="group relative flex justify-center">
      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#6a7282]/80 px-3.5 py-1.5 text-[12px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        새로운 조건으로 다시 검색해볼까요?
      </span>

      <button
        onClick={handleClick}
        className="relative flex w-full items-center justify-center overflow-hidden rounded-full text-[15px] font-normal transition-all duration-200 ease-out hover:scale-[1.02] hover:-translate-y-[2px] active:scale-[0.98] active:translate-y-0 shadow-[3px_5px_8px_0px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.75)] hover:shadow-[3px_10px_18px_0px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.75)] sm:w-[200px]"
        style={{
          height: "52px",
          background: "radial-gradient(ellipse at center, rgba(138,175,230,1) 0%, rgba(213,230,246,1) 100%)",
          border: "1px solid rgba(255,255,255,0.8)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0.0) 100%)",
            backdropFilter: "blur(2px)",
          }}
        />
        <span className="relative z-10" style={{ color: "#2A4874" }}>다시 검색하기</span>
      </button>
    </div>
  );
}
