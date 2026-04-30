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

  const setPlace = (place: string) => {
    setParams((prev) => ({ ...prev, place }));
    if (errors.place) setErrors((prev) => ({ ...prev, place: false }));
  };

  const setMeetTime = (meetTime: string) => {
    setParams((prev) => ({ ...prev, meetTime }));
    if (errors.meetTime) setErrors((prev) => ({ ...prev, meetTime: false }));
  };

  const setTransport = (transport: Transport) => {
    setParams((prev) => ({ ...prev, transport }));
    if (errors.transport) setErrors((prev) => ({ ...prev, transport: false }));
  };

  // 포커스 시 즉시 에러 해제 (입력하기 전 클릭만 해도 클리어)
  const clearFieldError = (field: keyof SearchErrors) => {
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const validate = (): boolean => {
    const next: SearchErrors = {
      place: !params.place.trim(),
      meetTime: !params.meetTime,
      transport: !params.transport,
    };
    setErrors(next);
    return !Object.values(next).some(Boolean);
  };

  return { params, errors, setPlace, setMeetTime, setTransport, clearFieldError, validate };
}
