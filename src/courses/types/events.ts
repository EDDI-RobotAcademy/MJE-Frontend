export const COURSE_CREATE_EVENT_NAME = "course_create" as const;
export const CARD_CLICK_EVENT_NAME = "card_click" as const;
export const TRYAGAIN_CLICK_EVENT_NAME = "tryagain_click" as const;
export const RETURN_CLICK_EVENT_NAME = "return_click" as const;
export const OPTIONCARD_CLICK_EVENT_NAME = "optioncard_click" as const;
export const COURSE_EXPORT_EVENT_NAME = "course_export" as const;
export const COURSE_SEND_EVENT_NAME = "course_send" as const;

export type CoursesEventName =
  | typeof COURSE_CREATE_EVENT_NAME
  | typeof CARD_CLICK_EVENT_NAME
  | typeof TRYAGAIN_CLICK_EVENT_NAME
  | typeof RETURN_CLICK_EVENT_NAME
  | typeof OPTIONCARD_CLICK_EVENT_NAME
  | typeof COURSE_EXPORT_EVENT_NAME
  | typeof COURSE_SEND_EVENT_NAME;

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

export interface ReturnClickEvent {
  event_name: typeof RETURN_CLICK_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  [key: string]: unknown;
}

export interface OptionCardClickEvent {
  event_name: typeof OPTIONCARD_CLICK_EVENT_NAME;
  session_id: string | null;
  [key: string]: unknown;
}

export interface CourseExportEvent {
  event_name: typeof COURSE_EXPORT_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  course_id: string;
  course_title: string;
  [key: string]: unknown;
}

export interface CourseSendEvent {
  event_name: typeof COURSE_SEND_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  course_id: string;
  course_title: string;
  [key: string]: unknown;
}
