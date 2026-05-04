import { apiClient, ApiError } from "@/infrastructure/api";

export const COURSE_HASHTAG_NOT_FOUND = "추천 해시태그 없음" as const;

interface CourseHashtagResponse {
  keywords: { label: string }[];
}

export type CourseHashtagResult =
  | CourseHashtagResponse
  | typeof COURSE_HASHTAG_NOT_FOUND;

export async function fetchCourseHashtag(
  courseId: string,
): Promise<CourseHashtagResult> {
  try {
    const response = await apiClient.get<CourseHashtagResponse>(
      `/recommendations/suggested-courses/${courseId}/hashtag`,
    );
    return response;
  } catch (error) {
    if (error instanceof ApiError) {
      return COURSE_HASHTAG_NOT_FOUND;
    }
    return COURSE_HASHTAG_NOT_FOUND;
  }
}
