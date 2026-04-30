"use client";

interface IconTooltipProps {
  message: string;
}

export default function IconTooltip({ message }: IconTooltipProps) {
  return (
    <span className="relative inline-flex items-center group">
      <button
        type="button"
        aria-label="도움말"
        className="flex h-4 w-4 items-center justify-center rounded-full bg-[#b0baca] text-[10px] font-medium text-white hover:bg-[#8a96aa] transition-colors"
        style={{ fontFamily: "'Prompt', sans-serif" }}
      >
        i
      </button>

      {/* Glassmorphism tooltip — appears above the button */}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-[10px] z-20 w-max max-w-[240px] rounded-xl px-[12px] py-[8px] text-[11px] leading-[1.6] text-[#333333] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: "rgba(255, 255, 255, 0.82)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.65)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
          whiteSpace: "normal",
        }}
      >
        {message}
        {/* Tail pointing down toward button */}
        <span
          className="absolute top-full left-1/2 -translate-x-1/2"
          style={{
            width: 0,
            height: 0,
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "5px solid rgba(255, 255, 255, 0.82)",
          }}
        />
      </span>
    </span>
  );
}
