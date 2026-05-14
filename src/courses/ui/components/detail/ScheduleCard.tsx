import { Place } from "@/courses/types/course";

interface ScheduleCardProps {
  place: Place;
  previousPlaceName?: string;
  walkingTimeFromPrevious?: string;
  transportLabel?: string;
}

function IconClock() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="#707070" strokeWidth="1.5" />
      <path d="M8 5V9L10.5 10.5" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2C5.79 2 4 3.79 4 6C4 9 8 14 8 14C8 14 12 9 12 6C12 3.79 10.21 2 8 2Z"
        stroke="#707070"
        strokeWidth="1.5"
      />
      <circle cx="8" cy="6" r="1.5" fill="#707070" />
    </svg>
  );
}

export default function ScheduleCard({
  place,
  previousPlaceName,
  walkingTimeFromPrevious,
  transportLabel = "도보",
}: ScheduleCardProps) {
  const img1 = place.imageUrl ?? `https://picsum.photos/seed/${place.id}-a/200/200`;
  const img2 = place.imageUrl2 ?? `https://picsum.photos/seed/${place.id}-b/200/200`;

  return (
    <div className="rounded-[20px] bg-[#f5f5f5] px-[6px] pt-[6px] pb-[8px]">
      {/* White inner card — relative so category badge can be anchored to top-left */}
      <div className="relative rounded-[18px] bg-white px-[9px] pt-[36px] pb-[16px] shadow-[0px_4px_5px_rgba(0,0,0,0.10)]">
        {/* Category pills — split by , or > into individual navy pills */}
        {place.category && (
          <div className="absolute top-[8px] left-[9px] flex flex-wrap gap-[4px]">
            {place.category
              .split(/[,>]/)
              .map((t) => t.trim())
              .filter(Boolean)
              .map((tag, i) => (
                <span
                  key={i}
                  className="flex h-[20px] items-center justify-center whitespace-nowrap rounded-full bg-[#2a4874] px-[10px] text-[11px] text-white"
                >
                  {tag}
                </span>
              ))}
          </div>
        )}

        {/* 모바일: 이미지 상단·텍스트 하단 / md+: 가로 배치 */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
          {/* Overlapping circles */}
          <div className="relative h-[100px] w-[180px] shrink-0 md:h-[130px] md:w-[230px]">
            <img
              src={img1}
              alt={place.name}
              className="absolute left-0 top-0 z-[2] h-[95px] w-[95px] rounded-full border-[2px] border-white object-cover md:h-[125px] md:w-[125px] md:border-[2.5px]"
            />
            <img
              src={img2}
              alt={place.name}
              className="absolute top-0 z-[1] h-[95px] w-[95px] rounded-full border-[2px] border-white object-cover md:h-[125px] md:w-[125px] md:border-[2.5px]"
              style={{ left: 82 }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[8px] md:gap-[10px]">
            {/* 시간 + 주소 — 장소명 위 */}
            <div className="flex flex-col gap-[5px]">
              {(place.startTime ?? place.time) && (
                <div className="flex items-center gap-[4px]">
                  <IconClock />
                  <span className="whitespace-nowrap text-[10px] text-[#959595]">
                    {place.startTime && place.endTime
                      ? `${place.startTime} ~ ${place.endTime}`
                      : (place.startTime ?? place.time)}
                  </span>
                </div>
              )}
              {(place.address ?? place.location) && (
                <div className="flex items-center gap-[4px]">
                  <IconPin />
                  <span className="text-[11px] text-[#959595] line-clamp-1">
                    {place.address ?? place.location}
                  </span>
                </div>
              )}
            </div>
            <p className="text-[20px] font-medium text-black">{place.name}</p>
            <p className="text-[12.5px] font-light leading-[15px] text-[#2d2d2d]">
              {place.description}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom row: always rendered so all cards share identical structure */}
      <div className="mt-[10px] flex min-h-[24px] items-center justify-center px-[3px]">
        {previousPlaceName && walkingTimeFromPrevious && (
          <div className="flex items-center gap-[6px] text-[11.5px] text-[#959595]">
            <span className="whitespace-nowrap">{previousPlaceName} → {place.name}</span>
            <span className="inline-block h-[2.6px] w-[2.6px] shrink-0 rounded-full bg-[#959595]" />
            <span className="whitespace-nowrap">{transportLabel} {walkingTimeFromPrevious}</span>
          </div>
        )}
      </div>
    </div>
  );
}
