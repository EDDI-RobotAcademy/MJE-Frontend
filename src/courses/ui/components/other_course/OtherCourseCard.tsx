"use client";

import { useState } from "react";
import { Course } from "@/courses/types/course";
import OtherCourseOptionLabel from "./OtherCourseOptionLabel";
import OtherCourseTitle from "./OtherCourseTitle";
import OtherCourseRoute from "./OtherCourseRoute";
import OtherCourseLocationLabel from "./OtherCourseLocationLabel";
import OtherCourseDurationLabel from "./OtherCourseDurationLabel";

interface OtherCourseCardProps {
  course: Course;
  label: string;
}

function CourseImage({ src, alt }: { src?: string; alt: string }) {
  const [errored, setErrored] = useState(false);
  const imgSrc = errored || !src ? "https://picsum.photos/seed/other/400/300" : src;

  return (
    <div className="relative h-[90px] w-full overflow-hidden rounded-[14px] bg-brand-placeholder">
      <img
        src={imgSrc}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

export default function OtherCourseCard({ course, label }: OtherCourseCardProps) {
  const locations = course.locations ?? (course.location ? [course.location] : []);

  return (
    <div className="flex flex-col gap-2 rounded-[20px] bg-white p-3 shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
      <CourseImage src={course.imageUrl} alt={course.name} />

      <div className="flex flex-col gap-1.5 px-0.5">
        <OtherCourseOptionLabel label={label} />
        <OtherCourseTitle title={course.name} />
        <OtherCourseRoute locations={locations} />

        <div className="flex flex-wrap gap-1">
          {locations.map((loc, i) => (
            <OtherCourseLocationLabel key={i} location={loc} />
          ))}
          {course.duration && <OtherCourseDurationLabel duration={course.duration} />}
        </div>
      </div>
    </div>
  );
}
