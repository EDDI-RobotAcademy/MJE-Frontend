"use client";

import { useSearchBox } from "@/courses/hooks/useSearchBox";
import { useCourseCreation } from "@/courses/hooks/useCourseCreation";
import FieldPillLabel from "@/courses/ui/components/label/FieldPillLabel";
import LocationTextField from "@/courses/ui/components/location_textfield/LocationTextField";
import TimeDropdown from "@/courses/ui/components/time_dropdown/TimeDropdown";
import TransportCheckboxGroup from "@/courses/ui/components/transport_checkbox/TransportCheckboxGroup";
import CourseCreationButton from "@/courses/ui/components/CourseCreation/CourseCreationButton";

/**
 * key 변경으로 DOM 재마운트 → CSS 애니메이션 자동 재실행
 * error=false일 때는 key를 0으로 고정해 불필요한 리마운트 방지
 */
function ShakeWrapper({
  shakeKey,
  error,
  children,
}: {
  shakeKey: number;
  error: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      key={error ? shakeKey : 0}
      className={error ? "animate-shake" : ""}
    >
      {children}
    </div>
  );
}

export default function SearchBar() {
  const { params, errors, setPlace, setMeetTime, setTransport, clearFieldError, validate } =
    useSearchBox();
  const { handleCreate, isLoading, isShaking, shakeKey } = useCourseCreation(validate, params);

  return (
    <div className="w-full max-w-[1028px] rounded-[30px] bg-white px-4 pb-[17px] pt-[24px] md:px-[25px] shadow-[3px_6px_10px_rgba(187,199,211,0.54)]">
      <div className="flex flex-col gap-[9px]">
        {/* Fields section */}
        <div className="flex flex-col gap-[18px]">

          {/* Fields row: max-width:768px → 세로, min-width:768px → 가로 */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-[36px]">

            {/* 장소 + 시간대 */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-[35px] lg:shrink-0">
              {/* 장소 */}
              <div className="flex flex-col gap-3 lg:w-[268px]">
                <FieldPillLabel tooltip="만날 지역이나 역 이름을 입력하세요">
                  장소
                </FieldPillLabel>
                <ShakeWrapper shakeKey={shakeKey} error={errors.place}>
                  <LocationTextField
                    id="place"
                    value={params.place}
                    onChange={setPlace}
                    error={errors.place}
                    onClearError={() => clearFieldError("place")}
                  />
                </ShakeWrapper>
              </div>

              {/* 시간대 */}
              <div className="flex flex-col gap-3 lg:w-[268px]">
                <FieldPillLabel tooltip="데이트를 즐길 시간대를 선택하세요">
                  시간대
                </FieldPillLabel>
                <ShakeWrapper shakeKey={shakeKey} error={errors.meetTime}>
                  <TimeDropdown
                    id="meet-time"
                    value={params.meetTime}
                    onChange={setMeetTime}
                    error={errors.meetTime}
                    onClearError={() => clearFieldError("meetTime")}
                  />
                </ShakeWrapper>
              </div>
            </div>

            {/* 이동 방식 */}
            <div className="flex flex-col gap-3">
              <FieldPillLabel tooltip="코스 이동 시 주로 사용할 교통수단을 선택하세요">
                이동 방식
              </FieldPillLabel>
              <ShakeWrapper shakeKey={shakeKey} error={errors.transport}>
                <TransportCheckboxGroup
                  value={params.transport}
                  onChange={setTransport}
                  error={errors.transport}
                />
              </ShakeWrapper>
            </div>
          </div>

          {/* Create Course button — fixed at bottom on mobile, in-card on desktop */}
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 px-4 pb-4 pt-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] backdrop-blur-sm md:static md:bg-transparent md:px-0 md:pb-0 md:pt-0 md:shadow-none md:backdrop-blur-none">
            <CourseCreationButton onClick={handleCreate} isShaking={isShaking} isLoading={isLoading} />
          </div>
        </div>

        {/* Footer hint */}
        <p
          className="text-center text-[11px] leading-[22px] text-[#797979]"
          style={{ fontFamily: "'Prompt', 'Noto Sans KR', sans-serif", fontWeight: 300 }}
        >
          필수 항목을 채운 뒤 전송 버튼을 누르면 추천 결과 페이지로 이동합니다.
        </p>
      </div>
    </div>
  );
}
