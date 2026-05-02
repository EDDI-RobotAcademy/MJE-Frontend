"use client";

import { useEffect, useState } from "react";
import { Course } from "@/courses/types/course";
import { fetchOtherCourses } from "@/recommendation/infrastructure/api/other_course/otherCourseApi";

interface UseOtherCoursesResult {
  courses: Course[];
  isLoading: boolean;
  error: string | null;
}

export function useOtherCourses(courseId: string): UseOtherCoursesResult {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    setError(null);

    fetchOtherCourses(courseId)
      .then((data) => {
        if (!cancelled) {
          setCourses(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("다른 코스 정보를 불러올 수 없어요");
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

  return { courses, isLoading, error };
}
