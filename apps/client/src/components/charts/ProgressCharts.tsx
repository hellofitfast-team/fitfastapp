"use client";

import {
  LineChart,
  Line,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Weight, Ruler, Heart, Apple, Activity } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { SectionCard } from "@fitfast/ui/section-card";

const CHART_COLORS = {
  primary: "var(--color-primary)",
  background: "#ffffff",
  foreground: "#0a0a0a",
  success: "var(--color-success-500)",
  chest: "#ef4444",
  waist: "#f59e0b",
  hips: "#8b5cf6",
  arms: "#3b82f6",
  thighs: "#10b981",
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

interface WellnessChartDatum {
  date: string;
  sleep: number | null;
  energy: number | null;
}

interface AdherenceChartDatum {
  date: string;
  dietaryAdherence: number | null;
}

interface BodyCompositionDatum {
  date: string;
  bodyFat: number | null;
  leanMass: number | null;
  skeletalMuscle: number | null;
}

interface AdherenceStats {
  mealAdherence: number;
  workoutAdherence: number;
}

interface ProgressChartsProps {
  weightChartData: WeightChartDatum[];
  measurementChartData: MeasurementChartDatum[];
  adherenceStats?: AdherenceStats;
  wellnessChartData?: WellnessChartDatum[];
  adherenceChartData?: AdherenceChartDatum[];
  bodyCompositionData?: BodyCompositionDatum[];
  targetWeight?: number | null;
}

const MEASUREMENT_LINES = [
  { key: "chest", color: CHART_COLORS.chest },
  { key: "waist", color: CHART_COLORS.waist },
  { key: "hips", color: CHART_COLORS.hips },
  { key: "arms", color: CHART_COLORS.arms },
  { key: "thighs", color: CHART_COLORS.thighs },
] as const;

export default function ProgressCharts({
  weightChartData,
  measurementChartData,
  adherenceStats,
  wellnessChartData,
  adherenceChartData,
  bodyCompositionData,
  targetWeight,
}: ProgressChartsProps) {
  const t = useTranslations("progress");
  const tCheckIn = useTranslations("checkIn");
  const tUnits = useTranslations("units");
  const locale = useLocale();

  // Determine which measurement lines have data
  const activeMeasurementKeys = MEASUREMENT_LINES.filter((line) =>
    measurementChartData.some((d) => d[line.key as keyof MeasurementChartDatum] != null),
  );

  return (
    <div className="space-y-4">
      {/* Weight Chart */}
      <SectionCard icon={Weight} title={t("weightTrend")} description={t("weightTrendDescription")}>
        {weightChartData.length > 0 ? (
          <div dir="ltr" role="img" aria-label={t("weightTrend")}>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={weightChartData}>
                <defs>
                  <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={CHART_COLORS.primary} stopOpacity={0.2} />
                    <stop offset="95%" stopColor={CHART_COLORS.primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
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
                <Area
                  type="monotone"
                  dataKey="weight"
                  stroke={CHART_COLORS.primary}
                  strokeWidth={2.5}
                  fill="url(#weightGradient)"
                  dot={{ fill: CHART_COLORS.primary, r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                />
                {targetWeight != null && (
                  <ReferenceLine
                    y={targetWeight}
                    stroke="#10b981"
                    strokeDasharray="6 3"
                    strokeWidth={1.5}
                    label={{
                      value: t("goalLine"),
                      position: "insideTopRight",
                      fill: "#10b981",
                      fontSize: 11,
                    }}
                  />
                )}
              </AreaChart>
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

      {/* Measurement Trends Chart */}
      {activeMeasurementKeys.length > 0 && measurementChartData.length >= 2 && (
        <SectionCard
          icon={Ruler}
          title={t("measurementTrends")}
          description={t("measurementTrendsDescription")}
        >
          <div dir="ltr" role="img" aria-label={t("measurementTrends")}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={measurementChartData}>
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
                  unit={` ${tUnits("cm")}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: CHART_COLORS.background,
                    border: `1px solid #e5e5e5`,
                    borderRadius: "8px",
                    fontSize: "13px",
                  }}
                />
                {activeMeasurementKeys.map((line) => (
                  <Line
                    key={line.key}
                    type="monotone"
                    dataKey={line.key}
                    name={tCheckIn(line.key)}
                    stroke={line.color}
                    strokeWidth={2}
                    dot={{ fill: line.color, r: 3, strokeWidth: 0 }}
                    activeDot={{ r: 5 }}
                    connectNulls
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="mt-3 flex flex-wrap gap-3">
            {activeMeasurementKeys.map((line) => (
              <div key={line.key} className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: line.color }} />
                <span className="text-muted-foreground text-xs">{tCheckIn(line.key)}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* Wellness Trends Chart (Sleep + Energy) */}
      {wellnessChartData && wellnessChartData.length >= 2 && (
        <SectionCard
          icon={Heart}
          title={t("wellnessTrends")}
          description={t("wellnessTrendsDescription")}
        >
          <div dir="ltr" role="img" aria-label={t("wellnessTrends")}>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={wellnessChartData}>
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
                  domain={[0, 10]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: CHART_COLORS.background,
                    border: "1px solid #e5e5e5",
                    borderRadius: "8px",
                    fontSize: "13px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="sleep"
                  name={t("sleepQuality")}
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", r: 3, strokeWidth: 0 }}
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="energy"
                  name={t("energyLevel")}
                  stroke="#f59e0b"
                  strokeWidth={2}
                  dot={{ fill: "#f59e0b", r: 3, strokeWidth: 0 }}
                  connectNulls
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 flex gap-4">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              <span className="text-muted-foreground text-xs">{t("sleepQuality")}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span className="text-muted-foreground text-xs">{t("energyLevel")}</span>
            </div>
          </div>
        </SectionCard>
      )}

      {/* Dietary Adherence Trend */}
      {adherenceChartData && adherenceChartData.length >= 2 && (
        <SectionCard
          icon={Apple}
          title={t("adherenceTrend")}
          description={t("adherenceTrendDescription")}
        >
          <div dir="ltr" role="img" aria-label={t("adherenceTrend")}>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={adherenceChartData}>
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
                  domain={[0, 10]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: CHART_COLORS.background,
                    border: "1px solid #e5e5e5",
                    borderRadius: "8px",
                    fontSize: "13px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="dietaryAdherence"
                  name={t("dietaryAdherence")}
                  stroke={CHART_COLORS.success}
                  strokeWidth={2}
                  dot={{ fill: CHART_COLORS.success, r: 3, strokeWidth: 0 }}
                  connectNulls
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      )}

      {/* Body Composition Chart (from InBody data) */}
      {bodyCompositionData && bodyCompositionData.length >= 2 && (
        <SectionCard
          icon={Activity}
          title={t("bodyComposition")}
          description={t("bodyCompositionDescription")}
        >
          <div dir="ltr" role="img" aria-label={t("bodyComposition")}>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={bodyCompositionData}>
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
                <YAxis stroke={CHART_COLORS.foreground} fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: CHART_COLORS.background,
                    border: "1px solid #e5e5e5",
                    borderRadius: "8px",
                    fontSize: "13px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="bodyFat"
                  name={t("bodyFatPercent")}
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ fill: "#ef4444", r: 3, strokeWidth: 0 }}
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="leanMass"
                  name={t("leanMass")}
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", r: 3, strokeWidth: 0 }}
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="skeletalMuscle"
                  name={t("skeletalMuscleMass")}
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: "#10b981", r: 3, strokeWidth: 0 }}
                  connectNulls
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 flex flex-wrap gap-4">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="text-muted-foreground text-xs">{t("bodyFatPercent")}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              <span className="text-muted-foreground text-xs">{t("leanMass")}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="text-muted-foreground text-xs">{t("skeletalMuscleMass")}</span>
            </div>
          </div>
        </SectionCard>
      )}

      {/* Adherence Stats — only show when real data exists */}
      {adherenceStats &&
        (adherenceStats.mealAdherence > 0 || adherenceStats.workoutAdherence > 0) && (
          <div className="grid gap-3 md:grid-cols-2" role="img" aria-label={t("adherence")}>
            {/* Meal adherence — nutrition green */}
            <div className="border-border bg-card shadow-card hover:shadow-lifted overflow-hidden rounded-xl border transition-all hover:-translate-y-0.5">
              <div className="border-border bg-nutrition/8 border-b p-4">
                <h3 className="text-nutrition text-sm font-semibold">{t("mealAdherence")}</h3>
              </div>
              <div className="p-5">
                <p className="text-4xl font-bold">{adherenceStats.mealAdherence.toFixed(0)}%</p>
                <div
                  className="mt-3 h-2.5 overflow-hidden rounded-full bg-neutral-100"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <div
                    className="bg-nutrition h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${adherenceStats.mealAdherence}%`,
                      marginInlineStart: 0,
                      marginInlineEnd: "auto",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Workout adherence — fitness orange */}
            <div className="border-border bg-card shadow-card hover:shadow-lifted overflow-hidden rounded-xl border transition-all hover:-translate-y-0.5">
              <div className="border-border bg-fitness/8 border-b p-4">
                <h3 className="text-fitness text-sm font-semibold">{t("workoutAdherence")}</h3>
              </div>
              <div className="p-5">
                <p className="text-4xl font-bold">{adherenceStats.workoutAdherence.toFixed(0)}%</p>
                <div
                  className="mt-3 h-2.5 overflow-hidden rounded-full bg-neutral-100"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <div
                    className="bg-fitness h-full rounded-full transition-all duration-500"
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
