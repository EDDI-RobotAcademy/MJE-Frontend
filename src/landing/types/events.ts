export const VIEW_LANDING_EVENT_NAME = "view_landing" as const;
export const LANDING_TOP_EVENT_NAME = "landing_top" as const;
export const LANDING_BOTTOM_EVENT_NAME = "landing_bottom" as const;

export type LandingEventName =
  | typeof VIEW_LANDING_EVENT_NAME
  | typeof LANDING_TOP_EVENT_NAME
  | typeof LANDING_BOTTOM_EVENT_NAME;

export interface ViewLandingEvent {
  event_name: typeof VIEW_LANDING_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  referrer?: string | null;
  [key: string]: unknown;
}

export interface LandingTopEvent {
  event_name: typeof LANDING_TOP_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  [key: string]: unknown;
}

export interface LandingBottomEvent {
  event_name: typeof LANDING_BOTTOM_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  [key: string]: unknown;
}
