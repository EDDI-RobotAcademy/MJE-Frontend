import { fetchRecommendations } from "@/recommendation/infrastructure/api/recommendationsApi";
import BestCourseCard from "./BestCourseCard";
import OptionalCourseCard from "./OptionalCourseCard";

export default async function RecommendationCourseList() {
  const data = await fetchRecommendations();

  const bestCourse = data.courses.find((c) => c.grade === "best") ?? null;
  const optionalCourses = data.courses.filter((c) => c.grade === "optional").slice(0, 2);

  const isEmpty = !bestCourse && optionalCourses.length === 0;
  const hasShortage = data.shortage_reasons.length > 0;

  if (isEmpty || hasShortage) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[24px] bg-white py-16 text-center shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
        <p className="text-base text-gray-500">아직 추천 코스가 없어요</p>
        <p className="mt-1 text-sm text-gray-400">검색 조건을 다시 설정해 보세요</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {/* Best section */}
      {bestCourse && (
        <section>
          <div className="mb-3 flex items-center gap-2">
            <span className="text-[13px] font-semibold text-brand-navy">Best</span>
            <span className="text-[12px] text-brand-text-muted">가장 잘 맞는 코스예요</span>
          </div>
          <BestCourseCard course={bestCourse} />
        </section>
      )}

      {/* Optional section */}
      {optionalCourses.length > 0 && (
        <section>
          <div className="mb-3 flex items-center gap-2">
            <span className="text-[13px] font-semibold text-brand-navy">Optional</span>
            <span className="text-[12px] text-brand-text-muted">다른 스타일도 골라보세요</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {optionalCourses.map((course, index) => (
              <OptionalCourseCard
                key={`optional-${index}`}
                course={course}
                index={index}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
