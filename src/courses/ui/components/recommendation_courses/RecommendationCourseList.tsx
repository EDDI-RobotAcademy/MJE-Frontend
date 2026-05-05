"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { fetchRecommendations } from "@/recommendation/infrastructure/api/recommendationsApi";
import { RecommendationsResponse, RecommendationCourseItem } from "@/recommendation/types";
import BestCourseCard from "./BestCourseCard";
import OptionalCourseCard from "./OptionalCourseCard";
import RecommendationLoading from "./RecommendationLoading";
import { trackCourseCreate } from "@/courses/ui/components/CourseCreation/event_tracking";
import { trackCardClick } from "@/courses/ui/components/suggested_courses/event_tracking";

export default function RecommendationCourseList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [data, setData] = useState<RecommendationsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let area = searchParams.get("area") ?? "";
    let start_time = searchParams.get("start_time") ?? "";
    let transport = searchParams.get("transport") ?? "walk";

    if (area) {
      sessionStorage.setItem("mje_search_params", JSON.stringify({ area, start_time, transport }));
    } else {
      const saved = sessionStorage.getItem("mje_search_params");
      if (saved) {
        try {
          const params = JSON.parse(saved);
          area = params.area ?? "";
          start_time = params.start_time ?? "";
          transport = params.transport ?? "walk";
        } catch {}
      }
    }

    if (!area) {
      setIsLoading(false);
      return;
    }

    fetchRecommendations({ area, start_time, transport })
      .then((result) => {
        setData(result);
        if (result.courses.length > 0) {
          void trackCourseCreate();
        }
      })
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const handleBestCourseClick = (course: RecommendationCourseItem) => {
    void trackCardClick(pathname, course.course_id, course.restaurant.keyword, "main");
    router.push(`/courses/detail/${course.course_id}`);
  };

  const handleOptionalCourseClick = (course: RecommendationCourseItem) => {
    void trackCardClick(pathname, course.course_id, course.restaurant.keyword, "sub");
    router.push(`/courses/detail/${course.course_id}`);
  };

  if (isLoading) return <RecommendationLoading />;

  if (!data) return null;

  const bestCourse = data.courses.find((c) => c.grade === "best") ?? null;
  const optionalCourses = data.courses.filter((c) => c.grade === "optional").slice(0, 2);

  const isEmpty = !bestCourse && optionalCourses.length === 0;
  const hasShortage = data.shortage_reasons.length > 0;

  if (isEmpty || hasShortage) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[24px] bg-white py-16 text-center shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
        <p className="text-base text-gray-500">아직 추천 코스가 없어요</p>
        <p className="mt-1 text-sm text-gray-400">검색 조건을 다시 설정해 보세요</p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <p className="self-end text-right text-[10px] text-[#797979]">
        * 왼쪽은 맞춤 메인 코스, 오른쪽은 대안 코스입니다. 좁은 화면에서는 위 아래로 정렬됩니다.
      </p>
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-stretch">
        {bestCourse && (
          <div className="w-full lg:flex-1">
            <BestCourseCard
              course={bestCourse}
              onDetailClick={() => handleBestCourseClick(bestCourse)}
            />
          </div>
        )}
        {optionalCourses.length > 0 && (
          <div className="flex w-full flex-col gap-4 lg:flex-1">
            {optionalCourses.map((course, index) => (
              <OptionalCourseCard
                key={`optional-${index}`}
                course={course}
                index={index}
                onDetailClick={() => handleOptionalCourseClick(course)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
