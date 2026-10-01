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

function toAmPmTime(time: string): string {
  const [hStr, mStr] = time.split(":");
  const hour = parseInt(hStr, 10);
  if (Number.isNaN(hour)) return time;

  const period = hour < 12 ? "오전" : "오후";
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${period} ${displayHour}시`;
}

interface CourseDetailPageDesktopProps {
  courseId: string;
  initialDetailData: CourseDetailData | null;
  grade?: string;
  isSharedView?: boolean;
}

export default function CourseDetailPageDesktop({
  courseId,
  initialDetailData,
  grade,
  isSharedView = false,
}: CourseDetailPageDesktopProps) {
  const view = useCourseDetail({ courseId, initialDetailData, grade });

  if (view.isLoading) return <DetailCourseSkeleton />;

  if (!view.selectedCourse) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-base text-brand-text-gray">
          코스 상세 정보를 불러올 수 없어요.
        </p>
        <p className="mt-1 text-sm text-brand-text-muted">
          다시 시도해 주세요.
        </p>
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
      <div className="flex flex-col">
        {header}
        <ScheduleList places={places} transportLabel={transportLabel} />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* 추천 코스 목록으로 돌아가기 버튼 */}
      <div className="pt-[46.62px]">
        <ReturnToRecommendation />
      </div>

      {/* 코스명, 코스 시간, 코스 설명 */}
      <div className="pt-[72.38px]">{header}</div>

      <div className="pt-[68.02px]">
        <div className="grid grid-cols-[1fr_1.3fr] items-stretch gap-[46px]">
          <div className="flex flex-col gap-[45px]">
            <ScheduleList places={places} transportLabel={transportLabel} />
            <ExportCard
              courseTitle={selectedCourse.name}
              courseId={courseId}
              variant="button"
              shareLocation={shareLocation}
              shareLabel={shareLabel}
            />
          </div>

          {places.length > 0 && (
            <CourseMap
              places={places}
              location={headlineLocation}
              totalDistanceM={selectedCourse.totalDistanceM}
              transport={resolvedTransport}
              heightClassName="h-full"
            />
          )}
        </div>
      </div>

      {safeAlternatives.length > 0 && (
        <div className="flex flex-col items-center gap-[10px] pt-[144px] text-center">
          <h3 className="text-[26px] font-bold text-[#222222]/90">
            다른 추천 데이트 코스
          </h3>
          {(headlineLocation || transportLabel) && (
            <div className="flex items-center justify-center gap-[3px]">
              <p
                className="text-[16.94px] font-bold text-[#222222]/70 underline md:text-[16.94px]"
                style={{
                  fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                }}
              >
                {headlineLocation},{" "}
                {selectedCourse.startTime &&
                  toAmPmTime(selectedCourse.startTime)}
                , {transportLabel} 이용
              </p>
              <p className="text-[16.94px] text-[#222222]/60">
                코스를 구성했어요.
              </p>
            </div>
          )}
          <div className="mt-[85px] mb-[146px] grid grid-cols-2 gap-[18.96px]">
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
  );
}
