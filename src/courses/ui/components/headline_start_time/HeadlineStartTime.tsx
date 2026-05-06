function ClockIcon() {
  return (
    <svg
      width="13"
      height="13"
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

interface HeadlineStartTimeProps {
  time: string;
}

export default function HeadlineStartTime({ time }: HeadlineStartTimeProps) {
  return (
    <span className="inline-flex items-center gap-[5px] text-[12px] text-[#757575]">
      <ClockIcon />
      {time} 시작
    </span>
  );
}
