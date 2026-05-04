export default function RecommendationLoading() {
  return (
    <div className="flex flex-col gap-10">
      {/* Best skeleton */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <div className="h-4 w-10 animate-pulse rounded-full bg-brand-blue-light" />
          <div className="h-3 w-32 animate-pulse rounded-full bg-brand-blue-light/60" />
        </div>
        <div className="h-[220px] w-full animate-pulse rounded-[30px] bg-brand-blue-light/40" />
      </section>

      {/* Optional skeleton */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <div className="h-4 w-16 animate-pulse rounded-full bg-brand-blue-light" />
          <div className="h-3 w-36 animate-pulse rounded-full bg-brand-blue-light/60" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-[180px] animate-pulse rounded-[24px] bg-brand-blue-light/40" />
          <div className="h-[180px] animate-pulse rounded-[24px] bg-brand-blue-light/40" />
        </div>
      </section>
    </div>
  );
}
