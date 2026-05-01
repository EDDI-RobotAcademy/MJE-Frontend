import { Course } from "@/courses/types/course";

interface SubCourseProps {
  course: Course;
  onClick: (course: Course) => void;
}

export default function SubCourse({ course, onClick }: SubCourseProps) {
  return (
    <button
      onClick={() => onClick(course)}
      className="w-full text-left rounded-xl bg-white border border-[#d0d0d0] shadow-sm hover:shadow-md hover:border-[#8aaee6] transition-all duration-200 p-4 cursor-pointer group"
    >
      <div className="mb-3">
        <span className="text-xs font-medium bg-[#D0E2F4] text-[#2a4874] px-2.5 py-1 rounded-full">
          이런 코스는 어때요?
        </span>
      </div>

      <h4 className="text-sm font-semibold text-gray-800 mb-2 group-hover:text-[#2a4874] transition-colors line-clamp-2">
        {course.name}
      </h4>

      <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">
        {course.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {course.keywords.map((kw, i) => (
          <span
            key={i}
            className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full"
          >
            #{kw.label}
          </span>
        ))}
      </div>
    </button>
  );
}
