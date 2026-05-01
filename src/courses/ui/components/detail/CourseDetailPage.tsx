"use client";

import { useSuggestedCourses } from "@/courses/hooks/useSuggestedCourses";
import { Course } from "@/courses/types/course";
import OtherCourseCard from "@/courses/ui/components/other_course/OtherCourseCard";
import BestCourseLabel from "./BestCourseLabel";
import DetailCourseSkeleton from "./DetailCourseSkeleton";
import HeadlineLocation from "@/courses/ui/components/headline_location/HeadlineLocation";
import HeadlineStartTime from "@/courses/ui/components/headline_start_time/HeadlineStartTime";
import HeadlineCourseTitle from "@/courses/ui/components/headline_course_title/HeadlineCourseTitle";
import HeadlineCourseExplain from "@/courses/ui/components/headline_course_explain/HeadlineCourseExplain";
import RestaurantCard from "@/courses/ui/components/list_restaurant/RestaurantCard";
import CafeCard from "@/courses/ui/components/list_cafe/CafeCard";
import ActivityCard from "@/courses/ui/components/list_activity/ActivityCard";

interface CourseDetailPageProps {
  courseId: string;
}

export default function CourseDetailPage({ courseId }: CourseDetailPageProps) {
  const { data, isLoading, error } = useSuggestedCourses();

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

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <BestCourseLabel />
        <div className="flex flex-wrap gap-2">
          {headlineLocation && <HeadlineLocation location={headlineLocation} />}
          {selectedCourse.startTime && <HeadlineStartTime time={selectedCourse.startTime} />}
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-[24px] bg-white p-5 shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
        <div className="relative h-[280px] w-full overflow-hidden rounded-[18px] bg-brand-placeholder">
          <img
            src={selectedCourse.imageUrl ?? "https://picsum.photos/seed/main/800/600"}
            alt={selectedCourse.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {locations.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {locations.map((loc, i) => (
              <span
                key={i}
                className="inline-block rounded-full bg-brand-navy px-3 py-0.5 text-[10px] text-white"
              >
                {loc}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <HeadlineCourseTitle title={selectedCourse.name} />
          <HeadlineCourseExplain description={selectedCourse.description} />
        </div>

        {selectedCourse.keywords.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedCourse.keywords.slice(0, 3).map((kw, i) => (
              <span key={i} className="text-[12px] text-brand-navy">
                #{kw.label}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-[1fr_200px] items-start gap-4">
        {/* Left: 코스 상세 일정 */}
        {selectedCourse.places && selectedCourse.places.length > 0 ? (
          <div className="flex flex-col gap-3">
            <p className="text-[12px] text-brand-text-muted">코스 상세 일정</p>
            <div className="flex flex-col gap-3">
              {selectedCourse.places.map((place) => {
                if (place.type === "cafe") return <CafeCard key={place.id} place={place} />;
                if (place.type === "activity") return <ActivityCard key={place.id} place={place} />;
                return <RestaurantCard key={place.id} place={place} />;
              })}
            </div>
          </div>
        ) : (
          <div />
        )}

        {/* Right: 다른 추천 코스 */}
        {alternatives.length > 0 && (
          <div className="flex flex-col gap-3">
            <p className="text-[12px] text-brand-text-muted">다른 추천 코스</p>
            <div className="flex flex-col gap-3">
              {alternatives.map((course, index) => (
                <OtherCourseCard
                  key={course.id}
                  course={course}
                  label={index === 0 ? "Option A" : "Option B"}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
