"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSuggestedCourses } from "@/courses/hooks/useSuggestedCourses";
import { Course } from "@/courses/types/course";
import MainCourse from "@/courses/ui/components/main_course/MainCourse";
import SubCourse from "@/courses/ui/components/sub_course/SubCourse";
import { trackCardClick } from "@/courses/ui/components/suggested_courses/event_tracking";
import { trackCourseCreate } from "@/courses/ui/components/CourseCreation/event_tracking";

export default function SuggestedCourses() {
  const { data, isLoading, error } = useSuggestedCourses();
  const pathname = usePathname();
  const router = useRouter();
  const hasMainCourse = Boolean(data?.mainCourse);
  const hasSubCourses = (data?.subCourses.length ?? 0) > 0;
  const hasEnoughRecommendations = hasMainCourse && hasSubCourses;

  useEffect(() => {
    if (data && (data.mainCourse || data.subCourses.length > 0)) {
      void trackCourseCreate();
    }
  }, [data]);

  const handleMainCourseClick = (course: Course) => {
    if (!course.id) {
      return;
    }

    void trackCardClick(pathname, course.id, course.name, "main");
    router.push(`/courses/detail/${course.id}`);
  };

  const handleSubCourseClick = (course: Course) => {
    if (!course.id) {
      return;
    }

    void trackCardClick(pathname, course.id, course.name, "sub");
    router.push(`/courses/detail/${course.id}`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-sm text-gray-400">코스를 불러오는 중이에요...</p>
      </div>
    );
  }

  if (error || !data || (!hasMainCourse && !hasSubCourses)) {
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
          onClick={handleMainCourseClick}
        />
      )}

      {/* Right: sub courses stacked */}
      {data.subCourses.length > 0 && (
        <div className="flex flex-col gap-4">
          {data.subCourses.slice(0, 2).map((course, index) => (
            <SubCourse
              key={course.id || `sub-course-${index}`}
              course={course}
              onClick={handleSubCourseClick}
              label={index === 0 ? "Option A" : "Option B"}
            />
          ))}
        </div>
      )}

      {!hasEnoughRecommendations && (
        <div className="col-span-2 rounded-[20px] bg-white px-4 py-3 text-center shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
          <p className="text-sm text-gray-500">추천 코스가 아직 충분하지 않아요.</p>
        </div>
      )}
    </div>
  );
}
