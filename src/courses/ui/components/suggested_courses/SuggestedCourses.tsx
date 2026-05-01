"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSuggestedCourses } from "@/courses/hooks/useSuggestedCourses";
import { Course } from "@/courses/types/course";
import MainCourse from "@/courses/ui/components/main_course/MainCourse";
import SubCourse from "@/courses/ui/components/sub_course/SubCourse";
import { trackCardClick } from "@/courses/ui/components/suggested_courses/event_tracking";

export default function SuggestedCourses() {
  const { data, isLoading, error } = useSuggestedCourses();
  const pathname = usePathname();
  const router = useRouter();

  const handleCourseClick = (course: Course, card_type: "main" | "sub") => {
    void trackCardClick(pathname, course.id, course.name, card_type);
    router.push(`/courses/detail/${course.id}`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-sm text-gray-400">코스를 불러오는 중이에요...</p>
      </div>
    );
  }

  if (error || !data || (!data.mainCourse && data.subCourses.length === 0)) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-base text-gray-500">아직 추천 코스가 없어요</p>
        <p className="mt-1 text-sm text-gray-400">검색 조건을 다시 설정해 보세요</p>
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-2 gap-4">
      {/* Left: main course */}
      {data.mainCourse && (
        <MainCourse
          course={data.mainCourse}
          onClick={(course) => handleCourseClick(course, "main")}
        />
      )}

      {/* Right: sub courses stacked */}
      {data.subCourses.length > 0 && (
        <div className="flex flex-col gap-4">
          {data.subCourses.slice(0, 2).map((course, index) => (
            <SubCourse
              key={course.id}
              course={course}
              onClick={(c) => handleCourseClick(c, "sub")}
              label={index === 0 ? "Option A" : "Option B"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
