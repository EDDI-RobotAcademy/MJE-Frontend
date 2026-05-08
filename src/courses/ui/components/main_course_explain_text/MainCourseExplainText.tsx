interface MainCourseExplainTextProps {
  name: string;
  description: string;
}

export default function MainCourseExplainText({ name, description }: MainCourseExplainTextProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3
        className="text-lg md:text-xl lg:text-2xl font-medium text-black transition-colors group-hover:text-[#2a4874]"
        style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
      >
        {name}
      </h3>
      <p className="text-xs leading-relaxed text-[#6a7282] line-clamp-2">{description}</p>
    </div>
  );
}
