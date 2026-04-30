import type { Transport } from "@/courses/types/search";

interface TransportCheckboxProps {
  value: Transport;
  label: string;
  checked: boolean;
  onChange: (value: Transport) => void;
}

export default function TransportCheckbox({
  value,
  label,
  checked,
  onChange,
}: TransportCheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(value)}
      className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
        checked
          ? "border-gray-900 bg-gray-900 text-white"
          : "border-gray-300 bg-white text-gray-600 hover:border-gray-500"
      }`}
    >
      {label}
    </button>
  );
}
