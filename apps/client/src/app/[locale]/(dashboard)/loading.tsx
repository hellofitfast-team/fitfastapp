import { Skeleton } from "@fitfast/ui/skeleton";
import { SkeletonWidgetCard } from "@fitfast/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="mx-auto max-w-3xl space-y-5 px-4 py-6">
      {/* Greeting header skeleton */}
      <div className="space-y-1">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-7 w-48" />
      </div>

      {/* Widget grid skeleton — 2 columns */}
      <div className="grid grid-cols-2 gap-3">
        <SkeletonWidgetCard />
        <SkeletonWidgetCard />
        <SkeletonWidgetCard />
        <SkeletonWidgetCard />
      </div>

      {/* Section card skeletons */}
      <Skeleton className="h-52 rounded-xl" />
      <Skeleton className="h-48 rounded-xl" />
    </div>
  );
}
