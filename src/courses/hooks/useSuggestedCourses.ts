"use client";

import { useState } from "react";
import { SuggestedCoursesData } from "@/courses/types/course";

const MOCK_COURSES: SuggestedCoursesData = {
  mainCourse: {
    id: "course-1",
    name: "용문에서 탄방까지, 가볍게 걷는 하루",
    description:
      "용문역에서 출발해 탄방까지 이어지는,\n가볍게 이동하며 즐기기 좋은 도심 데이트 코스",
    locations: ["용문역", "탄방동"],
    startTime: "14:00",
    keywords: [
      { label: "산책코스" },
      { label: "커피맛집" },
      { label: "감성" },
    ],
    imageUrl: "https://picsum.photos/seed/hangang/800/600",
    places: [
      {
        id: "place-1-1",
        name: "카페 온더테이블",
        description: "용문역 근처 감성 브런치 카페, 한적한 분위기에서 여유롭게 시작하기 좋아요",
        location: "용문역",
        time: "14:00",
        imageUrl: "https://picsum.photos/seed/cafe1/400/300",
        type: "cafe",
      },
      {
        id: "place-1-2",
        name: "탄방동 이탈리안 키친",
        description: "탄방동 골목 안에 위치한 파스타 맛집, 신선한 재료로 만드는 홈메이드 파스타",
        location: "탄방동",
        time: "17:00",
        imageUrl: "https://picsum.photos/seed/restaurant1/400/300",
        type: "restaurant",
      },
      {
        id: "place-1-3",
        name: "루프탑 바 노을",
        description: "탄방동 루프탑에서 즐기는 노을과 칵테일, 로맨틱한 저녁을 마무리하기 제격",
        location: "탄방동",
        time: "19:30",
        imageUrl: "https://picsum.photos/seed/bar1/400/300",
        type: "restaurant",
      },
    ],
  },
  subCourses: [
    {
      id: "course-2",
      name: "카페, 맛집, 그리고 칵테일까지 완벽한 코스",
      description:
        "죽동 카페에서 여유롭게 시작해, 유성온천 맛집을 거쳐 감성 칵테일바로 마무리하는 하루 코스",
      locations: ["죽동", "유성온천"],
      startTime: "14:00",
      keywords: [
        { label: "예쁜카페" },
        { label: "칵테일" },
      ],
      imageUrl: "https://picsum.photos/seed/hongdae/800/600",
      places: [
        {
          id: "place-2-1",
          name: "죽동 스페셜티 커피",
          description: "핸드드립 커피 전문점, 원두 직접 선택 가능한 아늑한 카페",
          location: "죽동",
          time: "14:00",
          imageUrl: "https://picsum.photos/seed/cafe2/400/300",
          type: "cafe",
        },
        {
          id: "place-2-2",
          name: "유성온천 숯불갈비",
          description: "유성온천 인근 30년 전통 숯불갈비 전문점, 부드러운 고기와 직화 맛이 일품",
          location: "유성온천",
          time: "18:00",
          imageUrl: "https://picsum.photos/seed/restaurant2/400/300",
          type: "restaurant",
        },
      ],
    },
    {
      id: "course-3",
      name: "카페, 맛집, 그리고 칵테일까지 완벽한 코스",
      description:
        "죽동 카페에서 여유롭게 시작해, 유성온천 맛집을 거쳐 감성 칵테일바로 마무리하는 하루 코스",
      locations: ["죽동", "유성온천"],
      startTime: "14:00",
      keywords: [{ label: "예쁜카페" }, { label: "칵테일" }],
      imageUrl: "https://picsum.photos/seed/seongsu/800/600",
      places: [
        {
          id: "place-3-1",
          name: "감성 플리마켓 카페",
          description: "주말마다 열리는 플리마켓과 함께하는 복합문화공간 카페",
          location: "죽동",
          time: "14:00",
          imageUrl: "https://picsum.photos/seed/cafe3/400/300",
          type: "cafe",
        },
        {
          id: "place-3-2",
          name: "온천동 크래프트 칵테일바",
          description: "유성온천 골목의 숨은 명소, 바텐더가 직접 제안하는 시그니처 칵테일",
          location: "유성온천",
          time: "20:00",
          imageUrl: "https://picsum.photos/seed/bar2/400/300",
          type: "restaurant",
        },
      ],
    },
  ],
};

export function useSuggestedCourses() {
  const [data] = useState<SuggestedCoursesData>(MOCK_COURSES);
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);

  return { data, isLoading, error };
}
