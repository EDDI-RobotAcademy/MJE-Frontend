"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export function useCourseCreation(validate: () => boolean) {
  const router = useRouter();
  const [isShaking, setIsShaking] = useState(false);
  // 카운터 방식 — 매번 증가하므로 연속 클릭 시에도 애니메이션 재실행 가능
  const [shakeKey, setShakeKey] = useState(0);

  const handleCreate = useCallback(() => {
    if (validate()) {
      router.push("/recommendation");
    } else {
      setShakeKey((prev) => prev + 1);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 400);
    }
  }, [validate, router]);

  return { handleCreate, isShaking, shakeKey };
}
