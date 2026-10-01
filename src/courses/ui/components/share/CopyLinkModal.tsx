"use client";

import { useRef, useState } from "react";
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

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6.5 9.5L9.5 6.5"
        stroke="#757575"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M9.5 4.5L10.5 3.5C11.6 2.4 13.3 2.4 14.4 3.5C15.5 4.6 15.5 6.3 14.4 7.4L13.4 8.4C12.5 9.3 11.1 9.5 10 9"
        stroke="#757575"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M6.5 11.5L5.5 12.5C4.4 13.6 2.7 13.6 1.6 12.5C0.5 11.4 0.5 9.7 1.6 8.6L2.6 7.6C3.5 6.7 4.9 6.5 6 7"
        stroke="#757575"
        strokeWidth="1.4"
        strokeLinecap="round"
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
  const overlayRef = useRef<HTMLDivElement>(null);

  const shareUrl = (() => {
    if (typeof window === "undefined") return "";
    const url = new URL(window.location.href);
    url.searchParams.set("shared", "true");
    return url.toString();
  })();

  const headlineSuffix = shareLabel ? SHARE_LABEL[shareLabel] : undefined;

  const handleCopyUrl = () => {
    void trackCopyLinkClick(courseId, courseTitle);
    void navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md"
      onClick={handleOverlayClick}
    >
      <div
        className="relative w-[90vw] max-w-[420px] rounded-[28px] bg-white px-5 md:px-[36px] pb-[36px] md:pb-[44px] pt-[28px] md:pt-[32px] shadow-[0px_20px_60px_rgba(0,0,0,0.15)]"
        style={{ fontFamily: pretendard }}
      >
        {/* 헤더: 타이틀 + 닫기 버튼 */}
        <div className="mb-[24px] flex items-center justify-center">
          <p className="text-[16px] font-bold text-black">링크 공유</p>
          <button
            type="button"
            onClick={handleCloseButton}
            className="absolute right-[12px] top-[12px] flex h-[44px] w-[44px] items-center justify-center text-[22px] leading-none text-[#bbbbbb] transition-colors hover:text-[#757575]"
            aria-label="닫기"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col items-center gap-[24px]">
          {/* 코스 이름 */}
          <p className="text-center text-[20px] font-bold leading-snug text-black">
            &lsquo;
            {shareLocation ? (
              <>
                {shareLocation}에서 즐기는{" "}
                <span className="text-[#05A66B]">
                  {headlineSuffix ?? courseTitle}
                </span>
              </>
            ) : (
              <span className="text-[#05A66B]">{courseTitle}</span>
            )}
            &rsquo;
          </p>

          {/* Shareable URL */}
          <div className="flex w-full items-center gap-[8px] rounded-[12px] bg-[#f4f6f8] px-[14px] py-[12px]">
            <LinkIcon />
            <span className="block min-w-0 truncate text-[12px] text-[#555]">
              {shareUrl}
            </span>
          </div>

          <p className="text-center text-[12px] text-[#9a9a9a]">
            추천코스를 자유롭게 공유해보세요!
          </p>

          {/* 링크 복사하기 버튼 */}
          <div className="flex w-full flex-col items-center gap-[10px]">
            <button
              type="button"
              onClick={handleCopyUrl}
              className="relative flex h-[48px] w-full items-center justify-center gap-[8px] overflow-hidden rounded-full transition-all duration-200 hover:scale-[1.01] active:scale-[0.98]"
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
              <span className="relative z-10 flex items-center gap-[8px] text-[14px] font-semibold text-[#222222]">
                {copied ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8L6.5 11.5L13 5" stroke="#222222" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    링크 복사 완료!
                  </>
                ) : (
                  <>
                    <LinkIcon />
                    링크 복사하기
                  </>
                )}
              </span>
            </button>
            {copied && (
              <p className="text-center text-[11px] text-[#05A66B]">
                링크 복사 완료! 자유롭게 붙여넣어 공유해보세요!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
