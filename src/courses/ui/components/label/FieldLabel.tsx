interface FieldLabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}

export default function FieldLabel({ htmlFor, children }: FieldLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
}
