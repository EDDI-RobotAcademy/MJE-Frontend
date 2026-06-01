import svgPaths from "@/landing/ui/components/assets/svgPaths";
import { imgHeroOverlay } from "@/landing/ui/components/assets/images";
import HeroCtaButton from "@/landing/ui/components/sections/HeroCtaButton";

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
        <p className="-translate-x-1/2 absolute font-['Pretendard',sans-serif] font-medium left-[1162.18px] text-[#273b62] text-[45px] top-[305px]">9,200+</p>
        <p className="-translate-x-1/2 absolute font-['Pretendard',sans-serif] left-[1162.18px] text-[#2d2e30] text-[14px] top-[366.16px]">생성된 코스</p>
      </div>
      <div className="[word-break:break-word] absolute contents leading-[normal] left-[1094.18px] not-italic text-center top-[427.89px] whitespace-nowrap">
        <p className="-translate-x-1/2 absolute font-['Pretendard',sans-serif] font-medium left-[1162.68px] text-[#644160] text-[45px] top-[427.89px]">10 Sec</p>
        <p className="-translate-x-1/2 absolute font-['Pretendard',sans-serif] left-[1164.83px] text-[#2d2e30] text-[14px] top-[488.89px]">코스 생성 평균 속도</p>
      </div>
      <div className="[word-break:break-word] absolute contents leading-[normal] left-[1115.68px] not-italic text-[#2d2e30] text-center top-[550.62px] whitespace-nowrap">
        <p className="-translate-x-1/2 absolute font-['Pretendard',sans-serif] font-medium left-[1164.18px] text-[45px] top-[550.62px]">98%</p>
        <p className="-translate-x-1/2 absolute font-['Pretendard',sans-serif] left-[1162.18px] text-[14px] top-[611.79px]">만족도</p>
      </div>
    </>
  );
}

/**
 * 픽셀 아트 핑크 하트 아이콘 (원본 Figma의 Group / Group69)
 * 4행 × 5열 그리드에 11개의 2.985×2.985px 핑크 사각형.
 */
function PixelHeart({ baseY }: { baseY: number }) {
  const baseX = 130;
  const cell = 2.985;
  // [col, row] — col 0~4, row 0~3
  const pixels: ReadonlyArray<readonly [number, number]> = [
    [1, 0], [3, 0],
    [0, 1], [1, 1], [2, 1], [3, 1], [4, 1],
    [1, 2], [2, 2], [3, 2],
    [2, 3],
  ];

  return (
    <>
      {pixels.map(([col, row], i) => (
        <div
          key={i}
          className="absolute bg-[#fcad9e] size-[2.985px]"
          style={{ left: baseX + col * cell, top: baseY + row * cell }}
        />
      ))}
    </>
  );
}

function Stars() {
  return (
    <>
      <div className="absolute h-[49.814px] left-[1003.63px] top-[258.63px] w-[28.847px] animate-float-y" style={{ animationDelay: '0s' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.8467 49.8135">
          <path d={svgPaths.p19b03300} fill="#FFC0FC" stroke="#2D2E30" strokeWidth="3" />
        </svg>
      </div>
      <div className="absolute h-[49.814px] left-[1281.15px] top-[614.78px] w-[28.847px] animate-float-y" style={{ animationDelay: '0.7s' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.8467 49.8135">
          <path d={svgPaths.p19b03300} fill="#ACCAF5" stroke="#2D2E30" strokeWidth="3" />
        </svg>
      </div>
      <div className="absolute h-[42.128px] left-[984.43px] top-[291.74px] w-[24.396px] animate-float-y" style={{ animationDelay: '1.3s' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3961 42.128">
          <path d={svgPaths.p27876900} fill="white" stroke="#2D2E30" strokeWidth="3" />
        </svg>
      </div>
    </>
  );
}

function ScrollDownIndicator() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 top-[787.53px]">
      <div className="animate-float-y flex items-center gap-[6px]">
        <span className="flex items-center justify-center size-[11.18px] -rotate-45 -translate-y-[2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9381 12.9381">
            <path d={svgPaths.p1c3f1200} fill="#7A8290" />
          </svg>
        </span>
        <p className="font-['Prompt:Regular',sans-serif] leading-none not-italic text-[#7a8290] text-[12.555px] whitespace-nowrap self-center">
          Scroll Down
        </p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <>
      <DecorativeBlobs />
      {/* Hero overlay image — blurred & dimmed so dot texture blends naturally with background */}
      <div className="-translate-x-1/2 absolute h-[849.985px] left-1/2 top-0 w-[1501.959px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full brightness-0 invert opacity-60" src={imgHeroOverlay} />
      </div>
      {/* Content wrapper — shift all hero content up */}
      <div className="absolute inset-0" style={{ transform: 'translateY(-40px)' }}>
        {/* Light-blue highlight under sub-copy */}
        <div className="absolute bg-[#d5e6f6] h-[13.861px] left-[135.99px] top-[254.12px] w-[310px]" />
        {/* Sub-copy under main heading — 각 줄 앞에 픽셀 하트 아이콘 */}
        <PixelHeart baseY={448.5} />
        <p className="[word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[22px] left-[calc(50%-562.64px)] text-[#797979] text-[15px] top-[443.47px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          맛집·카페·놀거리까지 한 번에
        </p>
        <PixelHeart baseY={475.63} />
        <p className="[word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[22px] left-[calc(50%-562.64px)] text-[#797979] text-[15px] top-[470.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          원하는 조건 3가지만 입력하면 데이트 준비 끝
        </p>
        {/* Highlighted phrase */}
        <p className="[word-break:break-word] absolute font-['Prompt:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[22px] left-[135.99px] text-[#333] text-[20px] top-[246.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          데이트코스 고민 30분, 이제 30초로 !
        </p>
        <HeroCtaButton />
        {/* Main heading */}
        <div className="[word-break:break-word] absolute font-['Pretendard',sans-serif] font-semibold leading-[0] left-[calc(50%-590px)] not-italic text-[0px] text-black top-[292.11px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 text-[#2a4874] text-[40px]">데이트코스 계획이 어려운 커플들을 위한</p>
          <p className="leading-[normal] text-[#2d2e30] text-[64px]">가장 쉬운 데이트코스 플래닝</p>
        </div>
        <StatEllipses />
        <Stars />
        <ScrollDownIndicator />
      </div>
    </>
  );
}
