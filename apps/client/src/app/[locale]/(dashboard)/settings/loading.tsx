import { Skeleton } from "@fitfast/ui/skeleton";

export default function SettingsLoading() {
  return (
    <div className="mx-auto max-w-3xl space-y-5 px-4 py-6">
      {/* Page header */}
      <Skeleton className="h-8 w-32" />

      {/* Profile section */}
      <div className="space-y-3 rounded-xl border p-4">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Plan details section */}
      <div className="space-y-3 rounded-xl border p-4">
        <Skeleton className="h-5 w-28" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Notifications section */}
      <div className="space-y-3 rounded-xl border p-4">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}
