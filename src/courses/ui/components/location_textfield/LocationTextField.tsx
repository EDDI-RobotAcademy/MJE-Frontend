interface LocationTextFieldProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

function MapPinHeartIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#2a4874" />
      <path d="M12 11.5c-.48-1-.95-1.1-1.5-.6-.55.5-.55 1.35 0 1.85L12 14l1.5-1.25c.55-.5.55-1.35 0-1.85-.55-.5-1.02-.4-1.5.6z" fill="white" />
    </svg>
  );
}

export default function LocationTextField({
  id,
  value,
  onChange,
  error,
}: LocationTextFieldProps) {
  return (
    <div
      className={`flex h-[46px] items-center rounded-full border px-3.5 gap-2 ${
        error ? "border-[#FF4D4F]" : "border-[#d0d0d0]"
      }`}
    >
      <MapPinHeartIcon />
      <input
        id={id}
        type="text"
        placeholder="어디로 갈까요? (ex. 성수동, 홍대역)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent text-xs text-gray-900 placeholder-[#b0b0b0] outline-none min-w-0"
      />
    </div>
  );
}
