import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { AdminSettingsForm } from "@/components/settings/settings-form";
import { RouteErrorComponent } from "@/components/route-error";
import { TableSkeleton } from "@/components/skeletons/table-skeleton";

export const Route = createFileRoute("/_panel/settings")({
  errorComponent: RouteErrorComponent,
  pendingComponent: () => <TableSkeleton rows={4} cols={2} />,
  component: AdminSettingsPage,
});

function AdminSettingsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-stone-900">
          {t("admin.settingsPage")}
        </h1>
        <p className="mt-1 text-sm text-stone-500">{t("admin.systemConfiguration")}</p>
      </div>
      <AdminSettingsForm />
    </div>
  );
}
