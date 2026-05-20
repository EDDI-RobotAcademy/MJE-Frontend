import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { COURSE_SHARE_EVENT_NAME, COPY_LINK_EVENT_NAME, SHARE_CLOSE_EVENT_NAME } from "@/courses/types/events";
import type { CourseShareEvent, CopyLinkEvent, ShareCloseEvent } from "@/courses/types/events";

export function buildCourseShareEvent(
  courseId: string,
  courseTitle: string,
): CourseShareEvent {
  return {
    event_name: COURSE_SHARE_EVENT_NAME,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    course_id: courseId,
    course_title: courseTitle,
  };
}

export async function trackShareClick(
  courseId: string,
  courseTitle: string,
): Promise<void> {
  const event = buildCourseShareEvent(courseId, courseTitle);
  try {
    await trackEvent(event, "/export-logs");
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[ShareTracking] course_share 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}

export function buildCopyLinkEvent(
  courseId: string,
  courseTitle: string,
): CopyLinkEvent {
  return {
    event_name: COPY_LINK_EVENT_NAME,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    course_id: courseId,
    course_title: courseTitle,
  };
}

export async function trackCopyLinkClick(
  courseId: string,
  courseTitle: string,
): Promise<void> {
  const event = buildCopyLinkEvent(courseId, courseTitle);
  try {
    await trackEvent(event, "/export-logs");
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[ShareTracking] copy_link 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}

export function buildShareCloseEvent(
  courseId: string,
  courseTitle: string,
): ShareCloseEvent {
  return {
    event_name: SHARE_CLOSE_EVENT_NAME,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    course_id: courseId,
    course_title: courseTitle,
  };
}

export async function trackShareCloseClick(
  courseId: string,
  courseTitle: string,
): Promise<void> {
  const event = buildShareCloseEvent(courseId, courseTitle);
  try {
    await trackEvent(event, "/export-logs");
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[ShareTracking] share_close 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}
