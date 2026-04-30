"use client";

import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { HOME_CLICK_EVENT_NAME } from "@/home/types/events";
import type { HomeClickEvent } from "@/home/types/events";

export function useHomeTabTracking() {
  const pathname = usePathname();

  const handleHomeTabClick = useCallback(() => {
    const event: HomeClickEvent = {
      event_name: HOME_CLICK_EVENT_NAME,
      session_id: getSessionId(),
      timestamp: new Date().toISOString(),
      page_path: pathname,
    };

    trackEvent(event).catch((error) => {
      if (error instanceof EventTrackingError) {
        console.error(
          "[HomeTabTracking] home_click 전송 실패:",
          error.message,
          error.cause,
        );
      }
    });
  }, [pathname]);

  return { handleHomeTabClick };
}
