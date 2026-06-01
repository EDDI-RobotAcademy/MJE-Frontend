"use client";

import { useEffect } from "react";
import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { VIEW_LANDING_EVENT_NAME } from "@/landing/types/events";
import type { ViewLandingEvent } from "@/landing/types/events";

export function useViewLandingTracking() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const event: ViewLandingEvent = {
      event_name: VIEW_LANDING_EVENT_NAME,
      session_id: getSessionId(),
      timestamp: new Date().toISOString(),
      page_path: "/landing",
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      referrer: document.referrer || null,
    };

    trackEvent(event, "/landing/events").catch((error) => {
      if (error instanceof EventTrackingError) {
        console.error(
          "[ViewLandingTracking] view_landing 전송 실패:",
          error.message,
          error.cause,
        );
      }
    });
  }, []);
}
