"use client";

import { Suspense, useEffect, useState } from "react";

export const dynamic = "force-dynamic";
import TryAgain from "@/courses/ui/components/try_again/TryAgain";
import RecommendationCourseList from "@/courses/ui/components/recommendation_courses/RecommendationCourseList";
import RecommendationLoading from "@/courses/ui/components/recommendation_courses/RecommendationLoading";
import CommonLayoutComponent from "@/components/layout/CommonLayoutComponent";
import TextChipComponent from "@/courses/ui/components/chip/TextChipComponent";

function toAmPmTime(time: string): string {
  const [hStr, mStr] = time.split(":");
  const hour = parseInt(hStr, 10);
  if (Number.isNaN(hour)) return time;

  const period = hour < 12 ? "오전" : "오후";
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${period} ${displayHour}시`;
}

export default function RecommendationPage1() {
  const [area, setArea] = useState("");
  const [start_time, setStartTime] = useState("");
  const [transport, setTransport] = useState("walk");

  useEffect(() => {
    const saved = sessionStorage.getItem("mje_search_params");
    if (!saved) return;
    try {
      const params = JSON.parse(saved);
      setArea(params.area ?? "");
      setStartTime(params.start_time ?? "");
      setTransport(params.transport ?? "walk");
    } catch {}
  }, []);

  const transportLabelMap: Record<string, string> = {
    walk: "도보",
    public_transit: "대중교통",
    transit: "대중교통",
    car: "자동차",
  };
  const transportLabel = transport
    ? (transportLabelMap[transport] ?? transport)
    : undefined;

  return (
    <CommonLayoutComponent
      containerClassName="relative z-10 mx-auto max-w-[1200px] px-4 md:px-10 lg:px-[120px]"
      blobs={[
        {
          className:
            "pointer-events-none absolute rounded-full left-[-58px] top-[30px] md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
          style: {
            width: "849px",
            height: "849px",
            background: "rgba(191, 219, 254, 0.5)",
            filter: "blur(250px)",
          },
        },
      ]}
    >
      {/* Hero */}
      <section className="flex flex-col items-start md:pb-10 pt-[21px] md:pt-[64px] lg:pt-[80px] lg:-ml-[320px] text-left">
        {/* chip  */}
        <TextChipComponent>추천 코스</TextChipComponent>

        <h1
          className="mt-[14px] text-[21px] md:text-[32px] lg:text-[40px] font-bold leading-tight text-[#222222]/90"
          style={{
            fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
          }}
        >
          당신을 위한 데이트 코스
        </h1>

        <div className="mt-[7px] flex items-center gap-[3px]">
          <p
            className="text-[11px] md:text-[14px] text-[#222222]/70 font-bold underline"
            style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
            }}
          >
            {area}, {start_time && toAmPmTime(start_time)}, {transportLabel}{" "}
            이용
          </p>
          <p className="text-[11px] text-[#222222]/60">코스를 구성했어요.</p>
        </div>
      </section>

      {/* Cards */}
      <Suspense fallback={<RecommendationLoading />}>
        <RecommendationCourseList />
      </Suspense>

      {/* 다시 검색하기 */}
      <div className="pb-20">
        <TryAgain />
      </div>
    </CommonLayoutComponent>
  );
}
