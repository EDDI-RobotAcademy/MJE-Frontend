"use client";

import { useState } from "react";
import type { SearchParams, Transport } from "@/courses/types/search";

const initialState: SearchParams = {
  place: "",
  meetTime: null,
  transport: null,
};

export function useSearchBox() {
  const [params, setParams] = useState<SearchParams>(initialState);

  const setPlace = (place: string) =>
    setParams((prev) => ({ ...prev, place }));

  const setMeetTime = (meetTime: string) =>
    setParams((prev) => ({ ...prev, meetTime }));

  const setTransport = (transport: Transport) =>
    setParams((prev) => ({ ...prev, transport }));

  return { params, setPlace, setMeetTime, setTransport };
}
