interface CafeNameLabelProps {
  name: string;
  description: string;
}

export default function CafeNameLabel({ name, description }: CafeNameLabelProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <span
        className="text-[15px] font-semibold text-brand-text-dark"
        style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
      >
        {name}
      </span>
      <span className="line-clamp-1 text-[11px] text-brand-text-muted">{description}</span>
    </div>
  );
}
