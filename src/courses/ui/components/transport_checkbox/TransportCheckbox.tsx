import type { Transport } from "@/courses/types/search";

interface TransportCheckboxProps {
  value: Transport;
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: (value: Transport) => void;
}

export default function TransportCheckbox({
  value,
  label,
  icon,
  checked,
  onChange,
}: TransportCheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(value)}
      className={`flex h-[43.675px] w-[115px] items-center justify-center gap-[5px] rounded-full border bg-white text-xs transition-colors ${
        checked
          ? "border-[#2a4874] text-[#2a4874]"
          : "border-[#d0d0d0] text-[#b0b0b0] hover:border-[#2a4874] hover:text-[#2a4874]"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
