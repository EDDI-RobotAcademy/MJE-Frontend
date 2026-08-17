"use client";

import { Course } from "@/courses/types/course";
import {
  CourseType,
  LABEL_TEXT,
} from "@/courses/ui/components/shared/CourseLabel";
import { generateCourseTitle } from "@/courses/ui/utils/generateCourseTitle";
import OtherCourseDurationLabel from "./OtherCourseDurationLabel";

interface OtherCourseCardProps {
  course: Course;
  label: CourseType;
  onClick: (course: Course) => void;
}

function buildCourseDescription(course: Course): string | undefined {
  const location = course.locations?.[0] ?? course.location;
  const placeNames =
    course.places?.map((place) => place.name) ??
    course.description
      ?.split(">")
      .map((name) => name.trim())
      .filter(Boolean);

  if (!location || !placeNames || placeNames.length === 0) return undefined;

  return `${location}에서 ${placeNames.join(", ")}를(을) 즐기는 하루 코스입니다.`;
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="15"
      viewBox="0 0 22 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 14.3154V12.4102H21.5957V14.3154H0ZM0 8.11046V6.20496H21.5957V8.11046H0ZM0 1.90519V0H21.5957V1.90519H0Z"
        fill="#222222"
      />
    </svg>
  );
}

export default function OtherCourseCard({
  course,
  label,
  onClick,
}: OtherCourseCardProps) {
  const description = buildCourseDescription(course);

  return (
    <div className="flex w-fit min-w-full flex-col gap-3 rounded-[20px] bg-[#222222]/5 p-[23px]">
      <div className="flex items-center justify-between">
        <span className="inline-flex w-fit items-center gap-[6px] rounded-full bg-[#05A66B] px-[20px] py-[5px] text-[16.59px] font-bold text-[#ffffff]">
          {LABEL_TEXT[label]}
          <span className="font-bold text-[12.76px]">상세 일정</span>
        </span>
        <MenuIcon />
      </div>

      <div className="flex flex-col gap-[6px] text-left">
        <div className="flex flex-wrap items-baseline gap-[8.55px]">
          <h3 className="text-left text-[25px] font-bold text-[#222222]/90">
            {generateCourseTitle(course.places, course.courseType) ||
              course.name}
          </h3>
          {course.duration && (
            <OtherCourseDurationLabel duration={course.duration} />
          )}
        </div>
        {description && (
          <p className="mb-[10px] whitespace-nowrap text-[14.06px] leading-[15px] text-[#222222]/60 font-medium">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        disabled={!course.id}
        onClick={() => onClick(course)}
        className="w-full rounded-full bg-white px-[20px] py-[10px] text-[15px] font-semibold text-[#222222]/60 shadow-[0px_0px_2.77px_2.77px_rgba(191,219,254,0.1)]"
      >
        전체보기
      </button>
    </div>
  );
}
