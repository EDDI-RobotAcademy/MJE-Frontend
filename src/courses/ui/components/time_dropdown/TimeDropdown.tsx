interface TimeDropdownProps {
  id?: string;
  value: string | null;
  onChange: (value: string) => void;
  error?: boolean;
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
    <select
      id={id}
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 outline-none bg-white appearance-none cursor-pointer transition-colors
        ${error
          ? "border-[#FF4D4F] focus:border-[#FF4D4F] focus:ring-1 focus:ring-[#FF4D4F]"
          : "border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
        }`}
    >
      <option value="" disabled>
        언제 만날까요?
      </option>
      {TIME_OPTIONS.map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </select>
  );
}
