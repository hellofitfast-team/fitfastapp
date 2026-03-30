import { Loader2 } from "lucide-react";

export function RoutePendingComponent() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Loader2 className="h-6 w-6 animate-spin text-stone-400" />
    </div>
  );
}
