import TransportCheckbox from "./TransportCheckbox";
import type { Transport } from "@/courses/types/search";

const TRANSPORT_OPTIONS: { value: Transport; label: string }[] = [
  { value: "walk", label: "도보" },
  { value: "transit", label: "대중교통" },
  { value: "car", label: "자동차" },
];

interface TransportCheckboxGroupProps {
  value: Transport | null;
  onChange: (value: Transport) => void;
}

export default function TransportCheckboxGroup({
  value,
  onChange,
}: TransportCheckboxGroupProps) {
  return (
    <div role="group" aria-label="이동수단 선택" className="flex gap-2">
      {TRANSPORT_OPTIONS.map((option) => (
        <TransportCheckbox
          key={option.value}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
