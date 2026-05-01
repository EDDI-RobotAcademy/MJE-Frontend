import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { CARD_CLICK_EVENT_NAME } from "@/courses/types/events";
import type { CardClickEvent } from "@/courses/types/events";

export { CARD_CLICK_EVENT_NAME };

export function buildCardClickEvent(
  page_path: string,
  course_id: string,
  course_name: string,
  card_type: CardClickEvent["card_type"],
): CardClickEvent {
  return {
    event_name: CARD_CLICK_EVENT_NAME,
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_path,
    course_id,
    course_name,
    card_type,
  };
}

export async function trackCardClick(
  page_path: string,
  course_id: string,
  course_name: string,
  card_type: CardClickEvent["card_type"],
): Promise<void> {
  const event = buildCardClickEvent(page_path, course_id, course_name, card_type);
  try {
    await trackEvent(event);
  } catch (error) {
    if (error instanceof EventTrackingError) {
      console.error(
        "[CardClickTracking] card_click 전송 실패:",
        error.message,
        error.cause,
      );
    }
  }
}
