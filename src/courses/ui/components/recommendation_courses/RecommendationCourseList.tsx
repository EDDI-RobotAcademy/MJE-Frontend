"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { fetchRecommendations } from "@/recommendation/infrastructure/api/recommendationsApi";
import {
  RecommendationsResponse,
  RecommendationCourseItem,
} from "@/recommendation/types";
import RecommendationCourseCard from "./RecommendationCourseCard";
import RecommendationLoading from "./RecommendationLoading";
import { trackCourseCreate } from "@/courses/ui/components/CourseCreation/event_tracking";
import { trackCardClick } from "@/courses/ui/components/suggested_courses/event_tracking";
import { getRandomCoupleImage } from "@/recommendation/ui/utils/coupleImages";
import { generateCourseTitle } from "@/courses/ui/utils/generateCourseTitle";

function extractAreaParts(address: string): { gu: string; dong: string } {
  const gu = address.match(/\S+구/)?.[0] ?? "";
  const dong = address.match(/\S+동/)?.[0] ?? "";
  return { gu, dong };
}

function toBestCourseCardProps(course: RecommendationCourseItem) {
  const [first, second, third] = course.places;
  const { gu, dong } = extractAreaParts(first?.address ?? "");
  return {
    badgeLabel: "Today Pick!",
    imageUrl: course.image_url ?? getRandomCoupleImage(course.course_id),
    locationGu: gu,
    locationDong: dong,
    title: generateCourseTitle(course.places, "best"),
    description:
      `${first?.name ?? ""}에서 출발해 ${third?.name ?? ""}까지 이어지는,\n` +
      `${second?.category ?? ""}을 즐기기 좋은 데이트 코스`,
    hashtags: [first?.category, second?.category, third?.category].filter(
      Boolean,
    ) as string[],
  };
}

function toOptionalCourseCardProps(
  course: RecommendationCourseItem,
  index: number,
) {
  const [first, second, third] = course.places;
  const { gu, dong } = extractAreaParts(second?.address ?? "");
  return {
    badgeLabel: `Course ${String.fromCharCode(65 + index)}`,
    imageUrl:
      course.image_url ?? getRandomCoupleImage(`${course.course_id}-${index}`),
    locationGu: gu,
    locationDong: dong,
    title: generateCourseTitle(course.places, "optional"),
    description:
      `${second?.name ?? ""}에서 여유롭게 시작해,\n` +
      `${first?.name ?? ""}을 거쳐 ${third?.name ?? ""}로\n` +
      `마무리하는 하루 코스`,
    hashtags: [second?.category, third?.category].filter(Boolean) as string[],
  };
}

export default function RecommendationCourseList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [data, setData] = useState<RecommendationsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCardKey, setActiveCardKey] = useState<string | null>(null);

  useEffect(() => {
    let area = searchParams.get("area") ?? "";
    let start_time = searchParams.get("start_time") ?? "";
    let transport = searchParams.get("transport") ?? "walk";

    if (area) {
      sessionStorage.setItem(
        "mje_search_params",
        JSON.stringify({ area, start_time, transport }),
      );
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

    try {
      const cached = sessionStorage.getItem("mje_recommendation_cache");
      if (cached) {
        const { params, data: cachedData } = JSON.parse(cached);
        if (
          params.area === area &&
          params.start_time === start_time &&
          params.transport === transport
        ) {
          setData(cachedData);
          setIsLoading(false);
          return;
        }
      }
    } catch {}

    fetchRecommendations({ area, start_time, transport })
      .then((result) => {
        setData(result);
        sessionStorage.setItem(
          "mje_recommendation_cache",
          JSON.stringify({
            params: { area, start_time, transport },
            data: result,
          }),
        );
        if (result.courses.length > 0) {
          void trackCourseCreate();
        }
      })
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const handleBestCourseClick = (course: RecommendationCourseItem) => {
    void trackCardClick(
      pathname,
      course.course_id,
      course.places[0]?.name ?? "",
      "main",
    );
    router.push(`/courses/detail/${course.course_id}?grade=best`);
  };

  const handleOptionalCourseClick = (
    course: RecommendationCourseItem,
    index: number,
  ) => {
    void trackCardClick(
      pathname,
      course.course_id,
      course.places[0]?.name ?? "",
      "sub",
    );
    const grade = index === 0 ? "optional_a" : "optional_b";
    router.push(`/courses/detail/${course.course_id}?grade=${grade}`);
  };

  if (isLoading) return <RecommendationLoading />;

  if (!data) return null;

  const bestCourse = data.courses.find((c) => c.grade === "best") ?? null;
  const optionalCourses = data.courses
    .filter((c) => c.grade === "optional")
    .slice(0, 2);

  const isEmpty = !bestCourse && optionalCourses.length === 0;
  const hasShortage = data.shortage_reasons.length > 0;

  if (isEmpty || hasShortage) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[24px] bg-white py-16 text-center shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
        <p className="text-base text-gray-500">아직 추천 코스가 없어요</p>
        <p className="mt-1 text-sm text-gray-400">
          검색 조건을 다시 설정해 보세요
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4 pt-[21px]">
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-center lg:gap-[20px]">
        {bestCourse && (
          <RecommendationCourseCard
            {...toBestCourseCardProps(bestCourse)}
            onDetailClick={() => handleBestCourseClick(bestCourse)}
            isActive={activeCardKey === "best"}
            isDimmed={activeCardKey !== null && activeCardKey !== "best"}
            onActivate={() => setActiveCardKey("best")}
            onDeactivate={() => setActiveCardKey(null)}
          />
        )}
        {optionalCourses.map((course, index) => {
          const key = `optional-${index}`;
          return (
            <RecommendationCourseCard
              key={key}
              {...toOptionalCourseCardProps(course, index)}
              onDetailClick={() => handleOptionalCourseClick(course, index)}
              isActive={activeCardKey === key}
              isDimmed={activeCardKey !== null && activeCardKey !== key}
              onActivate={() => setActiveCardKey(key)}
              onDeactivate={() => setActiveCardKey(null)}
            />
          );
        })}
      </div>
    </div>
  );
}
