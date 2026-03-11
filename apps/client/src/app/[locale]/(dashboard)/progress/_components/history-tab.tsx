"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Calendar, AlertTriangle, Dumbbell, StickyNote } from "lucide-react";
import { SectionCard } from "@fitfast/ui/section-card";
import { cn } from "@fitfast/ui/cn";
import { EmptyState } from "@fitfast/ui/empty-state";
import type { CheckIn } from "@/types/convex";
import { formatDate, formatTime } from "@/lib/utils";

interface MeasurementData {
  chest?: number;
  waist?: number;
  hips?: number;
  arms?: number;
  thighs?: number;
}

interface InBodyData {
  bodyFatPercentage?: number;
  leanBodyMass?: number;
  skeletalMuscleMass?: number;
  bmi?: number;
  visceralFatLevel?: number;
  basalMetabolicRate?: number;
  totalBodyWater?: number;
}

interface HistoryTabProps {
  checkIns: CheckIn[];
}

export function HistoryTab({ checkIns }: HistoryTabProps) {
  const t = useTranslations("progress");
  const tEmpty = useTranslations("emptyStates");
  const tCheckIn = useTranslations("checkIn");
  const tUnits = useTranslations("units");
  const locale = useLocale();
  const router = useRouter();

  return (
    <SectionCard
      icon={Calendar}
      title={t("checkInHistory")}
      description={t("checkInHistoryDescription")}
      variant="routine"
    >
      <div className="divide-border -m-5 divide-y">
        {checkIns.length > 0 ? (
          checkIns
            .slice()
            .reverse()
            .map((checkIn) => {
              const measurements = (checkIn.measurements ?? {}) as MeasurementData;
              const inBodyData = (checkIn as unknown as { inBodyData?: InBodyData }).inBodyData;
              const extCheckIn = checkIn as unknown as {
                workoutPerformance?: string;
                newInjuries?: string;
                notes?: string;
                cyclePhase?: string;
              };
              return (
                <div key={checkIn._id} className="p-4 transition-colors hover:bg-neutral-50">
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        {formatDate(new Date(checkIn._creationTime).toISOString(), locale)}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {formatTime(new Date(checkIn._creationTime).toISOString(), locale)}
                      </p>
                    </div>
                    {checkIn.weight && (
                      <div className="bg-primary/10 rounded-lg px-3 py-1.5">
                        <span className="text-primary text-lg font-bold">{checkIn.weight}</span>
                        <span className="text-primary ms-1 text-xs">{tUnits("kg") || "KG"}</span>
                      </div>
                    )}
                  </div>

                  {measurements && (
                    <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {measurements.chest && (
                        <div className="rounded-lg bg-neutral-100 p-2.5">
                          <p className="text-muted-foreground text-xs">{tCheckIn("chest")}</p>
                          <p className="text-sm font-semibold">
                            {measurements.chest} {tUnits("cm")}
                          </p>
                        </div>
                      )}
                      {measurements.waist && (
                        <div className="rounded-lg bg-neutral-100 p-2.5">
                          <p className="text-muted-foreground text-xs">{tCheckIn("waist")}</p>
                          <p className="text-sm font-semibold">
                            {measurements.waist} {tUnits("cm")}
                          </p>
                        </div>
                      )}
                      {measurements.hips && (
                        <div className="rounded-lg bg-neutral-100 p-2.5">
                          <p className="text-muted-foreground text-xs">{tCheckIn("hips")}</p>
                          <p className="text-sm font-semibold">
                            {measurements.hips} {tUnits("cm")}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {inBodyData && (
                    <div className="mb-3">
                      <div className="mb-1.5 flex items-center gap-1.5">
                        <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                          InBody
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {inBodyData.bodyFatPercentage != null && (
                          <div className="rounded-lg bg-blue-50 p-2.5">
                            <p className="text-muted-foreground text-xs">{t("bodyFatPercent")}</p>
                            <p className="text-sm font-semibold">{inBodyData.bodyFatPercentage}%</p>
                          </div>
                        )}
                        {inBodyData.leanBodyMass != null && (
                          <div className="rounded-lg bg-blue-50 p-2.5">
                            <p className="text-muted-foreground text-xs">{t("leanMass")}</p>
                            <p className="text-sm font-semibold">
                              {inBodyData.leanBodyMass} {tUnits("kg")}
                            </p>
                          </div>
                        )}
                        {inBodyData.skeletalMuscleMass != null && (
                          <div className="rounded-lg bg-blue-50 p-2.5">
                            <p className="text-muted-foreground text-xs">
                              {t("skeletalMuscleMass")}
                            </p>
                            <p className="text-sm font-semibold">
                              {inBodyData.skeletalMuscleMass} {tUnits("kg")}
                            </p>
                          </div>
                        )}
                        {inBodyData.bmi != null && (
                          <div className="rounded-lg bg-blue-50 p-2.5">
                            <p className="text-muted-foreground text-xs">{t("bmi")}</p>
                            <p className="text-sm font-semibold">{inBodyData.bmi}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 text-xs">
                    {checkIn.energyLevel !== undefined && checkIn.energyLevel !== null && (
                      <span className="text-muted-foreground">
                        {tCheckIn("energy")}:{" "}
                        <span className="text-foreground font-semibold">
                          {checkIn.energyLevel}/10
                        </span>
                      </span>
                    )}
                    {checkIn.sleepQuality !== undefined && checkIn.sleepQuality !== null && (
                      <span className="text-muted-foreground">
                        {tCheckIn("sleep")}:{" "}
                        <span className="text-foreground font-semibold">
                          {checkIn.sleepQuality}/10
                        </span>
                      </span>
                    )}
                    {checkIn.dietaryAdherence !== undefined &&
                      checkIn.dietaryAdherence !== null && (
                        <span className="text-muted-foreground">
                          {tCheckIn("adherence")}:{" "}
                          <span className="text-foreground font-semibold">
                            {checkIn.dietaryAdherence}/10
                          </span>
                        </span>
                      )}
                    {extCheckIn.cyclePhase && extCheckIn.cyclePhase !== "not_tracking" && (
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                          extCheckIn.cyclePhase === "menstrual" && "bg-red-100 text-red-700",
                          extCheckIn.cyclePhase === "follicular" && "bg-green-100 text-green-700",
                          extCheckIn.cyclePhase === "ovulatory" && "bg-blue-100 text-blue-700",
                          extCheckIn.cyclePhase === "luteal" && "bg-yellow-100 text-yellow-700",
                        )}
                      >
                        {t(`cyclePhase_${extCheckIn.cyclePhase}`)}
                      </span>
                    )}
                  </div>

                  {extCheckIn.workoutPerformance && (
                    <div className="mt-2 flex items-start gap-1.5 text-xs">
                      <Dumbbell className="text-muted-foreground mt-0.5 h-3 w-3 shrink-0" />
                      <span className="text-muted-foreground">{extCheckIn.workoutPerformance}</span>
                    </div>
                  )}

                  {extCheckIn.newInjuries && (
                    <div className="mt-2 flex items-start gap-1.5 text-xs">
                      <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-amber-500" />
                      <span className="text-amber-700">{extCheckIn.newInjuries}</span>
                    </div>
                  )}

                  {extCheckIn.notes && (
                    <div className="mt-2 flex items-start gap-1.5 text-xs">
                      <StickyNote className="text-muted-foreground mt-0.5 h-3 w-3 shrink-0" />
                      <span className="text-muted-foreground">{extCheckIn.notes}</span>
                    </div>
                  )}
                </div>
              );
            })
        ) : (
          <div className="p-5">
            <EmptyState
              icon={Calendar}
              title={tEmpty("noCheckIns.title")}
              description={tEmpty("noCheckIns.description")}
              action={{
                label: tEmpty("noCheckIns.action"),
                onClick: () => router.push("/check-in"),
              }}
            />
          </div>
        )}
      </div>
    </SectionCard>
  );
}
