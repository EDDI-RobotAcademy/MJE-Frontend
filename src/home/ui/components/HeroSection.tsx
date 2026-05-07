export default function HeroSection() {
  return (
    <section className="flex flex-col items-center pt-[80px] md:pt-[130px] lg:pt-[184px] pb-[40px] md:pb-[52px] px-4">
      {/* Subtitle line: "Click! 몇 번으로 완성되는 데이트 ♥" with blue highlight */}
      <div className="relative mb-[10px]">
        <div
          className="absolute bottom-0 left-0 right-0 h-[13px] -z-[1]"
          style={{ background: "rgba(208,226,244,0.55)" }}
        />
        <div className="flex items-center gap-[6px] px-[6px]">
          <span
            className="text-[13px] md:text-[15px] text-[#2a4874]"
            style={{ fontFamily: "'Prompt', sans-serif" }}
          >
            Click!
          </span>
          <span
            className="text-[13px] md:text-[15px] font-light text-black"
            style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
          >
            몇 번으로 완성되는 데이트
          </span>
          <span
            className="text-[15px] md:text-[17px] text-[#fcad9e]"
            style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontWeight: 500,
            }}
          >
            ♥
          </span>
        </div>
      </div>

      {/* Main headline */}
      <div className="flex flex-col items-center text-center gap-[2px]">
        <p
          className="text-[26px] md:text-[34px] lg:text-[40px] font-medium leading-normal text-[#333333]"
          style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
        >
          당신에게 딱 맞는 데이트 코스
        </p>
        <p
          className="text-[34px] md:text-[46px] lg:text-[55px] font-semibold leading-normal text-[#2a4874]"
          style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }}
        >
          대신 준비해드릴게요
        </p>
      </div>

      {/* Sub-description */}
      <div className="flex flex-col items-center gap-px mt-[18px]">
        <div className="flex items-center gap-[8px]">
          <span className="text-[14px] text-[#fcad9e]">✦</span>
          <p
            className="text-[13px] md:text-[15px] leading-[22px] text-[#797979]"
            style={{
              fontFamily: "'Prompt', 'Noto Sans KR', sans-serif",
              fontWeight: 300,
            }}
          >
            원하는 조건을 선택해 주세요
          </p>
        </div>
        <div className="flex items-center gap-[8px]">
          <span className="text-[14px] text-[#fcad9e]">✦</span>
          <p
            className="text-[13px] md:text-[15px] leading-[22px] text-[#797979]"
            style={{
              fontFamily: "'Prompt', 'Noto Sans KR', sans-serif",
              fontWeight: 300,
            }}
          >
            취향에 맞는 데이트 코스를 준비해드릴게요
          </p>
        </div>
      </div>
    </section>
  );
}
