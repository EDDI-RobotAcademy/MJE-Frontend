"use client";

import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { trackCourseCreate } from "@/courses/ui/components/CourseCreation/event_tracking";

export function useCourseCreation(validate: () => boolean) {
  const router = useRouter();
  const pathname = usePathname();
  const [isShaking, setIsShaking] = useState(false);
  // 카운터 방식 — 매번 증가하므로 연속 클릭 시에도 애니메이션 재실행 가능
  const [shakeKey, setShakeKey] = useState(0);

  const handleCreate = useCallback(() => {
    if (validate()) {
      void trackCourseCreate(pathname, "success");
      router.push("/recommendation");
    } else {
      void trackCourseCreate(pathname, "validation_failed");
      setShakeKey((prev) => prev + 1);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 400);
    }
  }, [validate, router, pathname]);

  return { handleCreate, isShaking, shakeKey };
}
