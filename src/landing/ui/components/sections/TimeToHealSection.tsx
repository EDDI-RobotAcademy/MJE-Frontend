'use client';
import { useEffect, useRef } from 'react';
import svgPaths from "@/landing/ui/components/assets/svgPaths";
import { imgRectangle716, imgRectangle717 } from "@/landing/ui/components/assets/images";

function TimeToHealLabel() {
  return (
    <>
      <div className="absolute h-[48.018px] left-[966.44px] top-[2445.03px] w-[122.178px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122.178 48.0176">
          <g>
            <mask fill="white" id="path-1-inside-1_timetoheal">
              <path d={svgPaths.p27d17700} />
            </mask>
            <path d={svgPaths.p27d17700} fill="white" />
            <path d={svgPaths.p180005c0} fill="#333333" mask="url(#path-1-inside-1_timetoheal)" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Prompt:Regular',sans-serif] leading-[normal] left-[979.03px] not-italic text-[16px] text-black top-[2462.92px] whitespace-nowrap">Time to Heal</p>
    </>
  );
}

function HandDrawnCircleColor({ fill }: { fill: string }) {
  return (
    <div className="h-[38.828px] relative w-[32.1px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.1001 38.8284">
        <path d={svgPaths.p11b00d80} fill={fill} />
      </svg>
    </div>
  );
}

function HandDrawnCircleStroke({ pathKey }: { pathKey: "p17778000" | "p34713480" }) {
  return (
    <div className="h-[38.829px] relative w-[32.403px]">
      <div className="absolute inset-[-2.02%_-2.42%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.9689 40.3945">
          <path d={svgPaths[pathKey]} stroke="#2D2E30" strokeWidth="1.56574" />
        </svg>
      </div>
    </div>
  );
}

function NumberedCircle({ left, top, color, number, numberLeft, numberTop, strokeLeft, strokeTop, strokePath }: {
  left: number; top: number; color: string; number: string;
  numberLeft: number; numberTop: number;
  strokeLeft: number; strokeTop: number;
  strokePath: "p17778000" | "p34713480";
}) {
  return (
    <>
      <div className="absolute flex h-[45.958px] items-center justify-center w-[41.258px]" style={{ left, top }}>
        <div className="flex-none rotate-[15.4deg]">
          <HandDrawnCircleColor fill={color} />
        </div>
      </div>
      <div className="absolute flex h-[47.56px] items-center justify-center w-[43.714px]" style={{ left: strokeLeft, top: strokeTop }}>
        <div className="flex-none rotate-[19.97deg]">
          <HandDrawnCircleStroke pathKey={strokePath} />
        </div>
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Segoe_Script:Regular',sans-serif] leading-[39.144px] not-italic text-[21.92px] text-black text-center whitespace-nowrap"
        style={{ left: numberLeft, top: numberTop }}
      >
        {number}
      </p>
    </>
  );
}

function MapPinHeartIcon() {
  return (
    <div className="absolute left-[295.8px] size-[18.706px] top-[3044.78px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7064 18.7064">
        <g>
          <mask height="19" id="mask0_mappin" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="19" x="0" y="0">
            <rect fill="#D9D9D9" height="18.7064" width="18.7064" />
          </mask>
          <g mask="url(#mask0_mappin)">
            <path d={svgPaths.p2a0fee00} fill="#2A4874" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LocationInputMock() {
  return (
    <div className="absolute contents left-[283.63px] top-[3035.42px]">
      <div className="absolute bg-white border-[#2a4874] border-[0.568px] border-solid h-[37.422px] left-[283.63px] rounded-[18.711px] top-[3035.42px] w-[217.516px]" />
      <MapPinHeartIcon />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[17.848px] left-[394.58px] text-[#b0b0b0] text-[9.735px] text-center top-[3045.21px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        어디로 갈까요? (ex. 성수동, 홍대역)
      </p>
    </div>
  );
}

function CalendarTodayIcon() {
  return (
    <div className="relative size-[18.437px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4371 18.4371">
        <g>
          <mask height="19" id="mask0_cal" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="19" x="0" y="0">
            <rect fill="#D9D9D9" height="18.4371" width="18.4371" />
          </mask>
          <g mask="url(#mask0_cal)">
            <path d={svgPaths.p2b3da2c0} fill="#2A4874" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RotatedText({ left, top, w, h, text, color = "#b0b0b0" }: {
  left: number; top: number; w: number; h: number; text: string; color?: string;
}) {
  return (
    <div className="absolute flex items-center justify-center" style={{ left, top, width: w, height: h }}>
      <div className="flex-none rotate-[-8.32deg]">
        <p className="[word-break:break-word] font-['Prompt:Regular',sans-serif] leading-[17.591px] not-italic relative text-[9.595px] whitespace-nowrap" style={{ color }}>
          {text}
        </p>
      </div>
    </div>
  );
}

function TimePickerMock() {
  return (
    <div className="absolute contents h-[184.607px] left-[602.71px] top-[3013.75px] w-[234.589px]">
      <div className="absolute flex h-[182.416px] items-center justify-center left-[602.71px] top-[3013.75px] w-[234.269px]">
        <div className="flex-none rotate-[-8.32deg]">
          <div className="bg-white border-[#2a4874] border-[0.8px] border-solid h-[153.005px] relative rounded-[18.441px] shadow-[0px_3.198px_4.797px_0px_rgba(0,0,0,0.07)] w-[214.385px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[615.91px] size-[20.911px] top-[3049.5px]">
        <div className="flex-none rotate-[-8.32deg]">
          <CalendarTodayIcon />
        </div>
      </div>
      <div className="absolute flex h-[26.782px] items-center justify-center left-[638.57px] top-[3040.31px] w-[63.952px]">
        <div className="flex-none rotate-[-8.32deg]">
          <p className="[word-break:break-word] font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[17.591px] relative text-[#b0b0b0] text-[9.595px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            언제 만날까요?
          </p>
        </div>
      </div>
      <div className="absolute flex h-[6.334px] items-center justify-center left-[792.78px] top-[3031.75px] w-[9.649px]">
        <div className="flex-none rotate-[-98.32deg]">
          <div className="h-[9.009px] relative w-[5.084px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.084 9.00851">
              <path d={svgPaths.p1a0af5f2} fill="#2A4874" />
            </svg>
          </div>
        </div>
      </div>
      <RotatedText left={701.53} top={3064.5} w={8.541} h={18.679} text="9" />
      <RotatedText left={701.67} top={3089.76} w={12.499} h={19.258} text="10" />
      <RotatedText left={709.86} top={3140.28} w={12.499} h={19.258} text="12" />
      <RotatedText left={713.59} top={3165.93} w={11.51} h={19.113} text="13" />
      <RotatedText left={713.39} top={3063.35} w={4.584} h={18.1} text=":" />
      <RotatedText left={717.49} top={3088.61} w={4.584} h={18.1} text=":" />
      <RotatedText left={724.9} top={3139.24} w={4.584} h={18.1} text=":" />
      <RotatedText left={728.63} top={3164.75} w={4.584} h={18.1} text=":" />
      <RotatedText left={721.7} top={3060.54} w={15.468} h={19.692} text="00" />
      <RotatedText left={725.4} top={3085.86} w={15.468} h={19.692} text="00" />
      <RotatedText left={732.83} top={3136.62} w={15.468} h={19.692} text="00" />
      <RotatedText left={736.54} top={3162} w={15.468} h={19.692} text="00" />
      <div className="absolute flex h-[50.631px] items-center justify-center left-[632.49px] top-[3097.66px] w-[179.965px]">
        <div className="flex-none rotate-[-8.32deg]">
          <div className="bg-[rgba(239,239,239,0.15)] border-[0.8px] border-[rgba(190,219,255,0.36)] border-solid h-[25.108px] relative rounded-[12.554px] shadow-[0px_1.599px_4.797px_0px_rgba(0,0,0,0.12)] w-[178.207px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[643.22px] size-[6.591px] top-[3130.73px]">
        <div className="flex-none rotate-[-8.32deg]">
          <div className="relative size-[5.811px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.81098 5.81098">
              <circle cx="2.90549" cy="2.90549" fill="#D5E6F6" r="2.90549" />
            </svg>
          </div>
        </div>
      </div>
      <RotatedText left={708.53} top={3115.05} w={9.531} h={18.823} text="11" color="black" />
      <RotatedText left={721.19} top={3113.92} w={4.584} h={18.1} text=":" color="black" />
      <RotatedText left={729.11} top={3111.17} w={15.468} h={19.692} text="00" color="black" />
      <div className="absolute flex h-[44.028px] items-center justify-center left-[619.28px] top-[3049.45px] w-[191.268px]">
        <div className="flex-none rotate-[-8.32deg]">
          <div className="h-[16.583px] relative w-[190.877px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle716} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[39.344px] items-center justify-center left-[649.95px] top-[3152.02px] w-[159.239px]">
        <div className="flex-none rotate-[171.68deg]">
          <div className="h-[16.583px] relative w-[158.507px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle717} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[27.629px] items-center justify-center left-[619.28px] top-[3049.43px] w-[188.93px]">
        <div className="flex-none rotate-[-8.32deg]">
          <div className="h-0 relative w-[190.939px]">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 190.939 0.799576">
                <line stroke="#D0D0D0" strokeWidth="0.799576" x2="190.939" y1="0.399788" y2="0.399788" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransportModePills() {
  return (
    <div className="absolute content-stretch drop-shadow-[0px_2px_5.2px_rgba(0,0,0,0.07)] flex gap-[5.164px] items-center left-[892.82px] top-[3025.62px]">
      <div className="bg-white content-stretch flex flex-col h-[37.587px] items-start pl-[17.212px] pr-[14.63px] py-[8.606px] relative rounded-[19.849px] shrink-0 w-[98.97px]">
        <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[0.861px] border-solid inset-0 pointer-events-none rounded-[19.849px]" />
        <div className="content-stretch flex gap-[5.164px] items-end relative shrink-0">
          <div className="relative shrink-0 size-[19.844px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8445 19.8445">
              <g>
                <mask height="20" id="mask0_car" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                  <rect fill="#D9D9D9" height="19.8445" width="19.8445" />
                </mask>
                <g mask="url(#mask0_car)">
                  <path d={svgPaths.p3ea4b500} fill="#2A4874" />
                </g>
              </g>
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[18.933px] relative shrink-0 text-[#2a4874] text-[10.327px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>자차 이동</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col h-[37.587px] items-start px-[16.352px] py-[8.606px] relative rounded-[19.849px] shrink-0 w-[98.97px]">
        <div aria-hidden="true" className="absolute border-[#2a4874] border-[0.861px] border-solid inset-0 pointer-events-none rounded-[19.849px]" />
        <div className="content-stretch flex gap-[4.303px] items-end relative shrink-0">
          <div className="relative shrink-0 size-[19.844px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8445 19.8445">
              <g>
                <mask height="20" id="mask0_walk" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                  <rect fill="#2A4874" height="19.8445" width="19.8445" />
                </mask>
                <g mask="url(#mask0_walk)">
                  <path d={svgPaths.p32f23500} fill="#2A4874" />
                </g>
              </g>
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[18.933px] relative shrink-0 text-[#2a4874] text-[10.327px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>도보 이동</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col h-[37.587px] items-start px-[18.073px] py-[8.606px] relative rounded-[19.849px] shrink-0 w-[98.97px]">
        <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[0.861px] border-solid inset-0 pointer-events-none rounded-[19.849px]" />
        <div className="content-stretch flex gap-[4.303px] items-end relative shrink-0">
          <div className="relative shrink-0 size-[19.844px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8445 19.8445">
              <g>
                <mask height="20" id="mask0_railway" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                  <rect fill="#D9D9D9" height="19.8445" width="19.8445" />
                </mask>
                <g mask="url(#mask0_railway)">
                  <path d={svgPaths.p1c7fd800} fill="#2A4874" />
                </g>
              </g>
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[18.933px] relative shrink-0 text-[#2a4874] text-[10.327px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>대중교통</p>
        </div>
      </div>
    </div>
  );
}

// ── 카드 그룹별 애니메이션 ──────────────────────────
type GroupProps = { children: React.ReactNode; divRef: React.RefObject<HTMLDivElement | null> };

function AnimGroup({ children, divRef }: GroupProps) {
  return (
    // absolute inset-0: 캔버스 전체 크기의 투명 오버레이 → 내부 absolute 좌표 유지
    <div ref={divRef} className="absolute inset-0 pointer-events-none">
      {children}
    </div>
  );
}

function StepGuideContents({
  g1Ref, g2Ref, g3Ref,
}: {
  g1Ref: React.RefObject<HTMLDivElement | null>;
  g2Ref: React.RefObject<HTMLDivElement | null>;
  g3Ref: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      {/* 공통: 헤딩 + 서브카피 (애니메이션 없음) */}
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[0] left-[calc(50%-1.08px)] text-[#2d2e30] text-[40px] text-center top-[2747.61px] whitespace-nowrap">
        <span className="leading-[55px]">{`복잡한 서치는 끝, `}</span>
        <span className="leading-[55px] text-[#2a4874]">터치 3번</span>
        <span className="leading-[55px]">이면 충분해요</span>
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[0] left-[calc(50%-0.58px)] text-[#6f7176] text-[16px] text-center top-[2814.53px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] mb-0 whitespace-pre">{`맛집 검색부터 동선 계산까지 머리 아픈 과정은 전부 건너뛰세요 `}</p>
        <p className="leading-[25px] whitespace-pre">데행사가 알아서 다 짜드리니까요</p>
      </div>

      {/* 카드 1 — 장소입력 */}
      <AnimGroup divRef={g1Ref}>
        <div className="absolute bg-white border border-[#2d2e30] border-solid h-[145.881px] left-[239.54px] rounded-[92.335px] shadow-[0px_2px_17.4px_0px_rgba(0,0,0,0.03)] top-[2899.27px] w-[307.03px]" />
        <NumberedCircle left={273.46} top={2918.46} color="#F9DDF6" number="1" numberLeft={290.85} numberTop={2920.48} strokeLeft={268.32} strokeTop={2916.28} strokePath="p34713480" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[25px] left-[392.39px] not-italic text-[#2a4874] text-[20px] text-center top-[2931.73px] whitespace-nowrap">장소입력</p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[25px] left-[392.39px] text-[#3e3e3e] text-[14px] text-center top-[2964.68px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          동네·역 이름만 입력해요<br aria-hidden="true" />(예: 성수동, 홍대역)
        </p>
        <LocationInputMock />
      </AnimGroup>

      {/* 카드 2 — 시간대 선택 */}
      <AnimGroup divRef={g2Ref}>
        <div className="-translate-x-1/2 absolute bg-white border border-[#2d2e30] border-solid h-[145.881px] left-[calc(50%-0.58px)] rounded-[92.335px] shadow-[0px_2px_17.4px_0px_rgba(0,0,0,0.03)] top-[2899.27px] w-[307.03px]" />
        <NumberedCircle left={596.72} top={2916.77} color="#DBECFE" number="2" numberLeft={615.53} numberTop={2920.48} strokeLeft={593.2} strokeTop={2916.28} strokePath="p17778000" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[25px] left-[calc(50%-0.58px)] not-italic text-[#2a4874] text-[20px] text-center top-[2937.73px] whitespace-nowrap">시간대 선택</p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[25px] left-[calc(50%-0.58px)] text-[#3e3e3e] text-[14px] text-center top-[2977.18px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          언제 만나는지 선택해요
        </p>
        <TimePickerMock />
      </AnimGroup>

      {/* 카드 3 — 이동방식 선택 */}
      <AnimGroup divRef={g3Ref}>
        <div className="absolute bg-white border border-[#2d2e30] border-solid h-[145.881px] left-[893.43px] rounded-[92.335px] shadow-[0px_2px_17.4px_0px_rgba(0,0,0,0.03)] top-[2899.27px] w-[307.03px]" />
        <NumberedCircle left={921.68} top={2917.88} color="#CAE594" number="3" numberLeft={939.42} numberTop={2920.49} strokeLeft={917.56} strokeTop={2916.28} strokePath="p17778000" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[25px] left-[1046.94px] not-italic text-[#2a4874] text-[20px] text-center top-[2937.73px] whitespace-nowrap">이동방식 선택</p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[25px] left-[1046.44px] text-[#3e3e3e] text-[14px] text-center top-[2977.18px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          도보 or 대중교통 or 자차 중에 선택해요
        </p>
        <TransportModePills />
      </AnimGroup>
    </>
  );
}

export default function TimeToHealSection() {
  const markerRef = useRef<HTMLDivElement>(null);
  const g1Ref = useRef<HTMLDivElement>(null);
  const g2Ref = useRef<HTMLDivElement>(null);
  const g3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const groups = [
      { ref: g1Ref, delay: 0 },
      { ref: g2Ref, delay: 220 },
      { ref: g3Ref, delay: 440 },
    ];

    groups.forEach(({ ref }) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        groups.forEach(({ ref, delay }) => {
          const el = ref.current;
          if (!el) return;
          setTimeout(() => {
            el.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
        });
        observer.disconnect();
      },
      { threshold: 0.6 }
    );

    if (markerRef.current) observer.observe(markerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <TimeToHealLabel />
      <div
        ref={markerRef}
        className="-translate-x-1/2 absolute bg-white h-[850px] left-[calc(50%-0.5px)] top-[2547.99px] w-[1441px]"
      />
      <div className="-translate-x-1/2 absolute bg-[#f5f5f5] h-[531.163px] left-1/2 rounded-[30px] top-[2707.4px] w-[1182px]" />
      <StepGuideContents g1Ref={g1Ref} g2Ref={g2Ref} g3Ref={g3Ref} />
    </>
  );
}
