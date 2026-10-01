"use client";

import { CourseDetailData } from "@/recommendation/infrastructure/api/course_detail/courseDetailApi";
import { useCourseDetail } from "@/courses/hooks/useCourseDetail";
import DetailCourseSkeleton from "./DetailCourseSkeleton";
import ReturnToRecommendation from "@/courses/ui/components/return/ReturnToRecommendation";
import CourseDetailHeader from "./CourseDetailHeader";
import ScheduleList from "./ScheduleList";
import CourseMap from "./CourseMap";
import ExportCard from "@/courses/ui/components/share/ShareCard";
import OtherCourseCard from "@/courses/ui/components/other_course/OtherCourseCard";

function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 4H14M2 8H14M2 12H10"
        stroke="#222222"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface CourseDetailPageMobileProps {
  courseId: string;
  initialDetailData: CourseDetailData | null;
  grade?: string;
  isSharedView?: boolean;
}

export default function CourseDetailPageMobile({
  courseId,
  initialDetailData,
  grade,
  isSharedView = false,
}: CourseDetailPageMobileProps) {
  const view = useCourseDetail({ courseId, initialDetailData, grade });

  if (view.isLoading) return <DetailCourseSkeleton />;

  if (!view.selectedCourse) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-base text-brand-text-gray">
          코스 상세 정보를 불러올 수 없어요.
        </p>
        <p className="mt-1 text-sm text-brand-text-muted">다시 시도해 주세요.</p>
      </div>
    );
  }

  const {
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
  } = view;

  const header = (
    <CourseDetailHeader
      course={selectedCourse}
      label={shareLabel}
      headlineLocation={headlineLocation}
    />
  );

  if (isSharedView) {
    return (
      <div className="flex flex-col gap-6">
        {header}
        <ScheduleList places={places} transportLabel={transportLabel} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <ReturnToRecommendation />

      {header}

      {places.length > 0 && (
        <CourseMap
          places={places}
          location={headlineLocation}
          totalDistanceM={selectedCourse.totalDistanceM}
          transport={resolvedTransport}
          heightClassName="h-[260px]"
        />
      )}

      {/* 흰색 바텀시트 — 일정 + 다른 추천 코스 */}
      <div className="relative -mx-4 rounded-t-[24px] bg-white px-4 pb-24 pt-4">
        <div className="mx-auto mb-3 h-[4px] w-[36px] rounded-full bg-[#D9D9D9]" />

        <div className="flex flex-col gap-4">
          <ScheduleList places={places} transportLabel={transportLabel} />

          {safeAlternatives.length > 0 && (
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-[8px]">
                <ListIcon />
                <h3 className="text-[16px] font-bold text-black">
                  다른 추천 데이트 코스
                </h3>
              </div>
              {(headlineLocation || transportLabel) && (
                <p className="text-[12px] text-[#757575]">
                  {[headlineLocation, transportLabel && `${transportLabel} 이용`]
                    .filter(Boolean)
                    .join(", ")}{" "}
                  코스를 구성했어요.
                </p>
              )}
              <div className="mt-2 grid w-full grid-cols-1 gap-4">
                {safeAlternatives.map((course, index) => (
                  <OtherCourseCard
                    key={course.id || `alternative-course-${index}`}
                    course={course}
                    label={getCourseLabel(course.id, course.courseType)}
                    onClick={handleOtherCourseClick}
                  />
                ))}
              </div>
            </div>
          )}

          {keywords.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  key={keyword.label}
                  className="rounded-full bg-brand-blue-light px-3 py-1 text-[11px] text-[#2A4874]"
                >
                  {keyword.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 공유 버튼 — 화면 하단 고정 */}
      <div className="fixed inset-x-4 bottom-4 z-40">
        <ExportCard
          courseTitle={selectedCourse.name}
          courseId={courseId}
          variant="button"
          shareLocation={shareLocation}
          shareLabel={shareLabel}
        />
      </div>
    </div>
  );
}
