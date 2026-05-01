interface OtherCourseOptionLabelProps {
  label: string;
}

export default function OtherCourseOptionLabel({ label }: OtherCourseOptionLabelProps) {
  return (
    <span className="inline-block rounded-full bg-brand-blue-soft px-2.5 py-0.5 text-[10px] font-medium text-brand-navy">
      {label}
    </span>
  );
}
