"use client";

import { useSuggestedCourses } from "@/courses/hooks/useSuggestedCourses";
import AlternativeCourseCard from "./AlternativeCourseCard";
import BestCourseLabel from "./BestCourseLabel";
import DetailCourseSkeleton from "./DetailCourseSkeleton";

export default function DetailCourseList() {
  const { data, isLoading, error } = useSuggestedCourses();

  if (isLoading) {
    return <DetailCourseSkeleton />;
  }

  if (error || !data || !data.mainCourse) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-base text-brand-text-gray">추천 코스를 불러올 수 없어요</p>
        <p className="mt-1 text-sm text-brand-text-muted">잠시 후 다시 시도해 보세요</p>
      </div>
    );
  }

  const { mainCourse, subCourses } = data;
  const locations = mainCourse.locations ?? (mainCourse.location ? [mainCourse.location] : []);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <BestCourseLabel label="Best Course !" />
      </div>

      <div className="flex flex-col gap-4 rounded-[24px] bg-white p-5 shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
        <div className="relative h-[220px] w-full overflow-hidden rounded-[18px] bg-brand-placeholder">
          <img
            src={mainCourse.imageUrl ?? "https://picsum.photos/seed/main/800/600"}
            alt={mainCourse.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {locations.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {locations.map((loc, i) => (
              <span
                key={i}
                className="inline-block rounded-full bg-brand-navy px-3 py-0.5 text-[10px] text-white"
              >
                {loc}
              </span>
            ))}
          </div>
        )}

        <div>
          <h2
            className="text-[20px] font-semibold text-brand-text-dark"
            style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
          >
            {mainCourse.name}
          </h2>
          <p className="mt-1.5 text-[13px] leading-relaxed text-brand-text-muted">
            {mainCourse.description}
          </p>
        </div>

        {mainCourse.keywords.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {mainCourse.keywords.slice(0, 3).map((kw, i) => (
              <span key={i} className="text-[12px] text-brand-navy">
                #{kw.label}
              </span>
            ))}
          </div>
        )}
      </div>

      {subCourses.length > 0 && (
        <div className="flex flex-col gap-3">
          <p className="text-[12px] text-brand-text-muted">다른 코스도 있어요</p>
          <div className="grid grid-cols-2 gap-4">
            {subCourses.slice(0, 2).map((course, index) => (
              <AlternativeCourseCard
                key={course.id}
                course={course}
                label={index === 0 ? "Option A" : "Option B"}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
