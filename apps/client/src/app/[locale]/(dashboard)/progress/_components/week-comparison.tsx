"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@fitfast/ui/cn";
import type { CheckIn } from "@/types/convex";

interface WeekComparisonProps {
  checkIns: CheckIn[];
}

function getWeekBucket(checkIns: CheckIn[]) {
  const now = new Date();
  const startOfThisWeek = new Date(now);
  startOfThisWeek.setDate(now.getDate() - now.getDay());
  startOfThisWeek.setHours(0, 0, 0, 0);

  const startOfLastWeek = new Date(startOfThisWeek);
  startOfLastWeek.setDate(startOfLastWeek.getDate() - 7);

  const thisWeek = checkIns.filter((ci) => new Date(ci._creationTime) >= startOfThisWeek);
  const lastWeek = checkIns.filter(
    (ci) =>
      new Date(ci._creationTime) >= startOfLastWeek && new Date(ci._creationTime) < startOfThisWeek,
  );

  return { thisWeek, lastWeek };
}

function avg(values: (number | undefined | null)[]): number | null {
  const valid = values.filter((v): v is number => v != null);
  if (valid.length === 0) return null;
  return valid.reduce((a, b) => a + b, 0) / valid.length;
}

interface ComparisonCardProps {
  label: string;
  thisWeek: number | null;
  lastWeek: number | null;
  unit?: string;
  format?: (v: number) => string;
}

function ComparisonCard({ label, thisWeek, lastWeek, unit, format }: ComparisonCardProps) {
  const t = useTranslations("progress");
  const fmt = format ?? ((v: number) => v.toFixed(1));

  if (thisWeek == null && lastWeek == null) return null;

  const diff = thisWeek != null && lastWeek != null ? thisWeek - lastWeek : null;
  const direction =
    diff == null ? "neutral" : diff > 0.05 ? "up" : diff < -0.05 ? "down" : "neutral";

  return (
    <div className="border-border bg-card shadow-card overflow-hidden rounded-xl border p-4">
      <p className="text-muted-foreground mb-2 text-xs font-medium">{label}</p>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold">
            {thisWeek != null ? fmt(thisWeek) : "-"}
            {unit && <span className="text-muted-foreground ms-1 text-sm font-normal">{unit}</span>}
          </p>
          <p className="text-muted-foreground text-xs">
            {t("lastWeek")}: {lastWeek != null ? `${fmt(lastWeek)}${unit ? ` ${unit}` : ""}` : "-"}
          </p>
        </div>
        {diff != null && (
          <div
            className={cn(
              "flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold",
              direction === "up" && "bg-green-100 text-green-700",
              direction === "down" && "bg-red-100 text-red-700",
              direction === "neutral" && "bg-neutral-100 text-neutral-600",
            )}
          >
            {direction === "up" && <TrendingUp className="h-3 w-3" />}
            {direction === "down" && <TrendingDown className="h-3 w-3" />}
            {direction === "neutral" && <Minus className="h-3 w-3" />}
            {diff > 0 ? "+" : ""}
            {fmt(diff)}
          </div>
        )}
      </div>
    </div>
  );
}

export function WeekComparison({ checkIns }: WeekComparisonProps) {
  const t = useTranslations("progress");

  const { thisWeek, lastWeek } = useMemo(() => getWeekBucket(checkIns), [checkIns]);

  if (lastWeek.length === 0) return null;

  const thisWeekAvgWeight = avg(thisWeek.map((ci) => ci.weight));
  const lastWeekAvgWeight = avg(lastWeek.map((ci) => ci.weight));
  const thisWeekAvgEnergy = avg(thisWeek.map((ci) => ci.energyLevel));
  const lastWeekAvgEnergy = avg(lastWeek.map((ci) => ci.energyLevel));
  const thisWeekAvgSleep = avg(thisWeek.map((ci) => ci.sleepQuality));
  const lastWeekAvgSleep = avg(lastWeek.map((ci) => ci.sleepQuality));
  const thisWeekAvgAdherence = avg(thisWeek.map((ci) => ci.dietaryAdherence));
  const lastWeekAvgAdherence = avg(lastWeek.map((ci) => ci.dietaryAdherence));

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold">{t("weekComparison")}</h3>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <ComparisonCard
          label={t("avgWeight")}
          thisWeek={thisWeekAvgWeight}
          lastWeek={lastWeekAvgWeight}
          unit="kg"
        />
        <ComparisonCard
          label={t("avgEnergy")}
          thisWeek={thisWeekAvgEnergy}
          lastWeek={lastWeekAvgEnergy}
          unit="/10"
        />
        <ComparisonCard
          label={t("avgSleep")}
          thisWeek={thisWeekAvgSleep}
          lastWeek={lastWeekAvgSleep}
          unit="/10"
        />
        <ComparisonCard
          label={t("avgAdherence")}
          thisWeek={thisWeekAvgAdherence}
          lastWeek={lastWeekAvgAdherence}
          unit="/10"
        />
      </div>
    </div>
  );
}
