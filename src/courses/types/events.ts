export const COURSE_CREATE_EVENT_NAME = "course_create" as const;
export const CARD_CLICK_EVENT_NAME = "card_click" as const;
export const TRYAGAIN_CLICK_EVENT_NAME = "tryagain_click" as const;

export type CoursesEventName =
  | typeof COURSE_CREATE_EVENT_NAME
  | typeof CARD_CLICK_EVENT_NAME
  | typeof TRYAGAIN_CLICK_EVENT_NAME;

export interface CourseCreateEvent {
  event_name: typeof COURSE_CREATE_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  result: "success" | "validation_failed";
  [key: string]: unknown;
}

export interface CardClickEvent {
  event_name: typeof CARD_CLICK_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  course_id: string;
  course_name: string;
  card_type: "main" | "sub";
  [key: string]: unknown;
}

export interface TryAgainClickEvent {
  event_name: typeof TRYAGAIN_CLICK_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  [key: string]: unknown;
}
