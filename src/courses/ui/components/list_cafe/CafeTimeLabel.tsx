function ClockIcon() {
  return (
    <svg
      width="11"
      height="11"
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

interface CafeTimeLabelProps {
  time: string;
}

export default function CafeTimeLabel({ time }: CafeTimeLabelProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#fff0ec] px-2.5 py-0.5 text-[11px] text-[#d4714a]">
      <ClockIcon />
      {time}
    </span>
  );
}
