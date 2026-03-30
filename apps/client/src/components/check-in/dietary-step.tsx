import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { UtensilsCrossed } from "lucide-react";
import { SectionCard } from "@fitfast/ui/section-card";
import { RatingSelector } from "@fitfast/ui/rating-selector";
import { Textarea } from "@fitfast/ui/textarea";
import type { CheckInFormData } from "./types";

export function DietaryStep() {
  const { t } = useTranslation();
  const { register, watch, setValue } = useFormContext<CheckInFormData>();

  const dietaryAdherence = watch("dietaryAdherence");

  return (
    <div className="space-y-4">
      <SectionCard icon={UtensilsCrossed} title={t("checkIn.adherence")} variant="nutrition">
        <div className="space-y-4">
          <RatingSelector
            label={t("checkIn.adherenceRating")}
            value={dietaryAdherence}
            onChange={(v) => setValue("dietaryAdherence", v)}
          />
          <Textarea
            placeholder={t("checkIn.placeholders.dietNotes")}
            className="min-h-[100px]"
            {...register("dietNotes")}
          />
        </div>
      </SectionCard>

      <SectionCard title={`${t("checkIn.injuries")} (${t("checkIn.optional")})`} variant="neutral">
        <Textarea
          placeholder={t("checkIn.placeholders.injuries")}
          className="min-h-[100px]"
          {...register("newInjuries")}
        />
      </SectionCard>
    </div>
  );
}
