export interface AnalyticsEvent {
  event_name: string;
  [key: string]: unknown;
}

export class EventTrackingError extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = "EventTrackingError";
  }
}

export async function trackEvent(
  event: AnalyticsEvent,
  endpoint: string = "/home/events",
): Promise<void> {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
  } catch (error) {
    throw new EventTrackingError(
      `Failed to track event: ${event.event_name}`,
      error,
    );
  }
}
