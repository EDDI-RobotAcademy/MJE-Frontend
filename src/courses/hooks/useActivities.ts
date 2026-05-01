"use client";

import { useEffect, useState } from "react";
import { Place } from "@/courses/types/course";
import { fetchCourseActivities } from "@/recommendation/infrastructure/api/activity/activityApi";

interface UseActivitiesResult {
  places: Place[];
  isLoading: boolean;
  error: string | null;
}

export function useActivities(courseId: string): UseActivitiesResult {
  const [places, setPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    setError(null);

    fetchCourseActivities(courseId)
      .then((data) => {
        if (!cancelled) {
          setPlaces(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("활동 정보를 불러올 수 없어요");
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

  return { places, isLoading, error };
}
