"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { VIEW_HOME_EVENT_NAME } from "@/home/types/events";
import type { ViewHomeEvent } from "@/home/types/events";

export function useViewHomeTracking() {
  const pathname = usePathname();

  useEffect(() => {
    const event: ViewHomeEvent = {
      event_name: VIEW_HOME_EVENT_NAME,
      session_id: getSessionId(),
      timestamp: new Date().toISOString(),
      page_path: pathname,
    };

    trackEvent(event).catch((error) => {
      if (error instanceof EventTrackingError) {
        console.error(
          "[ViewHomeTracking] view_home 전송 실패:",
          error.message,
          error.cause,
        );
      }
    });
  }, []);
}
