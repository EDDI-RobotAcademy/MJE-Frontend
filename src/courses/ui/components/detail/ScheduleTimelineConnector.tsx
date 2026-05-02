interface ScheduleTimelineConnectorProps {
  fromName: string;
  toName: string;
  walkingTime?: string;
}

function ArrowRight() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function ScheduleTimelineConnector({
  fromName,
  toName,
  walkingTime,
}: ScheduleTimelineConnectorProps) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1 text-brand-text-muted">
      <span className="line-clamp-1 max-w-[80px] text-[10px]">{fromName}</span>
      <ArrowRight />
      <span className="line-clamp-1 max-w-[80px] text-[10px]">{toName}</span>
      {walkingTime && (
        <>
          <span className="text-[10px]">·</span>
          <span className="text-[10px] font-medium text-brand-navy">{walkingTime}</span>
        </>
      )}
    </div>
  );
}
