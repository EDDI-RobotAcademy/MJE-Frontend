"use client";

import { useEffect, useState } from "react";
import { Place } from "@/courses/types/course";
import { fetchCourseCafes } from "@/recommendation/infrastructure/api/cafe/cafeApi";

interface UseCafesResult {
  places: Place[];
  isLoading: boolean;
  error: string | null;
}

export function useCafes(courseId: string): UseCafesResult {
  const [places, setPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    setError(null);

    fetchCourseCafes(courseId)
      .then((data) => {
        if (!cancelled) {
          setPlaces(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("카페 정보를 불러올 수 없어요");
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
