export function WorkoutPlanSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      {/* Day selector */}
      <div className="flex gap-2 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-10 w-16 shrink-0 rounded-lg bg-stone-200" />
        ))}
      </div>
      {/* Exercise cards */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="rounded-xl border border-stone-200 bg-white p-4">
          <div className="flex gap-4">
            <div className="h-16 w-16 shrink-0 rounded-lg bg-stone-200" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-40 rounded bg-stone-200" />
              <div className="h-4 w-24 rounded bg-stone-100" />
              <div className="flex gap-3">
                <div className="h-4 w-16 rounded bg-stone-100" />
                <div className="h-4 w-16 rounded bg-stone-100" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
