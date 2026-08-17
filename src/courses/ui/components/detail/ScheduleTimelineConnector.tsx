interface ScheduleTimelineConnectorProps {
  walkingTime?: string;
  transportLabel?: string;
}

export default function ScheduleTimelineConnector({
  walkingTime,
  transportLabel = "도보",
}: ScheduleTimelineConnectorProps) {
  return (
    <div className="relative z-10 flex px-[22px]">
      <div className="relative h-[20px] w-[140px] shrink-0">
        <div
          className="absolute left-1/2 z-0 w-[13px] -translate-x-1/2"
          style={{
            top: "-20px",
            height: "calc(100% + 50px)",
            backgroundImage:
              "repeating-linear-gradient(to bottom, #05A66B 0px, #05A66B 5px, transparent 1px, transparent 11px)",
          }}
        />
        {walkingTime && (
          <span className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-[calc(50%+20px)] whitespace-nowrap rounded-full bg-[#05A66B] px-[10px] py-[3px] text-[10px] font-semibold text-white">
            {transportLabel} {walkingTime}
          </span>
        )}
      </div>
    </div>
  );
}
