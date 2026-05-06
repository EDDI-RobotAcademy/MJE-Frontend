function MapPinIcon() {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

interface HeadlineLocationProps {
  location: string;
}

export default function HeadlineLocation({ location }: HeadlineLocationProps) {
  return (
    <span className="inline-flex items-center gap-[5px] text-[12px] text-[#757575]">
      <MapPinIcon />
      {location}
    </span>
  );
}
