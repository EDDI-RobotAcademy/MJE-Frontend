import { Place } from "@/courses/types/course";

interface ScheduleCardProps {
  place: Place;
  previousPlaceName?: string;
  walkingTimeFromPrevious?: string;
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
}: ScheduleCardProps) {
  const img1 = place.imageUrl ?? `https://picsum.photos/seed/${place.id}-a/200/200`;
  const img2 = place.imageUrl2 ?? `https://picsum.photos/seed/${place.id}-b/200/200`;

  return (
    <div className="rounded-[20px] bg-[#f5f5f5] px-[6px] pt-[6px] pb-[8px]">
      {/* White inner card */}
      <div className="rounded-[18px] bg-white px-[9px] py-[16px] shadow-[0px_4px_5px_rgba(0,0,0,0.10)]">
        <div className="flex items-center gap-5">
          {/* Overlapping circles */}
          <div className="relative h-[101px] w-[186px] shrink-0">
            <img
              src={img1}
              alt={place.name}
              className="absolute left-0 top-[3px] z-[2] h-[95px] w-[95px] rounded-full border-[2.5px] border-white object-cover"
            />
            <img
              src={img2}
              alt={place.name}
              className="absolute top-[3px] z-[1] h-[95px] w-[95px] rounded-full border-[2.5px] border-white object-cover"
              style={{ left: 85 }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[4px]">
              {place.time && (
                <div className="flex items-center gap-[3px]">
                  <IconClock />
                  <span className="text-[8px] text-[#707070]">{place.time}</span>
                </div>
              )}
              {place.location && (
                <div className="flex items-center gap-[3px]">
                  <IconPin />
                  <span className="text-[8px] text-[#707070]">{place.location}</span>
                </div>
              )}
            </div>
            <p className="text-[18px] text-black">{place.name}</p>
            <p className="text-[10px] font-light leading-[15px] text-[#2d2d2d]">
              {place.description}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom row: category badge left, transit info right */}
      <div className="mt-[10px] flex items-center justify-between px-[3px]">
        <div className="flex gap-[6px]">
          {place.category && (
            <span className="flex h-[20px] items-center justify-center rounded-full bg-[#2a4874] px-[14px] text-[10px] text-white">
              {place.category}
            </span>
          )}
        </div>
        {previousPlaceName && walkingTimeFromPrevious && (
          <div className="flex items-center gap-[6px] text-[10px] text-[#959595]">
            <span className="whitespace-nowrap">{previousPlaceName} → {place.name}</span>
            <span className="inline-block h-[2.6px] w-[2.6px] shrink-0 rounded-full bg-[#959595]" />
            <span className="whitespace-nowrap">도보 {walkingTimeFromPrevious}</span>
          </div>
        )}
      </div>
    </div>
  );
}
