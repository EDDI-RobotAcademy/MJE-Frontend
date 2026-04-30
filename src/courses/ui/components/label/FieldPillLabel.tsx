import IconTooltip from "@/courses/ui/components/IconTooltip/IconTooltip";

interface FieldPillLabelProps {
  tooltip?: string;
  children: React.ReactNode;
}

export default function FieldPillLabel({ tooltip, children }: FieldPillLabelProps) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="inline-flex items-center rounded-full bg-[#2a4874] px-4 py-[5px] text-xs text-white">
        {children}
      </span>
      {tooltip && <IconTooltip message={tooltip} />}
    </div>
  );
}
