export type CourseType = "Best Course !" | "Option A" | "Option B";

export function labelFromCourseType(courseType?: string): CourseType {
  if (!courseType) return "Best Course !";
  const t = courseType.toUpperCase().replace(/[-\s]/g, "_");
  if (
    t.includes("OPTION_A") ||
    t.includes("OPTIONAL_A") ||
    t === "A" ||
    t === "SUB_A"
  )
    return "Option A";
  if (
    t.includes("OPTION_B") ||
    t.includes("OPTIONAL_B") ||
    t === "B" ||
    t === "SUB_B"
  )
    return "Option B";
  return "Best Course !";
}

interface CourseLabelProps {
  type: CourseType;
}

export const LABEL_TEXT: Record<CourseType, string> = {
  "Best Course !": "Today Pick!",
  "Option A": "Course A",
  "Option B": "Course B",
};

export default function CourseLabel({ type }: CourseLabelProps) {
  return (
    <div className="inline-flex w-fit items-center rounded-full bg-[#FAFAF8] gap-[7px] px-[25px] py-[7px] shadow-[0px_0px_2.93px_2.93px_rgba(191,219,254,0.1)]">
      <span className="text-[19px] font-semibold text-[#05A66B]">
        {LABEL_TEXT[type]}
      </span>
      <span className="text-[15px] font-bold text-[#222222]">상세 일정</span>
    </div>
  );
}
