"use client";

import { useSearchBox } from "@/courses/hooks/useSearchBox";
import { useCourseCreation } from "@/courses/hooks/useCourseCreation";
import FieldPillLabel from "@/courses/ui/components/label/FieldPillLabel";
import LocationTextField from "@/courses/ui/components/location_textfield/LocationTextField";
import TimeDropdown from "@/courses/ui/components/time_dropdown/TimeDropdown";
import TransportCheckboxGroup from "@/courses/ui/components/transport_checkbox/TransportCheckboxGroup";
import CourseCreationButton from "@/courses/ui/components/CourseCreation/CourseCreationButton";

export default function SearchBox() {
  const { params, errors, setPlace, setMeetTime, setTransport, validate } = useSearchBox();
  const { handleCreate, isShaking } = useCourseCreation(validate, params);

  return (
    <div className="w-full max-w-[960px] rounded-[30px] bg-white px-10 pb-6 pt-7 shadow-[3px_6px_20px_0px_rgba(187,199,211,0.54)]">
      {/* 세 개의 필드 (가로 배치) */}
      <div className="mb-4 flex items-start gap-6 relative z-10">
        {/* 장소 */}
        <div className="flex flex-1 flex-col gap-2.5">
          <FieldPillLabel tooltip="만날 지역이나 역 이름을 입력하세요">장소</FieldPillLabel>
          <LocationTextField
            id="place"
            value={params.place}
            onChange={setPlace}
            error={errors.place}
          />
        </div>

        {/* 시간대 */}
        <div className="flex flex-1 flex-col gap-2.5">
          <FieldPillLabel tooltip="데이트를 즐길 시간대를 선택하세요">시간대</FieldPillLabel>
          <TimeDropdown
            id="meet-time"
            value={params.meetTime}
            onChange={setMeetTime}
            error={errors.meetTime}
          />
        </div>

        {/* 이동 방식 */}
        <div className="flex flex-col gap-2.5">
          <FieldPillLabel tooltip="코스 이동 시 주로 사용할 교통수단을 선택하세요">이동 방식</FieldPillLabel>
          <TransportCheckboxGroup
            value={params.transport}
            onChange={setTransport}
            error={errors.transport}
          />
        </div>
      </div>

      {/* Create Course 버튼 */}
      <CourseCreationButton onClick={handleCreate} isShaking={isShaking} />

      {/* 안내 텍스트 */}
      <p className="mt-2 text-center text-[10px] text-[#797979]">
        필수 항목을 채운 뒤 전송 버튼을 누르면 추천 결과 페이지로 이동합니다.
      </p>
    </div>
  );
}
