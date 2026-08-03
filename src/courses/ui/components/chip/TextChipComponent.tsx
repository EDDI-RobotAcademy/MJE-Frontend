interface TextChipComponentProps {
  children: React.ReactNode;
}

export default function TextChipComponent({
  children,
}: TextChipComponentProps) {
  return (
    <div
      className="relative inline-flex items-center gap-[6px] rounded-full bg-white px-[16px] py-[7px] text-[12px] md:text-[14px] font-bold text-[#05A66B]"
      style={{
        fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
      }}
    >
      <span>{children}</span>
    </div>
  );
}
