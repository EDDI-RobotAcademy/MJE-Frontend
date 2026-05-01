import { Course } from "@/courses/types/course";
import SubCourseImage from "@/courses/ui/components/sub_course_image/SubCourseImage";
import SubCourseLocation from "@/courses/ui/components/sub_course_location/SubCourseLocation";
import SubCourseExplainText from "@/courses/ui/components/sub_course_explain_text/SubCourseExplainText";
import SubCourseHashtag from "@/courses/ui/components/sub_course_hashtag/SubCourseHashtag";

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
      <SubCourseImage imageUrl={course.imageUrl} alt={course.name} />

      <div className="mt-3 flex flex-col gap-1.5">
        <span className="text-xs font-medium bg-[#D0E2F4] text-[#2a4874] px-2.5 py-1 rounded-full self-start">
          이런 코스는 어때요?
        </span>
        {course.location && <SubCourseLocation location={course.location} />}
      </div>

      <SubCourseExplainText name={course.name} description={course.description} />

      <div className="mt-3">
        <SubCourseHashtag keywords={course.keywords} />
      </div>
    </button>
  );
}
