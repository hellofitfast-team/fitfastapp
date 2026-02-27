"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Weight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { SectionCard } from "@fitfast/ui/section-card";

const CHART_COLORS = {
  primary: "var(--color-primary)",
  background: "#ffffff",
  foreground: "#0a0a0a",
  success: "var(--color-success-500)",
} as const;

interface WeightChartDatum {
  date: string;
  weight: number | null;
}

interface MeasurementChartDatum {
  date: string;
  chest?: number;
  waist?: number;
  hips?: number;
  arms?: number;
  thighs?: number;
}

interface AdherenceStats {
  mealAdherence: number;
  workoutAdherence: number;
}

interface ProgressChartsProps {
  weightChartData: WeightChartDatum[];
  measurementChartData: MeasurementChartDatum[];
  adherenceStats?: AdherenceStats;
}

export default function ProgressCharts({ weightChartData, adherenceStats }: ProgressChartsProps) {
  const t = useTranslations("progress");
  const locale = useLocale();

  return (
    <div className="space-y-4">
      {/* Weight Chart */}
      <SectionCard icon={Weight} title={t("weightTrend")} description={t("weightTrendDescription")}>
        {weightChartData.length > 0 ? (
          <div dir="ltr">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weightChartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={CHART_COLORS.foreground}
                  strokeOpacity={0.08}
                />
                <XAxis
                  dataKey="date"
                  stroke={CHART_COLORS.foreground}
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis
                  stroke={CHART_COLORS.foreground}
                  fontSize={12}
                  tickLine={false}
                  domain={["dataMin - 2", "dataMax + 2"]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: CHART_COLORS.background,
                    border: `1px solid #e5e5e5`,
                    borderRadius: "8px",
                    fontSize: "13px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke={CHART_COLORS.primary}
                  strokeWidth={2.5}
                  dot={{ fill: CHART_COLORS.primary, r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="border-border flex h-[300px] items-center justify-center rounded-lg border-2 border-dashed">
            <div className="text-center">
              <Weight className="text-muted-foreground/30 mx-auto h-10 w-10" />
              <p className="mt-3 text-sm font-medium">{t("noWeightData")}</p>
            </div>
          </div>
        )}
      </SectionCard>

      {/* Adherence Stats — only show when real data exists */}
      {adherenceStats &&
        (adherenceStats.mealAdherence > 0 || adherenceStats.workoutAdherence > 0) && (
          <div className="grid gap-3 md:grid-cols-2">
            <div className="border-border bg-card shadow-card overflow-hidden rounded-xl border">
              <div className="border-border bg-success-500/5 border-b p-4">
                <h3 className="text-sm font-semibold">{t("mealAdherence")}</h3>
              </div>
              <div className="p-5">
                <p className="text-4xl font-bold">{adherenceStats.mealAdherence.toFixed(0)}%</p>
                <div
                  className="mt-3 h-2 overflow-hidden rounded-full bg-neutral-100"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <div
                    className="bg-success-500 h-full rounded-full transition-all"
                    style={{
                      width: `${adherenceStats.mealAdherence}%`,
                      marginInlineStart: 0,
                      marginInlineEnd: "auto",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="border-border bg-card shadow-card overflow-hidden rounded-xl border">
              <div className="border-border border-b p-4">
                <h3 className="text-sm font-semibold">{t("workoutAdherence")}</h3>
              </div>
              <div className="p-5">
                <p className="text-4xl font-bold">{adherenceStats.workoutAdherence.toFixed(0)}%</p>
                <div
                  className="mt-3 h-2 overflow-hidden rounded-full bg-neutral-100"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <div
                    className="bg-primary h-full rounded-full transition-all"
                    style={{
                      width: `${adherenceStats.workoutAdherence}%`,
                      marginInlineStart: 0,
                      marginInlineEnd: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
