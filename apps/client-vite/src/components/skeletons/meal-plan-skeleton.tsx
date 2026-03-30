export function MealPlanSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      {/* Day tabs */}
      <div className="flex gap-2 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-10 w-16 shrink-0 rounded-lg bg-stone-200" />
        ))}
      </div>
      {/* Meal cards */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-xl border border-stone-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-5 w-32 rounded bg-stone-200" />
            <div className="h-5 w-20 rounded bg-stone-200" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full rounded bg-stone-100" />
            <div className="h-3 w-3/4 rounded bg-stone-100" />
          </div>
        </div>
      ))}
    </div>
  );
}
