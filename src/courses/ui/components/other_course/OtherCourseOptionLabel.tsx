import CourseLabel, { CourseType } from "@/courses/ui/components/shared/CourseLabel";

interface OtherCourseOptionLabelProps {
  label: CourseType;
}

export default function OtherCourseOptionLabel({ label }: OtherCourseOptionLabelProps) {
  return <CourseLabel type={label} />;
}
