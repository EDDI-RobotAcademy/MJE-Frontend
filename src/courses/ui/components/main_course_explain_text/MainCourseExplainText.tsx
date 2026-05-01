interface MainCourseExplainTextProps {
  name: string;
  description: string;
}

export default function MainCourseExplainText({ name, description }: MainCourseExplainTextProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3
        className="text-xl font-bold text-[#2a4874] group-hover:text-[#1a3254] transition-colors"
        style={{ fontFamily: "Prompt, sans-serif" }}
      >
        {name}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{description}</p>
    </div>
  );
}
