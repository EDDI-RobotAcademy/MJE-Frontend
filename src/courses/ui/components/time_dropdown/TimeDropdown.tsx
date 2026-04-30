interface TimeDropdownProps {
  id?: string;
  value: string | null;
  onChange: (value: string) => void;
  error?: boolean;
}

function CalendarIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M20 3h-1V1h-2v2H7V1H5v2H4C2.9 5 2 5.9 2 7v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V7h16v1z" fill="#2a4874" />
      <rect x="7" y="13" width="4" height="3" rx="0.5" fill="#2a4874" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M1 1L5.5 6L10 1" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function generateTimeOptions(): string[] {
  const options: string[] = [];
  for (let h = 0; h <= 23; h++) {
    options.push(`${String(h).padStart(2, "0")}:00`);
    options.push(`${String(h).padStart(2, "0")}:30`);
  }
  options.push("24:00");
  return options;
}

const TIME_OPTIONS = generateTimeOptions();

export default function TimeDropdown({ id, value, onChange, error }: TimeDropdownProps) {
  return (
    <div
      className={`flex h-[46px] items-center rounded-full border px-3.5 gap-2 ${
        error ? "border-[#FF4D4F]" : "border-[#d0d0d0]"
      }`}
    >
      <CalendarIcon />
      <select
        id={id}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent text-xs text-gray-900 outline-none cursor-pointer appearance-none min-w-0"
      >
        <option value="" disabled className="text-[#b0b0b0]">
          언제 만날까요?
        </option>
        {TIME_OPTIONS.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <ChevronDownIcon />
    </div>
  );
}
