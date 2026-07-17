"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { SearchParams } from "@/courses/types/search";

const TRANSPORT_MAP: Record<string, string> = {
  walk: "walk",
  transit: "public_transit",
  car: "car",
};

export function useCourseCreation(
  validate: () => boolean,
  params: SearchParams,
) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = useCallback(() => {
    if (!validate()) {
      return;
    }

    setIsLoading(true);
    const query = new URLSearchParams({
      area: params.place,
      start_time: params.meetTime ?? "",
      transport: TRANSPORT_MAP[params.transport ?? "walk"] ?? "walk",
    });
    router.push(`/recommendation?${query.toString()}`);
  }, [validate, params, router]);

  return { handleCreate, isLoading };
}
