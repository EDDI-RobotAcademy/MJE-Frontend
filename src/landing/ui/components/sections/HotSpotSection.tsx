import svgPaths from "@/landing/ui/components/assets/svgPaths";
import {
  imgKakaoMap2,
  imgKakaoMap3,
  imgKakaoMap4,
  imgKakaoMap5,
  imgLine16,
} from "@/landing/ui/components/assets/images";

function AvgPaceIcon() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4297 14.4297">
      <path d={svgPaths.p17244b00} fill="#707070" />
    </svg>
  );
}

function HotSpotLabel() {
  return (
    <>
      <div className="absolute h-[43.238px] left-[253.18px] top-[2030.68px] w-[104.021px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.021 43.2377">
          <g>
            <mask fill="white" id="path-1-inside-1_hotspot">
              <path d={svgPaths.p199d1a00} />
            </mask>
            <path d={svgPaths.p199d1a00} fill="white" />
            <path d={svgPaths.p27ea6700} fill="#333333" mask="url(#path-1-inside-1_hotspot)" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Prompt:Regular',sans-serif] leading-[normal] left-[266.19px] not-italic text-[16px] text-black top-[2036.3px] whitespace-nowrap">Hot Spot !</p>
    </>
  );
}

/* Card 1 — Green / 연남동 (rotate -11.58°) */
function CourseCardYeonnam() {
  return (
    <div className="absolute contents h-[480.292px] left-[976.88px] top-[1963.21px] w-[395.677px]">
      {/* card base */}
      <div className="absolute flex h-[480.292px] items-center justify-center left-[976.88px] top-[1963.21px] w-[395.677px]">
        <div className="flex-none rotate-[-11.58deg]">
          <div className="bg-[#cae594] border border-[#9bab79] border-solid h-[425.372px] relative rounded-[30px] shadow-[0px_4px_18.1px_0px_rgba(0,0,0,0.11)] w-[316.742px]" />
        </div>
      </div>
      {/* map image */}
      <div className="absolute flex h-[186.164px] items-center justify-center left-[990.35px] top-[1976.67px] w-[313.998px]">
        <div className="flex-none rotate-[-11.58deg]">
          <div className="h-[129.809px] overflow-hidden relative rounded-[24px] w-[293.925px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKakaoMap2} />
          </div>
        </div>
      </div>
      {/* map border */}
      <div className="absolute flex h-[186.164px] items-center justify-center left-[990.35px] top-[1976.67px] w-[313.998px]">
        <div className="flex-none rotate-[-11.58deg]">
          <div className="border border-[#9bab79] border-solid h-[129.809px] relative rounded-[24px] w-[293.925px]" />
        </div>
      </div>
      {/* location pill */}
      <div className="absolute flex h-[46.239px] items-center justify-center left-[1024.66px] top-[2154.66px] w-[86.301px]">
        <div className="flex-none rotate-[-11.58deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[81.859px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[24.482px] items-center justify-center left-[1067.81px] top-[2165.54px] w-[41.619px]">
        <div className="flex-none rotate-[-11.58deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[14px] text-center whitespace-nowrap">연남동</p>
        </div>
      </div>
      {/* title */}
      <div className="absolute flex h-[98.264px] items-center justify-center left-[1038.89px] top-[2159.23px] w-[232.239px]">
        <div className="flex-none rotate-[-11.58deg]">
          <div className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] not-italic relative text-[#2d2e30] text-[22px] whitespace-nowrap">
            <p className="leading-[normal] mb-0 whitespace-pre">{`힙스터들의 숨은 아지트, `}</p>
            <p className="leading-[normal] whitespace-pre">연남동 골목 탐방</p>
          </div>
        </div>
      </div>
      {/* duration */}
      <div className="absolute flex h-[23.727px] items-center justify-center left-[1073.72px] top-[2253.82px] w-[47.095px]">
        <div className="flex-none rotate-[-11.58deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#707070] text-[12px] whitespace-nowrap">4~5시간</p>
        </div>
      </div>
      <div className="absolute flex h-[14.43px] items-center justify-center left-[1056px] top-[2257px] w-[14.43px]">
        <div className="flex-none rotate-[-11.58deg] size-full relative">
          <AvgPaceIcon />
        </div>
      </div>
      {/* dotted line */}
      <div className="absolute flex h-[49.062px] items-center justify-center left-[1089.73px] top-[2327.95px] w-[10.052px]">
        <div className="flex-none rotate-[78.42deg]">
          <div className="h-0 relative w-[50.081px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgLine16} width="50.081" />
            </div>
          </div>
        </div>
      </div>
      {/* spot names */}
      <div className="absolute flex h-[23.254px] items-center justify-center left-[1169.48px] top-[2282.07px] w-[31.043px]">
        <div className="flex-none rotate-[-11.58deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">소점</p>
        </div>
      </div>
      <div className="absolute flex h-[28.874px] items-center justify-center left-[1177.53px] top-[2315.75px] w-[58.473px]">
        <div className="flex-none rotate-[-11.58deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">사운즈굿</p>
        </div>
      </div>
      <div className="absolute flex h-[34.294px] items-center justify-center left-[1185.48px] top-[2349.13px] w-[84.924px]">
        <div className="flex-none rotate-[-11.58deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">턴다운서비스</p>
        </div>
      </div>
      {/* tag pills: 식사, 쇼핑, 카페 */}
      <CardTagPill leftBox={1052.07} topBox={2291.94} leftText={1086.84} topText={2303.56} rotate="-11.58deg" boxW={69.327} boxH={42.762} label="식사" />
      <CardTagPill leftBox={1060.12} topBox={2331.24} leftText={1094.89} topText={2342.86} rotate="-11.58deg" boxW={69.327} boxH={42.762} label="쇼핑" />
      <CardTagPill leftBox={1068.18} topBox={2370.53} leftText={1102.8} topText={2381.68} rotate="-11.58deg" boxW={69.327} boxH={42.762} label="카페" />
    </div>
  );
}

type TagPillProps = {
  leftBox: number;
  topBox: number;
  leftText: number;
  topText: number;
  rotate: string;
  boxW: number;
  boxH: number;
  label: string;
};

function CardTagPill({ leftBox, topBox, leftText, topText, rotate, boxW, boxH, label }: TagPillProps) {
  return (
    <>
      <div className="absolute flex items-center justify-center" style={{ left: leftBox, top: topBox, width: boxW, height: boxH }}>
        <div className="flex-none" style={{ transform: `rotate(${rotate})` }}>
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[64.533px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ left: leftText, top: topText, width: 26.723, height: 20.492 }}>
        <div className="flex-none" style={{ transform: `rotate(${rotate})` }}>
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[13px] text-center whitespace-nowrap">{label}</p>
        </div>
      </div>
    </>
  );
}

/* Card 2 — Beige / 서촌 (rotate 5.73°) */
function CourseCardSeochon() {
  return (
    <div className="absolute contents h-[454.849px] left-[675.53px] top-[2046.5px] w-[357.599px]">
      {/* card base */}
      <div className="absolute flex h-[454.849px] items-center justify-center left-[675.53px] top-[2046.5px] w-[357.599px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="bg-[#ffe9ca] border border-[#e2c69e] border-solid h-[425.372px] relative rounded-[30px] shadow-[0px_4px_18.1px_0px_rgba(0,0,0,0.11)] w-[316.742px]" />
        </div>
      </div>
      {/* map */}
      <div className="absolute flex h-[158.484px] items-center justify-center left-[715.22px] top-[2058.99px] w-[305.409px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="h-[129.809px] overflow-hidden relative rounded-[24px] w-[293.925px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKakaoMap3} />
          </div>
        </div>
      </div>
      {/* map border */}
      <div className="absolute flex h-[158.484px] items-center justify-center left-[715.22px] top-[2058.99px] w-[305.409px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="border border-[#e2c69e] border-solid h-[129.809px] relative rounded-[24px] w-[293.925px]" />
        </div>
      </div>
      {/* location pills 종로구 + 서촌 */}
      <div className="absolute flex h-[38.443px] items-center justify-center left-[717.62px] top-[2198.49px] w-[84.487px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[81.859px]" />
        </div>
      </div>
      <div className="absolute flex h-[38.443px] items-center justify-center left-[810.28px] top-[2207.78px] w-[84.487px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[81.859px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[20.806px] items-center justify-center left-[759.86px] top-[2207.31px] w-[40.501px]">
        <div className="flex-none rotate-[5.73deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[14px] text-center whitespace-nowrap">종로구</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[19.509px] items-center justify-center left-[852.02px] top-[2217.2px] w-[27.566px]">
        <div className="flex-none rotate-[5.73deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[14px] text-center whitespace-nowrap">서촌</p>
        </div>
      </div>
      {/* title */}
      <div className="absolute flex h-[74.88px] items-center justify-center left-[718.88px] top-[2234.71px] w-[216.33px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] not-italic relative text-[#2d2e30] text-[22px] whitespace-nowrap">
            <p className="leading-[normal] mb-0 whitespace-pre">{`이국적인 감성 한 스푼, `}</p>
            <p className="leading-[normal] whitespace-pre">해방촌 비밀 아지트</p>
          </div>
        </div>
      </div>
      {/* duration */}
      <div className="absolute flex h-[19.415px] items-center justify-center left-[738.7px] top-[2300.69px] w-[46.272px]">
        <div className="flex-none rotate-[5.73deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#707070] text-[12px] whitespace-nowrap">5~6시간</p>
        </div>
      </div>
      <div className="absolute flex h-[14.43px] items-center justify-center left-[721px] top-[2302px] w-[14.43px]">
        <div className="flex-none rotate-[5.73deg] size-full relative">
          <AvgPaceIcon />
        </div>
      </div>
      {/* dotted line */}
      <div className="absolute flex h-[49.831px] items-center justify-center left-[731.13px] top-[2367.6px] w-[4.996px]">
        <div className="flex-none rotate-[95.73deg]">
          <div className="h-0 relative w-[50.081px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgLine16} width="50.081" />
            </div>
          </div>
        </div>
      </div>
      {/* spot names */}
      <div className="absolute flex h-[23.497px] items-center justify-center left-[822.44px] top-[2352.89px] w-[57.516px]">
        <div className="flex-none rotate-[5.73deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">칸다소바</p>
        </div>
      </div>
      <div className="absolute flex h-[27.986px] items-center justify-center left-[818.44px] top-[2392.8px] w-[102.292px]">
        <div className="flex-none rotate-[5.73deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">포뮬라 아뜰리에</p>
        </div>
      </div>
      <div className="absolute flex h-[19.307px] items-center justify-center left-[814.48px] top-[2432.21px] w-[15.726px]">
        <div className="flex-none rotate-[5.73deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">참</p>
        </div>
      </div>
      {/* tag pills */}
      <CardTagPill leftBox={703.99} topBox={2334.39} leftText={737.57} topText={2344.08} rotate="5.73deg" boxW={67.247} boxH={36.714} label="식사" />
      <CardTagPill leftBox={699.99} topBox={2374.3} leftText={733.56} topText={2384} rotate="5.73deg" boxW={67.247} boxH={36.714} label="카페" />
      <div className="absolute flex h-[36.714px] items-center justify-center left-[695.99px] top-[2414.21px] w-[67.247px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[64.533px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[20.709px] items-center justify-center left-[729.57px] top-[2422.21px] w-[49.357px]">
        <div className="flex-none rotate-[5.73deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[13px] text-center whitespace-nowrap">칵테일바</p>
        </div>
      </div>
    </div>
  );
}

/* Card 3 — Light blue / 해방촌 (rotate -1.99°) */
function CourseCardHaebangchon() {
  return (
    <div className="absolute contents h-[436.112px] left-[377.21px] top-[1978.5px] w-[331.318px]">
      <div className="absolute flex h-[436.112px] items-center justify-center left-[377.21px] top-[1978.5px] w-[331.318px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="bg-[#dbecfe] border border-[#9db9d6] border-solid h-[425.372px] relative rounded-[30px] shadow-[0px_4px_18.1px_0px_rgba(0,0,0,0.11)] w-[316.742px]" />
        </div>
      </div>
      <div className="absolute flex h-[139.934px] items-center justify-center left-[389.01px] top-[1990.29px] w-[298.254px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="h-[129.809px] overflow-hidden relative rounded-[24px] w-[293.925px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKakaoMap4} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[139.934px] items-center justify-center left-[389.01px] top-[1990.29px] w-[298.254px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="border border-[#acc5e0] border-solid h-[129.809px] relative rounded-[24px] w-[293.925px]" />
        </div>
      </div>
      {/* location pills */}
      <div className="absolute flex h-[33.251px] items-center justify-center left-[400.28px] top-[2136.9px] w-[82.866px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[81.859px]" />
        </div>
      </div>
      <div className="absolute flex h-[33.251px] items-center justify-center left-[493.35px] top-[2133.67px] w-[82.866px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[81.859px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[18.344px] items-center justify-center left-[441.71px] top-[2144.36px] w-[39.567px]">
        <div className="flex-none rotate-[-1.99deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[14px] text-center whitespace-nowrap">용산구</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[18.344px] items-center justify-center left-[534.78px] top-[2141.12px] w-[39.567px]">
        <div className="flex-none rotate-[-1.99deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[14px] text-center whitespace-nowrap">해방촌</p>
        </div>
      </div>
      {/* title */}
      <div className="absolute flex h-[61.327px] items-center justify-center left-[408.73px] top-[2167.79px] w-[213.747px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] not-italic relative text-[#2d2e30] text-[22px] whitespace-nowrap">
            <p className="leading-[normal] mb-0 whitespace-pre">{`이국적인 감성 한 스푼, `}</p>
            <p className="leading-[normal] whitespace-pre">해방촌 비밀 아지트</p>
          </div>
        </div>
      </div>
      {/* duration */}
      <div className="absolute flex h-[16.553px] items-center justify-center left-[433.37px] top-[2236.83px] w-[45.494px]">
        <div className="flex-none rotate-[-1.99deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#707070] text-[12px] whitespace-nowrap">5~6시간</p>
        </div>
      </div>
      <div className="absolute flex h-[14.43px] items-center justify-center left-[416px] top-[2238px] w-[14.43px]">
        <div className="flex-none rotate-[-1.99deg] size-full relative">
          <AvgPaceIcon />
        </div>
      </div>
      {/* dotted line */}
      <div className="absolute flex h-[50.051px] items-center justify-center left-[438.31px] top-[2305.25px] w-[1.739px]">
        <div className="flex-none rotate-[88.01deg]">
          <div className="h-0 relative w-[50.081px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgLine16} width="50.081" />
            </div>
          </div>
        </div>
      </div>
      {/* spot names */}
      <div className="absolute flex h-[18.961px] items-center justify-center left-[523.65px] top-[2277.87px] w-[28.608px]">
        <div className="flex-none rotate-[-1.99deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">애일</p>
        </div>
      </div>
      <div className="absolute flex h-[20.871px] items-center justify-center left-[525.04px] top-[2316.05px] w-[83.575px]">
        <div className="flex-none rotate-[-1.99deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">소프커피앤바</p>
        </div>
      </div>
      <div className="absolute flex h-[19.447px] items-center justify-center left-[526.42px] top-[2357.06px] w-[42.6px]">
        <div className="flex-none rotate-[-1.99deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">길바닥</p>
        </div>
      </div>
      {/* tag pills */}
      <CardTagPill leftBox={405.02} topBox={2274} leftText={437.81} topText={2282.41} rotate="-1.99deg" boxW={65.551} boxH={32.65} label="식사" />
      <CardTagPill leftBox={406.41} topBox={2314.09} leftText={439.21} topText={2322.5} rotate="-1.99deg" boxW={65.551} boxH={32.65} label="카페" />
      <div className="absolute flex h-[32.65px] items-center justify-center left-[407.81px] top-[2354.18px] w-[65.551px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[64.533px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[17.657px] items-center justify-center left-[440.54px] top-[2361.68px] w-[48.527px]">
        <div className="flex-none rotate-[-1.99deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[13px] text-center whitespace-nowrap">칵테일바</p>
        </div>
      </div>
    </div>
  );
}

/* Card 4 — Pink / 성수 (rotate 9.11°) */
function CourseCardSeongsu() {
  return (
    <div className="absolute contents h-[470.154px] left-[36.18px] top-[2057.42px] w-[380.093px]">
      <div className="absolute flex h-[470.154px] items-center justify-center left-[36.18px] top-[2057.42px] w-[380.093px]">
        <div className="flex-none rotate-[9.11deg]">
          <div className="bg-[#f9ddf6] border border-[#d5a6d0] border-solid h-[425.372px] relative rounded-[30px] shadow-[0px_4px_18.1px_0px_rgba(0,0,0,0.11)] w-[316.742px]" />
        </div>
      </div>
      <div className="absolute flex h-[174.706px] items-center justify-center left-[92.44px] top-[2070.49px] w-[310.769px]">
        <div className="flex-none rotate-[9.11deg]">
          <div className="h-[129.809px] overflow-hidden relative rounded-[24px] w-[293.925px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKakaoMap5} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[174.706px] items-center justify-center left-[92.44px] top-[2070.49px] w-[310.769px]">
        <div className="flex-none rotate-[9.11deg]">
          <div className="border border-[#d5a6cf] border-solid h-[129.809px] relative rounded-[24px] w-[293.925px]" />
        </div>
      </div>
      {/* location pill */}
      <div className="absolute flex h-[43.004px] items-center justify-center left-[92.43px] top-[2209.3px] w-[85.644px]">
        <div className="flex-none rotate-[9.11deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[81.859px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[22.96px] items-center justify-center left-[135.25px] top-[2219.32px] w-[41.2px]">
        <div className="flex-none rotate-[9.11deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[14px] text-center whitespace-nowrap">성수동</p>
        </div>
      </div>
      {/* title */}
      <div className="absolute flex h-[93.216px] items-center justify-center left-[90.17px] top-[2245.67px] w-[257.371px]">
        <div className="flex-none rotate-[9.11deg]">
          <div className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] not-italic relative text-[#2d2e30] text-[22px] whitespace-nowrap">
            <p className="leading-[normal] mb-0 whitespace-pre">{`피자 장인과 스페셜티 커피, `}</p>
            <p className="leading-[normal] whitespace-pre">성수 정복 코스</p>
          </div>
        </div>
      </div>
      {/* duration */}
      <div className="absolute flex h-[21.935px] items-center justify-center left-[108.35px] top-[2312.47px] w-[46.807px]">
        <div className="flex-none rotate-[9.11deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#707070] text-[12px] whitespace-nowrap">4~5시간</p>
        </div>
      </div>
      <div className="absolute flex h-[14.43px] items-center justify-center left-[91px] top-[2316px] w-[14.43px]">
        <div className="flex-none rotate-[9.11deg] size-full relative">
          <AvgPaceIcon />
        </div>
      </div>
      {/* dotted line */}
      <div className="absolute flex h-[49.449px] items-center justify-center left-[94.78px] top-[2379.03px] w-[7.929px]">
        <div className="flex-none rotate-[99.11deg]">
          <div className="h-0 relative w-[50.081px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgLine16} width="50.081" />
            </div>
          </div>
        </div>
      </div>
      {/* spot names */}
      <div className="absolute flex h-[26.639px] items-center justify-center left-[162.02px] top-[2365.27px] w-[58.143px]">
        <div className="flex-none rotate-[9.11deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">마리오네</p>
        </div>
      </div>
      <div className="absolute flex h-[24.422px] items-center justify-center left-[155.67px] top-[2404.87px] w-[44.32px]">
        <div className="flex-none rotate-[9.11deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">로우키</p>
        </div>
      </div>
      <div className="absolute flex h-[26.639px] items-center justify-center left-[149.4px] top-[2443.99px] w-[58.143px]">
        <div className="flex-none rotate-[9.11deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">성수연방</p>
        </div>
      </div>
      {/* tag pills */}
      <CardTagPill leftBox={70.76} topBox={2344.15} leftText={104.95} topText={2354.97} rotate="9.11deg" boxW={68.537} boxH={40.261} label="식사" />
      <CardTagPill leftBox={64.45} topBox={2383.76} leftText={98.64} topText={2394.59} rotate="9.11deg" boxW={68.537} boxH={40.261} label="카페" />
      <CardTagPill leftBox={58.1} topBox={2423.37} leftText={92.33} topText={2433.69} rotate="9.11deg" boxW={68.537} boxH={40.261} label="팝업" />
    </div>
  );
}

function PinkStarsLabel() {
  return (
    <div className="absolute contents h-[47.026px] left-[657.63px] top-[2007.17px] w-[143.88px]">
      <div className="absolute flex h-[47.026px] items-center justify-center left-[657.63px] top-[2007.17px] w-[143.88px]">
        <div className="flex-none rotate-[-6.33deg]">
          <div className="bg-[#f7bdf7] h-[31.642px] relative rounded-[15.821px] w-[141.252px]" />
        </div>
      </div>
      <div className="absolute flex h-[37.317px] items-center justify-center left-[666.78px] top-[2012.02px] w-[125.59px]">
        <div className="flex-none rotate-[-6.33deg]">
          <div className="h-[23.819px] relative w-[123.718px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.717 23.8182">
              <g>
                <path d={svgPaths.p1c08a400} fill="#333333" />
                <path d={svgPaths.p2885dc80} fill="#333333" />
                <path d={svgPaths.p33041f00} fill="#333333" />
                <path d={svgPaths.pf763970} fill="#333333" />
                <path d={svgPaths.pa387100} fill="#333333" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function YellowStarBadge() {
  return (
    <>
      {/* Star background (15° rotated) */}
      <div className="absolute flex items-center justify-center left-[1110.96px] size-[224.853px] top-[2403.44px]">
        <div className="flex-none rotate-15">
          <div className="relative size-[183.591px]">
            <div className="absolute inset-[0.77%_0.69%_0.64%_0.77%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180.905 180.992">
                <g>
                  <path d={svgPaths.p16ecf00} fill="#FFF6BB" />
                  <path d={svgPaths.p14742780} fill="#C7BD7B" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Text + underlines (4.74° rotated) — flex column with explicit gaps to avoid font-metric drift */}
      <div className="absolute flex items-center justify-center left-[1110.96px] size-[224.853px] top-[2403.44px] pointer-events-none">
        <div className="flex-none rotate-[4.74deg] flex flex-col items-center gap-[5px]">
          <div className="h-px w-[60.547px] bg-black" />
          <p
            className="font-['Noto_Serif_Tamil_Slanted:Regular','Noto_Sans:Italic',sans-serif] italic text-[15.79px] text-black tracking-[0.6316px] leading-none whitespace-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}
          >
            don&rsquo;t worry
          </p>
          <p
            className="font-['Noto_Serif_Tamil_Slanted:Regular','Noto_Sans:Italic',sans-serif] italic text-black leading-none whitespace-nowrap inline-flex items-baseline gap-[2px]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}
          >
            <span className="text-[7.545px]">with</span>
            <span className="text-[15.79px]">Dehangsa</span>
          </p>
          <div className="h-px w-[60.547px] bg-black" />
        </div>
      </div>
    </>
  );
}

function DateCircleCta() {
  return (
    <div className="absolute left-[309.16px] size-[136.101px] top-[2371.1px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136.101 136.101">
        <g>
          <g>
            <circle cx="68.0524" cy="68.0534" fill="#2A4874" r="57.4868" />
            <path d={svgPaths.p34b45100} fill="#2A4874" />
          </g>
          <circle cx="68.0516" cy="68.0534" r="51.8049" stroke="#FBFDFF" strokeWidth="0.276443" />
          <path d={svgPaths.p4fa0b00} fill="#FBFDFF" />
          <g filter="url(#filter0_g_circle_cta)">
            <mask height="41" id="mask0_circle_cta" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="41" x="48" y="48">
              <rect fill="#D9D9D9" height="40.0257" width="40.0257" x="48.0398" y="48.0406" />
            </mask>
            <g mask="url(#mask0_circle_cta)">
              <path d={svgPaths.p3afb6500} fill="#D5E6F6" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.0462" id="filter0_g_circle_cta" width="37.7139" x="49.1961" y="49.1961">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence baseFrequency="0.99900001287460327 0.99900001287460327" numOctaves="3" seed="4003" type="fractalNoise" />
            <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="1.0237141847610474" width="100%" xChannelSelector="R" yChannelSelector="G" />
            <feMerge result="effect1_texture_circle_cta">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default function HotSpotSection() {
  return (
    <>
      {/* Gray section background (#f7f7f7) covering y=1697.99 to y=2547.99 */}
      <div className="-translate-x-1/2 absolute bg-[#f7f7f7] h-[850px] left-[calc(50%-0.5px)] top-[1697.99px] w-[1441px]" />

      {/* Main heading */}
      <div
        className="[word-break:break-word] absolute font-['Prompt:Medium','Noto_Sans_KR:Medium',sans-serif] leading-[0] left-[130px] text-[#2d2e30] text-[40px] top-[1780.95px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 500" }}
      >
        <p className="leading-[55px] mb-0 whitespace-pre">{`요즘 가장 핫한 코스만 `}</p>
        <p className="leading-[55px] whitespace-pre">쏙쏙 골라드려요 !</p>
      </div>

      {/* Sub-copy */}
      <div
        className="[word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[0] right-[130px] text-[#6f7176] text-[22px] text-right top-[1816.95px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        <p className="leading-[35px] mb-0">실제 데행사가 추천하는 코스예요</p>
        <p className="leading-[35px]">지도와 장소, 동선까지 한 번에 정리해 드려요</p>
      </div>

      <HotSpotLabel />

      <CourseCardYeonnam />
      <CourseCardSeochon />
      <CourseCardHaebangchon />
      <CourseCardSeongsu />

      <DateCircleCta />
      <YellowStarBadge />

      {/* 카드 위에 떠 있어야 하는 라벨은 마지막에 렌더 */}
      <PinkStarsLabel />
    </>
  );
}
