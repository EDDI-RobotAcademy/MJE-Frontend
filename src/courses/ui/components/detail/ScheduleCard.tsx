import { Place } from "@/courses/types/course";

interface ScheduleCardProps {
  place: Place;
}

function ChevronRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function ScheduleCard({ place }: ScheduleCardProps) {
  const img1 = place.imageUrl ?? `https://picsum.photos/seed/${place.id}-a/200/200`;
  const img2 = place.imageUrl2 ?? `https://picsum.photos/seed/${place.id}-b/200/200`;

  return (
    <div className="flex w-full items-center gap-3 rounded-[16px] bg-white p-4 shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
      {/* Overlapping circles */}
      <div className="relative h-[48px] w-[72px] flex-shrink-0">
        <img
          src={img1}
          alt={place.name}
          className="absolute left-0 top-0 z-10 h-[48px] w-[48px] rounded-full border-2 border-white object-cover"
        />
        <img
          src={img2}
          alt={place.name}
          className="absolute left-[24px] top-0 z-0 h-[48px] w-[48px] rounded-full border-2 border-white object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-1 overflow-hidden">
        <div className="flex items-center gap-1.5">
          {place.category && (
            <span className="inline-block rounded-full bg-brand-navy px-2 py-0.5 text-[9px] text-white">
              {place.category}
            </span>
          )}
          {place.time && (
            <span className="text-[10px] text-brand-text-muted">{place.time}</span>
          )}
        </div>
        <p className="line-clamp-1 text-sm font-semibold text-brand-navy">{place.name}</p>
        <p className="line-clamp-2 text-[11px] leading-snug text-brand-text-gray">
          {place.description}
        </p>
        <span className="mt-0.5 inline-block w-fit rounded-full bg-brand-blue-light px-2 py-0.5 text-[9px] text-brand-navy">
          {place.location}
        </span>
      </div>

      {/* Chevron */}
      <div className="flex-shrink-0 text-brand-text-muted">
        <ChevronRight />
      </div>
    </div>
  );
}
