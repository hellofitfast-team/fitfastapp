export function DashboardSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Greeting */}
      <div className="h-8 w-48 rounded-lg bg-stone-200" />
      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-stone-200 bg-white p-4">
            <div className="mb-2 h-4 w-20 rounded bg-stone-200" />
            <div className="h-6 w-12 rounded bg-stone-200" />
          </div>
        ))}
      </div>
      {/* Content cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-48 rounded-xl border border-stone-200 bg-white" />
        <div className="h-48 rounded-xl border border-stone-200 bg-white" />
      </div>
    </div>
  );
}
