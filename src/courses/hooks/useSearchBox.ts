"use client";

import { useState } from "react";
import type { SearchParams, Transport } from "@/courses/types/search";

export interface SearchErrors {
  place: boolean;
  meetTime: boolean;
  transport: boolean;
}

const initialState: SearchParams = {
  place: "",
  meetTime: null,
  transport: null,
};

const initialErrors: SearchErrors = {
  place: false,
  meetTime: false,
  transport: false,
};

export function useSearchBox() {
  const [params, setParams] = useState<SearchParams>(initialState);
  const [errors, setErrors] = useState<SearchErrors>(initialErrors);

  const setPlace = (place: string) =>
    setParams((prev) => ({ ...prev, place }));

  const setMeetTime = (meetTime: string) =>
    setParams((prev) => ({ ...prev, meetTime }));

  const setTransport = (transport: Transport) =>
    setParams((prev) => ({ ...prev, transport }));

  const validate = (): boolean => {
    const next: SearchErrors = {
      place: !params.place.trim(),
      meetTime: !params.meetTime,
      transport: !params.transport,
    };
    setErrors(next);
    return !Object.values(next).some(Boolean);
  };

  return { params, errors, setPlace, setMeetTime, setTransport, validate };
}
