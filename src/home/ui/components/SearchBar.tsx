"use client";

import { useSearchBox } from "@/courses/hooks/useSearchBox";
import { useCourseCreation } from "@/courses/hooks/useCourseCreation";
import FieldPillLabel from "@/courses/ui/components/label/FieldPillLabel";
import LocationTextField from "@/courses/ui/components/location_textfield/LocationTextField";
import TimeDropdown from "@/courses/ui/components/time_dropdown/TimeDropdown";
import TransportCheckboxGroup from "@/courses/ui/components/transport_checkbox/TransportCheckboxGroup";
import CourseCreationButton from "@/courses/ui/components/CourseCreation/CourseCreationButton";

export default function SearchBar() {
  const { params, errors, setPlace, setMeetTime, setTransport, validate } =
    useSearchBox();
  const { handleCreate, isShaking } = useCourseCreation(validate);

  return (
    <div className="w-full max-w-[1028px] rounded-[30px] bg-white px-[25px] pb-[17px] pt-[24px] shadow-[3px_6px_10px_rgba(187,199,211,0.54)]">
      <div className="flex flex-col gap-[9px]">
        {/* Fields section */}
        <div className="flex flex-col gap-[18px]">
          {/* Label row — gap-[200px] from Figma (label groups separated by 200px) */}
          <div className="flex items-center gap-[200px]">
            <div className="flex items-center justify-between w-[407.475px]">
              <FieldPillLabel tooltip="만날 지역이나 역 이름을 입력하세요">
                장소
              </FieldPillLabel>
              <FieldPillLabel tooltip="데이트를 즐길 시간대를 선택하세요">
                시간대
              </FieldPillLabel>
            </div>
            <FieldPillLabel tooltip="코스 이동 시 주로 사용할 교통수단을 선택하세요">
              이동 방식
            </FieldPillLabel>
          </div>

          {/* Input + button section */}
          <div className="flex flex-col gap-[28px]">
            {/* Input row */}
            <div className="flex items-center gap-[36px]">
              <div className="flex items-center gap-[35px]">
                {/* 장소: w-268.123px */}
                <div className="w-[268.123px]">
                  <LocationTextField
                    id="place"
                    value={params.place}
                    onChange={setPlace}
                    error={errors.place}
                  />
                </div>
                {/* 시간대: w-268.123px */}
                <div className="w-[268.123px]">
                  <TimeDropdown
                    id="meet-time"
                    value={params.meetTime}
                    onChange={setMeetTime}
                    error={errors.meetTime}
                  />
                </div>
              </div>
              {/* 이동 방식: 3 buttons */}
              <TransportCheckboxGroup
                value={params.transport}
                onChange={setTransport}
                error={errors.transport}
              />
            </div>

            {/* Create Course button */}
            <CourseCreationButton onClick={handleCreate} isShaking={isShaking} />
          </div>
        </div>

        {/* Footer hint */}
        <p
          className="text-center text-[10px] leading-[22px] text-[#797979]"
          style={{ fontFamily: "'Prompt', 'Noto Sans KR', sans-serif", fontWeight: 300 }}
        >
          필수 항목을 채운 뒤 전송 버튼을 누르면 추천 결과 페이지로 이동합니다.
        </p>
      </div>
    </div>
  );
}
