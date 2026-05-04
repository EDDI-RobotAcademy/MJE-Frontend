import { apiClient, ApiError } from "@/infrastructure/api";

export const COURSE_IMAGE_NOT_FOUND = "추천 이미지 없음" as const;

interface CourseImageResponse {
  imageUrl: string;
}

export async function fetchCourseImage(
  courseId: string,
): Promise<string | typeof COURSE_IMAGE_NOT_FOUND> {
  try {
    const response = await apiClient.get<CourseImageResponse>(
      `/recommendations/suggested-courses/${courseId}/image`,
    );
    return response.imageUrl;
  } catch (error) {
    if (error instanceof ApiError) {
      return COURSE_IMAGE_NOT_FOUND;
    }
    return COURSE_IMAGE_NOT_FOUND;
  }
}
