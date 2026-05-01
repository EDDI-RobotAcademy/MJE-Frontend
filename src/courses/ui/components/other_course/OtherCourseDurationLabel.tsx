function TimerIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

interface OtherCourseDurationLabelProps {
  duration: string;
}

export default function OtherCourseDurationLabel({ duration }: OtherCourseDurationLabelProps) {
  return (
    <span className="inline-flex items-center gap-0.5 rounded-full bg-brand-blue-light px-2 py-0.5 text-[9px] text-brand-navy">
      <TimerIcon />
      {duration}
    </span>
  );
}
