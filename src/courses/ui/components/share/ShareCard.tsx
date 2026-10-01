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
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5009 16.529C11.8064 16.529 11.2161 16.2879 10.73 15.8058C10.2438 15.3237 10.0007 14.7383 10.0007 14.0496C10.0007 13.967 10.0216 13.7742 10.0632 13.4711L4.20865 10.0827C3.98641 10.2893 3.72944 10.4511 3.43776 10.5682C3.14607 10.6853 2.83354 10.7438 2.50019 10.7438C1.80569 10.7438 1.21537 10.5028 0.729221 10.0207C0.243074 9.5386 0 8.9532 0 8.26449C0 7.57579 0.243074 6.99038 0.729221 6.50829C1.21537 6.02619 1.80569 5.78515 2.50019 5.78515C2.83354 5.78515 3.14607 5.84369 3.43776 5.96077C3.72944 6.07785 3.98641 6.23969 4.20865 6.44631L10.0632 3.05786C10.0355 2.96144 10.0181 2.86847 10.0112 2.77894C10.0042 2.6894 10.0007 2.58954 10.0007 2.47935C10.0007 1.79064 10.2438 1.20524 10.73 0.723143C11.2161 0.241048 11.8064 0 12.5009 0C13.1954 0 13.7857 0.241048 14.2719 0.723143C14.758 1.20524 15.0011 1.79064 15.0011 2.47935C15.0011 3.16806 14.758 3.75346 14.2719 4.23555C13.7857 4.71765 13.1954 4.9587 12.5009 4.9587C12.1676 4.9587 11.8551 4.90016 11.5634 4.78308C11.2717 4.666 11.0147 4.50415 10.7925 4.29754L4.93787 7.68598C4.96565 7.7824 4.98301 7.87537 4.98996 7.96491C4.9969 8.05444 5.00037 8.1543 5.00037 8.26449C5.00037 8.37469 4.9969 8.47455 4.98996 8.56408C4.98301 8.65361 4.96565 8.74659 4.93787 8.84301L10.7925 12.2315C11.0147 12.0248 11.2717 11.863 11.5634 11.7459C11.8551 11.6288 12.1676 11.5703 12.5009 11.5703C13.1954 11.5703 13.7857 11.8113 14.2719 12.2934C14.758 12.7755 15.0011 13.3609 15.0011 14.0496C15.0011 14.7383 14.758 15.3237 14.2719 15.8058C13.7857 16.2879 13.1954 16.529 12.5009 16.529ZM12.5009 14.8761C12.7371 14.8761 12.935 14.7969 13.0947 14.6385C13.2545 14.4801 13.3343 14.2838 13.3343 14.0496C13.3343 13.8155 13.2545 13.6192 13.0947 13.4608C12.935 13.3024 12.7371 13.2232 12.5009 13.2232C12.2648 13.2232 12.0669 13.3024 11.9071 13.4608C11.7474 13.6192 11.6675 13.8155 11.6675 14.0496C11.6675 14.2838 11.7474 14.4801 11.9071 14.6385C12.0669 14.7969 12.2648 14.8761 12.5009 14.8761ZM2.50019 9.09094C2.73632 9.09094 2.93425 9.01174 3.09398 8.85334C3.25371 8.69494 3.33358 8.49865 3.33358 8.26449C3.33358 8.03033 3.25371 7.83405 3.09398 7.67565C2.93425 7.51725 2.73632 7.43804 2.50019 7.43804C2.26406 7.43804 2.06613 7.51725 1.90639 7.67565C1.74666 7.83405 1.66679 8.03033 1.66679 8.26449C1.66679 8.49865 1.74666 8.69494 1.90639 8.85334C2.06613 9.01174 2.26406 9.09094 2.50019 9.09094ZM13.0947 3.06819C13.2545 2.90979 13.3343 2.71351 13.3343 2.47935C13.3343 2.24519 13.2545 2.04891 13.0947 1.8905C12.935 1.7321 12.7371 1.6529 12.5009 1.6529C12.2648 1.6529 12.0669 1.7321 11.9071 1.8905C11.7474 2.04891 11.6675 2.24519 11.6675 2.47935C11.6675 2.71351 11.7474 2.90979 11.9071 3.06819C12.0669 3.2266 12.2648 3.3058 12.5009 3.3058C12.7371 3.3058 12.935 3.2266 13.0947 3.06819Z"
        fill="#222222"
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
          className="relative flex h-[44px] w-full items-center justify-center gap-[8px] overflow-hidden rounded-[25px]"
          style={{
            background:
              "radial-gradient(68.32% 145.43% at 54.1% 47.19%, rgba(191, 219, 254, 0.74) 0%, rgba(191, 219, 254, 0.074) 100%)",
            boxShadow: "3px 5px 8px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
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
