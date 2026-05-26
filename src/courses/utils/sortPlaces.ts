import { Place } from "@/courses/types/course";

export function sortPlacesByOrder(places: Place[]): Place[] {
  return [...places].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
