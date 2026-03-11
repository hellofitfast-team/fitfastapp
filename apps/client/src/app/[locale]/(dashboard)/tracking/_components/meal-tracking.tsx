"use client";

/**
 * MealTracking — daily meal completion tracking with per-meal expansion.
 *
 * Each meal card shows name, macros (with colored chips), completion checkbox,
 * and expandable ingredients/instructions. Uses nutrition green as the accent color.
 */

import { memo, useState } from "react";
import { useTranslations } from "next-intl";
import { UtensilsCrossed, ChevronDown, ChevronUp, Check, Circle, Loader2 } from "lucide-react";
import { cn } from "@fitfast/ui/cn";
import type { GeneratedMealPlan } from "@/lib/ai/meal-plan-generator";

type Meal = GeneratedMealPlan["weeklyPlan"][string]["meals"][number];

interface MealCompletion {
  mealIndex: number;
  completed: boolean;
  notes?: string;
}

interface MealTrackingProps {
  todaysMeals: Meal[];
  mealCompletions: MealCompletion[];
  isTogglingMeal: number | null;
  mealNotes: Record<number, string>;
  onMealToggle: (index: number, completed: boolean) => void;
  onMealNotesChange: (notes: Record<number, string>) => void;
  isMealsExpanded: boolean;
  onToggleExpand: () => void;
}

/**
 * Maps meal time strings to color classes using existing design tokens.
 * Falls back to neutral for unrecognized times.
 */
function getMealTypeBadge(time: string): { bg: string; text: string } {
  const lower = time.toLowerCase();
  if (lower.includes("breakfast") || lower.includes("فطور"))
    return { bg: "bg-streak/15", text: "text-streak" };
  if (lower.includes("lunch") || lower.includes("غداء"))
    return { bg: "bg-nutrition/15", text: "text-nutrition" };
  if (lower.includes("dinner") || lower.includes("عشاء"))
    return { bg: "bg-primary/12", text: "text-primary" };
  if (lower.includes("snack") || lower.includes("وجبة خفيفة"))
    return { bg: "bg-routine/15", text: "text-routine" };
  return { bg: "bg-neutral-100", text: "text-neutral-600" };
}

export const MealTracking = memo(function MealTracking({
  todaysMeals,
  mealCompletions,
  isTogglingMeal,
  mealNotes,
  onMealToggle,
  onMealNotesChange,
  isMealsExpanded,
  onToggleExpand,
}: MealTrackingProps) {
  const t = useTranslations("tracking");
  const tMeals = useTranslations("meals");
  const [expandedMeal, setExpandedMeal] = useState<number | null>(null);

  const getMealCompletion = (mealIndex: number) => {
    return mealCompletions.find((c) => c.mealIndex === mealIndex);
  };

  return (
    <div className="border-border bg-card shadow-card border-l-nutrition overflow-hidden rounded-xl border border-l-4">
      {/* Section header */}
      <button
        onClick={onToggleExpand}
        className="border-border flex w-full items-center justify-between border-b p-4 transition-colors hover:bg-neutral-50"
      >
        <div className="flex items-center gap-3">
          <div className="bg-nutrition/12 flex h-9 w-9 items-center justify-center rounded-lg">
            <UtensilsCrossed className="text-nutrition h-4 w-4" />
          </div>
          <div className="text-start">
            <h2 className="text-sm font-semibold">{t("mealTracking")}</h2>
            <p className="text-muted-foreground text-xs">
              {mealCompletions.filter((c) => c.completed).length}/{todaysMeals.length}{" "}
              {t("mealsCompleted")}
            </p>
          </div>
        </div>
        {isMealsExpanded ? (
          <ChevronUp className="text-muted-foreground h-4 w-4" />
        ) : (
          <ChevronDown className="text-muted-foreground h-4 w-4" />
        )}
      </button>

      {isMealsExpanded && (
        <div className="divide-border divide-y">
          {todaysMeals.length === 0 ? (
            <div className="p-10 text-center">
              <UtensilsCrossed className="text-muted-foreground/30 mx-auto h-10 w-10" />
              <p className="mt-3 text-sm font-medium">{t("noMealsPlanned")}</p>
            </div>
          ) : (
            todaysMeals.map((meal, index) => {
              const completion = getMealCompletion(index);
              const isCompleted = completion?.completed || false;
              const isExpanded = expandedMeal === index;
              const badge = getMealTypeBadge(meal.time || "");

              return (
                <div
                  key={index}
                  className={cn(
                    "p-4 transition-colors",
                    isCompleted ? "bg-nutrition/5" : "hover:bg-neutral-50",
                  )}
                >
                  <div className="flex items-start gap-3">
                    {/* Completion checkbox — uses nutrition green */}
                    <button
                      type="button"
                      onClick={() => onMealToggle(index, isCompleted)}
                      disabled={isTogglingMeal === index}
                      aria-label={isCompleted ? t("markIncomplete") : t("markComplete")}
                      aria-pressed={isCompleted}
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200",
                        isCompleted
                          ? "border-nutrition bg-nutrition scale-105"
                          : "hover:border-nutrition border-neutral-300",
                      )}
                    >
                      {isTogglingMeal === index ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : isCompleted ? (
                        <Check className="h-4 w-4 text-white" />
                      ) : (
                        <Circle className="h-4 w-4 text-neutral-300" />
                      )}
                    </button>

                    <div className="min-w-0 flex-1 space-y-2">
                      {/* Meal name + type badge */}
                      <div>
                        <div className="flex items-center gap-2">
                          <h4
                            className={cn(
                              "text-base font-semibold",
                              isCompleted && "text-muted-foreground line-through",
                            )}
                          >
                            {meal.name}
                          </h4>
                          {meal.time && (
                            <span
                              className={cn(
                                "rounded-full px-2 py-0.5 text-[10px] font-bold",
                                badge.bg,
                                badge.text,
                              )}
                            >
                              {meal.time}
                            </span>
                          )}
                        </div>

                        {/* Macro chips with tinted backgrounds */}
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          <MacroChip
                            label={`${meal.calories} ${tMeals("calories")}`}
                            variant="default"
                          />
                          <MacroChip
                            label={`${meal.protein}g ${tMeals("protein")}`}
                            variant="protein"
                          />
                          <MacroChip label={`${meal.carbs}g ${tMeals("carbs")}`} variant="carbs" />
                          <MacroChip label={`${meal.fat}g ${tMeals("fat")}`} variant="fat" />
                        </div>
                      </div>

                      {/* Expandable details toggle */}
                      {meal.ingredients && meal.ingredients.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setExpandedMeal(isExpanded ? null : index)}
                          className="text-nutrition bg-nutrition/8 hover:bg-nutrition/15 rounded-md px-2 py-0.5 text-xs font-medium transition-colors"
                        >
                          {meal.ingredients.length} {tMeals("ingredients")} {isExpanded ? "▲" : "▼"}
                        </button>
                      )}

                      {/* Expanded ingredients/instructions/alternatives */}
                      {isExpanded && (
                        <div className="border-border/50 space-y-3 rounded-lg border p-3">
                          {meal.ingredients && meal.ingredients.length > 0 && (
                            <div>
                              <p className="text-xs font-semibold">{tMeals("ingredients")}</p>
                              <ul className="text-muted-foreground mt-1 list-inside list-disc text-xs">
                                {meal.ingredients.map((ing, i) => (
                                  <li key={i}>{ing}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {meal.instructions && meal.instructions.length > 0 && (
                            <div>
                              <p className="text-xs font-semibold">{tMeals("instructions")}</p>
                              <ol className="text-muted-foreground mt-1 list-inside list-decimal text-xs">
                                {meal.instructions.map((step, i) => (
                                  <li key={i}>{step}</li>
                                ))}
                              </ol>
                            </div>
                          )}
                          {meal.alternatives && meal.alternatives.length > 0 && (
                            <div>
                              <p className="text-xs font-semibold">{tMeals("alternatives")}</p>
                              <ul className="text-muted-foreground mt-1 list-inside list-disc text-xs">
                                {meal.alternatives.map((alt, i) => (
                                  <li key={i}>{alt}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Notes */}
                      <textarea
                        placeholder={t("addNotes")}
                        value={mealNotes[index] || completion?.notes || ""}
                        onChange={(e) =>
                          onMealNotesChange({ ...mealNotes, [index]: e.target.value })
                        }
                        className="border-input placeholder:text-muted-foreground focus:ring-nutrition min-h-[44px] w-full resize-none rounded-lg border bg-neutral-50 p-2.5 text-xs transition-colors focus:ring-2 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
});

// ---------------------------------------------------------------------------
// MacroChip — small colored badge for displaying a macro value
// ---------------------------------------------------------------------------

interface MacroChipProps {
  label: string;
  variant: "default" | "protein" | "carbs" | "fat";
}

/** Renders a small tinted chip for macro values using existing tokens */
function MacroChip({ label, variant }: MacroChipProps) {
  const styles = {
    default: "bg-neutral-100 text-neutral-600",
    protein: "bg-primary/10 text-primary",
    carbs: "bg-streak/10 text-streak",
    fat: "bg-routine/10 text-routine",
  };

  return (
    <span className={cn("rounded-md px-1.5 py-0.5 text-[10px] font-semibold", styles[variant])}>
      {label}
    </span>
  );
}
