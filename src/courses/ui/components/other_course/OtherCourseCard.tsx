"use client";

import { useState } from "react";
import { Course } from "@/courses/types/course";

interface OtherCourseCardProps {
  course: Course;
  label: string;
}

function CourseImage({ src, alt }: { src?: string; alt: string }) {
  const [errored, setErrored] = useState(false);
  const imgSrc = errored || !src ? "https://picsum.photos/seed/other/400/300" : src;

  return (
    <div className="relative h-[100px] w-full overflow-hidden rounded-[14px] bg-brand-placeholder">
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
        <span className="text-[10px] font-medium text-brand-blue-mid">{label}</span>
        <h3
          className="line-clamp-1 text-[13px] font-semibold text-brand-text-dark"
          style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
        >
          {course.name}
        </h3>
        <p className="line-clamp-2 text-[11px] leading-relaxed text-brand-text-muted">
          {course.description}
        </p>
        {locations.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {locations.map((loc, i) => (
              <span
                key={i}
                className="inline-block rounded-full bg-brand-navy px-2 py-0.5 text-[9px] text-white"
              >
                {loc}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
