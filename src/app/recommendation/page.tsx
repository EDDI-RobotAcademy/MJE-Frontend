import { Suspense } from "react";

export const dynamic = "force-dynamic";
import TryAgain from "@/courses/ui/components/try_again/TryAgain";
import RecommendationCourseList from "@/courses/ui/components/recommendation_courses/RecommendationCourseList";
import RecommendationLoading from "@/courses/ui/components/recommendation_courses/RecommendationLoading";

function DotGrid() {
  const positions: [number, number][] = [
    [3, 0], [0, 3], [3, 3], [3, 6],
    [6, 3], [6, 6], [6, 9], [9, 3],
    [9, 6], [12, 3], [9, 0],
  ];
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      {positions.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="3" height="3" fill="#fcad9e" />
      ))}
    </svg>
  );
}

export default function RecommendationPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 50%, #eaf2fb 100%)" }}
    >
      {/* Decorative background blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-[160px] -z-0 h-[860px] w-[860px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(213,230,246,0.65) 0%, rgba(255,255,255,0) 68%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-[120px]">
        {/* Hero */}
        <section className="flex flex-col items-center pb-10 pt-[80px] text-center">
          {/* 추천 코스 ♥ badge */}
          <div className="relative mb-5 inline-flex items-center gap-[6px] px-1">
            <div
              className="absolute bottom-0 left-0 right-0 -z-[1] h-[14px]"
              style={{ background: "rgba(208,226,244,0.55)" }}
            />
            <span
              className="text-[15px] font-light text-black"
              style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
            >
              추천 코스
            </span>
            <span className="text-[17px] text-[#fcad9e]">♥</span>
          </div>

          <h1
            className="text-[40px] font-medium leading-tight text-black"
            style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
          >
            당신을 위한 데이트 코스를 준비했어요
          </h1>

          <div className="mt-[11px] flex items-center gap-[11px]">
            <DotGrid />
            <p
              className="text-[14px] text-[#757575]"
              style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
            >
              선택하신 조건을 바탕으로 코스를 구성했어요
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="pb-14">
          <Suspense fallback={<RecommendationLoading />}>
            <RecommendationCourseList />
          </Suspense>
        </section>

        {/* 다시 검색하기 */}
        <div className="pb-20">
          <TryAgain />
        </div>
      </div>
    </main>
  );
}
