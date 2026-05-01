"use client";

import { useState } from "react";
import { SuggestedCoursesData } from "@/courses/types/course";

const MOCK_COURSES: SuggestedCoursesData = {
  mainCourse: {
    id: "course-1",
    name: "한강 노을 감성 코스",
    description:
      "한강에서의 로맨틱한 저녁 산책을 시작으로, 인근 카페와 야경 포인트를 돌아보는 코스에요.",
    keywords: [
      { label: "한강뷰" },
      { label: "로맨틱" },
      { label: "야경" },
      { label: "산책" },
    ],
    location: "여의도동",
    imageUrl: "https://picsum.photos/seed/hangang/800/400",
  },
  subCourses: [
    {
      id: "course-2",
      name: "홍대 감성 스팟 코스",
      description:
        "트렌디한 홍대 거리를 걸으며 숨겨진 카페와 갤러리를 발견하는 코스에요.",
      keywords: [
        { label: "트렌디" },
        { label: "카페거리" },
        { label: "젊은감성" },
      ],
    },
    {
      id: "course-3",
      name: "성수동 힙한 데이트",
      description:
        "힙한 성수동의 카페와 팝업스토어를 돌아보는 핫플 데이트 코스에요.",
      keywords: [{ label: "성수" }, { label: "힙스터" }, { label: "팝업스토어" }],
    },
  ],
};

export function useSuggestedCourses() {
  const [data] = useState<SuggestedCoursesData>(MOCK_COURSES);
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);

  return { data, isLoading, error };
}
