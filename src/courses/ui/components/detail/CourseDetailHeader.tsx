import { Course } from "@/courses/types/course";
import BestCourseLabel from "./BestCourseLabel";
import HeadlineLocation from "@/courses/ui/components/headline_location/HeadlineLocation";
import HeadlineStartTime from "@/courses/ui/components/headline_start_time/HeadlineStartTime";
import HeadlineCourseTitle from "@/courses/ui/components/headline_course_title/HeadlineCourseTitle";
import { generateCourseTitle } from "@/courses/ui/utils/generateCourseTitle";
import { CourseType } from "@/courses/ui/components/shared/CourseLabel";

function ClockIcon() {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.38205 15.0901C6.36086 15.0901 5.4012 14.8921 4.50305 14.496C3.6049 14.0999 2.82363 13.5623 2.15925 12.8832C1.49486 12.2042 0.968894 11.4056 0.581336 10.4876C0.193779 9.56966 0 8.58881 0 7.54507C0 6.50134 0.193779 5.52048 0.581336 4.60249C0.968894 3.68451 1.49486 2.88599 2.15925 2.20693C2.82363 1.52788 3.6049 0.990291 4.50305 0.594174C5.4012 0.198058 6.36086 0 7.38205 0C8.40323 0 9.3629 0.198058 10.261 0.594174C11.1592 0.990291 11.9405 1.52788 12.6048 2.20693C13.2692 2.88599 13.7952 3.68451 14.1828 4.60249C14.5703 5.52048 14.7641 6.50134 14.7641 7.54507C14.7641 7.8846 14.7456 8.21784 14.7087 8.54479C14.6718 8.87175 14.6103 9.19241 14.5242 9.50679C14.3519 9.30559 14.152 9.13582 13.9244 8.9975C13.6968 8.85917 13.4476 8.76486 13.177 8.71456C13.2139 8.52593 13.2415 8.33416 13.26 8.13925C13.2785 7.94433 13.2877 7.74627 13.2877 7.54507C13.2877 5.86 12.7156 4.43273 11.5714 3.26324C10.4271 2.09376 9.0307 1.50901 7.38205 1.50901C5.73339 1.50901 4.33695 2.09376 3.19273 3.26324C2.04852 4.43273 1.47641 5.86 1.47641 7.54507C1.47641 9.23014 2.04852 10.6574 3.19273 11.8269C4.33695 12.9964 5.73339 13.5811 7.38205 13.5811C8.00952 13.5811 8.60931 13.4868 9.18142 13.2982C9.75353 13.1096 10.2795 12.8455 10.7593 12.506C10.907 12.7197 11.0884 12.9084 11.3038 13.0718C11.5191 13.2353 11.7498 13.3611 11.9958 13.4491C11.3684 13.9647 10.664 14.3671 9.88271 14.6563C9.10145 14.9455 8.26789 15.0901 7.38205 15.0901ZM12.0789 11.7986C11.9005 11.6163 11.8113 11.3931 11.8113 11.129C11.8113 10.8649 11.9005 10.6417 12.0789 10.4594C12.2573 10.277 12.4757 10.1858 12.734 10.1858C12.9924 10.1858 13.2108 10.277 13.3892 10.4594C13.5676 10.6417 13.6568 10.8649 13.6568 11.129C13.6568 11.3931 13.5676 11.6163 13.3892 11.7986C13.2108 11.9809 12.9924 12.0721 12.734 12.0721C12.4757 12.0721 12.2573 11.9809 12.0789 11.7986ZM9.81812 11.0913L6.64384 7.84687V3.77254H8.12025V7.24327L10.8516 10.0349L9.81812 11.0913Z"
        fill="#222222"
        fillOpacity="0.5"
      />
    </svg>
  );
}

interface CourseDetailHeaderProps {
  course: Course;
  label: CourseType;
  headlineLocation?: string;
}

export default function CourseDetailHeader({
  course,
  label,
  headlineLocation,
}: CourseDetailHeaderProps) {
  return (
    <div className="flex flex-col">
      {/* 코스 종류 칩 */}
      <BestCourseLabel label={label} />

      {/* 코스명 */}
      <div className="flex flex-wrap items-baseline gap-[16.48px]">
        {/* 코스명 */}
        <div className="pt-[14px]">
          <HeadlineCourseTitle
            title={
              generateCourseTitle(course.places, course.courseType) ||
              course.name
            }
          />
        </div>
        {/* 코스 시간 */}
        {course.duration && (
          <span className="flex items-center gap-[6.54px] text-[12px] md:text-[14px] text-[#222222]/50 ">
            <ClockIcon />
            {course.duration}
          </span>
        )}
      </div>

      {/* 코스 설명 */}
      <div className="pt-[13px]">
        {course.description && (
          <p className="text-[12px] md:text-[18px] leading-relaxed text-[#222222]/70">
            {course.description}
          </p>
        )}
      </div>
    </div>
  );
}
