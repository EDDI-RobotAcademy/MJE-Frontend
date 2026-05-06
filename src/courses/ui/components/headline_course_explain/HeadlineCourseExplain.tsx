const MAX_CHARS = 40;

function truncateToSentence(text: string): string {
  const firstLine = text.split("\n")[0].trim();
  if (firstLine.length <= MAX_CHARS) return firstLine;
  return firstLine.slice(0, MAX_CHARS) + "…";
}

function DotGrid() {
  const positions: [number, number][] = [
    [3, 0], [0, 3], [3, 3], [3, 6],
    [6, 3], [6, 6], [6, 9], [9, 3],
    [9, 6], [12, 3], [9, 0],
  ];
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true" className="shrink-0">
      {positions.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="3" height="3" fill="#fcad9e" />
      ))}
    </svg>
  );
}

interface HeadlineCourseExplainProps {
  description: string;
}

export default function HeadlineCourseExplain({ description }: HeadlineCourseExplainProps) {
  const displayText = truncateToSentence(description);

  return (
    <div className="flex items-center gap-[10px]">
      <DotGrid />
      <p
        className="line-clamp-1 text-[13px] leading-relaxed text-brand-text-muted"
        title={description}
      >
        {displayText}
      </p>
    </div>
  );
}
