import { Suspense } from "react";

export const dynamic = "force-dynamic";
import TryAgain from "@/courses/ui/components/try_again/TryAgain";
import RecommendationCourseList from "@/courses/ui/components/recommendation_courses/RecommendationCourseList";
import RecommendationLoading from "@/courses/ui/components/recommendation_courses/RecommendationLoading";

export default function RecommendationPage() {
  return (
    <main
      className="relative min-h-screen"
      style={{ background: "linear-gradient(180deg, #ffffff 50%, #eaf2fb 100%)" }}
    >
      <div className="mx-auto max-w-[1200px] px-[120px]">
        {/* Hero */}
        <section className="flex flex-col items-center pb-10 pt-[80px] text-center">
          {/* 추천 코스 badge */}
          <div className="relative mb-4 inline-flex items-center gap-1.5 px-1">
            <div
              className="absolute bottom-0 left-0 right-0 -z-[1] h-[12px]"
              style={{ background: "rgba(208,226,244,0.55)" }}
            />
            <span
              className="text-[14px] font-light text-[#333]"
              style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
            >
              추천 코스
            </span>
            <span className="text-[15px] text-[#fcad9e]">♥</span>
          </div>

          <h1
            className="text-[38px] font-semibold leading-tight text-[#1a1a1a]"
            style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
          >
            당신을 위한 데이트 코스를 준비했어요
          </h1>

          <p
            className="mt-3 flex items-center gap-1.5 text-[13px] text-[#6a7282]"
            style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
          >
            <span className="text-[#fcad9e]">♥</span>
            선택하신 조건을 바탕으로 코스를 구성했어요
          </p>
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
