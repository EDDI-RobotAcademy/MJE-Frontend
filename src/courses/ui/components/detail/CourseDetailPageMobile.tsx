"use client";

import { useEffect, useRef, useState } from "react";
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
  const [hStr] = time.split(":");
  const hour = parseInt(hStr, 10);
  if (Number.isNaN(hour)) return time;

  const period = hour < 12 ? "오전" : "오후";
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${period} ${displayHour}시`;
}

function ListIcon() {
  return (
    <svg
      width="17"
      height="11"
      viewBox="0 0 17 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.67861 10.6654V9.24597H16.0894V10.6654H5.67861ZM5.67861 6.04252V4.62287H16.0894V6.04252H5.67861ZM0 1.41942V0H16.0894V1.41942H0Z"
        fill="#05A66B"
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
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [selectedAltId, setSelectedAltId] = useState<string | null>(null);
  const dragStartYRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowShareTooltip(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleDragStart = (clientY: number) => {
    dragStartYRef.current = clientY;
  };

  const handleDragMove = (clientY: number) => {
    if (dragStartYRef.current == null) return;
    const delta = clientY - dragStartYRef.current;
    if (delta > 24) {
      setIsMapExpanded(true);
      dragStartYRef.current = null;
    } else if (delta < -24) {
      setIsMapExpanded(false);
      dragStartYRef.current = null;
    }
  };

  const handleDragEnd = () => {
    dragStartYRef.current = null;
  };

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
      <div className="pt-[23px] px-[20px] py-4">
        <ReturnToRecommendation />
      </div>

      <div className="px-4">{header}</div>

      {places.length > 0 && (
        <div className="px-4 py-4">
          <CourseMap
            places={places}
            location={headlineLocation}
            totalDistanceM={selectedCourse.totalDistanceM}
            transport={resolvedTransport}
            heightClassName={isMapExpanded ? "h-[520px]" : "h-[260px]"}
            expanded={isMapExpanded}
          />
        </div>
      )}

      {/* 흰색 바텀시트 — 일정 + 다른 추천 코스 */}
      <div className="relative rounded-t-[24px] bg-white px-4 pb-32 pt-4 bg-[#FAFAF8]">
        <div
          className="-mt-4 flex touch-none cursor-grab justify-center pt-4 pb-6"
          onPointerDown={(e) => handleDragStart(e.clientY)}
          onPointerMove={(e) => handleDragMove(e.clientY)}
          onPointerUp={handleDragEnd}
          onPointerCancel={handleDragEnd}
        >
          <div className="h-[4px] w-[36px] rounded-full bg-[#D9D9D9]" />
        </div>

        <div className="flex flex-col gap-4">
          <ScheduleList
            places={places}
            transportLabel={transportLabel}
            variant="flat"
          />

          {safeAlternatives.length > 0 && (
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-[8px]">
                <ListIcon />
                <h3 className="text-[16px] font-bold text-black text-[#222222]/90">
                  다른 추천 데이트 코스
                </h3>
              </div>

              {(headlineLocation || selectedCourse.startTime || transportLabel) && (
                <p className="text-[12px] text-[#757575]">
                  {[
                    headlineLocation,
                    selectedCourse.startTime &&
                      toAmPmTime(selectedCourse.startTime),
                    transportLabel && `${transportLabel} 이용`,
                  ]
                    .filter(Boolean)
                    .map((part, index, arr) => (
                      <span key={part}>
                        <span className="font-semibold underline">{part}</span>
                        {index < arr.length - 1 ? ", " : " "}
                      </span>
                    ))}
                  코스를 구성했어요.
                </p>
              )}
              <div className="mt-2 grid w-full grid-cols-1 gap-4">
                {safeAlternatives.map((course, index) => {
                  const altId = course.id || `alternative-course-${index}`;
                  return (
                    <OtherCourseCard
                      key={altId}
                      course={course}
                      label={getCourseLabel(course.id, course.courseType)}
                      onClick={handleOtherCourseClick}
                      variant="flat"
                      isSelected={altId === selectedAltId}
                      isShrunk={
                        selectedAltId != null && altId !== selectedAltId
                      }
                      onSelect={() => setSelectedAltId(altId)}
                    />
                  );
                })}
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

      {/* 하단 그라데이션 블러 */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-30"
        style={{
          height: "292px",
          background:
            "linear-gradient(to bottom, rgba(217, 217, 217, 0) 0%, rgba(255, 255, 255, 0.6) 100%)",
          backdropFilter: "blur(0.5px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      />

      {/* 공유 유도 말풍선 */}
      {showShareTooltip && (
        <div className="fixed inset-x-0 bottom-[92.66px] z-40 flex justify-center">
          <div className="relative">
            <div className="whitespace-nowrap rounded-full bg-[#05A66B] px-[18px] py-[10px] text-[10px] font-bold text-white shadow-[0px_4px_10px_rgba(0,0,0,0.15)]">
              이 코스가 마음에 드시나요?
            </div>
            <svg
              className="absolute right-[20px]"
              style={{ top: "calc(100% - 2px)" }}
              width="9.32"
              height="13.45"
              viewBox="0 0 10 14"
              fill="none"
            >
              <path d="M0 0H10L5.7 12.6Q5 14 4.3 12.6L0 0Z" fill="#05A66B" />
            </svg>
          </div>
        </div>
      )}

      {/* 공유 버튼 — 화면 하단 고정 */}
      <div className="fixed inset-x-0 bottom-[30px] z-40 flex justify-center">
        <div className="w-[199px]">
          <ExportCard
            courseTitle={selectedCourse.name}
            courseId={courseId}
            variant="button"
            shareLocation={shareLocation}
            shareLabel={shareLabel}
          />
        </div>
      </div>
    </div>
  );
}
