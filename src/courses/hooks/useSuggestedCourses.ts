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
    },
  ],
};

export function useSuggestedCourses() {
  const [data] = useState<SuggestedCoursesData>(MOCK_COURSES);
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);

  return { data, isLoading, error };
}
