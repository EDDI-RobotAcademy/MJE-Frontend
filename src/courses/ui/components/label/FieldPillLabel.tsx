import IconTooltip from "@/courses/ui/components/IconTooltip/IconTooltip";

interface FieldPillLabelProps {
  tooltip?: string;
  children: React.ReactNode;
}

export default function FieldPillLabel({
  tooltip,
  children,
}: FieldPillLabelProps) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="font-bold text-[12px] text-[#222222]/90">
        {children}
      </span>
      {tooltip && <IconTooltip message={tooltip} />}
    </div>
  );
}
