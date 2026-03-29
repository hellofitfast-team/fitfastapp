import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { KnowledgeManager } from "@/components/knowledge/knowledge-manager";
import { RouteErrorComponent } from "@/components/route-error";
import { RoutePendingComponent } from "@/components/route-pending";

export const Route = createFileRoute("/_panel/knowledge")({
  errorComponent: RouteErrorComponent,
  pendingComponent: RoutePendingComponent,
  component: KnowledgePage,
});

function KnowledgePage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t("knowledge.title")}</h1>
        <p className="mt-1 text-sm text-stone-500">{t("knowledge.description")}</p>
      </div>
      <KnowledgeManager />
    </div>
  );
}
