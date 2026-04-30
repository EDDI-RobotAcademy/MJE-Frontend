import IconTooltip from "@/courses/ui/components/IconTooltip/IconTooltip";

interface FieldLabelProps {
  htmlFor?: string;
  tooltip?: string;
  children: React.ReactNode;
}

export default function FieldLabel({ htmlFor, tooltip, children }: FieldLabelProps) {
  return (
    <div className="flex items-center gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-gray-700"
      >
        {children}
      </label>
      {tooltip && <IconTooltip message={tooltip} />}
    </div>
  );
}
