import { useState } from "react";
import { Course } from "@/courses/types/course";
import SubCourseExplainText from "@/courses/ui/components/sub_course_explain_text/SubCourseExplainText";
import SubCourseHashtag from "@/courses/ui/components/sub_course_hashtag/SubCourseHashtag";

function ArrowIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2a4874"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

interface SubCourseProps {
  course: Course;
  onClick: (course: Course) => void;
  label: string;
}

export default function SubCourse({ course, onClick, label }: SubCourseProps) {
  const [errored, setErrored] = useState(false);
  const locations = course.locations ?? (course.location ? [course.location] : []);
  const imageSrc =
    errored || !course.imageUrl
      ? "https://picsum.photos/seed/sub/800/600"
      : course.imageUrl;

  return (
    <button
      type="button"
      disabled={!course.id}
      onClick={() => onClick(course)}
      className="group relative flex h-[289px] w-full cursor-pointer flex-row overflow-hidden rounded-[30px] bg-white p-3 text-left shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)] transition-all duration-200 hover:shadow-[3px_6px_28px_0px_rgba(42,72,116,0.18)]"
    >
      {/* Left: Image — square-ish, fills full inner height */}
      <div className="relative h-full w-[47%] flex-shrink-0 overflow-hidden rounded-[22px] bg-brand-placeholder">
        <img
          src={imageSrc}
          alt={course.name}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
        {/* Badge — top-left of image */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-medium text-black shadow-sm">
          {label}
        </span>
        {/* Arrow — top-right of image */}
        <div
          className="absolute right-3 top-3 flex h-[28px] w-[28px] items-center justify-center rounded-full shadow-sm"
          style={{ background: "#D0E2F4" }}
        >
          <ArrowIcon />
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex flex-1 flex-col pl-4 pt-2">
        {locations.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-1.5">
            {locations.map((loc, i) => (
              <span
                key={i}
                className="inline-block rounded-full bg-brand-navy px-2.5 py-0.5 text-[10px] text-white"
              >
                {loc}
              </span>
            ))}
          </div>
        )}
        <SubCourseExplainText name={course.name} description={course.description} />
        <div className="mt-auto">
          <SubCourseHashtag keywords={course.keywords} />
        </div>
      </div>
    </button>
  );
}
