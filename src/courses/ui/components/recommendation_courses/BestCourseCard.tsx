"use client";

import { RecommendationCourseItem } from "@/recommendation/types";

interface BestCourseCardProps {
  course: RecommendationCourseItem;
}

function PlaceRow({ name, category }: { name: string; category: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-[42px] shrink-0 rounded-full bg-brand-blue-light px-2 py-0.5 text-center text-[10px] font-medium text-brand-navy">
        {category}
      </span>
      <span className="truncate text-[15px] font-medium text-brand-text-dark">{name}</span>
    </div>
  );
}

export default function BestCourseCard({ course }: BestCourseCardProps) {
  const keyword = course.restaurant.keyword;
  const title = `${keyword} 데이트 코스`;

  return (
    <div className="w-full overflow-hidden rounded-[30px] bg-white shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
      {/* Top gradient band */}
      <div
        className="flex h-[140px] w-full items-end px-8 pb-6"
        style={{ background: "linear-gradient(135deg, #d0e2f4 0%, #eaf2fb 60%, #f7fbff 100%)" }}
      >
        <div className="flex w-full items-end justify-between">
          <div>
            <span className="mb-2 inline-block rounded-full bg-brand-navy px-3 py-1 text-[11px] font-semibold text-white">
              ★ Best Course
            </span>
            <h2
              className="text-[22px] font-semibold leading-tight text-brand-navy"
              style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
            >
              {title}
            </h2>
          </div>
          <span className="mb-1 inline-block rounded-full bg-white/70 px-3 py-1 text-[11px] text-brand-text-gray">
            📍 {keyword}
          </span>
        </div>
      </div>

      {/* Place list */}
      <div className="flex flex-col gap-3 px-8 py-6">
        <PlaceRow name={course.restaurant.name} category="식당" />
        <PlaceRow name={course.cafe.name} category="카페" />
        <PlaceRow name={course.activity.name} category="활동" />
      </div>
    </div>
  );
}
