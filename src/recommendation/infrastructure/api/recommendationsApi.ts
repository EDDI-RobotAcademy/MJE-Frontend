import { apiClient, ApiError } from "@/infrastructure/api";
import { RecommendationsResponse } from "@/recommendation/types";

export async function fetchRecommendations(): Promise<RecommendationsResponse> {
  try {
    return await apiClient.get<RecommendationsResponse>("/courses/recommendations", {
      cache: "no-store",
    });
  } catch (error) {
    if (error instanceof ApiError) {
      return { courses: [], shortage_reasons: ["추천 코스를 불러오는 데 실패했어요."] };
    }
    return { courses: [], shortage_reasons: [] };
  }
}
