"use client";

import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { trackEvent, getSessionId, EventTrackingError } from "@/infrastructure/analytics";
import { LOGO_CLICK_EVENT_NAME } from "@/home/types/events";
import type { LogoClickEvent } from "@/home/types/events";

export function useLogoTracking() {
  const pathname = usePathname();

  const handleLogoClick = useCallback(() => {
    const event: LogoClickEvent = {
      event_name: LOGO_CLICK_EVENT_NAME,
      session_id: getSessionId(),
      timestamp: new Date().toISOString(),
      page_path: pathname,
    };

    trackEvent(event).catch((error) => {
      if (error instanceof EventTrackingError) {
        console.error(
          "[LogoTracking] logo_click 전송 실패:",
          error.message,
          error.cause,
        );
      }
    });
  }, [pathname]);

  return { handleLogoClick };
}
