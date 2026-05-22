interface CourseCreationButtonProps {
  onClick: () => void;
  isShaking: boolean;
  isLoading?: boolean;
}

function WandStarsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M7.5 5.6L10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a1 1 0 00-1.41 0L1.29 18.96a1 1 0 000 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05a1 1 0 000-1.41l-2.33-2.35zm-1.03 5.49l-2.12-2.12 2.44-2.44 2.12 2.12-2.44 2.44z" fill="#2A4874" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="white"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="white"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export default function CourseCreationButton({
  onClick,
  isShaking,
  isLoading = false,
}: CourseCreationButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className={`relative flex w-full items-center justify-center gap-2 rounded-full h-12 md:h-[43px] overflow-hidden transition-all duration-200 ease-out hover:scale-[1.02] hover:-translate-y-[2px] active:scale-[0.98] active:translate-y-0 shadow-[3px_5px_8px_0px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.75)] hover:shadow-[3px_10px_18px_0px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.75)] disabled:cursor-not-allowed disabled:opacity-70 ${
        isShaking ? "animate-shake" : ""
      }`}
      style={{
        background: "linear-gradient(135deg, #6e9dd9 0%, #8aaee6 35%, #b8d4f0 65%, #d5e6f6 100%)",
        border: "1px solid rgba(255,255,255,0.8)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0.0) 100%)",
          backdropFilter: "blur(2px)",
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {isLoading ? <Spinner /> : <WandStarsIcon />}
        <span
          className="text-[12px] md:text-[14px] whitespace-nowrap"
          style={{ fontFamily: "'Prompt', sans-serif", color: "#2A4874" }}
        >
          {isLoading ? "코스 생성 중..." : "나만의 코스 추천받기 !"}
        </span>
      </span>
    </button>
  );
}
