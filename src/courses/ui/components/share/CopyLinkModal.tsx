"use client";

import { useEffect, useRef, useState } from "react";
import { trackShareCloseClick, trackCopyLinkClick } from "./event_tracking";
import { CourseType } from "@/courses/ui/components/shared/CourseLabel";

const pretendard = "'Pretendard Variable', Pretendard, sans-serif";

const SHARE_LABEL: Record<CourseType, string> = {
  "Best Course !": "베스트 코스",
  "Option A": "A코스",
  "Option B": "B코스",
};

interface CopyLinkModalProps {
  courseTitle: string;
  courseId: string;
  shareLocation?: string;
  shareLabel?: CourseType;
  onClose: () => void;
}

function CopyIcon({ opacity = 0.9 }: { opacity?: number }) {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.42313 12.5C4.00215 12.5 3.64583 12.3542 3.35417 12.0625C3.0625 11.7708 2.91667 11.4145 2.91667 10.9935V1.50646C2.91667 1.08549 3.0625 0.729167 3.35417 0.4375C3.64583 0.145833 4.00215 0 4.42313 0H11.4102C11.8312 0 12.1875 0.145833 12.4792 0.4375C12.7708 0.729167 12.9167 1.08549 12.9167 1.50646V10.9935C12.9167 11.4145 12.7708 11.7708 12.4792 12.0625C12.1875 12.3542 11.8312 12.5 11.4102 12.5H4.42313ZM4.42313 11.25H11.4102C11.4744 11.25 11.5331 11.2233 11.5865 11.1698C11.6399 11.1165 11.6667 11.0577 11.6667 10.9935V1.50646C11.6667 1.44229 11.6399 1.38354 11.5865 1.33021C11.5331 1.27674 11.4744 1.25 11.4102 1.25H4.42313C4.35896 1.25 4.30021 1.27674 4.24688 1.33021C4.1934 1.38354 4.16667 1.44229 4.16667 1.50646V10.9935C4.16667 11.0577 4.1934 11.1165 4.24688 11.1698C4.30021 11.2233 4.35896 11.25 4.42313 11.25ZM1.50646 15.4167C1.08549 15.4167 0.729167 15.2708 0.4375 14.9792C0.145833 14.6875 0 14.3312 0 13.9102V3.17313H1.25V13.9102C1.25 13.9744 1.27674 14.0331 1.33021 14.0865C1.38354 14.1399 1.44229 14.1667 1.50646 14.1667H9.74354V15.4167H1.50646Z"
        fill="#222222"
        fillOpacity={opacity}
      />
    </svg>
  );
}

export default function CopyLinkModal({
  courseTitle,
  courseId,
  shareLocation,
  shareLabel,
  onClose,
}: CopyLinkModalProps) {
  const [copied, setCopied] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1080px)");
    setIsDesktop(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const shareUrl = (() => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/courses/detail/${courseId}`;
  })();

  const headlineSuffix = shareLabel ? SHARE_LABEL[shareLabel] : undefined;

  const handleCopyUrl = () => {
    void trackCopyLinkClick(courseId, courseTitle);
    void navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 7000);
    });
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleCloseButton = () => {
    void trackShareCloseClick(courseId, courseTitle);
    onClose();
  };

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-50 flex justify-center bg-black/30 ${
        isDesktop ? "items-center" : "items-end"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={
          isDesktop
            ? "relative w-[90vw] max-w-[420px] rounded-[18.49px] bg-white px-5 md:px-[36px] pb-[36px] md:pb-[44px] pt-[28px] md:pt-[32px] shadow-[0px_20px_60px_rgba(0,0,0,0.15)]"
            : "relative w-full rounded-t-[28px] bg-white px-5 pb-[44px] pt-[18px] shadow-[0px_-10px_40px_rgba(0,0,0,0.12)]"
        }
        style={{ fontFamily: pretendard }}
      >
        {/* 헤더: 타이틀 + 닫기 버튼 */}
        <div className="relative flex items-center justify-center">
          <p className="text-[13px] font-semibold text-[#222222]/70">
            링크 공유
          </p>
          <button
            type="button"
            onClick={handleCloseButton}
            className="absolute right-0 top-1/2 flex h-[24px] w-[24px] -translate-y-1/2 items-center justify-center text-[22px] leading-none text-[#bbbbbb] transition-colors hover:text-[#757575]"
            aria-label="닫기"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.225 12.25L0 11.025L4.9 6.125L0 1.225L1.225 0L6.125 4.9L11.025 0L12.25 1.225L7.35 6.125L12.25 11.025L11.025 12.25L6.125 7.35L1.225 12.25Z"
                fill="#222222"
                fillOpacity="0.4"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center">
          {/* 코스 이름 */}
          <p className="text-center text-[25px] pt-[35px] pb-[13px] font-bold leading-snug text-black">
            {shareLocation ? (
              <>
                ‘{shareLocation}에서 즐기는{" "}
                <span className="text-[#05A66B]">
                  {headlineSuffix ?? courseTitle}
                </span>
                ‘
              </>
            ) : (
              <span className="text-[#05A66B]">{courseTitle}</span>
            )}
          </p>

          {/* Shareable URL */}
          <div className="flex w-full items-center gap-[8px] rounded-[20px] bg-[#FAFAF8]/80 border border-[#222222]/10 px-[30px] py-[10px]">
            <CopyIcon opacity={copied ? 0.4 : 0.9} />
            <span
              className={
                copied
                  ? "block min-w-0 truncate text-[12px] font-normal text-[#222222]/40"
                  : "block min-w-0 truncate text-[12px] font-normal text-[#222222]/90"
              }
              style={{
                fontFamily: "'Prompt', sans-serif",
                letterSpacing: "0px",
              }}
            >
              {shareUrl}
            </span>
          </div>

          <div className="relative pt-[34px] pb-[15px]">
            <div
              className={
                copied
                  ? "w-[246px] whitespace-nowrap rounded-[14px] bg-[#05A66B] px-[18px] py-[7px] text-center text-[10px] font-bold text-white shadow-[0px_2px_2.7px_rgba(0,0,0,0.11)]"
                  : "w-[228px] whitespace-nowrap rounded-[14px] bg-[#FFFFFF] px-[18px] py-[7px] text-center text-[10px] font-semibold text-[#222222]/90 shadow-[0px_2px_2.7px_rgba(0,0,0,0.11)]"
              }
              style={{
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
              }}
            >
              {copied ? (
                <>
                  <span className="text-[12px] font-bold">링크 복사 완료!</span>
                  <span className="text-[10px] font-normal">
                    {" "}
                    자유롭게 붙여넣어 공유해보세요!
                  </span>
                </>
              ) : (
                "추천코스를 자유롭게 공유해보세요!"
              )}
            </div>
            <svg
              className="absolute -translate-x-1/2"
              style={{
                left: "78%",
                top: "calc(100% - 16px)",
                filter: "drop-shadow(0px 2px 1.5px rgba(0,0,0,0.11))",
              }}
              width="9.32"
              height="6.48"
              viewBox="0 0 10 7"
              fill="none"
            >
              <path
                d="M0 0H10L5.5 6.3Q5 7 4.5 6.3L0 0Z"
                fill={copied ? "#05A66B" : "#FAFAF8"}
              />
            </svg>
          </div>

          {/* 링크 복사하기 버튼 */}
          <div className="flex w-full flex-col items-center gap-[10px]">
            {copied ? (
              <button
                type="button"
                onClick={handleCopyUrl}
                className="flex h-[48px] w-full items-center justify-center rounded-full bg-[#222222]/20"
              >
                <span className="text-[13px] font-bold text-[#FAFAF8]/80">
                  링크 복사 완료 !
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleCopyUrl}
                className="relative flex h-[48px] w-full items-center justify-center gap-[8px] overflow-hidden rounded-full transition-all"
                style={{
                  background:
                    "radial-gradient(68.32% 145.43% at 54.1% 47.19%, rgba(191, 219, 254, 0.74) 0%, rgba(191, 219, 254, 0.074) 100%)",
                  boxShadow: "3px 5px 8px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "rgba(250, 250, 248, 0.1)" }}
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,.8) 0%, rgba(255,255,255,0) 55%)",
                  }}
                />
                <span className="relative z-10 text-[13px] font-bold text-[#222222]">
                  링크 복사하기
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
