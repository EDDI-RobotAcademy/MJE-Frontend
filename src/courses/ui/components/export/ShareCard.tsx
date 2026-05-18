"use client";

const pretendard = "'Pretendard Variable', Pretendard, sans-serif";
const prompt = "'Prompt', sans-serif";

function ShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="15" cy="5" r="2" stroke="white" strokeWidth="1.5" />
      <circle cx="5" cy="10" r="2" stroke="white" strokeWidth="1.5" />
      <circle cx="15" cy="15" r="2" stroke="white" strokeWidth="1.5" />
      <path d="M7 9L13 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 11L13 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

interface ShareCardProps {
  courseTitle: string;
  courseId: string;
}

export default function ExportCard({ courseTitle, courseId: _courseId }: ShareCardProps) {
  const handleClick = () => {
    void navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="w-full rounded-[30px] bg-white px-[17px] py-[15px] shadow-[3px_6px_10px_rgba(187,199,211,0.57)]">
      <div className="flex flex-col items-center gap-[17px]">
        <p className="text-center text-[14px] text-black" style={{ fontFamily: pretendard }}>
          이 코스가 마음에 드시나요?
        </p>
        <div className="flex w-full flex-col items-center gap-[7px]">
          <button
            type="button"
            onClick={handleClick}
            className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-full bg-[#333] shadow-[3px_6px_10px_rgba(187,199,211,0.25)] transition-opacity hover:opacity-80"
          >
            <ShareIcon />
            <span className="text-[14px] text-white" style={{ fontFamily: prompt }}>
              Share
            </span>
          </button>
          <p
            className="text-center text-[9.5px] text-[rgba(117,117,117,0.7)]"
            style={{ fontFamily: pretendard }}
          >
            링크를 복사해서 자유롭게 공유해보세요!
          </p>
        </div>
      </div>
    </div>
  );
}
