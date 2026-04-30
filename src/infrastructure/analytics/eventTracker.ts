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

export async function trackEvent(event: AnalyticsEvent): Promise<void> {
  try {
    // TODO: Replace with actual analytics endpoint (e.g. navigator.sendBeacon or GA4)
    console.info("[Analytics]", JSON.stringify(event));
  } catch (error) {
    throw new EventTrackingError(
      `Failed to track event: ${event.event_name}`,
      error,
    );
  }
}
