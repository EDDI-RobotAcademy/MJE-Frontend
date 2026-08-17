"use client";

import { useEffect, useState } from "react";
import { CourseDetailData } from "@/recommendation/infrastructure/api/course_detail/courseDetailApi";
import CourseDetailPageDesktop from "./CourseDetailPageDesktop";
import CourseDetailPageMobile from "./CourseDetailPageMobile";

const DESKTOP_BREAKPOINT = "(min-width: 1080px)";

interface CourseDetailResponsiveProps {
  courseId: string;
  initialDetailData: CourseDetailData | null;
  grade?: string;
  isSharedView?: boolean;
}

export default function CourseDetailResponsive(
  props: CourseDetailResponsiveProps,
) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_BREAKPOINT);
    setIsDesktop(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isDesktop ? (
    <CourseDetailPageDesktop {...props} />
  ) : (
    <CourseDetailPageMobile {...props} />
  );
}
