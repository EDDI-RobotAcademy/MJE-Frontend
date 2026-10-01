"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSuggestedCourses } from "@/courses/hooks/useSuggestedCourses";
import { loadCourseSession } from "@/courses/application/courseSession";
import { useOtherCourses } from "@/courses/hooks/useOtherCourses";
import { Course } from "@/courses/types/course";
import { CourseDetailData } from "@/recommendation/infrastructure/api/course_detail/courseDetailApi";
import { trackOptionCardClick } from "@/courses/ui/components/other_course/event_tracking";
import {
  CourseType,
  labelFromCourseType,
} from "@/courses/ui/components/shared/CourseLabel";

const TRANSPORT_LABEL_MAP: Record<string, string> = {
  walk: "도보",
  public_transit: "대중교통",
  transit: "대중교통",
  car: "자동차",
};

interface UseCourseDetailParams {
  courseId: string;
  initialDetailData: CourseDetailData | null;
  grade?: string;
}

export function useCourseDetail({
  courseId,
  initialDetailData,
  grade,
}: UseCourseDetailParams) {
  const { data, isLoading: isSessionLoading } = useSuggestedCourses();
  const { courses: otherCourses } = useOtherCourses(courseId);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [courseId]);

  const allCourses: Course[] = useMemo(
    () => [
      ...(data?.mainCourse ? [data.mainCourse] : []),
      ...(data?.subCourses ?? []),
    ],
    [data],
  );

  const sessionCourse = allCourses.find((c) => c.id === courseId);
  const rawCourse = initialDetailData?.selectedCourse ?? sessionCourse;
  const selectedCourse =
    rawCourse && !rawCourse.courseType && sessionCourse?.courseType
      ? { ...rawCourse, courseType: sessionCourse.courseType }
      : rawCourse;

  const keywords = useMemo(
    () =>
      (selectedCourse?.keywords ?? []).filter(
        (keyword, index, items) =>
          items.findIndex((item) => item.label === keyword.label) === index,
      ),
    [selectedCourse?.keywords],
  );

  const sessionTransport = useMemo(() => {
    const session = loadCourseSession();
    if (!session) return undefined;
    const course =
      session.mainCourse?.courseId === courseId
        ? session.mainCourse
        : session.subCourses.find((c) => c.courseId === courseId);
    return course?.transport;
  }, [courseId]);

  const getCourseLabel = (
    id: string,
    fallbackCourseType?: string,
  ): CourseType => {
    if (data?.mainCourse?.id === id) return "Best Course !";
    const subIndex = data?.subCourses.findIndex((c) => c.id === id) ?? -1;
    if (subIndex === 0) return "Option A";
    if (subIndex === 1) return "Option B";
    return labelFromCourseType(fallbackCourseType);
  };

  const handleOtherCourseClick = (course: Course) => {
    if (!course.id) return;
    const label = getCourseLabel(course.id, course.courseType);
    const gradeParam =
      label === "Best Course !"
        ? "best"
        : label === "Option A"
          ? "optional_a"
          : "optional_b";
    trackOptionCardClick();
    router.push(`/courses/detail/${course.id}?grade=${gradeParam}`);
  };

  const isLoading = isSessionLoading && !initialDetailData;

  if (isLoading || !selectedCourse) {
    return {
      isLoading,
      selectedCourse: null as null,
    } as const;
  }

  const places = selectedCourse.places ?? [];
  const resolvedTransport = selectedCourse.transport ?? sessionTransport;
  const transportLabel = resolvedTransport
    ? (TRANSPORT_LABEL_MAP[resolvedTransport] ?? resolvedTransport)
    : undefined;

  const fallbackAlternatives =
    allCourses.length > 0 ? allCourses : (initialDetailData?.subCourses ?? []);
  const alternatives: Course[] =
    otherCourses.length > 0
      ? otherCourses.slice(0, 2)
      : fallbackAlternatives
          .filter((course) => course.id !== courseId)
          .slice(0, 2);
  const labelOrder = { "Best Course !": 0, "Option A": 1, "Option B": 2 };
  const safeAlternatives = alternatives
    .filter((course) => course.name)
    .map((course) => {
      const sessionCourse = allCourses.find((c) => c.id === course.id);
      return sessionCourse
        ? {
            ...course,
            name: sessionCourse.name,
            places: sessionCourse.places,
            courseType: sessionCourse.courseType,
          }
        : course;
    })
    .sort(
      (a, b) =>
        labelOrder[getCourseLabel(a.id)] - labelOrder[getCourseLabel(b.id)],
    );

  const locations =
    selectedCourse.locations ??
    (selectedCourse.location ? [selectedCourse.location] : []);
  const headlineLocation = locations[0];
  const shareLocation =
    places[0]?.address?.match(/\S+동/)?.[0] ?? headlineLocation;
  const shareLabel = labelFromCourseType(grade ?? selectedCourse.courseType);

  return {
    isLoading,
    selectedCourse,
    places,
    resolvedTransport,
    transportLabel,
    headlineLocation,
    shareLocation,
    shareLabel,
    safeAlternatives,
    keywords,
    getCourseLabel,
    handleOtherCourseClick,
  } as const;
}
