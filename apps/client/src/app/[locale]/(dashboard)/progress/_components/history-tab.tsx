"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";
import { SectionCard } from "@fitfast/ui/section-card";
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
              const measurements = checkIn.measurements as MeasurementData;
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
                  </div>
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
