import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { TRYAGAIN_CLICK_EVENT_NAME } from "@/courses/types/events";
import type { TryAgainClickEvent } from "@/courses/types/events";

export { TRYAGAIN_CLICK_EVENT_NAME };

export function buildTryAgainClickEvent(page_path: string): TryAgainClickEvent {
  return {
    event_name: TRYAGAIN_CLICK_EVENT_NAME,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_path,
  };
}

export async function trackTryAgainClick(page_path: string): Promise<void> {
  const event = buildTryAgainClickEvent(page_path);
  try {
    await trackEvent(event, "/courses/events");
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[TryAgainTracking] tryagain_click 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}
