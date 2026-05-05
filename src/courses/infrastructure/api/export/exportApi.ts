import { apiClient, ApiError } from "@/infrastructure/api";

export interface ExportCourseRequest {
  courseId: string;
  email: string;
}

export interface ExportCourseResult {
  success: boolean;
}

export async function exportCourse(
  request: ExportCourseRequest,
): Promise<ExportCourseResult> {
  try {
    await apiClient.post<void>("/api/v1/emails/send-course", {
      email: request.email,
      course_id: request.courseId,
    });
    return { success: true };
  } catch (error) {
    if (error instanceof ApiError) {
      return { success: false };
    }
    return { success: false };
  }
}
