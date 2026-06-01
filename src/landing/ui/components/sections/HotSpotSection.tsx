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
    <div
      className="absolute transition-transform duration-300 ease-out hover:-translate-y-[6px]"
      style={{ left: 976.88, top: 1963.21, width: 395.677, height: 480.292 }}
    >
{/* card base */}
      <div className="absolute flex h-[480.292px] items-center justify-center left-[0px] top-[0px] w-[395.677px]">
        <div className="flex-none rotate-[-11.58deg]">
          <div className="bg-[#cae594] border border-[#9bab79] border-solid h-[425.372px] relative rounded-[30px] shadow-[0px_4px_18.1px_0px_rgba(0,0,0,0.11)] w-[316.742px]" />
        </div>
      </div>
      {/* map image */}
      <div className="absolute flex h-[186.164px] items-center justify-center left-[13.47px] top-[13.46px] w-[313.998px]">
        <div className="flex-none rotate-[-11.58deg]">
          <div className="h-[129.809px] overflow-hidden relative rounded-[24px] w-[293.925px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKakaoMap2} />
          </div>
        </div>
      </div>
      {/* map border */}
      <div className="absolute flex h-[186.164px] items-center justify-center left-[13.47px] top-[13.46px] w-[313.998px]">
        <div className="flex-none rotate-[-11.58deg]">
          <div className="border border-[#9bab79] border-solid h-[129.809px] relative rounded-[24px] w-[293.925px]" />
        </div>
      </div>
      {/* location pill */}
      <div className="absolute flex h-[46.239px] items-center justify-center left-[47.78px] top-[191.45px] w-[86.301px]">
        <div className="flex-none rotate-[-11.58deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[81.859px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[24.482px] items-center justify-center left-[90.93px] top-[202.33px] w-[41.619px]">
        <div className="flex-none rotate-[-11.58deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[14px] text-center whitespace-nowrap">연남동</p>
        </div>
      </div>
      {/* title */}
      <div className="absolute flex h-[98.264px] items-center justify-center left-[62.01px] top-[196.02px] w-[232.239px]">
        <div className="flex-none rotate-[-11.58deg]">
          <div className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] not-italic relative text-[#2d2e30] text-[22px] whitespace-nowrap">
            <p className="leading-[normal] mb-0 whitespace-pre">{`힙스터들의 숨은 아지트, `}</p>
            <p className="leading-[normal] whitespace-pre">연남동 골목 탐방</p>
          </div>
        </div>
      </div>
      {/* duration */}
      <div className="absolute flex items-center gap-[10px] left-[77.12px] top-[306.79px]" style={{ transform: "rotate(-11.58deg)", transformOrigin: "left center" }}>
        <div className="size-[14.43px] relative flex-none"><AvgPaceIcon /></div>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-none text-[#707070] text-[12px] whitespace-nowrap">4~5시간</p>
      </div>
      {/* dotted line */}
      <div className="absolute flex h-[49.062px] items-center justify-center left-[112.85px] top-[364.74px] w-[10.052px]">
        <div className="flex-none rotate-[78.42deg]">
          <div className="h-0 relative w-[50.081px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgLine16} width="50.081" />
            </div>
          </div>
        </div>
      </div>
      {/* spot names */}
      <div className="absolute flex h-[23.254px] items-center justify-center left-[192.6px] top-[318.86px] w-[31.043px]">
        <div className="flex-none rotate-[-11.58deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">소점</p>
        </div>
      </div>
      <div className="absolute flex h-[28.874px] items-center justify-center left-[200.65px] top-[352.54px] w-[58.473px]">
        <div className="flex-none rotate-[-11.58deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">사운즈굿</p>
        </div>
      </div>
      <div className="absolute flex h-[34.294px] items-center justify-center left-[208.6px] top-[385.92px] w-[84.924px]">
        <div className="flex-none rotate-[-11.58deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">턴다운서비스</p>
        </div>
      </div>
      {/* tag pills: 식사, 쇼핑, 카페 */}
      <CardTagPill leftBox={75.19} topBox={328.73} leftText={109.96} topText={340.35} rotate="-11.58deg" boxW={69.327} boxH={42.762} label="식사" />
      <CardTagPill leftBox={83.24} topBox={368.03} leftText={118.01} topText={379.65} rotate="-11.58deg" boxW={69.327} boxH={42.762} label="쇼핑" />
      <CardTagPill leftBox={91.30} topBox={407.32} leftText={125.92} topText={418.47} rotate="-11.58deg" boxW={69.327} boxH={42.762} label="카페" />
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
    <div
      className="absolute transition-transform duration-300 ease-out hover:-translate-y-[6px]"
      style={{ left: 675.53, top: 2046.5, width: 357.599, height: 454.849 }}
    >
{/* card base */}
      <div className="absolute flex h-[454.849px] items-center justify-center left-[0px] top-[0px] w-[357.599px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="bg-[#ffe9ca] border border-[#e2c69e] border-solid h-[425.372px] relative rounded-[30px] shadow-[0px_4px_18.1px_0px_rgba(0,0,0,0.11)] w-[316.742px]" />
        </div>
      </div>
      {/* map */}
      <div className="absolute flex h-[158.484px] items-center justify-center left-[39.69px] top-[12.49px] w-[305.409px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="h-[129.809px] overflow-hidden relative rounded-[24px] w-[293.925px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKakaoMap3} />
          </div>
        </div>
      </div>
      {/* map border */}
      <div className="absolute flex h-[158.484px] items-center justify-center left-[39.69px] top-[12.49px] w-[305.409px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="border border-[#e2c69e] border-solid h-[129.809px] relative rounded-[24px] w-[293.925px]" />
        </div>
      </div>
      {/* location pills 종로구 + 서촌 */}
      <div className="absolute flex h-[38.443px] items-center justify-center left-[42.09px] top-[151.99px] w-[84.487px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[81.859px]" />
        </div>
      </div>
      <div className="absolute flex h-[38.443px] items-center justify-center left-[134.75px] top-[161.28px] w-[84.487px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[81.859px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[20.806px] items-center justify-center left-[84.33px] top-[160.81px] w-[40.501px]">
        <div className="flex-none rotate-[5.73deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[14px] text-center whitespace-nowrap">종로구</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[19.509px] items-center justify-center left-[176.49px] top-[170.7px] w-[27.566px]">
        <div className="flex-none rotate-[5.73deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[14px] text-center whitespace-nowrap">서촌</p>
        </div>
      </div>
      {/* title */}
      <div className="absolute flex h-[74.88px] items-center justify-center left-[43.35px] top-[188.21px] w-[216.33px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] not-italic relative text-[#2d2e30] text-[22px] whitespace-nowrap">
            <p className="leading-[normal] mb-0 whitespace-pre">{`이국적인 감성 한 스푼, `}</p>
            <p className="leading-[normal] whitespace-pre">해방촌 비밀 아지트</p>
          </div>
        </div>
      </div>
      {/* duration */}
      <div className="absolute flex items-center gap-[10px] left-[43.47px] top-[256px]" style={{ transform: "rotate(5.73deg)", transformOrigin: "left center" }}>
        <div className="size-[14.43px] relative flex-none"><AvgPaceIcon /></div>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-none text-[#707070] text-[12px] whitespace-nowrap">5~6시간</p>
      </div>
      {/* dotted line */}
      <div className="absolute flex h-[49.831px] items-center justify-center left-[55.6px] top-[321.1px] w-[4.996px]">
        <div className="flex-none rotate-[95.73deg]">
          <div className="h-0 relative w-[50.081px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgLine16} width="50.081" />
            </div>
          </div>
        </div>
      </div>
      {/* spot names */}
      <div className="absolute flex h-[23.497px] items-center justify-center left-[146.91px] top-[306.39px] w-[57.516px]">
        <div className="flex-none rotate-[5.73deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">칸다소바</p>
        </div>
      </div>
      <div className="absolute flex h-[27.986px] items-center justify-center left-[142.91px] top-[346.3px] w-[102.292px]">
        <div className="flex-none rotate-[5.73deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">포뮬라 아뜰리에</p>
        </div>
      </div>
      <div className="absolute flex h-[19.307px] items-center justify-center left-[138.95px] top-[385.71px] w-[15.726px]">
        <div className="flex-none rotate-[5.73deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">참</p>
        </div>
      </div>
      {/* tag pills */}
      <CardTagPill leftBox={28.46} topBox={287.89} leftText={62.04} topText={297.58} rotate="5.73deg" boxW={67.247} boxH={36.714} label="식사" />
      <CardTagPill leftBox={24.46} topBox={327.80} leftText={58.03} topText={337.50} rotate="5.73deg" boxW={67.247} boxH={36.714} label="카페" />
      <div className="absolute flex h-[36.714px] items-center justify-center left-[20.46px] top-[367.71px] w-[67.247px]">
        <div className="flex-none rotate-[5.73deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[64.533px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[20.709px] items-center justify-center left-[54.04px] top-[375.71px] w-[49.357px]">
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
    <div
      className="absolute transition-transform duration-300 ease-out hover:-translate-y-[6px]"
      style={{ left: 377.21, top: 1978.5, width: 331.318, height: 436.112 }}
    >
<div className="absolute flex h-[436.112px] items-center justify-center left-[0px] top-[0px] w-[331.318px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="bg-[#dbecfe] border border-[#9db9d6] border-solid h-[425.372px] relative rounded-[30px] shadow-[0px_4px_18.1px_0px_rgba(0,0,0,0.11)] w-[316.742px]" />
        </div>
      </div>
      <div className="absolute flex h-[139.934px] items-center justify-center left-[11.8px] top-[11.79px] w-[298.254px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="h-[129.809px] overflow-hidden relative rounded-[24px] w-[293.925px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKakaoMap4} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[139.934px] items-center justify-center left-[11.8px] top-[11.79px] w-[298.254px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="border border-[#acc5e0] border-solid h-[129.809px] relative rounded-[24px] w-[293.925px]" />
        </div>
      </div>
      {/* location pills */}
      <div className="absolute flex h-[33.251px] items-center justify-center left-[23.07px] top-[158.4px] w-[82.866px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[81.859px]" />
        </div>
      </div>
      <div className="absolute flex h-[33.251px] items-center justify-center left-[116.14px] top-[155.17px] w-[82.866px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[81.859px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[18.344px] items-center justify-center left-[64.5px] top-[165.86px] w-[39.567px]">
        <div className="flex-none rotate-[-1.99deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[14px] text-center whitespace-nowrap">용산구</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[18.344px] items-center justify-center left-[157.57px] top-[162.62px] w-[39.567px]">
        <div className="flex-none rotate-[-1.99deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[14px] text-center whitespace-nowrap">해방촌</p>
        </div>
      </div>
      {/* title */}
      <div className="absolute flex h-[61.327px] items-center justify-center left-[31.52px] top-[189.29px] w-[213.747px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] not-italic relative text-[#2d2e30] text-[22px] whitespace-nowrap">
            <p className="leading-[normal] mb-0 whitespace-pre">{`이국적인 감성 한 스푼, `}</p>
            <p className="leading-[normal] whitespace-pre">해방촌 비밀 아지트</p>
          </div>
        </div>
      </div>
      {/* duration */}
      <div className="absolute flex items-center gap-[10px] left-[36.79px] top-[265.5px]" style={{ transform: "rotate(-1.99deg)", transformOrigin: "left center" }}>
        <div className="size-[14.43px] relative flex-none"><AvgPaceIcon /></div>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-none text-[#707070] text-[12px] whitespace-nowrap">5~6시간</p>
      </div>
      {/* dotted line */}
      <div className="absolute flex h-[50.051px] items-center justify-center left-[61.1px] top-[326.75px] w-[1.739px]">
        <div className="flex-none rotate-[88.01deg]">
          <div className="h-0 relative w-[50.081px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgLine16} width="50.081" />
            </div>
          </div>
        </div>
      </div>
      {/* spot names */}
      <div className="absolute flex h-[18.961px] items-center justify-center left-[146.44px] top-[299.37px] w-[28.608px]">
        <div className="flex-none rotate-[-1.99deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">애일</p>
        </div>
      </div>
      <div className="absolute flex h-[20.871px] items-center justify-center left-[147.83px] top-[337.55px] w-[83.575px]">
        <div className="flex-none rotate-[-1.99deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">소프커피앤바</p>
        </div>
      </div>
      <div className="absolute flex h-[19.447px] items-center justify-center left-[149.21px] top-[378.56px] w-[42.6px]">
        <div className="flex-none rotate-[-1.99deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">길바닥</p>
        </div>
      </div>
      {/* tag pills */}
      <CardTagPill leftBox={27.81} topBox={295.50} leftText={60.60} topText={300.91} rotate="-1.99deg" boxW={65.551} boxH={32.65} label="식사" />
      <CardTagPill leftBox={29.20} topBox={335.59} leftText={62.00} topText={341.00} rotate="-1.99deg" boxW={65.551} boxH={32.65} label="카페" />
      <div className="absolute flex h-[32.65px] items-center justify-center left-[30.6px] top-[375.68px] w-[65.551px]">
        <div className="flex-none rotate-[-1.99deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[64.533px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[17.657px] items-center justify-center left-[63.33px] top-[380.18px] w-[48.527px]">
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
    <div
      className="absolute transition-transform duration-300 ease-out hover:-translate-y-[6px]"
      style={{ left: 36.18, top: 2057.42, width: 380.093, height: 470.154 }}
    >
<div className="absolute flex h-[470.154px] items-center justify-center left-[0px] top-[0px] w-[380.093px]">
        <div className="flex-none rotate-[9.11deg]">
          <div className="bg-[#f9ddf6] border border-[#d5a6d0] border-solid h-[425.372px] relative rounded-[30px] shadow-[0px_4px_18.1px_0px_rgba(0,0,0,0.11)] w-[316.742px]" />
        </div>
      </div>
      <div className="absolute flex h-[174.706px] items-center justify-center left-[56.26px] top-[13.07px] w-[310.769px]">
        <div className="flex-none rotate-[9.11deg]">
          <div className="h-[129.809px] overflow-hidden relative rounded-[24px] w-[293.925px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKakaoMap5} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[174.706px] items-center justify-center left-[56.26px] top-[13.07px] w-[310.769px]">
        <div className="flex-none rotate-[9.11deg]">
          <div className="border border-[#d5a6cf] border-solid h-[129.809px] relative rounded-[24px] w-[293.925px]" />
        </div>
      </div>
      {/* location pill */}
      <div className="absolute flex h-[43.004px] items-center justify-center left-[56.25px] top-[151.88px] w-[85.644px]">
        <div className="flex-none rotate-[9.11deg]">
          <div className="bg-white h-[30.428px] relative rounded-[21.169px] w-[81.859px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[22.96px] items-center justify-center left-[99.07px] top-[161.9px] w-[41.2px]">
        <div className="flex-none rotate-[9.11deg]">
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#2d2e30] text-[14px] text-center whitespace-nowrap">성수동</p>
        </div>
      </div>
      {/* title */}
      <div className="absolute flex h-[93.216px] items-center justify-center left-[53.99px] top-[188.25px] w-[257.371px]">
        <div className="flex-none rotate-[9.11deg]">
          <div className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] not-italic relative text-[#2d2e30] text-[22px] whitespace-nowrap">
            <p className="leading-[normal] mb-0 whitespace-pre">{`피자 장인과 스페셜티 커피, `}</p>
            <p className="leading-[normal] whitespace-pre">성수 정복 코스</p>
          </div>
        </div>
      </div>
      {/* duration */}
      <div className="absolute flex items-center gap-[10px] left-[52.82px] top-[255.08px]" style={{ transform: "rotate(9.11deg)", transformOrigin: "left center" }}>
        <div className="size-[14.43px] relative flex-none"><AvgPaceIcon /></div>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-none text-[#707070] text-[12px] whitespace-nowrap">4~5시간</p>
      </div>
      {/* dotted line */}
      <div className="absolute flex h-[49.449px] items-center justify-center left-[58.6px] top-[321.61px] w-[7.929px]">
        <div className="flex-none rotate-[99.11deg]">
          <div className="h-0 relative w-[50.081px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgLine16} width="50.081" />
            </div>
          </div>
        </div>
      </div>
      {/* spot names */}
      <div className="absolute flex h-[26.639px] items-center justify-center left-[160px] top-[307.85px] w-[58.143px]">
        <div className="flex-none rotate-[9.11deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">마리오네</p>
        </div>
      </div>
      <div className="absolute flex h-[24.422px] items-center justify-center left-[153.7px] top-[347.45px] w-[44.32px]">
        <div className="flex-none rotate-[9.11deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">로우키</p>
        </div>
      </div>
      <div className="absolute flex h-[26.639px] items-center justify-center left-[147.6px] top-[386.57px] w-[58.143px]">
        <div className="flex-none rotate-[9.11deg]">
          <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#2d2e30] text-[15px] whitespace-nowrap">성수연방</p>
        </div>
      </div>
      {/* tag pills */}
      <CardTagPill leftBox={34.58} topBox={286.73} leftText={68.77} topText={297.55} rotate="9.11deg" boxW={68.537} boxH={40.261} label="식사" />
      <CardTagPill leftBox={28.27} topBox={326.34} leftText={62.46} topText={337.17} rotate="9.11deg" boxW={68.537} boxH={40.261} label="카페" />
      <CardTagPill leftBox={21.92} topBox={365.95} leftText={56.15} topText={376.27} rotate="9.11deg" boxW={68.537} boxH={40.261} label="팝업" />
    </div>
  );
}

function PinkStarsLabel() {
  return (
    <div className="absolute contents h-[47.026px] left-[657.63px] top-[2007.17px] w-[143.88px]">
      <div className="absolute flex h-[47.026px] items-center justify-center left-[657.63px] top-[2007.17px] w-[143.88px]">
        <div className="flex-none rotate-[-6.33deg]">
          <div className="bg-[#f7bdf7] h-[31.642px] relative rounded-[15.821px] w-[141.252px]" style={{ boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }} />
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
      <div className="absolute flex items-center justify-center left-[1110.96px] size-[224.853px] top-[2403.44px] z-10">
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
      <div className="absolute flex items-center justify-center left-[1110.96px] size-[224.853px] top-[2403.44px] pointer-events-none z-10">
        <div className="flex-none rotate-[4.74deg] flex flex-col items-center gap-[8px]">
          <div className="h-px w-[60.547px] bg-black" />
          <p className="font-['Prompt',sans-serif] italic font-light text-[15.79px] text-black tracking-[0.6316px] leading-none whitespace-nowrap">
            don&rsquo;t worry
          </p>
          <p className="font-['Prompt',sans-serif] italic font-light text-black leading-none whitespace-nowrap inline-flex items-baseline gap-[2px]">
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
    <div className="absolute left-[309.16px] size-[136.101px] top-[2371.1px]" style={{ filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.12))" }}>
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
      <div className="-translate-x-1/2 absolute bg-[#f7f7f7] h-[960px] left-[calc(50%-0.5px)] top-[1697.99px] w-[1441px]" />

      {/* Main heading */}
      <div
        className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-medium leading-[0] left-[130px] text-[#2d2e30] text-[40px] top-[1780.95px] whitespace-nowrap"
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
