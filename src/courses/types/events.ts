export const COURSE_CREATE_EVENT_NAME = "course_create" as const;

export type CoursesEventName = typeof COURSE_CREATE_EVENT_NAME;

export interface CourseCreateEvent {
  event_name: typeof COURSE_CREATE_EVENT_NAME;
  session_id: string | null;
  timestamp: string;
  page_path: string;
  result: "success" | "validation_failed";
  [key: string]: unknown;
}
