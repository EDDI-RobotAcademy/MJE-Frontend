"use client";

import { useCallback } from "react";
import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { LANDING_BOTTOM_EVENT_NAME } from "@/landing/types/events";
import type { LandingBottomEvent } from "@/landing/types/events";

export function useLandingBottomTracking() {
  const handleLandingBottomClick = useCallback(() => {
    const event: LandingBottomEvent = {
      event_name: LANDING_BOTTOM_EVENT_NAME,
      session_id: getSessionId(),
      timestamp: new Date().toISOString(),
      page_path: "/landing",
    };

    trackEvent(event, "/landing/events").catch((error) => {
      if (error instanceof EventTrackingError) {
        console.error(
          "[LandingBottomTracking] landing_bottom 전송 실패:",
          error.message,
          error.cause,
        );
      }
    });
  }, [pathname]);

  return { handleLandingBottomClick };
}
