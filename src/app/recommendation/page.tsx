import Link from "next/link";
import SuggestedCourses from "@/courses/ui/components/suggested_courses/SuggestedCourses";

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

          {/* Subtitle with heart icon */}
          <p
            className="mt-3 flex items-center gap-1.5 text-[13px] text-[#6a7282]"
            style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
          >
            <span className="text-[#fcad9e]">♥</span>
            선택하신 조건을 바탕으로 코스를 구성했어요
          </p>
        </section>

        {/* Hint */}
        <div className="mb-2 flex justify-end">
          <p className="text-[10px] text-[#aaa]">
            * 왼쪽은 맞춤 메인 코스, 오른쪽은 대안 코스입니다. 좁은 화면에서는 위 아래로 정렬됩니다.
          </p>
        </div>

        {/* Cards */}
        <section className="pb-14">
          <SuggestedCourses />
        </section>

        {/* 다시 검색하기 */}
        <div className="flex justify-center pb-20">
          <Link
            href="/"
            className="flex items-center justify-center rounded-[28px] text-[15px] font-light text-white"
            style={{
              width: "200px",
              height: "52px",
              background: "linear-gradient(135deg, #8aaee6 0%, #8aaee6 65%, #d5e6f6 100%)",
              boxShadow: "0px 4px 16px 0px rgba(138,174,230,0.45)",
            }}
          >
            다시 검색하기
          </Link>
        </div>
      </div>
    </main>
  );
}
