import { Loader2 } from "lucide-react";

export function RoutePendingComponent() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Loader2 className="text-primary h-8 w-8 animate-spin" />
    </div>
  );
}
