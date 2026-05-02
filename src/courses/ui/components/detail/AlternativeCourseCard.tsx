import { Course } from "@/courses/types/course";

interface AlternativeCourseCardProps {
  course: Course;
  label: string;
}

export default function AlternativeCourseCard({ course, label }: AlternativeCourseCardProps) {
  const locations = course.locations ?? (course.location ? [course.location] : []);

  return (
    <div className="flex flex-col gap-2 rounded-[20px] bg-white p-4 shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
      <span className="text-[11px] font-medium text-brand-blue-mid">{label}</span>
      <h3
        className="text-[15px] font-semibold text-brand-text-dark"
        style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
      >
        {course.name}
      </h3>
      <p className="line-clamp-2 text-[12px] leading-relaxed text-brand-text-muted">
        {course.description}
      </p>
      {locations.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {locations.map((loc, i) => (
            <span
              key={i}
              className="inline-block rounded-full bg-brand-navy px-2.5 py-0.5 text-[10px] text-white"
            >
              {loc}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
