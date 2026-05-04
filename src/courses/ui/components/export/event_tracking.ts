import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { COURSE_EXPORT_EVENT_NAME } from "@/courses/types/events";
import type { CourseExportEvent } from "@/courses/types/events";

export { COURSE_EXPORT_EVENT_NAME };

export function buildCourseExportEvent(
  courseId: string,
  courseTitle: string,
): CourseExportEvent {
  return {
    event_name: COURSE_EXPORT_EVENT_NAME,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    course_id: courseId,
    course_title: courseTitle,
  };
}

export async function trackExportClick(
  courseId: string,
  courseTitle: string,
): Promise<void> {
  const event = buildCourseExportEvent(courseId, courseTitle);
  try {
    await trackEvent(event, "/courses/events");
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[ExportTracking] course_export 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}
