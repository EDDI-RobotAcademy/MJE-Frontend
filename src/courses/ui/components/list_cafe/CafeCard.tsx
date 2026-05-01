import { Place } from "@/courses/types/course";
import CafeImage from "./CafeImage";
import CafeLocationLabel from "./CafeLocationLabel";
import CafeNameLabel from "./CafeNameLabel";
import CafeTimeLabel from "./CafeTimeLabel";

interface CafeCardProps {
  place: Place;
}

export default function CafeCard({ place }: CafeCardProps) {
  return (
    <div className="flex h-[100px] w-full gap-3 rounded-[20px] bg-white p-3 shadow-[3px_6px_20px_0px_rgba(252,173,158,0.20)]">
      <CafeImage src={place.imageUrl} alt={place.name} />

      <div className="flex flex-1 flex-col justify-between overflow-hidden py-0.5">
        <div className="flex flex-wrap items-center gap-1.5">
          {place.time && <CafeTimeLabel time={place.time} />}
          <CafeLocationLabel location={place.location} />
        </div>

        <CafeNameLabel name={place.name} description={place.description} />
      </div>
    </div>
  );
}
