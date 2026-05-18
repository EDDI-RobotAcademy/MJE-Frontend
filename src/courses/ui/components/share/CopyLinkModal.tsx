"use client";

import { useRef, useState } from "react";
import { trackShareCloseClick, trackCopyLinkClick } from "./event_tracking";

const pretendard = "'Pretendard Variable', Pretendard, sans-serif";

interface CopyLinkModalProps {
  courseTitle: string;
  courseId: string;
  onClose: () => void;
}

export default function CopyLinkModal({
  courseTitle,
  courseId,
  onClose,
}: CopyLinkModalProps) {
  const [copied, setCopied] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        className="relative w-[90vw] max-w-[420px] rounded-[28px] bg-white px-5 md:px-[36px] pb-[36px] md:pb-[44px] pt-[36px] md:pt-[44px] shadow-[0px_20px_60px_rgba(0,0,0,0.15)]"
        style={{ fontFamily: pretendard }}
      >
        {/* X 닫기 버튼 — 터치 영역 44px 이상 확보 */}
        <button
          type="button"
          onClick={handleCloseButton}
          className="absolute right-[12px] top-[12px] flex h-[44px] w-[44px] items-center justify-center text-[24px] leading-none text-[#bbbbbb] transition-colors hover:text-[#757575]"
          aria-label="닫기"
        >
          ×
        </button>

        <div className="flex flex-col items-center gap-[28px]">
          {/* 코스 이름 */}
          <div className="flex flex-col items-center gap-[8px] text-center">
            <p className="text-[22px] font-semibold leading-snug text-[#2a4874]">
              &lsquo;&nbsp;{courseTitle}&nbsp;&rsquo;
            </p>
            <p className="text-[13px] text-[#9a9a9a]" style={{ fontFamily: pretendard }}>
              추천코스를 자유롭게 공유해보세요!
            </p>
          </div>

          {/* Shareable URL */}
          <div className="w-full rounded-[12px] bg-[#f4f6f8] px-[14px] py-[10px]">
            <span
              className="block min-w-0 truncate text-[11px] text-[#555]"
              style={{ fontFamily: pretendard }}
            >
              {shareUrl}
            </span>
          </div>

          {/* 링크 복사하기 버튼 */}
          <div className="flex w-full flex-col items-center gap-[10px]">
            <button
              type="button"
              onClick={handleCopyUrl}
              className={`flex h-[44px] w-full items-center justify-center gap-[8px] rounded-full text-[14px] text-white shadow-[0px_4px_12px_rgba(138,175,230,0.25)] transition-all hover:opacity-80 ${copied ? "bg-[#D5E6F6]" : "bg-[#8AAFE6]"}`}
              style={{ fontFamily: pretendard }}
            >
              {copied ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8L6.5 11.5L13 5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  링크 복사 완료!
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6.5 9.5L9.5 6.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M9.5 4.5L10.5 3.5C11.6 2.4 13.3 2.4 14.4 3.5C15.5 4.6 15.5 6.3 14.4 7.4L13.4 8.4C12.5 9.3 11.1 9.5 10 9" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M6.5 11.5L5.5 12.5C4.4 13.6 2.7 13.6 1.6 12.5C0.5 11.4 0.5 9.7 1.6 8.6L2.6 7.6C3.5 6.7 4.9 6.5 6 7" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  링크 복사하기
                </>
              )}
            </button>
            {copied && (
              <p className="text-center text-[11px] text-[#2a4874]" style={{ fontFamily: pretendard }}>
                링크 복사 완료! 자유롭게 붙여넣어 공유해보세요!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
