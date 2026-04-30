function DotPatternIcon() {
  return (
    <svg
      width="15"
      height="12"
      viewBox="0 0 14.93 11.95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="2.99" y="0" width="2.985" height="2.985" fill="#fcad9e" />
      <rect x="8.96" y="0" width="2.985" height="2.985" fill="#fcad9e" />
      <rect x="0" y="2.99" width="2.985" height="2.985" fill="#fcad9e" />
      <rect x="2.99" y="2.99" width="2.985" height="2.985" fill="#fcad9e" />
      <rect x="5.97" y="2.99" width="2.985" height="2.985" fill="#fcad9e" />
      <rect x="8.96" y="2.99" width="2.985" height="2.985" fill="#fcad9e" />
      <rect x="11.94" y="2.99" width="2.985" height="2.985" fill="#fcad9e" />
      <rect x="2.99" y="5.97" width="2.985" height="2.985" fill="#fcad9e" />
      <rect x="5.97" y="5.97" width="2.985" height="2.985" fill="#fcad9e" />
      <rect x="8.96" y="5.97" width="2.985" height="2.985" fill="#fcad9e" />
      <rect x="5.97" y="8.96" width="2.985" height="2.985" fill="#fcad9e" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center overflow-visible pt-[184px] pb-[52px]">
      {/* Background blob — large (Frame108 equivalent) */}
      <div
        className="pointer-events-none absolute top-[280px] left-1/2 -translate-x-1/2 -z-10 h-[1000px] w-[1000px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(213,230,246,0.22) 0%, transparent 62%)",
        }}
      />
      {/* Background blob — medium (Frame109 equivalent) */}
      <div
        className="pointer-events-none absolute top-[60px] left-1/2 -translate-x-1/2 -z-10 h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(213,230,246,0.38) 0%, transparent 68%)",
        }}
      />

      {/* Content wrapper — 474px matches Figma hero frame */}
      <div className="relative w-[474px]">
        {/* "Click!" speech bubble — absolute: left+114 top-13 relative to hero frame */}
        <div className="absolute -top-[13px] left-[114px] z-10">
          <div className="relative">
            <div className="rounded-[10px] bg-white px-[11px] pt-[6px] pb-[9px] shadow-[0px_2px_8px_rgba(42,72,116,0.12)]">
              <p
                className="text-[18px] leading-normal text-[#2a4874]"
                style={{ fontFamily: "'Prompt', sans-serif" }}
              >
                Click!
              </p>
            </div>
            {/* Speech bubble tail */}
            <div
              className="absolute -bottom-[6px] left-[10px] h-0 w-0"
              style={{
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: "6px solid white",
              }}
            />
          </div>
        </div>

        {/* Subtitle row with blue highlight bar */}
        <div className="relative mb-[-7px] w-[276.883px] py-[2px] pl-[78px] pr-[24px]">
          <div
            className="absolute bottom-0 left-0 right-0 h-[13.861px] -z-[1]"
            style={{ background: "rgba(213,230,246,0.6)" }}
          />
          <div className="relative flex items-center gap-[5px]">
            <span
              className="text-[15px] font-light leading-normal text-black whitespace-nowrap"
              style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
            >
              몇 번으로 완성되는 데이트
            </span>
            <span
              className="text-[17px] text-[#fcad9e]"
              style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", fontWeight: 500 }}
            >
              ♥
            </span>
          </div>
        </div>

        {/* Main headline + sub-description */}
        <div className="flex flex-col items-center gap-[9px]">
          <div className="p-[10px] text-center">
            <p
              className="text-[40px] font-medium leading-normal text-black"
              style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
            >
              당신에게 딱 맞는 데이트 코스
            </p>
            <p
              className="text-[55px] font-semibold leading-normal text-[#2a4874]"
              style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
            >
              대신 준비해드릴게요
            </p>
          </div>

          {/* Sub-description with dot icons */}
          <div className="flex flex-col items-center gap-px w-[291.926px]">
            <div className="flex items-center gap-[7px]">
              <DotPatternIcon />
              <p
                className="text-[15px] leading-[22px] text-[#797979] whitespace-nowrap"
                style={{ fontFamily: "'Prompt', 'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                원하는 조건을 선택해 주세요
              </p>
            </div>
            <div className="flex items-center gap-[5px]">
              <DotPatternIcon />
              <p
                className="text-[15px] leading-[22px] text-[#797979] whitespace-nowrap"
                style={{ fontFamily: "'Prompt', 'Noto Sans KR', sans-serif", fontWeight: 300 }}
              >
                취향에 맞는 데이트 코스를 준비해드릴게요
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
