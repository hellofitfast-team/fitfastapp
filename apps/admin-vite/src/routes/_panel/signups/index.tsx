import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Loader2 } from "lucide-react";
import { SignupsTable } from "@/components/signups/signups-table";
import { RouteErrorComponent } from "@/components/route-error";

export const Route = createFileRoute("/_panel/signups/")({
  errorComponent: RouteErrorComponent,
  pendingComponent: () => (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Loader2 className="h-6 w-6 animate-spin text-stone-400" />
    </div>
  ),
  component: AdminSignupsPage,
});

function AdminSignupsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-stone-900">{t("admin.signups")}</h1>
        <p className="mt-1 text-sm text-stone-500">{t("admin.pendingSignups")}</p>
      </div>
      <SignupsTable />
    </div>
  );
}
