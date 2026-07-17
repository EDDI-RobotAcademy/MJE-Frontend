"use client";

import { useState, useRef, useEffect } from "react";

interface TimeDropdownProps {
  id?: string;
  value: string | null;
  onChange: (value: string) => void;
  error?: boolean;
  onClearError?: () => void;
}

const ITEM_HEIGHT = 44;
const VISIBLE_COUNT = 5;

function generateTimeOptions(): string[] {
  const opts: string[] = [];
  for (let h = 0; h <= 23; h++) {
    opts.push(`${String(h).padStart(2, "0")}:00`);
  }
  return opts;
}

const TIME_OPTIONS = generateTimeOptions();

function toDisplay(time: string): string {
  const [h, m] = time.split(":");
  return `${parseInt(h, 10)}:${m}`;
}

function getOpacity(dist: number): number {
  if (dist === 0) return 1;
  if (dist === 1) return 0.5;
  if (dist === 2) return 0.22;
  return 0.1;
}

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.88375 9.07125C2.75611 8.94361 2.69229 8.79382 2.69229 8.62187C2.69229 8.44979 2.75611 8.29993 2.88375 8.17229C3.01153 8.04465 3.16139 7.98083 3.33333 7.98083C3.50528 7.98083 3.65514 8.04465 3.78292 8.17229C3.91056 8.29993 3.97437 8.44979 3.97437 8.62187C3.97437 8.79382 3.91056 8.94361 3.78292 9.07125C3.65514 9.19889 3.50528 9.26271 3.33333 9.26271C3.16139 9.26271 3.01153 9.19889 2.88375 9.07125ZM6.21708 9.07125C6.08944 8.94361 6.02562 8.79382 6.02562 8.62187C6.02562 8.44979 6.08944 8.29993 6.21708 8.17229C6.34486 8.04465 6.49472 7.98083 6.66667 7.98083C6.83861 7.98083 6.98847 8.04465 7.11625 8.17229C7.24389 8.29993 7.30771 8.44979 7.30771 8.62187C7.30771 8.79382 7.24389 8.94361 7.11625 9.07125C6.98847 9.19889 6.83861 9.26271 6.66667 9.26271C6.49472 9.26271 6.34486 9.19889 6.21708 9.07125ZM9.55042 9.07125C9.42278 8.94361 9.35896 8.79382 9.35896 8.62187C9.35896 8.44979 9.42278 8.29993 9.55042 8.17229C9.67819 8.04465 9.82806 7.98083 10 7.98083C10.1719 7.98083 10.3218 8.04465 10.4496 8.17229C10.5772 8.29993 10.641 8.44979 10.641 8.62187C10.641 8.79382 10.5772 8.94361 10.4496 9.07125C10.3218 9.19889 10.1719 9.26271 10 9.26271C9.82806 9.26271 9.67819 9.19889 9.55042 9.07125ZM1.34625 15.1923C0.962639 15.1923 0.642361 15.0638 0.385417 14.8069C0.128472 14.5499 0 14.2297 0 13.846V3.20521C0 2.8216 0.128472 2.50132 0.385417 2.24437C0.642361 1.98743 0.962639 1.85896 1.34625 1.85896H2.82042V0H3.71792V1.85896H9.67958V0H10.5129V1.85896H11.9871C12.3707 1.85896 12.691 1.98743 12.9479 2.24437C13.2049 2.50132 13.3333 2.8216 13.3333 3.20521V13.846C13.3333 14.2297 13.2049 14.5499 12.9479 14.8069C12.691 15.0638 12.3707 15.1923 11.9871 15.1923H1.34625ZM1.34625 14.359H11.9871C12.1154 14.359 12.233 14.3056 12.3398 14.1987C12.4466 14.0919 12.5 13.9744 12.5 13.846V6.53854H0.833333V13.846C0.833333 13.9744 0.886736 14.0919 0.993542 14.1987C1.10035 14.3056 1.21792 14.359 1.34625 14.359ZM0.833333 5.705H12.5V3.20521C12.5 3.07687 12.4466 2.95931 12.3398 2.8525C12.233 2.74569 12.1154 2.69229 11.9871 2.69229H1.34625C1.21792 2.69229 1.10035 2.74569 0.993542 2.8525C0.886736 2.95931 0.833333 3.07687 0.833333 3.20521V5.705Z"
        fill="#222222"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.39836 4.98484L0 0.586489L0.586489 0L4.39836 3.8071L8.21022 0L8.79671 0.586489L4.39836 4.98484Z"
        fill="#222222"
      />
    </svg>
  );
}

export default function TimeDropdown({
  id,
  value,
  onChange,
  error,
  onClearError,
}: TimeDropdownProps) {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedIndex = value ? TIME_OPTIONS.indexOf(value) : -1;

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Scroll to selected item when dropdown opens
  useEffect(() => {
    if (!open || !listRef.current) return;
    const targetIndex = selectedIndex >= 0 ? selectedIndex : 9; // default to 09:00
    const scrollTop = Math.max(0, (targetIndex - 2) * ITEM_HEIGHT);
    listRef.current.scrollTop = scrollTop;
  }, [open, selectedIndex]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Trigger button */}
      <button
        type="button"
        id={id}
        onClick={() => {
          if (error) onClearError?.();
          setOpen((prev) => !prev);
        }}
        className={`flex h-12 md:h-[46px] w-full items-center rounded-[5px] gap-[13px] px-3.5 ${value ? "bg-[#FAFAFA]" : "bg-[#ffffff]/40"} shadow-[0px_0px_1.81px_1.81px_rgba(191,219,254,0.1)] transition-colors ${
          error
            ? "border-dashed border-[#FF4D4F]"
            : open
              ? "border-[#2a4874]"
              : "border-[#d0d0d0] hover:border-[#b0b0b0]"
        }`}
      >
        <CalendarIcon />
        <span
          className={`flex-1 text-left text-[11px] md:text-xs ${value ? "text-gray-900" : "text-[#222222]/40"}`}
          style={{
            fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
          }}
        >
          {value ? toDisplay(value) : "언제 만날까요?"}
        </span>
        <ChevronIcon open={open} />
      </button>

      {/* Custom dropdown */}
      {open && (
        <div
          className="animate-dropdown-open absolute left-0 top-full mt-2 w-full z-[999] rounded-2xl overflow-hidden"
          style={{
            background: "#ffffff",
            border: "1px solid #e0e0e0",
            boxShadow:
              "0 8px 32px rgba(42, 72, 116, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          <ul
            ref={listRef}
            className="scrollbar-timepicker py-1"
            style={{
              maxHeight: `${ITEM_HEIGHT * VISIBLE_COUNT}px`,
              overflowY: "scroll",
            }}
          >
            {TIME_OPTIONS.map((time, index) => {
              const dist =
                selectedIndex >= 0 ? Math.abs(index - selectedIndex) : 0;
              const isSelected = index === selectedIndex;
              const isHovered = hoveredIndex === index;
              // 호버 시 opacity 1로 override, 선택된 항목은 항상 1
              const baseOpacity = selectedIndex >= 0 ? getOpacity(dist) : 0.65;
              const opacity = isHovered || isSelected ? 1 : baseOpacity;

              return (
                <li key={time}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(time);
                      setOpen(false);
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative flex w-full items-center justify-start gap-3 px-4 cursor-pointer"
                    style={{
                      height: `${ITEM_HEIGHT}px`,
                      opacity,
                      transition: "opacity 0.15s ease-in-out",
                    }}
                  >
                    {/* 호버 배경 — 항상 렌더, opacity로 부드럽게 토글 (선택 상태와 중복 방지) */}
                    {!isSelected && (
                      <span
                        className="absolute inset-x-3 inset-y-[6px] rounded-[5px] transition-all duration-200 ease-in-out"
                        style={{
                          background: "#FAFAF8",
                          opacity: isHovered ? 0.45 : 0,
                        }}
                      />
                    )}

                    {/* 선택 pill 배경 — 흰색 + 그림자로 호버와 명확히 구분 */}
                    {isSelected && (
                      <span className="absolute inset-x-3 inset-y-[6px] rounded-[5px] bg-[#222222]/5" />
                    )}

                    {/* 시간 텍스트 — 호버/선택 시 네이비 + weight 500 */}
                    <span
                      className="relative z-10 ml-[30px] text-sm tabular-nums transition-all duration-200 ease-in-out"
                      style={{
                        color: isSelected || isHovered ? "#222222" : "#555555",
                        fontWeight: isSelected || isHovered ? 500 : 400,
                        fontFamily:
                          "'Pretendard Variable', Pretendard, sans-serif",
                      }}
                    >
                      {toDisplay(time)}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
