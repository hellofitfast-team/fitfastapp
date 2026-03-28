import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ExerciseManager } from "@/components/exercises/exercise-manager";

export const Route = createFileRoute("/_panel/exercises")({
  component: ExercisesPage,
});

function ExercisesPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t("exercises.title")}</h1>
        <p className="mt-1 text-sm text-stone-500">{t("exercises.description")}</p>
      </div>
      <ExerciseManager />
    </div>
  );
}
