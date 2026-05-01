import { apiClient, ApiError } from "@/infrastructure/api";

export const COURSE_EXPLAIN_TEXT_NOT_FOUND = "추천 문구 없음" as const;

interface CourseExplainTextResponse {
  name: string;
  description: string;
}

export type CourseExplainTextResult =
  | CourseExplainTextResponse
  | typeof COURSE_EXPLAIN_TEXT_NOT_FOUND;

export async function fetchCourseExplainText(
  courseId: string,
): Promise<CourseExplainTextResult> {
  try {
    const response = await apiClient.get<CourseExplainTextResponse>(
      `/recommendation/suggested-courses/${courseId}/explain-text`,
    );
    return response;
  } catch (error) {
    if (error instanceof ApiError) {
      return COURSE_EXPLAIN_TEXT_NOT_FOUND;
    }
    return COURSE_EXPLAIN_TEXT_NOT_FOUND;
  }
}
