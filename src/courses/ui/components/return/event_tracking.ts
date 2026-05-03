import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { RETURN_CLICK_EVENT_NAME } from "@/courses/types/events";
import type { ReturnClickEvent } from "@/courses/types/events";

export { RETURN_CLICK_EVENT_NAME };

export function buildReturnClickEvent(page_path: string): ReturnClickEvent {
  return {
    event_name: RETURN_CLICK_EVENT_NAME,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_path,
  };
}

export async function trackReturnClick(page_path: string): Promise<void> {
  const event = buildReturnClickEvent(page_path);
  try {
    await trackEvent(event, "/courses/events");
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[ReturnTracking] return_click 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}
