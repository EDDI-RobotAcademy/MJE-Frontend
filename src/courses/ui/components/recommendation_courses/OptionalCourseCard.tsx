"use client";

import { RecommendationCourseItem } from "@/recommendation/types";

interface OptionalCourseCardProps {
  course: RecommendationCourseItem;
  index: number;
}

function PlaceRow({ name, category }: { name: string; category: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-[42px] shrink-0 rounded-full bg-brand-blue-light px-2 py-0.5 text-center text-[10px] font-medium text-brand-navy">
        {category}
      </span>
      <span className="truncate text-[13px] text-brand-text-dark">{name}</span>
    </div>
  );
}

export default function OptionalCourseCard({ course, index }: OptionalCourseCardProps) {
  const keyword = course.restaurant.keyword;
  const title = `${keyword} 데이트 코스`;
  const label = `Option ${index + 1}`;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
      {/* Top band */}
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ background: "linear-gradient(135deg, #eaf2fb 0%, #f7fbff 100%)" }}
      >
        <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-medium text-brand-text-gray shadow-sm">
          {label}
        </span>
        <span className="text-[10px] text-brand-text-gray">📍 {keyword}</span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2.5 px-6 py-5">
        <h3
          className="text-[15px] font-semibold text-brand-navy"
          style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
        >
          {title}
        </h3>
        <div className="flex flex-col gap-2 pt-1">
          <PlaceRow name={course.restaurant.name} category="식당" />
          <PlaceRow name={course.cafe.name} category="카페" />
          <PlaceRow name={course.activity.name} category="활동" />
        </div>
      </div>
    </div>
  );
}
