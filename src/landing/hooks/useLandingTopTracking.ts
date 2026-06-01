"use client";

import { useCallback } from "react";
import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { LANDING_TOP_EVENT_NAME } from "@/landing/types/events";
import type { LandingTopEvent } from "@/landing/types/events";

export function useLandingTopTracking() {
  const handleLandingTopClick = useCallback(() => {
    const event: LandingTopEvent = {
      event_name: LANDING_TOP_EVENT_NAME,
      session_id: getSessionId(),
      timestamp: new Date().toISOString(),
      page_path: "/landing",
    };

    trackEvent(event, "/landing/events").catch((error) => {
      if (error instanceof EventTrackingError) {
        console.error(
          "[LandingTopTracking] landing_top 전송 실패:",
          error.message,
          error.cause,
        );
      }
    });
  }, []);

  return { handleLandingTopClick };
}
