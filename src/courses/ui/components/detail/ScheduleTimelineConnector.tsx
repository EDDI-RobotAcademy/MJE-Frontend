export default function ScheduleTimelineConnector() {
  return (
    <div className="flex items-center justify-center py-[4px]">
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
        <line x1="14" y1="0" x2="14" y2="11" stroke="#c0c0c0" strokeWidth="1.5" />
        <polyline
          points="9,8 14,13 19,8"
          stroke="#c0c0c0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
