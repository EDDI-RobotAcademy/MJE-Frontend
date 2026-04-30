interface CourseCreationButtonProps {
  onClick: () => void;
  isShaking: boolean;
}

export default function CourseCreationButton({
  onClick,
  isShaking,
}: CourseCreationButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white
        transition-all duration-200
        hover:bg-gray-700 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg
        ${isShaking ? "animate-shake" : ""}`}
    >
      Course Create
    </button>
  );
}
