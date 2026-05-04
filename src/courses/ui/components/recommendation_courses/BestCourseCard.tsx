"use client";

import { RecommendationCourseItem } from "@/recommendation/types";

interface BestCourseCardProps {
  course: RecommendationCourseItem;
}

function extractArea(address: string): string {
  const parts = address.split(" ").filter(Boolean);
  return parts[parts.length - 1] ?? address;
}

function ArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: "rotate(-45deg)" }}
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BestCourseCard({ course }: BestCourseCardProps) {
  const fromArea = extractArea(course.restaurant.address);
  const toArea = extractArea(course.activity.address);
  const hashtags = [course.restaurant.keyword, course.cafe.keyword, course.activity.keyword].filter(
    Boolean,
  );
  const title = `${fromArea}에서 ${toArea}까지, 가볍게 걷는 하루`;
  const description =
    `${course.restaurant.name}에서 출발해 ${course.activity.name}까지 이어지는,\n` +
    `가볍게 이동하며 즐기기 좋은 도심 데이트 코스`;
  const imageUrl = `https://picsum.photos/seed/${course.restaurant.id}/500/300`;

  return (
    <div className="relative flex h-full flex-col rounded-[30px] bg-white shadow-[3px_6px_10px_rgba(187,199,211,0.25)]">
      {/* Image with 12px inset padding */}
      <div className="p-[12px] pb-0">
        <img
          src={imageUrl}
          alt={title}
          className="h-[293px] w-full rounded-[22px] object-cover"
        />
      </div>

      {/* Best Course badge overlaid on image */}
      <div className="absolute left-[26px] top-[26px] flex items-center justify-center rounded-full bg-[#d5e6f6] px-[13px] py-[5px]">
        <span className="text-[11px] text-black">Best Course !</span>
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col gap-[7px] p-[26px]">
        {/* Location tags */}
        <div className="flex gap-[10px]">
          <span className="inline-flex items-center rounded-full bg-[#2a4874] px-[14px] py-[2px] text-[10px] text-white">
            {fromArea}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#2a4874] px-[14px] py-[2px] text-[10px] text-white">
            {toArea}
          </span>
        </div>

        {/* Course title */}
        <h2 className="text-[24px] leading-normal text-black">{title}</h2>

        {/* Course description */}
        <p className="whitespace-pre-line text-[12px] leading-normal text-[#6a7282]">
          {description}
        </p>

        {/* Hashtags + arrow button */}
        <div className="mt-auto flex items-end justify-between pt-[16px]">
          <div className="flex flex-wrap gap-[9px]">
            {hashtags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full border border-[#2a4874] px-[14px] py-[4px] text-[10px] text-[#2a4874]"
              >
                #{tag}
              </span>
            ))}
          </div>
          <button
            type="button"
            className="ml-4 flex size-[64px] shrink-0 items-center justify-center rounded-full bg-[#333] shadow-[2px_3px_2.5px_rgba(0,0,0,0.13)]"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
