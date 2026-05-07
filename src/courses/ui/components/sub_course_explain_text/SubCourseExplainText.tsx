interface SubCourseExplainTextProps {
  name: string;
  description: string;
}

export default function SubCourseExplainText({ name, description }: SubCourseExplainTextProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <h4
        className="text-base md:text-lg lg:text-xl font-medium text-black transition-colors group-hover:text-[#2a4874] line-clamp-2"
        style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
      >
        {name}
      </h4>
      <p className="text-[10px] leading-relaxed text-[#6a7282] line-clamp-3">{description}</p>
    </div>
  );
}
