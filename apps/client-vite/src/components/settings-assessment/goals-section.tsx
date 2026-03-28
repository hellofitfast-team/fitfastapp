import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Target, Loader2 } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@convex/_generated/api";
import { cn } from "@fitfast/ui/cn";
import { toast } from "@fitfast/ui/use-toast";

const GOAL_IDS = [
  "lose_fat",
  "build_muscle",
  "body_recomposition",
  "get_stronger",
  "improve_fitness",
] as const;
const ACTIVITY_LEVELS = [
  "sedentary",
  "lightly_active",
  "moderately_active",
  "very_active",
] as const;
const EXPERIENCE_LEVELS = ["beginner", "intermediate", "advanced"] as const;

export function GoalsSection({ assessment }: { assessment: any }) {
  const { t } = useTranslation("settings");
  const { t: tAssessment } = useTranslation("onboarding");
  const submitAssessment = useMutation(api.assessments.submitAssessment);

  const currentGoal = (assessment.goals as string)?.split(",")[0] ?? "";
  const [goal, setGoal] = useState(currentGoal);
  const [activityLevel, setActivityLevel] = useState(assessment.activityLevel ?? "");
  const [experienceLevel, setExperienceLevel] = useState(assessment.experienceLevel ?? "");
  const [isSaving, setIsSaving] = useState(false);

  const hasChanges =
    goal !== currentGoal ||
    activityLevel !== (assessment.activityLevel ?? "") ||
    experienceLevel !== (assessment.experienceLevel ?? "");

  const handleSave = async () => {
    if (!hasChanges) return;
    setIsSaving(true);
    try {
      await submitAssessment({
        goals: goal,
        activityLevel: activityLevel as any,
        experienceLevel: experienceLevel as any,
      });
      toast({ title: t("assessment.saved"), variant: "success" });
    } catch {
      toast({ title: t("assessment.noChanges"), variant: "destructive" });
    }
    setIsSaving(false);
  };

  return (
    <div className="border-border bg-card overflow-hidden rounded-xl border">
      <div className="border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4">
        <Target className="text-primary h-4 w-4" />
        <h3 className="text-sm font-semibold">{t("assessment.goalsTitle")}</h3>
      </div>
      <div className="space-y-4 p-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium">{t("assessment.primaryGoal")}</label>
          <div className="flex flex-col gap-2">
            {GOAL_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setGoal(id)}
                className={cn(
                  "rounded-lg border p-3 text-start text-sm font-medium transition-colors",
                  goal === id
                    ? "border-fitness/30 bg-fitness/8 text-fitness"
                    : "border-border hover:bg-neutral-50",
                )}
              >
                {tAssessment(`assessment.primaryGoals.${id}`)}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium">
            {t("assessment.activityLevel")}
          </label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm focus:ring-2 focus:outline-none"
          >
            {ACTIVITY_LEVELS.map((id) => (
              <option key={id} value={id}>
                {tAssessment(`assessment.activityLevels.${id}`)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium">
            {t("assessment.experienceLevel")}
          </label>
          <select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            className="border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm focus:ring-2 focus:outline-none"
          >
            {EXPERIENCE_LEVELS.map((id) => (
              <option key={id} value={id}>
                {tAssessment(`assessment.levels.${id}`)}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={handleSave}
          disabled={!hasChanges || isSaving}
          className="bg-primary hover:bg-primary/90 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-50"
        >
          {isSaving ? (
            <Loader2 className="mx-auto h-4 w-4 animate-spin" />
          ) : (
            t(hasChanges ? "assessment.save" : "assessment.noChanges")
          )}
        </button>
      </div>
    </div>
  );
}
