interface SubCourseExplainTextProps {
  name: string;
  description: string;
}

export default function SubCourseExplainText({ name, description }: SubCourseExplainTextProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <h4 className="text-sm font-semibold text-gray-800 group-hover:text-[#2a4874] transition-colors line-clamp-2">
        {name}
      </h4>
      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{description}</p>
    </div>
  );
}
