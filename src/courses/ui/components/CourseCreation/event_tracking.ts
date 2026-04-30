import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { COURSE_CREATE_EVENT_NAME } from "@/courses/types/events";
import type { CourseCreateEvent } from "@/courses/types/events";

export { COURSE_CREATE_EVENT_NAME };

export function buildCourseCreateEvent(
  page_path: string,
  result: CourseCreateEvent["result"],
): CourseCreateEvent {
  return {
    event_name: COURSE_CREATE_EVENT_NAME,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_path,
    result,
  };
}

export async function trackCourseCreate(
  page_path: string,
  result: CourseCreateEvent["result"],
): Promise<void> {
  const event = buildCourseCreateEvent(page_path, result);
  try {
    await trackEvent(event);
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[CourseCreationTracking] course_create 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}
