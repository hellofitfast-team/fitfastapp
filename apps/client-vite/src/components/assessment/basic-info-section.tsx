import { useTranslation } from "react-i18next";
import { User, Dumbbell, Wrench } from "lucide-react";
import { SectionCard } from "@fitfast/ui/section-card";
import { FormField } from "@fitfast/ui/form-field";
import { Input } from "@fitfast/ui/input";
import { cn } from "@fitfast/ui/cn";

interface BasicInfoSectionProps {
  currentWeight: string;
  setCurrentWeight: (value: string) => void;
  height: string;
  setHeight: (value: string) => void;
  age: string;
  setAge: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
  activityLevel: string;
  setActivityLevel: (value: string) => void;
  experienceLevel: string;
  setExperienceLevel: (value: string) => void;
  equipment: string;
  setEquipment: (value: string) => void;
  isLoading: boolean;
}

const GENDER_IDS = ["male", "female"] as const;
const EXPERIENCE_IDS = ["beginner", "intermediate", "advanced"] as const;
const EQUIPMENT_IDS = [
  "full_gym",
  "home_basic",
  "home_advanced",
  "bodyweight",
  "resistance_bands",
] as const;

export function BasicInfoSection({
  currentWeight,
  setCurrentWeight,
  height,
  setHeight,
  age,
  setAge,
  gender,
  setGender,
  activityLevel,
  setActivityLevel,
  experienceLevel,
  setExperienceLevel,
  equipment,
  setEquipment,
  isLoading,
}: BasicInfoSectionProps) {
  const { t } = useTranslation("onboarding");
  const { t: tUnits } = useTranslation("units");

  return (
    <>
      {/* Basic Information */}
      <SectionCard icon={User} title={t("assessment.basicInfo")}>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label={t("assessment.currentWeightLabel")}>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                step="0.1"
                placeholder="75"
                value={currentWeight}
                onChange={(e) => setCurrentWeight(e.target.value)}
                disabled={isLoading}
              />
              <span className="text-muted-foreground text-sm font-semibold">{tUnits("kg")}</span>
            </div>
          </FormField>
          <FormField label={t("assessment.heightLabel")}>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                disabled={isLoading}
              />
              <span className="text-muted-foreground text-sm font-semibold">{tUnits("cm")}</span>
            </div>
          </FormField>
          <FormField label={t("assessment.ageLabel")}>
            <Input
              type="number"
              min={14}
              max={80}
              placeholder="25"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              disabled={isLoading}
            />
          </FormField>
          <FormField label={t("assessment.genderLabel")}>
            <div className="flex gap-2">
              {GENDER_IDS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setGender(id)}
                  disabled={isLoading}
                  className={cn(
                    "flex-1 rounded-lg border p-2.5 text-sm font-medium transition-colors",
                    gender === id
                      ? "border-fitness/30 bg-fitness/8 text-fitness"
                      : "border-border bg-card hover:bg-neutral-50",
                    isLoading
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer active:scale-[0.97]",
                  )}
                >
                  {t(`assessment.genders.${id}`)}
                </button>
              ))}
            </div>
          </FormField>
        </div>
      </SectionCard>

      {/* Activity Level */}
      <SectionCard icon={User} title={t("assessment.activityLevelTitle")}>
        <p className="text-muted-foreground mb-3 text-xs">{t("assessment.activityLevelDesc")}</p>
        <div className="flex flex-col gap-2">
          {(
            [
              { id: "sedentary", emoji: "1" },
              { id: "lightly_active", emoji: "2" },
              { id: "moderately_active", emoji: "3" },
              { id: "very_active", emoji: "4" },
            ] as const
          ).map((level) => (
            <button
              key={level.id}
              type="button"
              onClick={() => setActivityLevel(level.id)}
              disabled={isLoading}
              className={cn(
                "flex items-center gap-3 rounded-lg border p-3.5 text-start transition-colors",
                activityLevel === level.id
                  ? "border-fitness/30 bg-fitness/8"
                  : "border-border bg-card hover:bg-neutral-50",
                isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer active:scale-[0.97]",
              )}
            >
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                  activityLevel === level.id
                    ? "border-fitness/30 bg-fitness/12 text-fitness"
                    : "border-border text-muted-foreground bg-neutral-50",
                )}
              >
                {level.emoji}
              </div>
              <div>
                <span
                  className={cn(
                    "block text-sm font-semibold",
                    activityLevel === level.id && "text-fitness",
                  )}
                >
                  {t(`assessment.activityLevels.${level.id}`)}
                </span>
                <span className="text-muted-foreground block text-xs">
                  {t(`assessment.activityLevels.${level.id}_desc`)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </SectionCard>

      {/* Experience Level */}
      <SectionCard icon={Dumbbell} title={t("assessment.experienceLevel")} variant="fitness">
        <div className="flex flex-col gap-2">
          {EXPERIENCE_IDS.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setExperienceLevel(id)}
              disabled={isLoading}
              className={cn(
                "flex items-center gap-3 rounded-lg border p-3.5 text-start transition-colors",
                experienceLevel === id
                  ? "border-fitness/30 bg-fitness/8"
                  : "border-border bg-card hover:bg-neutral-50",
                isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer active:scale-[0.97]",
              )}
            >
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                  experienceLevel === id
                    ? "border-fitness/30 bg-fitness/12 text-fitness"
                    : "border-border text-muted-foreground bg-neutral-50",
                )}
              >
                {id === "beginner" ? "1" : id === "intermediate" ? "2" : "3"}
              </div>
              <div>
                <span
                  className={cn(
                    "block text-sm font-semibold",
                    experienceLevel === id && "text-fitness",
                  )}
                >
                  {t(`assessment.levels.${id}`)}
                </span>
                <span className="text-muted-foreground block text-xs">
                  {t(`assessment.levels.${id}_desc`)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </SectionCard>

      {/* Equipment */}
      <SectionCard icon={Wrench} title={t("assessment.equipmentTitle")} variant="fitness">
        <div className="space-y-3">
          <div className="flex flex-col gap-2">
            {EQUIPMENT_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setEquipment(id)}
                disabled={isLoading}
                className={cn(
                  "flex items-center gap-3 rounded-lg border p-3.5 text-start transition-colors",
                  equipment === id
                    ? "border-fitness/30 bg-fitness/8"
                    : "border-border bg-card hover:bg-neutral-50",
                  isLoading
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer active:scale-[0.97]",
                )}
              >
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs",
                    equipment === id
                      ? "border-fitness/30 bg-fitness/12 text-fitness"
                      : "border-border text-muted-foreground bg-neutral-50",
                  )}
                >
                  {equipment === id ? "✓" : ""}
                </div>
                <span className={cn("text-sm font-medium", equipment === id && "text-fitness")}>
                  {t(`assessment.equipmentOptions.${id}`)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </SectionCard>
    </>
  );
}
