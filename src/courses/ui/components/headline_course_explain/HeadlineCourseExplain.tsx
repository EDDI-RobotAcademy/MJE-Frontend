const MAX_CHARS = 40;

function truncateToSentence(text: string): string {
  const firstLine = text.split("\n")[0].trim();
  if (firstLine.length <= MAX_CHARS) return firstLine;
  return firstLine.slice(0, MAX_CHARS) + "…";
}

interface HeadlineCourseExplainProps {
  description: string;
}

export default function HeadlineCourseExplain({ description }: HeadlineCourseExplainProps) {
  const displayText = truncateToSentence(description);

  return (
    <p
      className="line-clamp-1 text-[13px] leading-relaxed text-brand-text-muted"
      title={description}
    >
      {displayText}
    </p>
  );
}
