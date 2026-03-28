import { useMemo, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ClipboardCheck, Dumbbell, UtensilsCrossed, Camera } from "lucide-react";
import { SectionCard } from "@fitfast/ui/section-card";
import { Textarea } from "@fitfast/ui/textarea";
import type { CheckInFormData, ProgressPhotos } from "./types";

interface ReviewStepProps {
  progressPhotos: ProgressPhotos;
  inBodyFile: File | null;
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between p-4">
      <span className="text-muted-foreground text-sm">{label}</span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
}

export function ReviewStep({ progressPhotos, inBodyFile }: ReviewStepProps) {
  const { t } = useTranslation();
  const { register, watch } = useFormContext<CheckInFormData>();

  const weight = watch("weight");
  const measurementMethod = watch("measurementMethod");
  const chest = watch("chest");
  const waist = watch("waist");
  const hips = watch("hips");
  const arms = watch("arms");
  const thighs = watch("thighs");
  const workoutPerformance = watch("workoutPerformance");
  const energyLevel = watch("energyLevel");
  const sleepQuality = watch("sleepQuality");
  const dietaryAdherence = watch("dietaryAdherence");
  const dietNotes = watch("dietNotes");
  const newInjuries = watch("newInjuries");

  // Preview URLs for progress photos
  const photoUrls = useMemo(() => {
    const urls: Record<string, string | null> = {};
    for (const pos of ["front", "back", "side"] as const) {
      urls[pos] = progressPhotos[pos] ? URL.createObjectURL(progressPhotos[pos]) : null;
    }
    return urls;
  }, [progressPhotos]);

  useEffect(() => {
    return () => {
      for (const url of Object.values(photoUrls)) {
        if (url) URL.revokeObjectURL(url);
      }
    };
  }, [photoUrls]);

  // Collect non-empty manual measurements
  const measurements = [
    { label: t("checkIn.chest"), value: chest },
    { label: t("checkIn.waist"), value: waist },
    { label: t("checkIn.hips"), value: hips },
    { label: t("checkIn.arms"), value: arms },
    { label: t("checkIn.thighs"), value: thighs },
  ].filter((m) => m.value && Number(m.value) > 0);

  const truncate = (text: string | undefined, max: number) => {
    if (!text) return t("checkIn.none");
    return text.length > max ? `${text.slice(0, max)}...` : text;
  };

  const photoCount = [progressPhotos.front, progressPhotos.back, progressPhotos.side].filter(
    Boolean,
  ).length;

  const photoLabels: Record<string, string> = {
    front: t("checkIn.photoFront"),
    back: t("checkIn.photoBack"),
    side: t("checkIn.photoSide"),
  };

  return (
    <div className="space-y-4">
      {/* Body Section */}
      <SectionCard icon={ClipboardCheck} title={t("checkIn.reviewBody")}>
        <div className="divide-border -m-5 divide-y">
          <ReviewRow
            label={t("checkIn.weight")}
            value={weight ? `${weight} ${t("units.kg")}` : "\u2014"}
          />
          {measurementMethod === "manual" &&
            measurements.map((m) => (
              <ReviewRow key={m.label} label={m.label} value={`${m.value} ${t("units.cm")}`} />
            ))}
          {measurementMethod === "inbody" && (
            <ReviewRow
              label={t("checkIn.inBodyUpload")}
              value={inBodyFile ? inBodyFile.name : t("checkIn.none")}
            />
          )}
        </div>
      </SectionCard>

      {/* Fitness Section */}
      <SectionCard icon={Dumbbell} title={t("checkIn.reviewFitness")}>
        <div className="divide-border -m-5 divide-y">
          <ReviewRow label={t("checkIn.performance")} value={truncate(workoutPerformance, 100)} />
          <ReviewRow label={t("checkIn.energy")} value={`${energyLevel}/10`} />
          <ReviewRow label={t("checkIn.sleep")} value={`${sleepQuality}/10`} />
        </div>
      </SectionCard>

      {/* Diet Section */}
      <SectionCard icon={UtensilsCrossed} title={t("checkIn.reviewDiet")}>
        <div className="divide-border -m-5 divide-y">
          <ReviewRow label={t("checkIn.adherence")} value={`${dietaryAdherence}/10`} />
          <ReviewRow label={t("checkIn.dietNotes")} value={truncate(dietNotes, 80)} />
          <ReviewRow label={t("checkIn.injuries")} value={truncate(newInjuries, 80)} />
        </div>
      </SectionCard>

      {/* Photos Section */}
      <SectionCard icon={Camera} title={t("checkIn.photos")}>
        {photoCount > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {(["front", "back", "side"] as const).map((pos) =>
              photoUrls[pos] ? (
                <div key={pos} className="text-center">
                  <img
                    src={photoUrls[pos]!}
                    alt={photoLabels[pos]}
                    className="border-border aspect-[3/4] w-full rounded-lg border object-cover"
                  />
                  <p className="text-muted-foreground mt-1 text-xs">{photoLabels[pos]}</p>
                </div>
              ) : null,
            )}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">{t("checkIn.noPhotos")}</p>
        )}
      </SectionCard>

      {/* Additional Notes */}
      <SectionCard
        title={`${t("checkIn.additionalNotes")} (${t("checkIn.optional")})`}
        variant="neutral"
      >
        <Textarea
          placeholder={t("checkIn.placeholders.notes")}
          className="min-h-[100px]"
          {...register("notes")}
        />
      </SectionCard>
    </div>
  );
}
