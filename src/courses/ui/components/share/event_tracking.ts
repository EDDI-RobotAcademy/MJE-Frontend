import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { COURSE_EXPORT_EVENT_NAME, COURSE_SEND_EVENT_NAME, EXPORT_CLOSE_EVENT_NAME, COURSE_SHARE_EVENT_NAME, COPY_LINK_EVENT_NAME, SHARE_CLOSE_EVENT_NAME } from "@/courses/types/events";
import type { CourseExportEvent, CourseSendEvent, ExportCloseEvent, CourseShareEvent, CopyLinkEvent, ShareCloseEvent } from "@/courses/types/events";

export { COURSE_EXPORT_EVENT_NAME, COURSE_SEND_EVENT_NAME, EXPORT_CLOSE_EVENT_NAME, COURSE_SHARE_EVENT_NAME, COPY_LINK_EVENT_NAME, SHARE_CLOSE_EVENT_NAME };

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
    await trackEvent(event, "/export-logs");
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

export function buildCourseSendEvent(
  courseId: string,
  courseTitle: string,
): CourseSendEvent {
  return {
    event_name: COURSE_SEND_EVENT_NAME,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    course_id: courseId,
    course_title: courseTitle,
  };
}

export async function trackSendClick(
  courseId: string,
  courseTitle: string,
): Promise<void> {
  const event = buildCourseSendEvent(courseId, courseTitle);
  try {
    await trackEvent(event, "/export-logs");
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[ExportTracking] course_send 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}

export function buildExportCloseEvent(
  courseId: string,
  courseTitle: string,
): ExportCloseEvent {
  return {
    event_name: EXPORT_CLOSE_EVENT_NAME,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    course_id: courseId,
    course_title: courseTitle,
  };
}

export async function trackCloseClick(
  courseId: string,
  courseTitle: string,
): Promise<void> {
  const event = buildExportCloseEvent(courseId, courseTitle);
  try {
    await trackEvent(event, "/export-logs");
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[ExportTracking] export_close 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}

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
