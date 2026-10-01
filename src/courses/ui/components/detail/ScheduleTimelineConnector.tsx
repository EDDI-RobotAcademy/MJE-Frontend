interface ScheduleTimelineConnectorProps {
  walkingTime?: string;
  transportLabel?: string;
  variant?: "card" | "flat";
}

export default function ScheduleTimelineConnector({
  walkingTime,
  transportLabel = "도보",
  variant = "card",
}: ScheduleTimelineConnectorProps) {
  const isFlat = variant === "flat";

  return (
    <div
      className={`relative flex ${isFlat ? "" : "z-10 px-[22px]"}`}
    >
      <div
        className={`relative shrink-0 ${isFlat ? "h-[30px] w-[110px]" : "h-[20px] w-[140px]"}`}
      >
        <div
          className={`absolute left-1/2 z-0 -translate-x-1/2 ${isFlat ? "w-[5px]" : "w-[13px]"}`}
          style={{
            top: isFlat ? "0px" : "-20px",
            height: isFlat ? "calc(100% + 30px)" : "calc(100% + 50px)",
            backgroundImage: isFlat
              ? "repeating-linear-gradient(to bottom, #05A66B 0px, #05A66B 2.37px, transparent 2.37px, transparent 4.74px)"
              : "repeating-linear-gradient(to bottom, #05A66B 0px, #05A66B 5px, transparent 1px, transparent 11px)",
          }}
        />
        {walkingTime && (
          <span
            className="absolute bottom-0 left-1/2 z-20 whitespace-nowrap rounded-full bg-[#05A66B] px-[10px] py-[3px] text-[10px] font-semibold text-white"
            style={{
              transform: `translate(-50%, ${isFlat ? "50%" : "calc(50% + 20px)"})`,
            }}
          >
            {transportLabel} {walkingTime}
          </span>
        )}
      </div>
    </div>
  );
}
