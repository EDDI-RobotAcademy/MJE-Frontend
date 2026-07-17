"use client";

import { useSearchBox } from "@/courses/hooks/useSearchBox";
import { useCourseCreation } from "@/courses/hooks/useCourseCreation";
import FieldPillLabel from "@/courses/ui/components/label/FieldPillLabel";
import LocationTextField from "@/courses/ui/components/location_textfield/LocationTextField";
import TimeDropdown from "@/courses/ui/components/time_dropdown/TimeDropdown";
import TransportCheckboxGroup from "@/courses/ui/components/transport_checkbox/TransportCheckboxGroup";
import CourseCreationButton from "@/courses/ui/components/CourseCreation/CourseCreationButton";

export default function SearchBar() {
  const {
    params,
    errors,
    isComplete,
    setPlace,
    setMeetTime,
    setTransport,
    clearFieldError,
    validate,
  } = useSearchBox();
  const { handleCreate, isLoading } = useCourseCreation(validate, params);

  return (
    <div className="w-full max-w-[1028px] rounded-[12px] md:rounded-[30px] bg-[#FAFAF8]/60 px-4 pb-[12px] pt-[16px] md:px-[25px] md:pb-[17px] md:pt-[24px] shadow-[3px_6px_10px_rgba(187,199,211,0.54)]">
      <div className="flex flex-col gap-[6px] md:gap-[9px]">
        {/* Fields section */}
        <div className="flex flex-col gap-[12px] md:gap-[18px]">
          {/* Fields row: max-width:768px → 세로, min-width:768px → 가로 */}
          <div className="flex flex-col gap-5 md:gap-4 lg:flex-row lg:items-center lg:gap-[36px]">
            {/* 장소 + 시간대 */}
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-[35px] lg:shrink-0">
              {/* 장소 */}
              <div className="flex flex-col gap-2 md:gap-3 lg:w-[268px]">
                <FieldPillLabel tooltip="가고 싶은 동네나 지역을 적어 주세요.">
                  장소
                </FieldPillLabel>

                <LocationTextField
                  id="place"
                  value={params.place}
                  onChange={setPlace}
                  error={errors.place}
                  onClearError={() => clearFieldError("place")}
                />
              </div>

              {/* 시간 */}
              <div className="flex flex-col gap-2 md:gap-3 lg:w-[268px]">
                <FieldPillLabel tooltip="데이트를 즐길 시간대를 선택하세요">
                  시간
                </FieldPillLabel>

                <TimeDropdown
                  id="meet-time"
                  value={params.meetTime}
                  onChange={setMeetTime}
                  error={errors.meetTime}
                  onClearError={() => clearFieldError("meetTime")}
                />
              </div>
            </div>

            {/* 이동 수단 */}
            <div className="flex flex-col gap-2 md:gap-3">
              <FieldPillLabel tooltip="코스 이동 시 주로 사용할 교통수단을 선택하세요">
                이동 수단
              </FieldPillLabel>

              <TransportCheckboxGroup
                value={params.transport}
                onChange={setTransport}
                error={errors.transport}
              />
            </div>
          </div>

          {/* Create Course button — fixed at bottom on mobile, in-card on desktop */}
          <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-3 md:static md:bg-transparent md:px-0 md:pb-0 md:pt-0 md:shadow-none md:backdrop-blur-none">
            <CourseCreationButton
              onClick={handleCreate}
              isLoading={isLoading}
              disabled={!isComplete}
            >
              나만의 코스 추천받기 !
            </CourseCreationButton>
          </div>
        </div>
      </div>
    </div>
  );
}
