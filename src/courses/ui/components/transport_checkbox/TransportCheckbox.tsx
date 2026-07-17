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
      className={`flex h-12 md:h-[43.675px] w-full lg:w-[115px] items-center justify-center gap-[10px] rounded-[5px] text-[10px] md:text-xs transition-colors ${
        checked
          ? "bg-[#FAFAF8] text-[#222222]"
          : error
            ? "text-[#b0b0b0]"
            : "text-[#222222]/40 bg-[#ffffff]/40"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
