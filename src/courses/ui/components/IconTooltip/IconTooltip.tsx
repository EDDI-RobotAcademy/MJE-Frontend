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
        className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 text-[10px] font-bold text-white hover:bg-gray-500 transition-colors"
      >
        i
      </button>
      <span
        role="tooltip"
        className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 z-10 w-max max-w-[200px] rounded-lg bg-gray-800 px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {message}
        <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800" />
      </span>
    </span>
  );
}
