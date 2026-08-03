"use client";

import { useEffect, useState } from "react";

interface RecommendationCourseCardProps {
  badgeLabel: string;
  imageUrl: string;
  locationGu: string;
  locationDong: string;
  title: string;
  description: string;
  hashtags: string[];
  onDetailClick?: () => void;
  isActive?: boolean;
  isDimmed?: boolean;
  onActivate?: () => void;
  onDeactivate?: () => void;
}

/**
 * 모바일 / PC 사이즈 설정.
 * 여기 숫자만 바꾸면 카드 크기, padding, 폰트 크기가 바로 반영됩니다.
 * (PC 기준: 1024px 이상)
 */
const SIZE = {
  mobile: {
    width: "100%", // 모바일은 세로 스택이라 기본 폭 100%
    height: "100%",
    padding: "15px 15px 13px 15px",
    contentGap: 7, // 뱃지/이미지 아래 텍스트 블록 내부 gap
    innerGap: 15, // 설명글 ~ 해시태그 사이 gap
    image: { width: "100%", height: 166 },
    badgeFontSize: 15,
    titleFontSize: 18,
    tagFontSize: 10,
    descriptionFontSize: 11,
    hashtag: {
      width: "auto",
      height: 24,
      padding: "0 15px",
      backgroundColor: "#BFDBFE",
      fontSize: 9,
    },
    dimmed: {
      width: "95%",
      height: "95%",
      image: { width: 301.92, height: 157.11 },
      badgeFontSize: 14,
      titleFontSize: 17,
      tagFontSize: 9,
      descriptionFontSize: 10.41,
      hashtag: {
        width: "auto",
        height: 24,
        padding: "0 15px",
        backgroundColor: "rgba(34, 34, 34, 0.05)",
        fontSize: 8,
      },
    },
  },
  pc: {
    width: 526.32,
    height: 641.05,
    padding: "17.77px 21.24px 22.06px 19.76px",
    contentGap: 7,
    innerGap: 64,
    image: { width: 485.33, height: 269.05 },
    badgeFontSize: 24.34,
    titleFontSize: 29.21,
    tagFontSize: 13.05,
    descriptionFontSize: 17.85,
    hashtag: {
      width: "auto",
      height: 42.79,
      padding: "0 20px",
      backgroundColor: "#BFDBFE",
      fontSize: 16.05,
    },
    dimmed: {
      width: 507.79,
      height: 616.84,
      image: { width: 466.75, height: 259.52 },
      badgeFontSize: 23.42,
      titleFontSize: 28.11,
      tagFontSize: 12.56,
      descriptionFontSize: 17.18,
      hashtag: {
        width: "auto",
        height: 41.17,
        padding: "0 20px",
        backgroundColor: "rgba(34, 34, 34, 0.05)",
        fontSize: 15.44,
      },
    },
  },
};

const PC_BREAKPOINT = "(min-width: 1024px)";

function toCss(value: string | number): string {
  return typeof value === "number" ? `${value}px` : value;
}

function BadgeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 17.6347V16.135H20.5V17.6347C16.2042 17.6347 13.7958 17.6347 9.5 17.6347ZM9.5 12.7502V11.2502H20.5V12.7502C16.2042 12.7502 13.7958 12.7502 9.5 12.7502ZM3.5 7.86547V6.36572H20.5V7.86547C13.8611 7.86547 10.1389 7.86547 3.5 7.86547Z"
        fill="#05A66B"
      />
    </svg>
  );
}

export default function RecommendationCourseCard({
  badgeLabel,
  imageUrl,
  locationGu,
  locationDong,
  title,
  description,
  hashtags,
  onDetailClick,
  isActive = false,
  isDimmed = false,
  onActivate,
  onDeactivate,
}: RecommendationCourseCardProps) {
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(PC_BREAKPOINT);
    setIsPC(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsPC(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const s = isPC ? SIZE.pc : SIZE.mobile;
  const fontSize = (base: number, dimmedValue: number) =>
    isDimmed ? dimmedValue : base;

  return (
    <div
      tabIndex={0}
      onClick={onDetailClick}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      className="relative flex shrink-0 flex-col rounded-[15px] border-2 border-dashed drop-shadow-[3px_6px_10px_rgba(187,199,211,0.25)] cursor-pointer transition-all duration-200 outline-none"
      style={{
        borderColor: isActive ? "#05A66B" : "transparent",
        backgroundColor: isDimmed ? "rgba(250, 250, 248, 0.5)" : "#ffffff",
        width: isDimmed ? `${s.dimmed.width}px` : s.width,
        maxWidth: isDimmed ? `${s.dimmed.width}px` : s.width,
        height: isDimmed ? `${s.dimmed.height}px` : s.height,
        maxHeight: isDimmed ? `${s.dimmed.height}px` : s.height,
      }}
    >
      {/* 뱃지 */}
      <div className="flex items-center px-[13px] pt-[13px]">
        <span
          className="flex font-medium gap-[6px] justify-center items-center text-[#222222]"
          style={{
            fontFamily: "'Prompt', sans-serif",
            fontSize: fontSize(s.badgeFontSize, s.dimmed.badgeFontSize),
          }}
        >
          <BadgeIcon />
          {badgeLabel}
        </span>
      </div>

      {/* 이미지 */}
      <div className="p-[9px] pb-0">
        <img
          src={imageUrl}
          alt={title}
          className="mx-auto block rounded-[14px] object-cover"
          style={{
            width: toCss((isDimmed ? s.dimmed.image : s.image).width),
            height: toCss((isDimmed ? s.dimmed.image : s.image).height),
          }}
        />
      </div>

      {/* 텍스트 콘텐츠 */}
      <div
        className="flex flex-1 flex-col"
        style={{ gap: `${s.contentGap}px`, padding: s.padding }}
      >
        {/* 타이틀 + 지역 태그 */}
        <div className="flex items-center justify-between gap-[8px]">
          <h2
            className="min-w-0 font-bold leading-normal text-black"
            style={{
              fontSize: fontSize(s.titleFontSize, s.dimmed.titleFontSize),
            }}
          >
            {title}
          </h2>

          <div className="flex shrink-0 gap-[5px]">
            <span
              className="inline-flex items-center text-[#222222]/90 underline"
              style={{
                fontSize: fontSize(s.tagFontSize, s.dimmed.tagFontSize),
              }}
            >
              # {locationGu}
            </span>
            <span
              className="inline-flex items-center text-[#222222]/90 underline"
              style={{
                fontSize: fontSize(s.tagFontSize, s.dimmed.tagFontSize),
              }}
            >
              # {locationDong}
            </span>
          </div>
        </div>

        {/* 설명 + 해시태그 */}
        <div
          className="flex flex-1 flex-col"
          style={{ gap: `${s.innerGap}px` }}
        >
          <p
            className="whitespace-pre-line leading-normal text-[#222222]/70"
            style={{
              fontSize: fontSize(
                s.descriptionFontSize,
                s.dimmed.descriptionFontSize,
              ),
            }}
          >
            {description}
          </p>

          {/* 맨 아래 해시태그 */}
          <div className="mt-auto flex items-end justify-between">
            <div className="flex flex-wrap gap-[9px]">
              {hashtags.map((tag, i) => {
                const h = isDimmed ? s.dimmed.hashtag : s.hashtag;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center justify-center rounded-[26.74px] text-[#222222]/80 font-semibold"
                    style={{
                      width: h.width,
                      height: h.height,
                      padding: h.padding,
                      backgroundColor: isActive
                        ? s.hashtag.backgroundColor
                        : s.dimmed.hashtag.backgroundColor,
                      fontSize: h.fontSize,
                    }}
                  >
                    # {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
