const MAX_CHARS = 30;

function truncateToSentence(text: string): string {
  const firstLine = text.split("\n")[0].trim();
  if (firstLine.length <= MAX_CHARS) return firstLine;
  return firstLine.slice(0, MAX_CHARS) + "…";
}

interface HeadlineCourseTitleProps {
  title: string;
}

export default function HeadlineCourseTitle({ title }: HeadlineCourseTitleProps) {
  const displayTitle = truncateToSentence(title);

  return (
    <h2
      className="line-clamp-1 text-[34px] font-bold leading-tight text-brand-text-dark"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
      title={title}
    >
      {displayTitle}
    </h2>
  );
}
