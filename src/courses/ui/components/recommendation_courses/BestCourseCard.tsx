"use client";

import { RecommendationCourseItem } from "@/recommendation/types";

interface BestCourseCardProps {
  course: RecommendationCourseItem;
}

interface BestCourseDisplay {
  imageUrl: string;
  locationStart: string;
  locationEnd: string;
  title: string;
  description: string;
  hashtags: string[];
}

function extractArea(address: string): string {
  const parts = address.split(" ").filter(Boolean);
  return parts[parts.length - 1] ?? address;
}

function toBestCourseDisplay(course: RecommendationCourseItem): BestCourseDisplay {
  const locationStart = extractArea(course.restaurant.address);
  const locationEnd = extractArea(course.activity.address);
  return {
    imageUrl: `https://picsum.photos/seed/${course.restaurant.id}/500/300`,
    locationStart,
    locationEnd,
    title: `${locationStart}에서 ${locationEnd}까지, ${course.activity.keyword} 코스`,
    description:
      `${course.restaurant.name}에서 출발해 ${course.activity.name}까지 이어지는,\n` +
      `${course.cafe.keyword}을 즐기기 좋은 데이트 코스`,
    hashtags: [course.restaurant.keyword, course.cafe.keyword, course.activity.keyword].filter(
      Boolean,
    ),
  };
}

function ArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: "rotate(-45deg)" }}
      aria-hidden="true"
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
  const display = toBestCourseDisplay(course);

  return (
    <div className="relative flex h-full flex-col rounded-[30px] bg-white drop-shadow-[3px_6px_10px_rgba(187,199,211,0.25)]">
      {/* Image */}
      <div className="p-[12px] pb-0">
        <img
          src={display.imageUrl}
          alt={display.title}
          className="h-[293px] w-full rounded-[22px] object-cover"
        />
      </div>

      {/* Best Course badge overlaid on image */}
      <div className="absolute left-[26px] top-[26px] flex items-center justify-center rounded-full bg-[#d5e6f6] px-[13px] py-[5px]">
        <span
          className="text-[11px] text-black"
          style={{ fontFamily: "'Prompt', sans-serif" }}
        >
          Best Course !
        </span>
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col gap-[7px] p-[26px]">
        {/* Location tags */}
        <div className="flex gap-[10px]">
          <span className="inline-flex items-center rounded-full bg-[#2a4874] px-[14px] py-[2px] text-[10px] text-white">
            {display.locationStart}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#2a4874] px-[14px] py-[2px] text-[10px] text-white">
            {display.locationEnd}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[24px] font-normal leading-normal text-black">{display.title}</h2>

        {/* Description + hashtags+button */}
        <div className="flex flex-1 flex-col gap-[64px]">
          <p className="whitespace-pre-line text-[12px] leading-normal text-[#6a7282]">
            {display.description}
          </p>

          <div className="mt-auto flex items-end justify-between">
            <div className="flex flex-wrap gap-[9px]">
              {display.hashtags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full border border-[#2a4874] px-[14px] py-[4px] text-[10px] text-[#2a4874]"
                  style={{ borderWidth: "0.7px" }}
                >
                  #{tag}
                </span>
              ))}
            </div>
            <button
              type="button"
              aria-label="코스 상세 보기"
              className="ml-4 flex size-[64px] shrink-0 items-center justify-center rounded-full bg-[#333] drop-shadow-[2px_3px_2.5px_rgba(0,0,0,0.13)]"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
