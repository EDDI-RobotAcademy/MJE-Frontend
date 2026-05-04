"use client";

import { useRef, useState } from "react";
import { exportCourseAction } from "@/courses/infrastructure/api/export/exportActions";

const pretendard = "'Pretendard Variable', Pretendard, sans-serif";
const prompt = "'Prompt', sans-serif";

interface ExportEmailModalProps {
  courseTitle: string;
  courseId: string;
  onClose: () => void;
}

export default function ExportEmailModal({
  courseTitle,
  courseId,
  onClose,
}: ExportEmailModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    const result = await exportCourseAction(courseId, email);
    setIsSubmitting(false);
    if (result.success) setIsDone(true);
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={handleOverlayClick}
    >
      <div
        className="w-[360px] rounded-[30px] bg-white px-[28px] py-[28px] shadow-[3px_6px_20px_rgba(187,199,211,0.6)]"
        style={{ fontFamily: pretendard }}
      >
        {isDone ? (
          /* ── 전송 완료 상태 ─────────────────────────────── */
          <div className="flex flex-col items-center gap-[16px]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="19" stroke="#2a4874" strokeWidth="1.5" />
              <path
                d="M12 20.5L17.5 26L28 14"
                stroke="#2a4874"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-center text-[16px] font-medium text-black">
              이메일로 전송했어요!
            </p>
            <p className="text-center text-[12px] text-[#757575]">
              <span className="text-[#2a4874]">{email}</span>
              {" "}주소로 코스를 보내드렸어요
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-[6px] flex h-[44px] w-full items-center justify-center rounded-full bg-[#2a4874] text-[14px] text-white transition-opacity hover:opacity-80"
              style={{ fontFamily: prompt }}
            >
              확인
            </button>
          </div>
        ) : (
          /* ── 이메일 입력 폼 ──────────────────────────────── */
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            {/* 헤더: 코스 제목 + 닫기 버튼 */}
            <div className="flex items-start justify-between gap-[12px]">
              <div className="flex flex-col gap-[5px]">
                <span className="text-[11px] text-[#757575]">데이트 코스 내보내기</span>
                <p className="text-[18px] font-medium leading-snug text-black">
                  {courseTitle}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#f5f5f5] text-[18px] leading-none text-[#757575] transition-colors hover:bg-[#e8e8e8]"
                aria-label="닫기"
              >
                ×
              </button>
            </div>

            {/* 이메일 입력 필드 */}
            <div className="flex flex-col gap-[8px]">
              <label
                htmlFor="export-email"
                className="text-[12px] text-[#757575]"
              >
                이메일 주소
              </label>
              <input
                id="export-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full rounded-[14px] border border-[#e0e0e0] bg-[#fafafa] px-[16px] py-[12px] text-[13px] text-black outline-none transition-colors placeholder:text-[#c0c0c0] focus:border-[#2a4874] focus:bg-white"
              />
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-full bg-[#333] text-[14px] text-white transition-opacity hover:opacity-80 disabled:opacity-40"
              style={{ fontFamily: prompt }}
            >
              {isSubmitting ? "전송 중…" : "코스 내보내기"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
