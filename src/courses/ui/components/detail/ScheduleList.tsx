import { Place } from "@/courses/types/course";
import ScheduleCard from "./ScheduleCard";
import ScheduleTimelineConnector from "./ScheduleTimelineConnector";

interface ScheduleListProps {
  places: Place[];
  transportLabel?: string;
}

export default function ScheduleList({
  places,
  transportLabel,
}: ScheduleListProps) {
  if (places.length === 0) {
    return (
      <p className="text-[12px] text-brand-text-muted">
        상세 일정 정보가 없어요.
      </p>
    );
  }

  return (
    <div className="flex flex-col rounded-[16.93px]">
      {places.map((place, index) => (
        <div key={place.id} className="flex flex-col">
          <ScheduleCard place={place} order={index + 1} />
          {index < places.length - 1 && (
            <ScheduleTimelineConnector
              walkingTime={place.walkingTimeTo}
              transportLabel={transportLabel}
            />
          )}
        </div>
      ))}
    </div>
  );
}
