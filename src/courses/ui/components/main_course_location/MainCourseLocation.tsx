function MapPinIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="#6b7280"
      />
      <circle cx="12" cy="9" r="2.5" fill="white" />
    </svg>
  );
}

interface MainCourseLocationProps {
  location: string;
}

export default function MainCourseLocation({ location }: MainCourseLocationProps) {
  return (
    <div className="flex items-center gap-1">
      <MapPinIcon />
      <span className="text-xs text-gray-500">{location}</span>
    </div>
  );
}
