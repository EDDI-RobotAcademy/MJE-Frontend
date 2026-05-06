export type CourseType = "Best Course !" | "Option A" | "Option B";

export function labelFromCourseType(courseType?: string): CourseType {
  if (!courseType) return "Best Course !";
  const t = courseType.toUpperCase().replace(/[-\s]/g, "_");
  if (t.includes("OPTION_A") || t === "A" || t === "SUB_A") return "Option A";
  if (t.includes("OPTION_B") || t === "B" || t === "SUB_B") return "Option B";
  return "Best Course !";
}

interface CourseLabelProps {
  type: CourseType;
}

export default function CourseLabel({ type }: CourseLabelProps) {
  const isBest = type === "Best Course !";

  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-4 py-1.5 text-[13px] font-semibold ${
        isBest ? "bg-[#d5e6f6] text-black" : "bg-[#333333] text-white"
      }`}
    >
      {type}
    </span>
  );
}
