function MapPinIcon() {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

interface ActivityLocationLabelProps {
  location: string;
}

export default function ActivityLocationLabel({ location }: ActivityLocationLabelProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#2d7a5b] px-2.5 py-0.5 text-[11px] text-white">
      <MapPinIcon />
      {location}
    </span>
  );
}
