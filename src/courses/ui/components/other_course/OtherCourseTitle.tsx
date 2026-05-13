interface OtherCourseTitleProps {
  title: string;
}

export default function OtherCourseTitle({ title }: OtherCourseTitleProps) {
  return (
    <h3
      className="line-clamp-1 text-[14px] font-semibold text-brand-text-dark"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
      title={title}
    >
      {title}
    </h3>
  );
}
