import { Course } from "@/courses/types/course";
import MainCourseImage from "@/courses/ui/components/main_course_image/MainCourseImage";
import MainCourseLocation from "@/courses/ui/components/main_course_location/MainCourseLocation";
import MainCourseExplainText from "@/courses/ui/components/main_course_explain_text/MainCourseExplainText";

interface MainCourseProps {
  course: Course;
  onClick: (course: Course) => void;
}

export default function MainCourse({ course, onClick }: MainCourseProps) {
  return (
    <button
      onClick={() => onClick(course)}
      className="w-full text-left rounded-2xl bg-white border border-[#d0d0d0] shadow-[3px_6px_20px_0px_rgba(187,199,211,0.54)] hover:shadow-[3px_6px_28px_0px_rgba(42,72,116,0.2)] hover:border-[#2a4874] transition-all duration-200 p-6 cursor-pointer group"
    >
      <MainCourseImage imageUrl={course.imageUrl} alt={course.name} />

      <div className="mb-4 mt-4 flex items-center justify-between">
        <span className="text-xs font-medium bg-[#2a4874] text-white px-3 py-1 rounded-full">
          메인 코스
        </span>
        {course.location && <MainCourseLocation location={course.location} />}
      </div>

      <MainCourseExplainText name={course.name} description={course.description} />

      <div className="mt-4 flex flex-wrap gap-2">
        {course.keywords.map((kw, i) => (
          <span
            key={i}
            className="text-xs bg-[#D0E2F4] text-[#2a4874] px-3 py-1 rounded-full"
          >
            #{kw.label}
          </span>
        ))}
      </div>
    </button>
  );
}
