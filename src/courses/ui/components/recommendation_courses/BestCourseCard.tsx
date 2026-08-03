"use client";

import { RecommendationCourseItem } from "@/recommendation/types";
import { getRandomCoupleImage } from "@/recommendation/ui/utils/coupleImages";
import { generateCourseTitle } from "@/courses/ui/utils/generateCourseTitle";

interface BestCourseCardProps {
  course: RecommendationCourseItem;
  onDetailClick?: () => void;
  isActive?: boolean;
  isDimmed?: boolean;
  onActivate?: () => void;
  onDeactivate?: () => void;
}

interface BestCourseDisplay {
  imageUrl: string;
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

function toBestCourseDisplay(
  course: RecommendationCourseItem,
): BestCourseDisplay {
  const [first, second, third] = course.places;
  const { gu, dong } = extractAreaParts(first?.address ?? "");
  return {
    imageUrl: course.image_url ?? getRandomCoupleImage(course.course_id),
    locationGu: gu,
    locationDong: dong,
    title: generateCourseTitle(course.places, "best"),
    description:
      `${first?.name ?? ""}에서 출발해 ${third?.name ?? ""}까지 이어지는,\n` +
      `${second?.category ?? ""}을 즐기기 좋은 데이트 코스`,
    hashtags: [first?.category, second?.category, third?.category].filter(
      Boolean,
    ) as string[],
  };
}

export default function BestCourseCard({
  course,
  onDetailClick,
  isActive = false,
  isDimmed = false,
  onActivate,
  onDeactivate,
}: BestCourseCardProps) {
  const display = toBestCourseDisplay(course);

  return (
    <div
      tabIndex={0}
      onClick={onDetailClick}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      className={`relative flex flex-col rounded-[15px] border-2 border-dashed drop-shadow-[3px_6px_10px_rgba(187,199,211,0.25)] cursor-pointer transition-all duration-200 outline-none ${
        isActive ? "border-[#05A66B]" : "border-transparent"
      } ${
        isDimmed
          ? "w-[318.95px] h-[333.15px] bg-[#FAFAF8]/50"
          : "h-full bg-white"
      }`}
    >
      {/* Best Course badge overlaid on image */}
      <div className="flex items-center px-[13px] pt-[13px]">
        <span
          className={`flex font-medium gap-[6px] justify-center items-center ${
            isDimmed ? "text-[14px]" : "text-[15px]"
          } text-[#222222]`}
          style={{ fontFamily: "'Prompt', sans-serif" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 17.6347V16.135H20.5V17.6347C16.2042 17.6347 13.7958 17.6347 9.5 17.6347ZM9.5 12.7502V11.2502H20.5V12.7502C16.2042 12.7502 13.7958 12.7502 9.5 12.7502ZM3.5 7.86547V6.36572H20.5V7.86547C13.8611 7.86547 10.1389 7.86547 3.5 7.86547Z"
              fill="#05A66B"
            />
          </svg>
          Today Pick!
        </span>
      </div>

      {/* Image */}
      <div className="p-[9px] pb-0">
        <img
          src={display.imageUrl}
          alt={display.title}
          className={
            isDimmed
              ? "w-[301.92px] h-[157.11px] rounded-[14px] object-cover"
              : "h-[166px] md:h-[250px] lg:h-[293px] w-full rounded-[14px] object-cover"
          }
        />
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col gap-[7px] px-[15px] pt-[11px] pb-[13px] md:p-5 lg:p-[26px]">
        {/* Title + Location tags */}
        <div className="flex items-center justify-between gap-[8px]">
          <h2
            className={`min-w-0 font-bold leading-normal text-black ${
              isDimmed
                ? "text-[17px] md:text-[21px] lg:text-[23px]"
                : "text-[18px] md:text-[22px] lg:text-[24px]"
            }`}
          >
            {display.title}
          </h2>

          <div className="flex shrink-0 gap-[5px]">
            <span
              className={`inline-flex items-center text-[#222222]/90 underline ${
                isDimmed ? "text-[9px]" : "text-[10px]"
              }`}
            >
              # {display.locationGu}
            </span>
            <span
              className={`inline-flex items-center text-[#222222]/90 underline ${
                isDimmed ? "text-[9px]" : "text-[10px]"
              }`}
            >
              # {display.locationDong}
            </span>
          </div>
        </div>

        {/* Description + hashtags+button */}
        <div className="flex flex-1 flex-col gap-8 gap-[37px] md:gap-[64px]">
          <p
            className={`whitespace-pre-line leading-normal text-[#222222]/70 ${
              isDimmed ? "text-[10px]" : "text-[11px]"
            }`}
          >
            {display.description}
          </p>

          <div className="mt-auto flex items-end justify-between">
            <div className="flex flex-wrap gap-[9px]">
              {display.hashtags.map((tag, i) => (
                <span
                  key={i}
                  className={`bg-[#222222]/5 inline-flex items-center rounded-[15px] px-[13px] py-[4px] text-[#222222]/80 font-semibold ${
                    isDimmed ? "text-[8px]" : "text-[9px]"
                  }`}
                >
                  # {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
