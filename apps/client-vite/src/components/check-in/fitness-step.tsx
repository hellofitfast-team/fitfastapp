import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Dumbbell } from "lucide-react";
import { SectionCard } from "@fitfast/ui/section-card";
import { RatingSelector } from "@fitfast/ui/rating-selector";
import { Textarea } from "@fitfast/ui/textarea";
import { cn } from "@fitfast/ui/cn";
import type { CheckInFormData } from "./types";

const CYCLE_PHASES = ["menstrual", "follicular", "ovulatory", "luteal", "not_tracking"] as const;

interface FitnessStepProps {
  isFemale: boolean;
}

export function FitnessStep({ isFemale }: FitnessStepProps) {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<CheckInFormData>();

  const energyLevel = watch("energyLevel");
  const sleepQuality = watch("sleepQuality");
  const cyclePhase = watch("cyclePhase");

  return (
    <div className="space-y-4">
      {/* Cycle phase selector -- female clients only */}
      {isFemale && (
        <SectionCard
          title={t("checkIn.cyclePhase")}
          description={t("checkIn.cyclePhaseDescription")}
        >
          <div className="flex flex-wrap gap-2">
            {CYCLE_PHASES.map((phase) => {
              const translationKey = phase === "not_tracking" ? "notTracking" : phase;
              return (
                <button
                  key={phase}
                  type="button"
                  onClick={() => setValue("cyclePhase", cyclePhase === phase ? undefined : phase)}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
                    cyclePhase === phase
                      ? "border-fitness/30 bg-fitness/8 text-fitness"
                      : "border-border bg-card hover:bg-neutral-50",
                  )}
                >
                  {t(`checkIn.cyclePhaseOptions.${translationKey}`)}
                </button>
              );
            })}
          </div>
        </SectionCard>
      )}

      <SectionCard icon={Dumbbell} title={t("checkIn.performance")} variant="fitness">
        <Textarea
          placeholder={t("checkIn.placeholders.performance")}
          className="min-h-[120px]"
          {...register("workoutPerformance")}
        />
        {errors.workoutPerformance && (
          <p className="text-error-500 mt-2 text-xs">{errors.workoutPerformance.message}</p>
        )}
      </SectionCard>

      <SectionCard title={t("checkIn.wellbeingMetrics")} variant="fitness">
        <div className="space-y-5">
          <RatingSelector
            label={t("checkIn.energy")}
            value={energyLevel}
            onChange={(v) => setValue("energyLevel", v)}
          />
          <RatingSelector
            label={t("checkIn.sleep")}
            value={sleepQuality}
            onChange={(v) => setValue("sleepQuality", v)}
          />
        </div>
      </SectionCard>
    </div>
  );
}
