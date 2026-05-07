import { useState } from "react";
import { Course } from "@/courses/types/course";
import MainCourseExplainText from "@/courses/ui/components/main_course_explain_text/MainCourseExplainText";
import MainCourseHashtag from "@/courses/ui/components/main_course_hashtag/MainCourseHashtag";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

interface MainCourseProps {
  course: Course;
  onClick: (course: Course) => void;
}

export default function MainCourse({ course, onClick }: MainCourseProps) {
  const [errored, setErrored] = useState(false);
  const locations = course.locations ?? (course.location ? [course.location] : []);
  const imageSrc =
    errored || !course.imageUrl
      ? "https://picsum.photos/seed/main/800/600"
      : course.imageUrl;

  return (
    <button
      type="button"
      disabled={!course.id}
      onClick={() => onClick(course)}
      className="group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-[30px] bg-white p-3 text-left shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)] transition-all duration-200 hover:shadow-[3px_6px_28px_0px_rgba(42,72,116,0.18)]"
    >
      {/* Image — upper portion of card */}
      <div className="relative h-[200px] md:h-[260px] lg:h-[315px] w-full flex-shrink-0 overflow-hidden rounded-[22px] bg-brand-placeholder">
        <img
          src={imageSrc}
          alt={course.name}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
        {/* Badge — top-left inside image */}
        <span className="absolute left-4 top-4 rounded-full bg-brand-blue-light px-3 py-1 text-[11px] font-medium text-[#2a4874] shadow-sm">
          Best Course !
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-4 pt-4 pb-10 md:pb-14">
        {locations.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {locations.map((loc, i) => (
              <span
                key={i}
                className="inline-block rounded-full bg-brand-navy px-3 py-0.5 text-[10px] text-white"
              >
                {loc}
              </span>
            ))}
          </div>
        )}
        <MainCourseExplainText name={course.name} description={course.description} />
        <div className="mt-auto">
          <MainCourseHashtag keywords={course.keywords} />
        </div>
      </div>

      {/* Arrow button — dark, absolute bottom-right of card */}
      <div className="absolute bottom-5 right-5 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#333333] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.25)]">
        <ArrowIcon />
      </div>
    </button>
  );
}
