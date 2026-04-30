export const LOGO_CLICK_EVENT_NAME = "logo_click" as const;

export type HomeEventName = typeof LOGO_CLICK_EVENT_NAME;

export interface LogoClickEvent {
  event_name: typeof LOGO_CLICK_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  [key: string]: unknown;
}
