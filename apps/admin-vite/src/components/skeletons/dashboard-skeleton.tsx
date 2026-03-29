import { Skeleton } from "@fitfast/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-48" />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-stone-200 bg-white p-5">
            <Skeleton className="mb-3 h-4 w-20" />
            <Skeleton className="h-8 w-16" />
          </div>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-stone-200 bg-white p-6">
          <Skeleton className="mb-4 h-5 w-32" />
          <Skeleton className="h-48 w-full" />
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-6">
          <Skeleton className="mb-4 h-5 w-32" />
          <Skeleton className="h-48 w-full" />
        </div>
      </div>
    </div>
  );
}
