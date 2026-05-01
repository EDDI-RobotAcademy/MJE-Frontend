import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { COURSE_CREATE_EVENT_NAME } from "@/courses/types/events";

export { COURSE_CREATE_EVENT_NAME };

export async function trackCourseCreate(): Promise<void> {
  const event = {
    event_name: COURSE_CREATE_EVENT_NAME,
    session_id: getSessionId(),
  };
  try {
    await trackEvent(event, "/courses/events");
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
