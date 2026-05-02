"use client";

import { useState, useEffect } from "react";
import { SuggestedCoursesData } from "@/courses/types/course";
import {
  loadCourseSession,
  mapSessionToSuggestedCourses,
} from "@/courses/application/courseSession";

export function useSuggestedCourses() {
  const [data, setData] = useState<SuggestedCoursesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const session = loadCourseSession();
    if (session) {
      setData(mapSessionToSuggestedCourses(session));
    } else {
      setError("추천 코스 데이터가 없어요. 다시 검색해 주세요.");
    }
    setIsLoading(false);
  }, []);

  return { data, isLoading, error };
}
