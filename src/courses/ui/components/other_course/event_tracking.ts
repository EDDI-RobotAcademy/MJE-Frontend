import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { OPTIONCARD_CLICK_EVENT_NAME } from "@/courses/types/events";
import type { OptionCardClickEvent } from "@/courses/types/events";

export { OPTIONCARD_CLICK_EVENT_NAME };

export function buildOptionCardClickEvent(): OptionCardClickEvent {
  return {
    event_name: OPTIONCARD_CLICK_EVENT_NAME,
    session_id: getSessionId(),
  };
}

export async function trackOptionCardClick(): Promise<void> {
  const event = buildOptionCardClickEvent();
  try {
    await trackEvent(event, "/courses/events");
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[OptionCardTracking] optioncard_click 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}
