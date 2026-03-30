export function FaqSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      {/* Search bar */}
      <div className="h-11 w-full rounded-lg bg-stone-100" />
      {/* FAQ items */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-xl border border-stone-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="h-5 w-3/4 rounded bg-stone-200" />
            <div className="h-5 w-5 rounded bg-stone-100" />
          </div>
        </div>
      ))}
    </div>
  );
}
