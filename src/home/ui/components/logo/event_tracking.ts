import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { LOGO_CLICK_EVENT_NAME } from "@/home/types/events";
import type { LogoClickEvent } from "@/home/types/events";

export { LOGO_CLICK_EVENT_NAME };

export function buildLogoClickEvent(page_path: string): LogoClickEvent {
  return {
    event_name: LOGO_CLICK_EVENT_NAME,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_path,
  };
}

export async function trackLogoClick(page_path: string): Promise<void> {
  const event = buildLogoClickEvent(page_path);
  try {
    await trackEvent(event);
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[LogoTracking] logo_click 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}
