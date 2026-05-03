"use client";

import { useEffect, useState } from "react";
import { Place } from "@/courses/types/course";
import { fetchRestaurantsAction } from "@/recommendation/application/actions/fetchRestaurantsAction";

interface UseRestaurantsResult {
  places: Place[];
  isLoading: boolean;
  error: string | null;
}

export function useRestaurants(courseId: string): UseRestaurantsResult {
  const [places, setPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    setError(null);

    fetchRestaurantsAction(courseId)
      .then((data) => {
        if (!cancelled) {
          setPlaces(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("식당 정보를 불러올 수 없어요");
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
