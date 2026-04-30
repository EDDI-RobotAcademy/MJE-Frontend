"use client";

import { useSearchBox } from "@/courses/hooks/useSearchBox";
import { useCourseCreation } from "@/courses/hooks/useCourseCreation";
import FieldLabel from "@/courses/ui/components/label/FieldLabel";
import LocationTextField from "@/courses/ui/components/location_textfield/LocationTextField";
import TimeDropdown from "@/courses/ui/components/time_dropdown/TimeDropdown";
import TransportCheckboxGroup from "@/courses/ui/components/transport_checkbox/TransportCheckboxGroup";
import CourseCreationButton from "@/courses/ui/components/CourseCreation/CourseCreationButton";

export default function SearchBox() {
  const { params, errors, setPlace, setMeetTime, setTransport, validate } = useSearchBox();
  const { handleCreate, isShaking } = useCourseCreation(validate);

  return (
    <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        데이트 코스 찾기
      </h2>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="place" tooltip="만날 지역이나 역 이름을 입력하세요">장소</FieldLabel>
          <LocationTextField
            id="place"
            value={params.place}
            onChange={setPlace}
            error={errors.place}
          />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="meet-time" tooltip="데이트를 즐길 시간대를 선택하세요">시간대</FieldLabel>
          <TimeDropdown
            id="meet-time"
            value={params.meetTime}
            onChange={setMeetTime}
            error={errors.meetTime}
          />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel tooltip="코스 이동 시 주로 사용할 교통수단을 선택하세요">이동수단</FieldLabel>
          <TransportCheckboxGroup
            value={params.transport}
            onChange={setTransport}
            error={errors.transport}
          />
        </div>

        <CourseCreationButton onClick={handleCreate} isShaking={isShaking} />
      </div>
    </div>
  );
}
