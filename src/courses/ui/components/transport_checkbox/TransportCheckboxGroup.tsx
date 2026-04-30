import TransportCheckbox from "./TransportCheckbox";
import type { Transport } from "@/courses/types/search";

function CarIcon({ active }: { active: boolean }) {
  const color = active ? "#2a4874" : "#b0b0b0";
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" fill={color} />
    </svg>
  );
}

function WalkIcon({ active }: { active: boolean }) {
  const color = active ? "#2a4874" : "#b0b0b0";
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" fill={color} />
    </svg>
  );
}

function TransitIcon({ active }: { active: boolean }) {
  const color = active ? "#2a4874" : "#b0b0b0";
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M12 2C8 2 4 2.5 4 6v9.5C4 17.43 5.57 19 7.5 19L6 20.5V21h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm0 2c3.54 0 5.5.48 5.5 2S15.54 8 12 8 6.5 7.52 6.5 6 8.46 4 12 4zM7.5 10h3v3h-3v-3zm5.5 0h3v3h-3v-3zm-5.5 5c.83 0 1.5.67 1.5 1.5S8.33 18 7.5 18 6 17.33 6 16.5 6.67 15 7.5 15zm9 0c.83 0 1.5.67 1.5 1.5S17.33 18 16.5 18 15 17.33 15 16.5s.67-1.5 1.5-1.5z" fill={color} />
    </svg>
  );
}

const TRANSPORT_OPTIONS: { value: Transport; label: string; renderIcon: (active: boolean) => React.ReactNode }[] = [
  { value: "car", label: "자차 이동", renderIcon: (active) => <CarIcon active={active} /> },
  { value: "walk", label: "도보 이동", renderIcon: (active) => <WalkIcon active={active} /> },
  { value: "transit", label: "대중교통", renderIcon: (active) => <TransitIcon active={active} /> },
];

interface TransportCheckboxGroupProps {
  value: Transport | null;
  onChange: (value: Transport) => void;
  error?: boolean;
}

export default function TransportCheckboxGroup({
  value,
  onChange,
  error,
}: TransportCheckboxGroupProps) {
  return (
    <div
      role="group"
      aria-label="이동수단 선택"
      className={`flex gap-3 ${error ? "outline outline-2 outline-[#FF4D4F] rounded-xl" : ""}`}
    >
      {TRANSPORT_OPTIONS.map((option) => (
        <TransportCheckbox
          key={option.value}
          value={option.value}
          label={option.label}
          icon={option.renderIcon(value === option.value)}
          checked={value === option.value}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
