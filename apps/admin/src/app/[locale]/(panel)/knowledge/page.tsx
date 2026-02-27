"use client";

import { useTranslations } from "next-intl";
import { KnowledgeManager } from "./knowledge-manager";

export default function KnowledgePage() {
  const t = useTranslations("knowledge");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t("title")}</h1>
        <p className="mt-1 text-sm text-stone-500">{t("description")}</p>
      </div>
      <KnowledgeManager />
    </div>
  );
}
