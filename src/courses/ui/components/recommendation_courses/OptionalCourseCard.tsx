"use client";

import { useRouter } from "next/navigation";
import { RecommendationCourseItem } from "@/recommendation/types";

interface OptionalCourseCardProps {
  course: RecommendationCourseItem;
  index: number;
}

interface OptionalCourseDisplay {
  imageUrl: string;
  label: string;
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

function toOptionalCourseDisplay(
  course: RecommendationCourseItem,
  index: number,
): OptionalCourseDisplay {
  const locationStart = extractArea(course.cafe.address);
  const locationEnd = extractArea(course.restaurant.address);
  return {
    imageUrl: `https://picsum.photos/seed/${course.restaurant.id + 20 + index}/300/300`,
    label: `Option ${String.fromCharCode(65 + index)}`,
    locationStart,
    locationEnd,
    title:
      `${course.cafe.category}, ${course.restaurant.category},\n` +
      `그리고 ${course.activity.keyword} 코스`,
    description:
      `${course.cafe.name}에서 여유롭게 시작해,\n` +
      `${course.restaurant.name}을 거쳐 ${course.activity.name}로\n` +
      `마무리하는 하루 코스`,
    hashtags: [course.cafe.keyword, course.activity.keyword].filter(Boolean),
  };
}

function SmallArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: "rotate(-45deg)" }}
      aria-hidden="true"
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
  const router = useRouter();
  const display = toOptionalCourseDisplay(course, index);

  const handleDetailClick = () => {
    router.push(`/recommendation/${course.restaurant.id}`);
  };

  return (
    <div className="relative flex h-[289px] overflow-hidden rounded-[30px] bg-white drop-shadow-[3px_6px_10px_rgba(187,199,211,0.25)]">
      {/* Left: Image */}
      <div className="relative shrink-0 p-[12px]">
        <img
          src={display.imageUrl}
          alt={display.title}
          className="h-[265px] w-[216px] rounded-[22px] object-cover"
        />
        {/* Label badge + arrow button overlay */}
        <div className="absolute left-[28px] top-[25px] flex w-[187px] items-center justify-between">
          <div className="rounded-full bg-white px-[13px] py-[4px] text-[10px] text-black shadow-sm">
            {display.label}
          </div>
          <button
            type="button"
            aria-label="코스 상세 보기"
            onClick={handleDetailClick}
            className="flex size-[42px] items-center justify-center rounded-full bg-[#d5e6f6] drop-shadow-[2px_3px_2.5px_rgba(0,0,0,0.13)]"
          >
            <SmallArrowIcon />
          </button>
        </div>
      </div>

      {/* Right: Text content */}
      <div className="flex flex-1 flex-col py-[25px] pr-[20px]">
        {/* Location tags */}
        <div className="mb-[7px] flex gap-[14px]">
          <span className="inline-flex items-center rounded-full bg-[#2a4874] px-[14px] py-[2px] text-[10px] text-white">
            {display.locationStart}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#2a4874] px-[14px] py-[2px] text-[10px] text-white">
            {display.locationEnd}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-[10px] whitespace-pre-line text-[20px] font-normal leading-normal text-black">
          {display.title}
        </h3>

        {/* Description */}
        <p className="whitespace-pre-line text-[10px] leading-normal text-[#6a7282]">
          {display.description}
        </p>

        {/* Hashtags pushed to bottom */}
        <div className="mt-auto flex flex-wrap gap-[9px]">
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
      </div>
    </div>
  );
}
