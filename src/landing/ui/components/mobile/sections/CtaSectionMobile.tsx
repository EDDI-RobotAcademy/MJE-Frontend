import { Group77 } from "./canvasParts";
import BottomCtaButtonMobile from "./BottomCtaButtonMobile";

export default function CtaSectionMobile() {
  return (
    <>
      <div className="-translate-x-1/2 absolute bg-[#f5f5f5] h-[874px] left-1/2 top-[3497px] w-[402px]" />
      <p
        className="[word-break:break-word] absolute font-['Prompt:Medium','Noto_Sans_KR:Medium',sans-serif] leading-[55px] left-[calc(50%-167.5px)] text-[#2d2e30] text-[23px] top-[3843.44px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 500" }}
      >
        지금은 완벽한 데이트를 만들 시간!
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular',sans-serif] leading-[25px] left-[calc(50%+0.5px)] not-italic text-[#656565] text-[16px] text-center top-[3898.44px] whitespace-nowrap">
        Time to build your date!
      </p>
      <Group77 />
      <BottomCtaButtonMobile />
    </>
  );
}
