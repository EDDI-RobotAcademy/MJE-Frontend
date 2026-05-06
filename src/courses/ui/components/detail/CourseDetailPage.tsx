"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSuggestedCourses } from "@/courses/hooks/useSuggestedCourses";
import { useOtherCourses } from "@/courses/hooks/useOtherCourses";
import { Course } from "@/courses/types/course";
import { CourseDetailData } from "@/recommendation/infrastructure/api/course_detail/courseDetailApi";
import OtherCourseCard from "@/courses/ui/components/other_course/OtherCourseCard";
import { trackOptionCardClick } from "@/courses/ui/components/other_course/event_tracking";
import BestCourseLabel from "./BestCourseLabel";
import DetailCourseSkeleton from "./DetailCourseSkeleton";
import ScheduleCard from "./ScheduleCard";
import ScheduleTimelineConnector from "./ScheduleTimelineConnector";
import ExportCard from "@/courses/ui/components/export/ExportCard";
import HeadlineLocation from "@/courses/ui/components/headline_location/HeadlineLocation";
import HeadlineStartTime from "@/courses/ui/components/headline_start_time/HeadlineStartTime";
import HeadlineCourseTitle from "@/courses/ui/components/headline_course_title/HeadlineCourseTitle";
import HeadlineCourseExplain from "@/courses/ui/components/headline_course_explain/HeadlineCourseExplain";

interface CourseDetailPageProps {
  courseId: string;
  initialDetailData: CourseDetailData | null;
}

export default function CourseDetailPage({
  courseId,
  initialDetailData,
}: CourseDetailPageProps) {
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

  const selectedCourse =
    initialDetailData?.selectedCourse ??
    allCourses.find((course) => course.id === courseId);

  const keywords = useMemo(
    () =>
      (selectedCourse?.keywords ?? []).filter(
        (keyword, index, items) =>
          items.findIndex((item) => item.label === keyword.label) === index,
      ),
    [selectedCourse?.keywords],
  );

  const handleOtherCourseClick = (course: Course) => {
    if (!course.id) {
      return;
    }

    trackOptionCardClick();
    router.push(`/courses/detail/${course.id}`);
  };

  if (isSessionLoading && !initialDetailData) {
    return <DetailCourseSkeleton />;
  }

  if (!selectedCourse) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-base text-brand-text-gray">코스 상세 정보를 불러올 수 없어요.</p>
        <p className="mt-1 text-sm text-brand-text-muted">다시 시도해 주세요.</p>
      </div>
    );
  }

  const places = selectedCourse.places ?? [];

  const fallbackAlternatives =
    allCourses.length > 0 ? allCourses : (initialDetailData?.subCourses ?? []);
  const alternatives: Course[] =
    otherCourses.length > 0
      ? otherCourses.slice(0, 2)
      : fallbackAlternatives.filter((course) => course.id !== courseId).slice(0, 2);
  const safeAlternatives = alternatives.filter((course) => course.name);

  const locations =
    selectedCourse.locations ??
    (selectedCourse.location ? [selectedCourse.location] : []);
  const headlineLocation = locations[0];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-wrap items-center gap-[18px]">
          {headlineLocation && <HeadlineLocation location={headlineLocation} />}
          {headlineLocation && selectedCourse.startTime && (
            <span className="inline-block h-[2.5px] w-[2.5px] shrink-0 rounded-full bg-[#c0c0c0]" />
          )}
          {selectedCourse.startTime && (
            <HeadlineStartTime time={selectedCourse.startTime} />
          )}
        </div>
        <HeadlineCourseTitle title={selectedCourse.name} />
        <HeadlineCourseExplain description={selectedCourse.description} />
      </div>

      <div className="grid grid-cols-[1fr_250px] items-start gap-5">
        <div className="flex flex-col gap-3 rounded-[30px] bg-white px-[17px] pb-[19px] pt-[22px] shadow-[0px_8px_32px_rgba(42,72,116,0.12)]">
          <div className="flex flex-col gap-[10px]">
            <BestCourseLabel label="Best Course !" />
            <div className="flex items-baseline gap-[8px]">
              <span className="text-[18px] font-bold text-black">상세 일정</span>
              {selectedCourse.duration && (
                <div className="flex items-center gap-[5px] text-[12px] text-[#959595]">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#959595" strokeWidth="1.5" />
                    <path d="M8 5V9L10.5 10.5" stroke="#959595" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span>{selectedCourse.duration}</span>
                </div>
              )}
            </div>
          </div>

          {places.length > 0 ? (
            <div className="flex flex-col gap-1.5">
              {places.map((place, index) => (
                <div key={place.id} className="flex flex-col">
                  <ScheduleCard
                    place={place}
                    previousPlaceName={index > 0 ? places[index - 1].name : undefined}
                    walkingTimeFromPrevious={index > 0 ? places[index - 1].walkingTimeTo : undefined}
                  />
                  {index < places.length - 1 && (
                    <ScheduleTimelineConnector />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[12px] text-brand-text-muted">
              상세 일정 정보가 없어요.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-[40px]">
          <ExportCard courseTitle={selectedCourse.name} courseId={courseId} />

          {safeAlternatives.length > 0 && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-center">
                <span className="rounded-full bg-brand-navy px-3 py-1 text-[11px] font-semibold text-white">
                  다른 추천 코스!
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {safeAlternatives.map((course, index) => (
                  <OtherCourseCard
                    key={course.id || `alternative-course-${index}`}
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

      {keywords.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span
              key={keyword.label}
              className="rounded-full bg-brand-blue-light px-3 py-1 text-[11px] text-[#2a4874]"
            >
              {keyword.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
