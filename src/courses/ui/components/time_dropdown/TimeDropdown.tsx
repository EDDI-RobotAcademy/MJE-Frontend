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
  return `${parseInt(h, 10)} : ${m}`;
}

function getOpacity(dist: number): number {
  if (dist === 0) return 1;
  if (dist === 1) return 0.5;
  if (dist === 2) return 0.22;
  return 0.1;
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M20 3h-1V1h-2v2H7V1H5v2H4C2.9 5 2 5.9 2 7v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V7h16v1z" fill="#2a4874" />
      <rect x="7" y="13" width="4" height="3" rx="0.5" fill="#2a4874" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="7"
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path d="M1 1L5.5 6L10 1" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TimeDropdown({ id, value, onChange, error, onClearError }: TimeDropdownProps) {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedIndex = value ? TIME_OPTIONS.indexOf(value) : -1;

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
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
        className={`flex h-12 md:h-[46px] w-full items-center rounded-full border px-3.5 gap-2 transition-colors ${
          error
            ? "border-dashed border-[#FF4D4F]"
            : open
            ? "border-[#2a4874]"
            : "border-[#d0d0d0] hover:border-[#b0b0b0]"
        }`}
      >
        <CalendarIcon />
        <span
          className={`flex-1 text-left text-sm md:text-xs ${value ? "text-gray-900" : "text-[#b0b0b0]"}`}
          style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
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
                    className="relative flex w-full items-center justify-center gap-3 px-4 cursor-pointer"
                    style={{
                      height: `${ITEM_HEIGHT}px`,
                      opacity,
                      transition: "opacity 0.15s ease-in-out",
                    }}
                  >
                    {/* 호버 배경 — 항상 렌더, opacity로 부드럽게 토글 (선택 상태와 중복 방지) */}
                    {!isSelected && (
                      <span
                        className="absolute inset-x-3 inset-y-[6px] rounded-full transition-all duration-200 ease-in-out"
                        style={{
                          background: "#D0E2F4",
                          opacity: isHovered ? 0.45 : 0,
                        }}
                      />
                    )}

                    {/* 선택 pill 배경 — 흰색 + 그림자로 호버와 명확히 구분 */}
                    {isSelected && (
                      <span
                        className="absolute inset-x-3 inset-y-[6px] rounded-full"
                        style={{ background: "#D0E2F4", opacity: 0.7 }}
                      />
                    )}

                    {/* 선택 표시 파란 점 — 선택 상태에만 표시 */}
                    <span
                      className="relative z-10 h-[6px] w-[6px] rounded-full shrink-0 transition-all duration-200 ease-in-out"
                      style={{
                        background: isSelected ? "#2a4874" : "transparent",
                      }}
                    />

                    {/* 시간 텍스트 — 호버/선택 시 네이비 + weight 500 */}
                    <span
                      className="relative z-10 text-sm tabular-nums transition-all duration-200 ease-in-out"
                      style={{
                        color: isSelected || isHovered ? "#2a4874" : "#555555",
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
