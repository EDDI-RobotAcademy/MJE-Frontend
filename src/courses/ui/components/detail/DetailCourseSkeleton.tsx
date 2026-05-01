export default function DetailCourseSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-6">
      <div className="h-8 w-32 rounded-full bg-gray-100" />

      <div className="flex flex-col gap-4 rounded-[24px] bg-white p-5 shadow-[3px_6px_20px_0px_rgba(187,199,211,0.25)]">
        <div className="h-[220px] w-full rounded-[18px] bg-gray-100" />
        <div className="flex gap-2">
          <div className="h-5 w-16 rounded-full bg-gray-100" />
          <div className="h-5 w-20 rounded-full bg-gray-100" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-6 w-2/3 rounded bg-gray-100" />
          <div className="h-4 w-full rounded bg-gray-100" />
          <div className="h-4 w-4/5 rounded bg-gray-100" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="h-[140px] rounded-[20px] bg-gray-100" />
        <div className="h-[140px] rounded-[20px] bg-gray-100" />
      </div>
    </div>
  );
}
