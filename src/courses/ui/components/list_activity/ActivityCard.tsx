import { Place } from "@/courses/types/course";
import ActivityImage from "./ActivityImage";
import ActivityLocationLabel from "./ActivityLocationLabel";
import ActivityNameLabel from "./ActivityNameLabel";
import ActivityTimeLabel from "./ActivityTimeLabel";

interface ActivityCardProps {
  place: Place;
}

export default function ActivityCard({ place }: ActivityCardProps) {
  return (
    <div className="flex h-[100px] w-full gap-3 rounded-[20px] bg-white p-3 shadow-[3px_6px_20px_0px_rgba(45,122,91,0.15)]">
      <ActivityImage src={place.imageUrl} alt={place.name} />

      <div className="flex flex-1 flex-col justify-between overflow-hidden py-0.5">
        <div className="flex flex-wrap items-center gap-1.5">
          {place.time && <ActivityTimeLabel time={place.time} />}
          <ActivityLocationLabel location={place.location} />
        </div>

        <ActivityNameLabel name={place.name} description={place.description} />
      </div>
    </div>
  );
}
