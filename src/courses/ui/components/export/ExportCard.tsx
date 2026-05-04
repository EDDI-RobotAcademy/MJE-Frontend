"use client";

import { useState } from "react";
import ExportEmailModal from "./ExportEmailModal";
import { trackExportClick } from "./event_tracking";

const pretendard = "'Pretendard Variable', Pretendard, sans-serif";
const prompt = "'Prompt', sans-serif";

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="white" strokeWidth="1.5" />
      <path
        d="M2.5 5.5L10 11.5L17.5 5.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ExportCardProps {
  courseTitle: string;
  courseId: string;
}

export default function ExportCard({ courseTitle, courseId }: ExportCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full rounded-[30px] bg-white px-[17px] py-[15px] shadow-[3px_6px_10px_rgba(187,199,211,0.57)]">
        <div className="flex flex-col items-center gap-[17px]">
          {/* 상단 문구 */}
          <p className="text-center text-[14px] text-black" style={{ fontFamily: pretendard }}>
            이 코스가 마음에 드시나요?
          </p>

          <div className="flex w-full flex-col items-center gap-[7px]">
            {/* Export 버튼 (이메일 아이콘 포함) */}
            <button
              type="button"
              onClick={() => {
                void trackExportClick(courseId, courseTitle);
                setIsModalOpen(true);
              }}
              className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-full bg-[#333] shadow-[3px_6px_10px_rgba(187,199,211,0.25)] transition-opacity hover:opacity-80"
            >
              <MailIcon />
              <span className="text-[14px] text-white" style={{ fontFamily: prompt }}>
                Export
              </span>
            </button>

            {/* 하단 안내 문구 */}
            <p
              className="text-center text-[8px] text-[rgba(117,117,117,0.7)]"
              style={{ fontFamily: pretendard }}
            >
              추천 코스를 이메일로 보내드릴게요
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ExportEmailModal
          courseTitle={courseTitle}
          courseId={courseId}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
