import { apiClient, ApiError } from "@/infrastructure/api";

export const COURSE_LOCATION_NOT_FOUND = "추천 장소 없음" as const;

interface CourseLocationResponse {
  location: string;
}

export async function fetchCourseLocation(
  courseId: string,
): Promise<string | typeof COURSE_LOCATION_NOT_FOUND> {
  try {
    const response = await apiClient.get<CourseLocationResponse>(
      `/recommendations/suggested-courses/${courseId}/location`,
    );
    return response.location;
  } catch (error) {
    if (error instanceof ApiError) {
      return COURSE_LOCATION_NOT_FOUND;
    }
    return COURSE_LOCATION_NOT_FOUND;
  }
}
