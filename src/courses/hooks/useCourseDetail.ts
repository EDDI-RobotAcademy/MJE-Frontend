"use client";

import { useEffect, useState } from "react";
import { fetchCourseDetailAction } from "@/recommendation/application/actions/fetchCourseDetailAction";
import { CourseDetailData } from "@/recommendation/infrastructure/api/course_detail/courseDetailApi";

interface UseCourseDetailResult {
  data: CourseDetailData | null;
  isLoading: boolean;
  error: string | null;
}

export function useCourseDetail(courseId: string): UseCourseDetailResult {
  const [data, setData] = useState<CourseDetailData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    setError(null);

    fetchCourseDetailAction(courseId)
      .then((result) => {
        if (cancelled) {
          return;
        }

        if (!result) {
          setError("코스 상세 정보를 불러올 수 없어요.");
          setData(null);
          return;
        }

        setData(result);
      })
      .catch(() => {
        if (!cancelled) {
          setError("코스 상세 정보를 불러올 수 없어요.");
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [courseId]);

  return { data, isLoading, error };
}
