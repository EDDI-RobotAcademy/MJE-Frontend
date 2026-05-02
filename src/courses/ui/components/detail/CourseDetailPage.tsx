"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSuggestedCourses } from "@/courses/hooks/useSuggestedCourses";
import { Course } from "@/courses/types/course";
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
  const { data, isLoading, error } = useSuggestedCourses();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [courseId]);

  const handleOtherCourseClick = (course: Course) => {
    router.push(`/courses/detail/${course.id}`);
  };

  if (isLoading) {
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

  const allCourses: Course[] = [
    ...(data.mainCourse ? [data.mainCourse] : []),
    ...data.subCourses,
  ];
  const selectedCourse = allCourses.find((c) => c.id === courseId);
  const alternatives = allCourses.filter((c) => c.id !== courseId).slice(0, 2);

  if (!selectedCourse) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-base text-brand-text-gray">코스를 찾을 수 없어요</p>
        <p className="mt-1 text-sm text-brand-text-muted">다시 검색해 보세요</p>
      </div>
    );
  }

  const locations = selectedCourse.locations ?? (selectedCourse.location ? [selectedCourse.location] : []);
  const headlineLocation = locations[0];
  const places = selectedCourse.places ?? [];

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
    </div>
  );
}
