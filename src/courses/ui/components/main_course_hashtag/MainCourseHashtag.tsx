import { CourseKeyword } from "@/courses/types/course";

interface MainCourseHashtagProps {
  keywords: CourseKeyword[];
}

const MAX_HASHTAG_COUNT = 3;

export default function MainCourseHashtag({ keywords }: MainCourseHashtagProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {keywords.slice(0, MAX_HASHTAG_COUNT).map((kw, i) => (
        <span
          key={i}
          className="rounded-full bg-[#D0E2F4] px-3 py-1 text-xs text-[#2a4874]"
        >
          #{kw.label}
        </span>
      ))}
    </div>
  );
}
