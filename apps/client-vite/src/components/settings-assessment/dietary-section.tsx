import { useState } from "react";
import { useTranslation } from "react-i18next";
import { UtensilsCrossed, Loader2 } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@convex/_generated/api";
import { cn } from "@fitfast/ui/cn";
import { toast } from "@fitfast/ui/use-toast";

const FOOD_PREF_IDS = [
  "mediterranean",
  "middle_eastern",
  "asian",
  "western",
  "indian",
  "latin",
] as const;
const ALLERGY_IDS = [
  "nuts",
  "dairy",
  "eggs",
  "shellfish",
  "gluten",
  "soy",
  "fish",
  "lactose",
] as const;
const RESTRICTION_IDS = ["no_beef", "vegetarian", "vegan"] as const;

export function DietarySection({ assessment }: { assessment: any }) {
  const { t } = useTranslation("translation", { keyPrefix: "settings" });
  const { t: tDiet } = useTranslation("translation", { keyPrefix: "onboarding" });
  const submitAssessment = useMutation(api.assessments.submitAssessment);

  const [foodPrefs, setFoodPrefs] = useState<string[]>(assessment.foodPreferences ?? []);
  const [allergies, setAllergies] = useState<string[]>(assessment.allergies ?? []);
  const [restrictions, setRestrictions] = useState<string[]>(assessment.dietaryRestrictions ?? []);
  const [isSaving, setIsSaving] = useState(false);

  const initialFoodPrefs = (assessment.foodPreferences ?? []) as string[];
  const initialAllergies = (assessment.allergies ?? []) as string[];
  const initialRestrictions = (assessment.dietaryRestrictions ?? []) as string[];

  const hasChanges =
    JSON.stringify([...foodPrefs].sort()) !== JSON.stringify([...initialFoodPrefs].sort()) ||
    JSON.stringify([...allergies].sort()) !== JSON.stringify([...initialAllergies].sort()) ||
    JSON.stringify([...restrictions].sort()) !== JSON.stringify([...initialRestrictions].sort());

  const toggleItem = (list: string[], setList: (v: string[]) => void, item: string) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  const handleSave = async () => {
    if (!hasChanges) return;
    setIsSaving(true);
    try {
      await submitAssessment({
        foodPreferences: foodPrefs,
        allergies,
        dietaryRestrictions: restrictions,
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
        <UtensilsCrossed className="text-primary h-4 w-4" />
        <h3 className="text-sm font-semibold">{t("assessment.dietaryTitle")}</h3>
      </div>
      <div className="space-y-4 p-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium">
            {t("assessment.foodPreferences")}
          </label>
          <div className="flex flex-wrap gap-2">
            {FOOD_PREF_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => toggleItem(foodPrefs, setFoodPrefs, id)}
                className={cn(
                  "rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
                  foodPrefs.includes(id)
                    ? "border-fitness/30 bg-fitness/8 text-fitness"
                    : "border-border hover:bg-neutral-50",
                )}
              >
                {tDiet(`assessment.cuisines.${id}`)}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium">{t("assessment.allergies")}</label>
          <div className="flex flex-wrap gap-2">
            {ALLERGY_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => toggleItem(allergies, setAllergies, id)}
                className={cn(
                  "rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
                  allergies.includes(id)
                    ? "border-destructive/30 bg-destructive/8 text-destructive"
                    : "border-border hover:bg-neutral-50",
                )}
              >
                {tDiet(`assessment.allergies.${id}`)}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium">
            {t("assessment.dietaryRestrictions")}
          </label>
          <div className="flex flex-wrap gap-2">
            {RESTRICTION_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => toggleItem(restrictions, setRestrictions, id)}
                className={cn(
                  "rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
                  restrictions.includes(id)
                    ? "border-amber-500/30 bg-amber-500/8 text-amber-600"
                    : "border-border hover:bg-neutral-50",
                )}
              >
                {tDiet(`assessment.restrictions.${id}`)}
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
            t(hasChanges ? "assessment.save" : "assessment.noChanges")
          )}
        </button>
      </div>
    </div>
  );
}
