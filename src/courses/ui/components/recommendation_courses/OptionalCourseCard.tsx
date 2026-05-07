"use client";

import { RecommendationCourseItem } from "@/recommendation/types";
import { getRandomCoupleImage } from "@/recommendation/ui/utils/coupleImages";

interface OptionalCourseCardProps {
  course: RecommendationCourseItem;
  index: number;
  onDetailClick?: () => void;
}

interface OptionalCourseDisplay {
  imageUrl: string;
  label: string;
  locationGu: string;
  locationDong: string;
  title: string;
  description: string;
  hashtags: string[];
}

function extractAreaParts(address: string): { gu: string; dong: string } {
  const gu = address.match(/\S+구/)?.[0] ?? "";
  const dong = address.match(/\S+동/)?.[0] ?? "";
  return { gu, dong };
}

function toOptionalCourseDisplay(
  course: RecommendationCourseItem,
  index: number,
): OptionalCourseDisplay {
  const [first, second, third] = course.places;
  const { gu, dong } = extractAreaParts(second?.address ?? "");
  return {
    imageUrl: course.image_url ?? getRandomCoupleImage(`${course.course_id}-${index}`),
    label: `Option ${String.fromCharCode(65 + index)}`,
    locationGu: gu,
    locationDong: dong,
    title: `${second?.name ?? ""} 코스`,
    description:
      `${second?.name ?? ""}에서 여유롭게 시작해,\n` +
      `${first?.name ?? ""}을 거쳐 ${third?.name ?? ""}로\n` +
      `마무리하는 하루 코스`,
    hashtags: [second?.category, third?.category].filter(Boolean) as string[],
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

export default function OptionalCourseCard({ course, index, onDetailClick }: OptionalCourseCardProps) {
  const display = toOptionalCourseDisplay(course, index);

  return (
    <div
      className="relative flex h-[289px] overflow-hidden rounded-[30px] bg-white drop-shadow-[3px_6px_10px_rgba(187,199,211,0.25)] cursor-pointer"
      onClick={onDetailClick}
    >
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
            onClick={(e) => { e.stopPropagation(); onDetailClick?.(); }}
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
            {display.locationGu}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#2a4874] px-[14px] py-[2px] text-[10px] text-white">
            {display.locationDong}
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
