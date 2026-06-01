import { Group80 } from "./canvasParts";

export default function TimeToHealSectionMobile() {
  return (
    <>
      <div
        className="[word-break:break-word] absolute font-['Prompt:Medium','Noto_Sans_KR:Medium',sans-serif] leading-[0] left-[calc(50%-171px)] text-[#2d2e30] text-[0px] top-[2728.47px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 500" }}
      >
        <p className="leading-[55px] mb-0 text-[32px]">복잡한 서치는 끝</p>
        <p className="text-[32px]">
          <span className="leading-[55px] text-[#2a4874]">터치 3번</span>
          <span className="leading-[55px]">이면 충분해요</span>
        </p>
      </div>
      <Group80 />
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[0] left-1/2 text-[#6f7176] text-[13px] text-center top-[3321.29px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        <p className="leading-[25px] mb-0">맛집 검색부터 동선 계산까지 머리 아픈 과정은 전부 건너뛰세요</p>
        <p className="leading-[25px]">데행사가 알아서 다 짜드리니까요</p>
      </div>
    </>
  );
}
