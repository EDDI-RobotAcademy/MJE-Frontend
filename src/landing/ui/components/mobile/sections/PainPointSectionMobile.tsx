import { Group68, Group23 } from "./canvasParts";
import { imgIMockupIPhone14 } from "@/landing/ui/components/mobile/assets/images";

export default function PainPointSectionMobile() {
  return (
    <>
      <div className="-translate-x-1/2 absolute bg-white h-[874px] left-1/2 top-[874px] w-[402px]" />
      <div
        className="[word-break:break-word] absolute font-['Prompt:Medium','Noto_Sans_KR:Medium',sans-serif] leading-[0] left-[30px] text-[#2d2e30] text-[32px] top-[980.47px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 500" }}
      >
        <p className="leading-[40.101px] mb-0">혹시...</p>
        <p className="leading-[40.101px] mb-0">이런 대화,</p>
        <p className="leading-[40.101px]">해본 적 있죠?</p>
      </div>
      <div className="-translate-x-1/2 absolute h-[199.094px] left-1/2 top-[1156.39px] w-[192.983px]" data-name="iMockup - iPhone 14">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[198.22%] left-0 max-w-none top-0 w-full" src={imgIMockupIPhone14} />
        </div>
      </div>
      <Group68 />
      <Group23 />
    </>
  );
}
