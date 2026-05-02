import { Place } from "@/courses/types/course";
import RestaurantImage from "./RestaurantImage";
import RestaurantLocationLabel from "./RestaurantLocationLabel";
import RestaurantNameLabel from "./RestaurantNameLabel";
import RestaurantTimeLabel from "./RestaurantTimeLabel";

interface RestaurantCardProps {
  place: Place;
}

export default function RestaurantCard({ place }: RestaurantCardProps) {
  return (
    <div className="flex h-[100px] w-full gap-3 rounded-[20px] bg-white p-3 shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
      <RestaurantImage src={place.imageUrl} alt={place.name} />

      <div className="flex flex-1 flex-col justify-between overflow-hidden py-0.5">
        <div className="flex flex-wrap items-center gap-1.5">
          {place.time && <RestaurantTimeLabel time={place.time} />}
          <RestaurantLocationLabel location={place.location} />
        </div>

        <RestaurantNameLabel name={place.name} description={place.description} />
      </div>
    </div>
  );
}
