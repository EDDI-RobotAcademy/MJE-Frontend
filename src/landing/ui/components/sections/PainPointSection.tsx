import { imgIMockupIPhone14 } from "@/landing/ui/components/assets/images";

type CardProps = {
  number: string;
  title: string;
  subtitle: string;
  cardTop: number;
  titleTop: number;
  subtitleTop: number;
  numberTop: number;
};

function PainCard({ number, title, subtitle, cardTop, titleTop, subtitleTop, numberTop }: CardProps) {
  return (
    <>
      <div
        className="absolute bg-white border-[#d9d9d9] border-[1.5px] border-solid h-[112.378px] left-[721.96px] rounded-[56.189px] w-[470.688px]"
        style={{ top: cardTop }}
      />
      <p
        className="[word-break:break-word] absolute font-['Prompt:Medium',sans-serif] leading-[51px] left-[751.46px] not-italic text-[#8aafe6] text-[40px] whitespace-nowrap"
        style={{ top: numberTop }}
      >
        {number}
      </p>
      <p
        className="[word-break:break-word] absolute font-['Prompt:Medium','Noto_Sans_KR:Medium',sans-serif] leading-[51px] left-[820.19px] text-[#2a4874] text-[22px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 500", top: titleTop }}
      >
        {title}
      </p>
      <p
        className="[word-break:break-word] absolute font-['Prompt:Medium','Noto_Sans_KR:Medium',sans-serif] leading-[51px] left-[820.19px] text-[#7d7d7d] text-[16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 500", top: subtitleTop }}
      >
        {subtitle}
      </p>
    </>
  );
}

function StressQuote() {
  return (
    <div
      className="-translate-x-1/2 absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[32.064px] left-1/2 text-[#2d2e30] text-[21.862px] text-center top-[1603.96px] whitespace-nowrap"
      style={{ fontVariationSettings: "'wght' 400" }}
    >
      <span>{"“ 아직도 데이트코스 계획 때문에 "}</span>
      <span
        className="relative inline-block align-middle bg-[#333] rounded-[5px]"
        style={{ width: 79.617, height: 21.379 }}
      >
        <span
          aria-hidden="true"
          className="absolute border border-[#333] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]"
        />
        <span className="absolute inset-0 flex items-center justify-center text-white text-[18px] leading-none">
          스트레스
        </span>
      </span>
      <span>{" 받고 계신가요? “"}</span>
    </div>
  );
}

export default function PainPointSection() {
  return (
    <>
      {/* White section background covering y=847.99 to y=1697.99 */}
      <div className="-translate-x-1/2 absolute bg-white h-[850px] left-[calc(50%-1.62px)] top-[847.99px] w-[1443.247px]" />

      {/* Heading */}
      <div
        className="[word-break:break-word] absolute font-['Prompt:Medium','Noto_Sans_KR:Medium',sans-serif] leading-[0] left-[130px] text-[#2d2e30] text-[40px] top-[930.95px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 500" }}
      >
        <p className="leading-[51px] mb-0">혹시...</p>
        <p className="leading-[51px] mb-0">이런 대화,</p>
        <p className="leading-[51px]">해본 적 있죠?</p>
      </div>

      {/* iPhone mockup */}
      <div className="-translate-x-1/2 absolute h-[418.344px] left-[calc(50%-269.89px)] top-[1145.57px] w-[405.503px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[198.22%] left-0 max-w-none top-0 w-full" src={imgIMockupIPhone14} />
        </div>
      </div>

      {/* Three pain point cards */}
      <PainCard
        number="01"
        title="인터넷, SNS 에서 찾는 시간"
        subtitle="검색하다 결국 지쳐서 결국 아무데나 가는 악순환"
        cardTop={1146.78}
        numberTop={1177.47}
        titleTop={1161.97}
        subtitleTop={1192.97}
      />
      <PainCard
        number="02"
        title="동선이 엉망인 코스"
        subtitle="맛집은 강남, 카페는 홍대... 이동만 2시간"
        cardTop={1299.16}
        numberTop={1329.85}
        titleTop={1314.35}
        subtitleTop={1345.35}
      />
      <PainCard
        number="03"
        title="준비하다 기분 다 날림"
        subtitle="데이트 전날 밤이 더 힘든 경험, 이제 없애드려요"
        cardTop={1451.53}
        numberTop={1482.22}
        titleTop={1466.67}
        subtitleTop={1497.67}
      />

      <StressQuote />
    </>
  );
}
