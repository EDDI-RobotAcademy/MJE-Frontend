"use client";

import { useState } from "react";
import CopyLinkModal from "./CopyLinkModal";
import { trackShareClick } from "./event_tracking";
import { CourseType } from "@/courses/ui/components/shared/CourseLabel";

const pretendard = "'Pretendard Variable', Pretendard, sans-serif";
const prompt = "'Prompt', sans-serif";

function ShareIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="15" cy="5" r="2" stroke="#2a4874" strokeWidth="1.5" />
      <circle cx="5" cy="10" r="2" stroke="#2a4874" strokeWidth="1.5" />
      <circle cx="15" cy="15" r="2" stroke="#2a4874" strokeWidth="1.5" />
      <path
        d="M7 9L13 6"
        stroke="#2a4874"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 11L13 14"
        stroke="#2a4874"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface ShareCardProps {
  courseTitle: string;
  courseId: string;
  variant?: "card" | "button";
  shareLocation?: string;
  shareLabel?: CourseType;
}

export default function ShareCard({
  courseTitle,
  courseId,
  variant = "card",
  shareLocation,
  shareLabel,
}: ShareCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShareClick = () => {
    void trackShareClick(courseId, courseTitle);
    setIsModalOpen(true);
  };

  if (variant === "button") {
    return (
      <>
        <button
          type="button"
          onClick={handleShareClick}
          className="relative flex h-[50px] w-full items-center justify-center gap-[8px] overflow-hidden rounded-full"
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
          <span className="relative z-10 flex items-center gap-[8px]">
            <ShareIcon />
            <span
              className="text-[14px] font-semibold text-[#222222]"
              style={{ fontFamily: pretendard }}
            >
              공유하기
            </span>
          </span>
        </button>

        {isModalOpen && (
          <CopyLinkModal
            courseTitle={courseTitle}
            courseId={courseId}
            shareLocation={shareLocation}
            shareLabel={shareLabel}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="w-full rounded-[30px] bg-white px-[17px] py-[15px] shadow-[3px_6px_10px_rgba(187,199,211,0.57)]">
        <div className="flex flex-col items-center gap-[17px]">
          <p
            className="text-center text-[14px] text-black"
            style={{ fontFamily: pretendard }}
          >
            이 코스가 마음에 드시나요?
          </p>
          <div className="flex w-full flex-col items-center gap-[7px]">
            <button
              type="button"
              onClick={handleShareClick}
              className="relative flex h-[44px] w-full items-center justify-center gap-[8px] overflow-hidden rounded-full transition-all duration-200 ease-out hover:scale-[1.02] hover:-translate-y-[2px] active:scale-[0.98] active:translate-y-0 shadow-[3px_5px_8px_0px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.75)] hover:shadow-[3px_10px_18px_0px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.75)]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(138,175,230,0.65) 0%, rgba(213,230,246,0.65) 100%)",
                border: "1px solid rgba(255,255,255,0.8)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0.0) 100%)",
                  backdropFilter: "blur(2px)",
                }}
              />
              <span className="relative z-10 flex items-center gap-[8px]">
                <ShareIcon />
                <span
                  className="text-[14px] text-[#2a4874]"
                  style={{ fontFamily: prompt }}
                >
                  Share
                </span>
              </span>
            </button>
            <p
              className="text-center text-[9.5px] text-[rgba(117,117,117,0.7)]"
              style={{ fontFamily: pretendard }}
            >
              추천코스를 공유해보세요.
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CopyLinkModal
          courseTitle={courseTitle}
          courseId={courseId}
          shareLocation={shareLocation}
          shareLabel={shareLabel}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
