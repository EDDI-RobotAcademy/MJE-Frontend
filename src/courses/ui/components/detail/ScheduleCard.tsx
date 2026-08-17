import { Place } from "@/courses/types/course";

interface ScheduleCardProps {
  place: Place;
  order: number;
}

function IconPin() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0210222 4.94944L-0.000150188 4.46304L11.6115 0.000218996L7.14873 11.6119L6.66233 11.5907L4.7588 6.85296L0.0210222 4.94944ZM1.52696 4.69565L5.37635 6.23541L6.91611 10.0848L10.2706 1.34118L1.52696 4.69565Z"
        fill="#222222"
        fillOpacity="0.9"
      />
    </svg>
  );
}

function firstCategoryTag(category?: string): string | undefined {
  const tag = category
    ?.split(/[,>]/)
    .map((t) => t.trim())
    .filter(Boolean)[0];
  return tag ? tag.charAt(0).toUpperCase() + tag.slice(1) : undefined;
}

export default function ScheduleCard({ place, order }: ScheduleCardProps) {
  const img =
    place.imageUrl ?? `https://picsum.photos/seed/${place.id}-a/200/200`;
  const tag = firstCategoryTag(place.category);

  return (
    // 코스 카드
    <div className="flex gap-3 rounded-[18px] bg-[#FAFAF8]/80 px-[22px] py-[20px] shadow-[1.11px_2.22px_7.4px_0px_rgba(187,199,211,0.54)]">
      <img
        src={img}
        alt={place.name}
        className="w-[140px] shrink-0 self-stretch rounded-[19.17px] object-cover"
      />

      <div className="flex flex-col justify-center gap-[10px] pl-[20px]">
        {tag && (
          <span className="w-fit rounded-full bg-[#222222]/5 px-[20px] py-[5px] text-[11.77px] text-[#222222]/80 font-semibold shadow-[0px_0px_2.49px_2.49px_rgba(191,219,254,0.1)]">
            # {tag}
          </span>
        )}

        <div className="flex flex-nowrap items-center gap-[9.41px]">
          <span className="relative flex h-[30px] w-[30px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#05A66B] text-white">
            <span className="absolute -bottom-[4px] text-[28.22px] font-bold leading-none">
              {order}
            </span>
          </span>
          <span className="shrink-0 text-[16px] font-bold text-[#222222]/90 md:text-[27.03px]">
            {place.name}
          </span>
        </div>
        {(place.address ?? place.location) && (
          <span className="inline-flex items-center gap-[3px] whitespace-nowrap text-[11.29px] text-[#222222]/70 underline">
            <IconPin />
            <span className="whitespace-nowrap">
              {place.address ?? place.location}
            </span>
          </span>
        )}
        <p className="truncate text-[13px] leading-[15px] text-[#222222]">
          {place.description}
        </p>
      </div>
    </div>
  );
}
