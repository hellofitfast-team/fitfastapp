import { Skeleton } from "@fitfast/ui/skeleton";

export default function TicketsLoading() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 px-4 py-6">
      <Skeleton className="h-8 w-40" />
      <div className="space-y-3">
        <Skeleton className="h-20 rounded-xl" />
        <Skeleton className="h-20 rounded-xl" />
        <Skeleton className="h-20 rounded-xl" />
      </div>
    </div>
  );
}
