"use client";

import { RecommendationCourseItem } from "@/recommendation/types";

interface OptionalCourseCardProps {
  course: RecommendationCourseItem;
  index: number;
}

function extractArea(address: string): string {
  const parts = address.split(" ").filter(Boolean);
  return parts[parts.length - 1] ?? address;
}

function SmallArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: "rotate(-45deg)" }}
    >
      <path
        d="M2 8H14M14 8L9 3M14 8L9 13"
        stroke="#2a4874"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OptionalCourseCard({ course, index }: OptionalCourseCardProps) {
  const label = `Option ${String.fromCharCode(65 + index)}`;
  const fromArea = extractArea(course.restaurant.address);
  const toArea = extractArea(course.activity.address);
  const hashtags = [course.restaurant.keyword, course.cafe.keyword, course.activity.keyword]
    .filter(Boolean)
    .slice(0, 2);
  const title = `${fromArea}에서 즐기는 ${course.cafe.keyword} 코스`;
  const description =
    `${course.cafe.name}에서 여유롭게 시작해,\n` +
    `${course.restaurant.name}을 거쳐 ${course.activity.name}로\n` +
    `마무리하는 하루 코스`;
  const imageUrl = `https://picsum.photos/seed/${course.restaurant.id + 20}/300/300`;

  return (
    <div className="relative flex h-[289px] overflow-hidden rounded-[30px] bg-white shadow-[3px_6px_10px_rgba(187,199,211,0.25)]">
      {/* Left: Image area */}
      <div className="relative shrink-0 p-[12px]">
        <img
          src={imageUrl}
          alt={title}
          className="h-[265px] w-[216px] rounded-[22px] object-cover"
        />
        {/* Overlay: label badge + arrow button */}
        <div className="absolute left-[28px] top-[25px] flex w-[187px] items-center justify-between">
          <div className="rounded-full bg-white px-[13px] py-[4px] text-[10px] text-black shadow-sm">
            {label}
          </div>
          <button
            type="button"
            className="flex size-[42px] items-center justify-center rounded-full bg-[#d5e6f6] shadow-[2px_3px_2.5px_rgba(0,0,0,0.13)]"
          >
            <SmallArrowIcon />
          </button>
        </div>
      </div>

      {/* Right: Text content */}
      <div className="flex flex-1 flex-col gap-[10px] py-[25px] pr-[20px]">
        {/* Location tags */}
        <div className="flex gap-[14px]">
          <span className="inline-flex items-center rounded-full bg-[#2a4874] px-[14px] py-[2px] text-[10px] text-white">
            {fromArea}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#2a4874] px-[14px] py-[2px] text-[10px] text-white">
            {toArea}
          </span>
        </div>

        {/* Course title */}
        <h3 className="text-[20px] leading-normal text-black">{title}</h3>

        {/* Course description */}
        <p className="whitespace-pre-line text-[10px] leading-normal text-[#6a7282]">
          {description}
        </p>

        {/* Hashtags */}
        <div className="mt-auto flex flex-wrap gap-[9px]">
          {hashtags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-[#2a4874] px-[14px] py-[4px] text-[10px] text-[#2a4874]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
