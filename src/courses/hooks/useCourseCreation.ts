"use client";

import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { trackCourseCreate } from "@/courses/ui/components/CourseCreation/event_tracking";

export function useCourseCreation(validate: () => boolean) {
  const router = useRouter();
  const pathname = usePathname();
  const [isShaking, setIsShaking] = useState(false);

  const handleCreate = useCallback(() => {
    if (validate()) {
      void trackCourseCreate(pathname, "success");
      router.push("/recommendation");
    } else {
      void trackCourseCreate(pathname, "validation_failed");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  }, [validate, router, pathname]);

  return { handleCreate, isShaking };
}
