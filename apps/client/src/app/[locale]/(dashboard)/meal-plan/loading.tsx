import { Skeleton } from "@fitfast/ui/skeleton";

export default function MealPlanLoading() {
  return (
    <div className="mx-auto max-w-3xl space-y-5 px-4 py-6">
      <div className="space-y-1">
        <Skeleton className="h-7 w-40" />
        <Skeleton className="h-4 w-56" />
      </div>

      <div className="flex gap-2 overflow-x-auto">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-10 w-14 shrink-0 rounded-lg" />
        ))}
      </div>

      <div className="space-y-3">
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-28 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
