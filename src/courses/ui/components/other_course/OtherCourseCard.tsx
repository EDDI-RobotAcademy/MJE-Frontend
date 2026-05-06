"use client";

import { Course } from "@/courses/types/course";
import { CourseType } from "@/courses/ui/components/shared/CourseLabel";
import OtherCourseOptionLabel from "./OtherCourseOptionLabel";
import OtherCourseTitle from "./OtherCourseTitle";
import OtherCourseRoute from "./OtherCourseRoute";
import OtherCourseLocationLabel from "./OtherCourseLocationLabel";
import OtherCourseDurationLabel from "./OtherCourseDurationLabel";

interface OtherCourseCardProps {
  course: Course;
  label: CourseType;
  onClick: (course: Course) => void;
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 13L13 3M13 3H7M13 3V9"
        stroke="#2a4874"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OtherCourseCard({ course, label, onClick }: OtherCourseCardProps) {
  const locations = course.locations ?? (course.location ? [course.location] : []);

  return (
    <button
      type="button"
      disabled={!course.id}
      onClick={() => onClick(course)}
      className="flex w-full cursor-pointer flex-col gap-2 rounded-[20px] bg-white p-4 text-left shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)] transition-all duration-200 hover:shadow-[3px_6px_28px_0px_rgba(42,72,116,0.18)]"
    >
      <div className="flex flex-col gap-2">
        <OtherCourseOptionLabel label={label} />
        <OtherCourseTitle title={course.name} />
        <OtherCourseRoute locations={locations} />

        <div className="flex items-center justify-between gap-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {locations.map((loc, i) => (
              <OtherCourseLocationLabel key={i} location={loc} />
            ))}
            {course.duration && <OtherCourseDurationLabel duration={course.duration} />}
          </div>
          <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#d5e6f6] shadow-[0px_2px_2.5px_rgba(0,0,0,0.07)]">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </button>
  );
}
