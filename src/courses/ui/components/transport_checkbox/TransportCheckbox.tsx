import type { Transport } from "@/courses/types/search";

interface TransportCheckboxProps {
  value: Transport;
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  error?: boolean;
  onChange: (value: Transport) => void;
}

export default function TransportCheckbox({
  value,
  label,
  icon,
  checked,
  error,
  onChange,
}: TransportCheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(value)}
      className={`flex h-[43.675px] w-full lg:w-[115px] items-center justify-center gap-[5px] rounded-full border bg-white text-xs transition-colors ${
        checked
          ? "border-[#2a4874] text-[#2a4874]"
          : error
          ? "border-dashed border-[#FF4D4F] text-[#b0b0b0]"
          : "border-[#d0d0d0] text-[#b0b0b0] hover:border-[#2a4874] hover:text-[#2a4874]"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
