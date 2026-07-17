interface CourseCreationButtonProps {
  onClick: () => void;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function CourseCreationButton({
  onClick,
  className = "",
  children,
  isLoading = false,
  disabled = false,
}: CourseCreationButtonProps) {
  const isComplete = !isLoading && !disabled;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`
        relative
        flex
        h-12
        w-full
        items-center
        justify-center
        overflow-hidden
        transition-all
        duration-300
        
        disabled:cursor-not-allowed
        disabled:opacity-70

        ${isComplete ? "md:mx-auto md:h-[44px]" : "md:h-[43px]"}

        ${className}
      `}
      style={{
        borderRadius: isComplete ? "25px" : "9999px",
        background: isComplete
          ? "radial-gradient(68.32% 145.43% at 54.1% 47.19%, rgba(191, 219, 254, 0.74) 0%, rgba(191, 219, 254, 0.074) 100%)"
          : "#FAFAF8",
        boxShadow: isComplete ? "3px 5px 8px rgba(0, 0, 0, 0.15)" : undefined,
      }}
    >
      {isComplete && (
        <>
          {/* 반투명 틴트 레이어 (Rectangle 2713) */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              borderRadius: "25px",
              background: "rgba(250, 250, 248, 0.1)",
            }}
          />

          {/* 유리 재질 라이트 하이라이트 (Glass: 135deg, 80%) */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              borderRadius: "25px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,.8) 0%, rgba(255,255,255,0) 55%)",
            }}
          />
        </>
      )}

      <span className="relative z-10 flex items-center gap-2">
        <span
          className="whitespace-nowrap text-[13px] md:text-[14px]"
          style={{
            fontFamily: "'Prompt', sans-serif",
            color: "#222222",
            fontWeight: 500,
          }}
        >
          {children}
        </span>
      </span>
    </button>
  );
}
