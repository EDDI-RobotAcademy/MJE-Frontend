"use client";

import { useRef, useState } from "react";
import { exportCourseAction } from "@/courses/infrastructure/api/export/exportActions";
import { trackSendClick } from "./event_tracking";

const pretendard = "'Pretendard Variable', Pretendard, sans-serif";
const prompt = "'Prompt', sans-serif";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ExportEmailModalProps {
  courseTitle: string;
  courseId: string;
  onClose: () => void;
}

function Spinner() {
  return (
    <svg
      className="h-[18px] w-[18px] animate-spin text-white"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        className="opacity-25"
      />
      <path
        fill="currentColor"
        className="opacity-80"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export default function ExportEmailModal({
  courseTitle,
  courseId,
  onClose,
}: ExportEmailModalProps) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  const triggerShake = (message: string) => {
    setEmailError(message);
    setIsShaking(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(null);

    if (!email.trim()) {
      triggerShake("이메일을 입력해 주세요");
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      triggerShake("올바른 이메일 형식으로 입력해 주세요");
      return;
    }

    void trackSendClick(courseId, courseTitle);
    setIsSubmitting(true);
    const result = await exportCourseAction(courseId, email);
    setIsSubmitting(false);

    if (result.success) {
      setIsDone(true);
    } else {
      triggerShake("전송 중 오류가 발생했어요. 다시 시도해 주세요");
    }
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
            <div className="flex w-full justify-end">
              <button
                type="button"
                onClick={onClose}
                className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#f5f5f5] text-[18px] leading-none text-[#757575] transition-colors hover:bg-[#e8e8e8]"
                aria-label="닫기"
              >
                ×
              </button>
            </div>
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
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[20px]">
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
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="export-email" className="text-[12px] text-[#757575]">
                이메일 주소
              </label>
              <input
                id="export-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(null);
                }}
                placeholder="example@email.com"
                className={[
                  "w-full rounded-[14px] border bg-[#fafafa] px-[16px] py-[12px] text-[13px] text-black outline-none transition-colors placeholder:text-[#c0c0c0]",
                  emailError
                    ? "border-red-400 focus:border-red-400"
                    : "border-[#e0e0e0] focus:border-[#2a4874] focus:bg-white",
                  isShaking ? "animate-shake" : "",
                ].join(" ")}
                onAnimationEnd={() => setIsShaking(false)}
              />
              {/* 인라인 에러 메시지 */}
              {emailError && (
                <p className="text-[11px] text-red-500">{emailError}</p>
              )}
            </div>

            {/* 이메일 전송하기 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-full bg-[#333] text-[14px] text-white transition-opacity hover:opacity-80 disabled:opacity-60"
              style={{ fontFamily: prompt }}
            >
              {isSubmitting ? (
                <>
                  <Spinner />
                  <span>전송 중…</span>
                </>
              ) : (
                "이메일 전송하기"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
