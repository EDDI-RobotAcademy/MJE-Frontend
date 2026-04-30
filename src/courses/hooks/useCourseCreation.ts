"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export function useCourseCreation(validate: () => boolean) {
  const router = useRouter();
  const [isShaking, setIsShaking] = useState(false);

  const handleCreate = useCallback(() => {
    if (validate()) {
      router.push("/recommendation");
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  }, [validate, router]);

  return { handleCreate, isShaking };
}
