"use client";

import { useState } from "react";
import type { SearchParams, TimeSlot, Transport } from "@/courses/types/search";

const initialState: SearchParams = {
  place: "",
  timeSlot: null,
  transport: null,
};

export function useSearchBox() {
  const [params, setParams] = useState<SearchParams>(initialState);

  const setPlace = (place: string) =>
    setParams((prev) => ({ ...prev, place }));

  const setTimeSlot = (timeSlot: TimeSlot) =>
    setParams((prev) => ({ ...prev, timeSlot }));

  const setTransport = (transport: Transport) =>
    setParams((prev) => ({ ...prev, transport }));

  return { params, setPlace, setTimeSlot, setTransport };
}
