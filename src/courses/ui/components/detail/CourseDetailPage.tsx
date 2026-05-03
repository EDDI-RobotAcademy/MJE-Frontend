"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSuggestedCourses } from "@/courses/hooks/useSuggestedCourses";
import { useRestaurants } from "@/courses/hooks/useRestaurants";
import { useCafes } from "@/courses/hooks/useCafes";
import { useActivities } from "@/courses/hooks/useActivities";
import { useOtherCourses } from "@/courses/hooks/useOtherCourses";
import { Course, Place } from "@/courses/types/course";
import OtherCourseCard from "@/courses/ui/components/other_course/OtherCourseCard";
import BestCourseLabel from "./BestCourseLabel";
import DetailCourseSkeleton from "./DetailCourseSkeleton";
import ScheduleCard from "./ScheduleCard";
import ScheduleTimelineConnector from "./ScheduleTimelineConnector";
import ExportCard from "./ExportCard";
import HeadlineLocation from "@/courses/ui/components/headline_location/HeadlineLocation";
import HeadlineStartTime from "@/courses/ui/components/headline_start_time/HeadlineStartTime";
import HeadlineCourseTitle from "@/courses/ui/components/headline_course_title/HeadlineCourseTitle";
import HeadlineCourseExplain from "@/courses/ui/components/headline_course_explain/HeadlineCourseExplain";

interface CourseDetailPageProps {
  courseId: string;
}

export default function CourseDetailPage({ courseId }: CourseDetailPageProps) {
  const { data, isLoading: isSessionLoading, error } = useSuggestedCourses();
  const { places: restaurants } = useRestaurants(courseId);
  const { places: cafes } = useCafes(courseId);
  const { places: activities } = useActivities(courseId);
  const { courses: otherCourses } = useOtherCourses(courseId);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [courseId]);

  const allCourses: Course[] = useMemo(() => [
    ...(data?.mainCourse ? [data.mainCourse] : []),
    ...(data?.subCourses ?? []),
  ], [data]);

  const selectedCourse = allCourses.find((c) => c.id === courseId);

  const keywords = useMemo(
    () =>
      (selectedCourse?.keywords ?? []).filter(
        (kw, i, arr) => arr.findIndex((k) => k.label === kw.label) === i,
      ),
    [selectedCourse?.keywords],
  );

  const handleOtherCourseClick = (course: Course) => {
    if (!course.id) {
      return;
    }

    router.push(`/courses/detail/${course.id}`);
  };

  if (isSessionLoading) {
    return <DetailCourseSkeleton />;
  }

  if (error || !data) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-base text-brand-text-gray">추천 코스를 불러올 수 없어요</p>
        <p className="mt-1 text-sm text-brand-text-muted">잠시 후 다시 시도해 보세요</p>
      </div>
    );
  }

  if (!selectedCourse) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-base text-brand-text-gray">코스를 찾을 수 없어요</p>
        <p className="mt-1 text-sm text-brand-text-muted">다시 검색해 보세요</p>
      </div>
    );
  }

  // API places를 visitOrder(id) 기준으로 정렬 후 합산
  // API가 비어있으면(서브코스 등) 저장된 places 사용
  const apiPlaces: Place[] = [...restaurants, ...cafes, ...activities].sort(
    (a, b) => {
      const aIdx = parseInt(a.id.split("-").pop() ?? "0");
      const bIdx = parseInt(b.id.split("-").pop() ?? "0");
      return aIdx - bIdx;
    },
  );
  const places = apiPlaces.length > 0 ? apiPlaces : (selectedCourse.places ?? []);

  // 다른 추천 코스: API 결과 우선, 없으면 저장된 서브코스 사용
  const alternatives: Course[] =
    otherCourses.length > 0
      ? otherCourses.slice(0, 2)
      : allCourses.filter((c) => c.id !== courseId).slice(0, 2);

  const locations = selectedCourse.locations ?? (selectedCourse.location ? [selectedCourse.location] : []);
  const headlineLocation = locations[0];

  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          {headlineLocation && <HeadlineLocation location={headlineLocation} />}
          {selectedCourse.startTime && <HeadlineStartTime time={selectedCourse.startTime} />}
        </div>
        <HeadlineCourseTitle title={selectedCourse.name} />
        <HeadlineCourseExplain description={selectedCourse.description} />
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-[1fr_220px] items-start gap-4">
        {/* Left: schedule timeline */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <BestCourseLabel />
            {selectedCourse.duration && (
              <span className="text-[11px] text-brand-text-muted">
                상세 일정 · {selectedCourse.duration}
              </span>
            )}
          </div>

          {places.length > 0 ? (
            <div className="flex flex-col gap-1.5">
              {places.map((place, index) => (
                <div key={place.id} className="flex flex-col">
                  <ScheduleCard place={place} />
                  {index < places.length - 1 && (
                    <ScheduleTimelineConnector
                      fromName={place.name}
                      toName={places[index + 1].name}
                      walkingTime={place.walkingTimeTo}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[12px] text-brand-text-muted">상세 일정이 없어요</p>
          )}
        </div>

        {/* Right: sidebar */}
        <div className="flex flex-col gap-4">
          <ExportCard />

          {alternatives.length > 0 && (
            <div className="flex flex-col gap-3">
              <span className="inline-block w-fit rounded-full bg-brand-navy px-3 py-1 text-[11px] font-semibold text-white">
                다른 추천 코스!
              </span>
              <div className="flex flex-col gap-3">
                {alternatives.map((course, index) => (
                  <OtherCourseCard
                    key={course.id}
                    course={course}
                    label={index === 0 ? "Option A" : "Option B"}
                    onClick={handleOtherCourseClick}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* keywords — 하단 노출 (선택적 활용) */}
      {keywords.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {keywords.map((kw) => (
            <span
              key={kw.label}
              className="rounded-full bg-brand-blue-light px-3 py-1 text-[11px] text-[#2a4874]"
            >
              {kw.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
