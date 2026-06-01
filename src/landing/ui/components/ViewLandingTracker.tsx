"use client";

import { useViewLandingTracking } from "@/landing/hooks/useViewLandingTracking";

export default function ViewLandingTracker() {
  useViewLandingTracking();
  return null;
}
