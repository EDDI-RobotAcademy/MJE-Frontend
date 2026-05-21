"use client";

import { useState, useEffect } from "react";
import { Course, Place, SuggestedCoursesData } from "@/courses/types/course";
import {
  loadCourseSession,
  mapSessionToSuggestedCourses,
} from "@/courses/application/courseSession";
import {
  RecommendationCourseItem,
  RecommendationsResponse,
} from "@/recommendation/types";

function mapRecommendationItemToCourse(item: RecommendationCourseItem): Course {
  const places: Place[] = (item.places ?? []).map((p) => ({
    id: `${item.course_id}-${p.order}`,
    name: p.name,
    description: "",
    location: (p.road_address || p.address).split(" ").slice(0, 2).join(" "),
    address: p.road_address || p.address,
    time: `${p.start_time} ~ ${p.end_time}`,
    startTime: p.start_time,
    endTime: p.end_time,
    imageUrl: p.image_url ?? undefined,
    type: p.place_type,
    category: p.category,
  }));

  const totalMinutes = (item.places ?? []).reduce(
    (sum, p) => sum + p.duration_minutes,
    0,
  );
  const locations = [
    ...new Set(
      (item.places ?? [])
        .map((p) => (p.road_address || p.address).split(" ")[1])
        .filter(Boolean),
    ),
  ];

  return {
    id: item.course_id,
    courseType: item.grade,
    name: (item.places ?? []).map((p) => p.name).join(" → "),
    description: "",
    locations,
    startTime: item.places?.[0]?.start_time,
    duration: `약 ${Math.ceil(totalMinutes / 60)}시간`,
    keywords: [],
    imageUrl: item.image_url ?? item.places?.[0]?.image_url ?? undefined,
    places,
  };
}

function mapRecommendationCacheToSuggestedCourses(
  courses: RecommendationCourseItem[],
): SuggestedCoursesData {
  const mainItem = courses.find((c) => c.grade === "best") ?? null;
  const subItems = courses.filter((c) => c.grade === "optional");
  return {
    mainCourse: mainItem ? mapRecommendationItemToCourse(mainItem) : null,
    subCourses: subItems.map(mapRecommendationItemToCourse),
  };
}

export function useSuggestedCourses() {
  const [data, setData] = useState<SuggestedCoursesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const session = loadCourseSession();
    if (session) {
      setData(mapSessionToSuggestedCourses(session));
      setIsLoading(false);
      return;
    }

    try {
      const raw = sessionStorage.getItem("mje_recommendation_cache");
      if (raw) {
        const { data: cached } = JSON.parse(raw) as {
          data: RecommendationsResponse;
          params: unknown;
        };
        if (cached?.courses?.length > 0) {
          setData(mapRecommendationCacheToSuggestedCourses(cached.courses));
          setIsLoading(false);
          return;
        }
      }
    } catch {}

    setError("추천 코스 데이터가 없어요. 다시 검색해 주세요.");
    setIsLoading(false);
  }, []);

  return { data, isLoading, error };
}
