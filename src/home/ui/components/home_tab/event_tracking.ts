import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { HOME_CLICK_EVENT_NAME } from "@/home/types/events";
import type { HomeClickEvent } from "@/home/types/events";

export { HOME_CLICK_EVENT_NAME };

export function buildHomeClickEvent(page_path: string): HomeClickEvent {
  return {
    event_name: HOME_CLICK_EVENT_NAME,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_path,
  };
}

export async function trackHomeClick(page_path: string): Promise<void> {
  const event = buildHomeClickEvent(page_path);
  try {
    await trackEvent(event);
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[HomeTabTracking] home_click 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}
