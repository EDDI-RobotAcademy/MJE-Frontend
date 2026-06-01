import { Group79 } from "./canvasParts";

export default function HotSpotSectionMobile() {
  return (
    <>
      <div className="-translate-x-1/2 absolute bg-[#f5f5f5] h-[874px] left-1/2 top-[1748px] w-[402px]" />
      <div
        className="[word-break:break-word] absolute font-['Prompt:Medium','Noto_Sans_KR:Medium',sans-serif] leading-[0] left-[30px] text-[#2d2e30] text-[32px] top-[1854.47px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 500" }}
      >
        <p className="leading-[55px] mb-0 whitespace-pre">{`요즘 가장 핫한 코스만 `}</p>
        <p className="leading-[55px] whitespace-pre">쏙쏙 골라드려요 !</p>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[0] left-1/2 text-[#6f7176] text-[13px] text-center top-[2447.29px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        <p className="leading-[21px] mb-0">실제 데행사가 추천하는 코스예요</p>
        <p className="leading-[21px]">지도와 장소, 동선까지 한 번에 정리해 드려요</p>
      </div>
      <Group79 />
    </>
  );
}
