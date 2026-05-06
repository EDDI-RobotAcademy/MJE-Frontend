import CourseLabel, { CourseType } from "@/courses/ui/components/shared/CourseLabel";

interface BestCourseLabelProps {
  label: CourseType;
}

export default function BestCourseLabel({ label }: BestCourseLabelProps) {
  return <CourseLabel type={label} />;
}
