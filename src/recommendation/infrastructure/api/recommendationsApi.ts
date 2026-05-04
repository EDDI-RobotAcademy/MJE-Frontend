import { RecommendationsResponse } from "@/recommendation/types";

export interface FetchRecommendationsParams {
  area: string;
  start_time: string;
  transport: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchRecommendations(
  params: FetchRecommendationsParams,
): Promise<RecommendationsResponse> {
  try {
    const response = await fetch(`${BASE_URL}/courses/recommendations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    if (!response.ok) {
      return { courses: [], shortage_reasons: ["추천 코스를 불러오는 데 실패했어요."] };
    }
    return response.json();
  } catch {
    return { courses: [], shortage_reasons: [] };
  }
}
