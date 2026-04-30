interface LocationTextFieldProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function LocationTextField({
  id,
  value,
  onChange,
}: LocationTextFieldProps) {
  return (
    <input
      id={id}
      type="text"
      placeholder="어디로 갈까요?"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
    />
  );
}
