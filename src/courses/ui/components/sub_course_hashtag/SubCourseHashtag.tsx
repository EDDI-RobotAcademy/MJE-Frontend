import { CourseKeyword } from "@/courses/types/course";

interface SubCourseHashtagProps {
  keywords: CourseKeyword[];
}

const MAX_HASHTAG_COUNT = 3;

export default function SubCourseHashtag({ keywords }: SubCourseHashtagProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {keywords.slice(0, MAX_HASHTAG_COUNT).map((kw, i) => (
        <span
          key={i}
          className="rounded-full border border-[#2a4874] px-2 py-0.5 text-[10px] text-[#2a4874]"
        >
          #{kw.label}
        </span>
      ))}
    </div>
  );
}
