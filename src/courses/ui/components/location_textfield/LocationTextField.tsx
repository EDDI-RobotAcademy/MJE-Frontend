interface LocationTextFieldProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

export default function LocationTextField({
  id,
  value,
  onChange,
  error,
}: LocationTextFieldProps) {
  return (
    <input
      id={id}
      type="text"
      placeholder="어디로 갈까요?"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors
        ${error
          ? "border-[#FF4D4F] focus:border-[#FF4D4F] focus:ring-1 focus:ring-[#FF4D4F]"
          : "border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
        }`}
    />
  );
}
