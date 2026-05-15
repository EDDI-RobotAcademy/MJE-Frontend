export const LOGO_CLICK_EVENT_NAME = "logo_click" as const;
export const HOME_CLICK_EVENT_NAME = "home_click" as const;
export const VIEW_HOME_EVENT_NAME = "view_home" as const;

export type HomeEventName =
  | typeof LOGO_CLICK_EVENT_NAME
  | typeof HOME_CLICK_EVENT_NAME
  | typeof VIEW_HOME_EVENT_NAME;

export interface LogoClickEvent {
  event_name: typeof LOGO_CLICK_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  [key: string]: unknown;
}

export interface HomeClickEvent {
  event_name: typeof HOME_CLICK_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  [key: string]: unknown;
}

export interface ViewHomeEvent {
  event_name: typeof VIEW_HOME_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  referrer?: string | null;
  [key: string]: unknown;
}
