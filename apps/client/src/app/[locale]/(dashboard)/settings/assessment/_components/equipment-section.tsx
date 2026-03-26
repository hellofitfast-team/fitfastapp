"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Wrench, Loader2 } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { cn } from "@fitfast/ui/cn";
import { useToast } from "@/hooks/use-toast";

const EQUIPMENT_IDS = [
  "full_gym",
  "home_basic",
  "home_advanced",
  "bodyweight",
  "resistance_bands",
] as const;
const MEALS_OPTIONS = [3, 5] as const;

export function EquipmentSection({ assessment }: { assessment: any }) {
  const t = useTranslations("settings.assessment");
  const tEquip = useTranslations("onboarding.assessment");
  const { toast } = useToast();
  const submitAssessment = useMutation(api.assessments.submitAssessment);

  const currentEquipment = (assessment.lifestyleHabits as any)?.equipment ?? "";
  const currentMeals = (assessment.lifestyleHabits as any)?.mealsPerDay ?? 3;
  const [equipment, setEquipment] = useState(currentEquipment);
  const [mealsPerDay, setMealsPerDay] = useState(currentMeals);
  const [isSaving, setIsSaving] = useState(false);

  const hasChanges = equipment !== currentEquipment || mealsPerDay !== currentMeals;

  const handleSave = async () => {
    if (!hasChanges) return;
    setIsSaving(true);
    try {
      await submitAssessment({
        lifestyleHabits: { equipment, mealsPerDay },
      });
      toast({ title: t("saved"), variant: "success" });
    } catch {
      toast({ title: t("noChanges"), variant: "destructive" });
    }
    setIsSaving(false);
  };

  return (
    <div className="border-border bg-card overflow-hidden rounded-xl border">
      <div className="border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4">
        <Wrench className="text-primary h-4 w-4" />
        <h3 className="text-sm font-semibold">{t("equipmentTitle")}</h3>
      </div>
      <div className="space-y-4 p-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium">{t("equipment")}</label>
          <div className="flex flex-col gap-2">
            {EQUIPMENT_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setEquipment(id)}
                className={cn(
                  "flex items-center gap-3 rounded-lg border p-3 text-start text-sm font-medium transition-colors",
                  equipment === id
                    ? "border-fitness/30 bg-fitness/8 text-fitness"
                    : "border-border hover:bg-neutral-50",
                )}
              >
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs",
                    equipment === id
                      ? "border-fitness/30 bg-fitness/12 text-fitness"
                      : "border-border text-muted-foreground bg-neutral-50",
                  )}
                >
                  {equipment === id ? "✓" : ""}
                </div>
                {tEquip(`equipmentOptions.${id}`)}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium">{t("mealsPerDay")}</label>
          <div className="flex gap-2">
            {MEALS_OPTIONS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setMealsPerDay(n)}
                className={cn(
                  "flex-1 rounded-lg border p-2.5 text-center text-sm font-medium transition-colors",
                  mealsPerDay === n
                    ? "border-fitness/30 bg-fitness/8 text-fitness"
                    : "border-border hover:bg-neutral-50",
                )}
              >
                {n}
              </button>
            ))}
          </div>
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
            t(hasChanges ? "save" : "noChanges")
          )}
        </button>
      </div>
    </div>
  );
}
