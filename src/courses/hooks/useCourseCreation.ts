"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { SearchParams } from "@/courses/types/search";
import { createCourseAction } from "@/recommendation/application/actions/createCourseAction";
import { saveCourseSession } from "@/courses/application/courseSession";

export function useCourseCreation(
  validate: () => boolean,
  params: SearchParams,
) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);

  const handleCreate = useCallback(async () => {
    if (!validate()) {
      setShakeKey((prev) => prev + 1);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 400);
      return;
    }

    setIsLoading(true);
    try {
      const response = await createCourseAction({
        area: params.place,
        start_time: params.meetTime ?? "",
        transport: params.transport ?? "walk",
      });
      saveCourseSession(response);
      router.push("/recommendation");
    } catch {
      // API 오류 시 흔들림 효과로 피드백
      setShakeKey((prev) => prev + 1);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 400);
    } finally {
      setIsLoading(false);
    }
  }, [validate, params, router]);

  return { handleCreate, isLoading, isShaking, shakeKey };
}
