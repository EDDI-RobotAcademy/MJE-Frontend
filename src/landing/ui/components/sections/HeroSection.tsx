import svgPaths from "@/landing/ui/components/assets/svgPaths";
import { imgHeroOverlay } from "@/landing/ui/components/assets/images";
import LandingNavbar from "@/landing/ui/components/sections/LandingNavbar";

function DecorativeBlobs() {
  return (
    <div className="-translate-x-1/2 absolute h-[1260.729px] left-[calc(50%-3.62px)] top-[188.61px] w-[1312.36px]">
      <div className="absolute inset-[-39.66%_-38.1%_-39.66%_-34.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2260.73 2260.73">
          <g>
            <g filter="url(#filter0_f_hero)">
              <circle cx="1130.36" cy="1130.36" fill="#D5E6F6" r="630.365" />
            </g>
            <g filter="url(#filter1_f_hero)">
              <circle cx="734.363" cy="785.994" fill="#FCAD9E" fillOpacity="0.25" r="285.994" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2260.73" id="filter0_f_hero" width="2260.73" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="250" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1371.99" id="filter1_f_hero" width="1371.99" x="48.3691" y="100">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="200" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function CtaButton() {
  return (
    <>
      <div className="absolute h-[44.184px] left-[130px] rounded-[22.092px] top-[599.21px] w-[271.569px]" style={{ backgroundImage: "linear-gradient(109.889deg, rgba(138, 175, 230, 0.74) 3.3578%, rgba(213, 230, 246, 0.74) 104.08%)" }} />
      <div className="absolute bg-[rgba(255,255,255,0.1)] h-[44.184px] left-[130px] rounded-[22.092px] shadow-[0px_3px_17.1px_0px_rgba(255,255,255,0.7)] top-[599.21px] w-[271.569px]" />
      <p className="[word-break:break-word] absolute font-['Prompt:Medium','Noto_Sans_KR:Medium',sans-serif] leading-[22px] left-[183.84px] text-[#2a4874] text-[16px] top-[611.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 500" }}>
        데이트 코스 만들기 !
      </p>
      <div className="absolute left-[327.78px] size-[19.943px] top-[612.33px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9434 19.9434">
          <g>
            <mask height="20" id="mask_arrow_right" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
              <rect fill="#D9D9D9" height="19.9434" width="19.9434" />
            </mask>
            <g mask="url(#mask_arrow_right)">
              <path d={svgPaths.pde23d00} fill="#2A4874" />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}

function StatEllipses() {
  return (
    <>
      {/* Colored ellipses */}
      <div className="absolute flex h-[196.914px] items-center justify-center left-[1031.17px] top-[246.12px] w-[262.002px]">
        <div className="flex-none rotate-[-14.21deg] skew-x-[-4.37deg]">
          <div className="h-[138.605px] relative w-[245.841px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245.841 138.605">
              <ellipse cx="122.92" cy="69.3026" fill="#DBECFE" rx="122.92" ry="69.3026" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[196.914px] items-center justify-center left-[1031.17px] top-[368.94px] w-[262.002px]">
        <div className="flex-none rotate-[-14.21deg] skew-x-[-4.37deg]">
          <div className="h-[138.605px] relative w-[245.841px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245.841 138.605">
              <ellipse cx="122.92" cy="69.3026" fill="#F9DDF6" rx="122.92" ry="69.3026" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[196.914px] items-center justify-center left-[1031.17px] top-[491.75px] w-[262.002px]">
        <div className="flex-none rotate-[-14.21deg] skew-x-[-4.37deg]">
          <div className="h-[138.605px] relative w-[245.841px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245.841 138.605">
              <ellipse cx="122.92" cy="69.3026" fill="white" rx="122.92" ry="69.3026" />
            </svg>
          </div>
        </div>
      </div>
      {/* Black hand-drawn ellipse outlines */}
      <div className="absolute flex h-[215.708px] items-center justify-center left-[1023.94px] top-[236.72px] w-[276.472px]">
        <div className="flex-none rotate-[-20.34deg] skew-x-[-4.37deg]">
          <div className="h-[131.732px] relative w-[256.205px]">
            <div className="absolute inset-[-0.87%_-0.34%_-0.81%_-0.45%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 258.233 133.952">
                <path d={svgPaths.p1fabef80} fill="#2D2E30" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[215.708px] items-center justify-center left-[1023.94px] top-[359.54px] w-[276.472px]">
        <div className="flex-none rotate-[-20.34deg] skew-x-[-4.37deg]">
          <div className="h-[131.732px] relative w-[256.205px]">
            <div className="absolute inset-[-0.87%_-0.34%_-0.81%_-0.45%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 258.233 133.952">
                <path d={svgPaths.p1fabef80} fill="#2D2E30" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[215.708px] items-center justify-center left-[1023.94px] top-[482.35px] w-[276.472px]">
        <div className="flex-none rotate-[-20.34deg] skew-x-[-4.37deg]">
          <div className="h-[131.732px] relative w-[256.205px]">
            <div className="absolute inset-[-0.87%_-0.34%_-0.81%_-0.45%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 258.233 133.952">
                <path d={svgPaths.p1fabef80} fill="#2D2E30" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Stats text */}
      <div className="[word-break:break-word] absolute contents leading-[normal] left-[1086.68px] not-italic text-center top-[305px] whitespace-nowrap">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] left-[1162.18px] text-[#273b62] text-[45px] top-[305px]">3,200+</p>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] left-[1162.18px] text-[#2d2e30] text-[15px] top-[366.16px]">생성된 코스</p>
      </div>
      <div className="[word-break:break-word] absolute contents leading-[normal] left-[1094.18px] not-italic text-center top-[427.89px] whitespace-nowrap">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] left-[1162.68px] text-[#644160] text-[45px] top-[427.89px]">10 Sec</p>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] left-[1164.83px] text-[#2d2e30] text-[15px] top-[488.89px]">코스 생성 평균 속도</p>
      </div>
      <div className="[word-break:break-word] absolute contents leading-[normal] left-[1115.68px] not-italic text-[#2d2e30] text-center top-[550.62px] whitespace-nowrap">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] left-[1164.18px] text-[45px] top-[550.62px]">98%</p>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] left-[1162.18px] text-[15px] top-[611.79px]">만족도</p>
      </div>
    </>
  );
}

function Stars() {
  return (
    <>
      <div className="absolute h-[49.814px] left-[1003.63px] top-[258.63px] w-[28.847px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.8467 49.8135">
          <path d={svgPaths.p19b03300} fill="#FFC0FC" stroke="#2D2E30" strokeWidth="3" />
        </svg>
      </div>
      <div className="absolute h-[49.814px] left-[1281.15px] top-[614.78px] w-[28.847px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.8467 49.8135">
          <path d={svgPaths.p19b03300} fill="#ACCAF5" stroke="#2D2E30" strokeWidth="3" />
        </svg>
      </div>
      <div className="absolute h-[42.128px] left-[984.43px] top-[291.74px] w-[24.396px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3961 42.128">
          <path d={svgPaths.p27876900} fill="white" stroke="#2D2E30" strokeWidth="3" />
        </svg>
      </div>
    </>
  );
}

function ScrollDownIndicator() {
  return (
    <>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Prompt:Regular',sans-serif] leading-[normal] left-[730.92px] not-italic text-[#7a8290] text-[14.555px] text-center top-[787.53px] whitespace-nowrap">Scroll Down</p>
      <div className="absolute flex inset-[17.06%_52.82%_82.54%_45.91%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(50cqw,50cqh)] w-[hypot(50cqw,-50cqh)]">
          <div className="relative size-full">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9381 12.9381">
              <path d={svgPaths.p1c3f1200} fill="#7A8290" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default function HeroSection() {
  return (
    <>
      <DecorativeBlobs />
      {/* Hero overlay image — top of canvas, mix-blend-overlay */}
      <div className="-translate-x-1/2 absolute h-[849.985px] left-1/2 top-0 w-[1501.959px]">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-overlay object-cover pointer-events-none size-full" src={imgHeroOverlay} />
      </div>
      <LandingNavbar />
      {/* Light-blue highlight under sub-copy */}
      <div className="-translate-x-1/2 absolute bg-[#d5e6f6] h-[13.861px] left-[calc(50%-421.46px)] top-[254.12px] w-[337.083px]" />
      {/* Sub-copy under main heading */}
      <p className="[word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[22px] left-[calc(50%-562.64px)] text-[#797979] text-[15px] top-[443.47px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        맛집·카페·놀거리까지 한 번에
      </p>
      <p className="[word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[22px] left-[calc(50%-562.64px)] text-[#797979] text-[15px] top-[470.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        원하는 조건 3가지만 입력하면 데이트 준비 끝
      </p>
      {/* Highlighted phrase */}
      <p className="[word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[22px] left-[135.99px] text-[#333] text-[20px] top-[246.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        데이트코스 고민 30분, 이제 30초로 !
      </p>
      <CtaButton />
      {/* Main heading */}
      <div className="[word-break:break-word] absolute font-['Pretendard:SemiBold',sans-serif] leading-[0] left-[calc(50%-590px)] not-italic text-[0px] text-black top-[292.11px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 text-[#2a4874] text-[40px]">데이트코스 계획이 어려운 커플들을 위한</p>
        <p className="leading-[normal] text-[#2d2e30] text-[64px]">가장 쉬운 데이트코스 플래닝</p>
      </div>
      <StatEllipses />
      <Stars />
      <ScrollDownIndicator />
    </>
  );
}
