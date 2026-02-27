"use client";

import { useTranslations } from "next-intl";
import { Target, Check } from "lucide-react";
import { SectionCard } from "@fitfast/ui/section-card";
import { PRIMARY_GOALS, SECONDARY_FOCUSES } from "./constants";
import { cn } from "@fitfast/ui/cn";

interface GoalsSectionProps {
  primaryGoal: string;
  setPrimaryGoal: (goal: string) => void;
  secondaryFocuses: string[];
  setSecondaryFocuses: (focuses: string[]) => void;
  isLoading: boolean;
}

export function GoalsSection({
  primaryGoal,
  setPrimaryGoal,
  secondaryFocuses,
  setSecondaryFocuses,
  isLoading,
}: GoalsSectionProps) {
  const t = useTranslations("onboarding.assessment");

  const handleToggleSecondary = (id: string) => {
    if (secondaryFocuses.includes(id)) {
      setSecondaryFocuses(secondaryFocuses.filter((f) => f !== id));
    } else if (secondaryFocuses.length < 2) {
      setSecondaryFocuses([...secondaryFocuses, id]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Primary goal — single select */}
      <SectionCard
        icon={Target}
        title={t("primaryGoalTitle")}
        description={t("primaryGoalDesc")}
        variant="fitness"
      >
        <div className="space-y-2">
          {PRIMARY_GOALS.map((goal) => {
            const isSelected = primaryGoal === goal.id;
            return (
              <button
                key={goal.id}
                type="button"
                disabled={isLoading}
                onClick={() => setPrimaryGoal(goal.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-start transition-all",
                  isSelected
                    ? "border-primary bg-primary/5"
                    : "border-stone-200 hover:border-stone-300",
                )}
              >
                <div
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                    isSelected ? "border-primary bg-primary" : "border-stone-300",
                  )}
                >
                  {isSelected && <Check className="h-3 w-3 text-white" />}
                </div>
                <div>
                  <p
                    className={cn(
                      "text-sm font-semibold tracking-wide uppercase",
                      isSelected ? "text-primary" : "text-stone-700",
                    )}
                  >
                    {t(`primaryGoals.${goal.id}`)}
                  </p>
                  <p className="mt-0.5 text-xs text-stone-400">
                    {t(`primaryGoals.${goal.id}_desc`)}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </SectionCard>

      {/* Secondary focus — optional multi-select, up to 2 */}
      {primaryGoal && (
        <SectionCard
          icon={Target}
          title={t("secondaryFocusTitle")}
          description={t("secondaryFocusDesc")}
          variant="fitness"
        >
          <div className="flex flex-wrap gap-2">
            {SECONDARY_FOCUSES.map((focus) => {
              const isSelected = secondaryFocuses.includes(focus.id);
              const isDisabled = !isSelected && secondaryFocuses.length >= 2;
              return (
                <button
                  key={focus.id}
                  type="button"
                  disabled={isLoading || isDisabled}
                  onClick={() => handleToggleSecondary(focus.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold tracking-wide uppercase transition-all",
                    isSelected
                      ? "border-primary bg-primary/10 text-primary"
                      : isDisabled
                        ? "cursor-not-allowed border-stone-100 bg-stone-50 text-stone-300"
                        : "border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-700",
                  )}
                >
                  {isSelected && <Check className="h-3 w-3" />}
                  {t(`secondaryFocuses.${focus.id}`)}
                </button>
              );
            })}
          </div>
        </SectionCard>
      )}
    </div>
  );
}
