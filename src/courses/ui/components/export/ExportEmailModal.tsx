"use client";

import { useRef, useState } from "react";
import { exportCourseAction } from "@/courses/infrastructure/api/export/exportActions";
import { trackSendClick, trackCloseClick } from "./event_tracking";

const pretendard = "'Pretendard Variable', Pretendard, sans-serif";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ModalStep = "input" | "loading" | "success";

interface ExportEmailModalProps {
  courseTitle: string;
  courseId: string;
  onClose: () => void;
}

/* ── 전송 중 로딩 UI ───────────────────────────── */
function SendingLoader() {
  return (
    <div className="flex w-full flex-col items-center gap-[14px]">
      <div className="flex items-center gap-[8px]">
        <span
          className="text-[14px] font-medium text-[#2a4874]"
          style={{ fontFamily: "'Prompt', sans-serif" }}
        >
          Sending your course..
        </span>
        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="#2a4874" strokeWidth="1.5" />
          <path
            d="M2.5 5.5L10 11.5L17.5 5.5"
            stroke="#2a4874"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="w-full border-b border-dotted border-[#d0d0d0]" />
      <p className="text-[11px] text-[#b8b8b8]">이메일 전송 중...</p>
    </div>
  );
}

/* ── 전송 완료 성공 UI ─────────────────────────── */
function SuccessCheck() {
  return (
    <div className="flex flex-col items-center gap-[12px]">
      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#2a4874]">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          {/* 뒤 체크 (연하게) */}
          <path
            d="M4 14.5L10 20.5L20.5 9"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* 앞 체크 (밝은 흰색) */}
          <path
            d="M9 14.5L15 20.5L25.5 9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-[11px] text-[#b8b8b8]">이메일함을 확인해주세요.</p>
    </div>
  );
}

/* ── 전송 버튼 아이콘 ──────────────────────────── */
function SendMailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="1.5" y="5" width="15" height="11" rx="1.8" stroke="white" strokeWidth="1.6" />
      <path
        d="M2 6.5L9 11.5L16 6.5"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12H23M23 12L21 10M23 12L21 14"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
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
  const [step, setStep] = useState<ModalStep>("input");
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleCloseButton = () => {
    void trackCloseClick(courseId, courseTitle);
    onClose();
  };

  const triggerShake = (message: string) => {
    setEmailError(message);
    setIsShaking(true);
  };

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
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
    setStep("loading");
    const result = await exportCourseAction(courseId, email);

    if (result.success) {
      setStep("success");
    } else {
      setStep("input");
      triggerShake("전송 중 오류가 발생했어요. 다시 시도해 주세요");
    }
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
          {/* 타이틀 + 서브타이틀 — 항상 노출 / 서브타이틀만 step별 변경 */}
          <div className="flex flex-col items-center gap-[10px] text-center">
            <p className="text-[22px] font-semibold leading-snug text-[#2a4874]">
              &lsquo;&nbsp;{courseTitle}&nbsp;&rsquo;
            </p>
            <p className="text-[14px] text-[#9a9a9a]">
              {step === "success"
                ? "이메일 전송이 완료 되었습니다."
                : "이메일로 보내드릴게요."}
            </p>
          </div>

          {/* 콘텐츠 영역 — min-h 고정으로 모달 크기 유지 */}
          <div className="flex min-h-[90px] w-full items-center justify-center">
            {step === "loading" && <SendingLoader />}
            {step === "success" && <SuccessCheck />}
            {step === "input" && (
              <form onSubmit={handleSubmit} noValidate className="w-full">
                <div className="flex w-full flex-col gap-[8px]">
                  <div
                    className={isShaking ? "animate-shake" : ""}
                    onAnimationEnd={() => setIsShaking(false)}
                  >
                    <div className="flex items-center gap-[10px]">
                      <input
                        id="export-email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (emailError) setEmailError(null);
                        }}
                        placeholder="example@gmail.com"
                        className={[
                          "min-w-0 flex-1 rounded-full border bg-[#f4f6f8] px-[20px] py-[13px] text-[13px] text-black outline-none transition-colors placeholder:text-[#c0c0c0]",
                          emailError
                            ? "border-red-400"
                            : "border-[#e8eaed] focus:border-[#2a4874] focus:bg-white",
                        ].join(" ")}
                      />
                      <button
                        type="submit"
                        className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#7baed4] shadow-[0px_4px_12px_rgba(123,174,212,0.5)] transition-opacity hover:opacity-85"
                        aria-label="이메일 전송"
                      >
                        <SendMailIcon />
                      </button>
                    </div>
                  </div>
                  {emailError && (
                    <p className="pl-[4px] text-[11px] text-red-500">{emailError}</p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
