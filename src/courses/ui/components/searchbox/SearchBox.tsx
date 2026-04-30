"use client";

import { useSearchBox } from "@/courses/hooks/useSearchBox";
import type { TimeSlot, Transport } from "@/courses/types/search";

const TIME_SLOT_OPTIONS: { value: TimeSlot; label: string }[] = [
  { value: "morning", label: "오전" },
  { value: "afternoon", label: "오후" },
  { value: "evening", label: "저녁" },
];

const TRANSPORT_OPTIONS: { value: Transport; label: string }[] = [
  { value: "walk", label: "도보" },
  { value: "transit", label: "대중교통" },
  { value: "car", label: "자동차" },
];

export default function SearchBox() {
  const { params, setPlace, setTimeSlot, setTransport } = useSearchBox();

  return (
    <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        데이트 코스 찾기
      </h2>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">장소</label>
          <input
            type="text"
            placeholder="어디서 만날까요?"
            value={params.place}
            onChange={(e) => setPlace(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">시간대</label>
          <div className="flex gap-2">
            {TIME_SLOT_OPTIONS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setTimeSlot(value)}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  params.timeSlot === value
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 bg-white text-gray-600 hover:border-gray-500"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">이동수단</label>
          <div className="flex gap-2">
            {TRANSPORT_OPTIONS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setTransport(value)}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  params.transport === value
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 bg-white text-gray-600 hover:border-gray-500"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
