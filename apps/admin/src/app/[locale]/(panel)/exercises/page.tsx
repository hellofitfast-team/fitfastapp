"use client";

import { useTranslations } from "next-intl";
import { ExerciseManager } from "./exercise-manager";

export default function ExercisesPage() {
  const t = useTranslations("exercises");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t("title")}</h1>
        <p className="mt-1 text-sm text-stone-500">{t("description")}</p>
      </div>
      <ExerciseManager />
    </div>
  );
}
