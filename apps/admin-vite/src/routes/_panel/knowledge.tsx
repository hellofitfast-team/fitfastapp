import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { KnowledgeManager } from "@/components/knowledge/knowledge-manager";

export const Route = createFileRoute("/_panel/knowledge")({
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
