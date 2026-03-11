"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useConvexAuth, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import dynamic from "next/dynamic";
import { Activity, Camera, Calendar } from "lucide-react";
import { StatsOverview } from "./_components/stats-overview";
import { PhotosTab } from "./_components/photos-tab";
import { PhotoComparison } from "./_components/photo-comparison";
import { HistoryTab } from "./_components/history-tab";
import { WeekComparison } from "./_components/week-comparison";
import { ProgressSkeleton } from "./_components/progress-skeleton";
import { formatDateShort, formatDate } from "@/lib/utils";
import { cn } from "@fitfast/ui/cn";

const ProgressCharts = dynamic(() => import("@/components/charts/ProgressCharts"), {
  ssr: false,
  loading: () => (
    <div className="space-y-4">
      <div className="border-border bg-card shadow-card overflow-hidden rounded-xl border">
        <div className="border-border bg-primary/5 h-14 animate-pulse border-b p-4" />
        <div className="p-6">
          <div className="h-[300px] animate-pulse rounded-lg bg-neutral-100" />
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="border-border bg-card shadow-card h-[200px] animate-pulse rounded-xl border" />
        <div className="border-border bg-card shadow-card h-[200px] animate-pulse rounded-xl border" />
      </div>
    </div>
  ),
});

type DateRange = "30" | "90" | "all";

interface MeasurementData {
  chest?: number;
  waist?: number;
  hips?: number;
  arms?: number;
  thighs?: number;
}

export default function ProgressPage() {
  const t = useTranslations("progress");
  const locale = useLocale();
  const [dateRange, setDateRange] = useState<DateRange>("30");
  const [activeTab, setActiveTab] = useState<"charts" | "photos" | "history">("charts");

  const { isAuthenticated } = useConvexAuth();
  const checkIns = useQuery(api.checkIns.getMyCheckIns);
  const assessment = useQuery(api.assessments.getMyAssessment, isAuthenticated ? {} : "skip");
  const checkInsLoading = checkIns === undefined;

  // Sort ascending for charts (Convex returns desc)
  const sortedCheckIns = useMemo(() => {
    if (!checkIns) return [];
    return [...checkIns].reverse();
  }, [checkIns]);

  const filteredCheckIns = useMemo(() => {
    if (dateRange === "all") return sortedCheckIns;
    const days = dateRange === "30" ? 30 : 90;
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    return sortedCheckIns.filter((checkIn) => new Date(checkIn._creationTime) >= cutoffDate);
  }, [sortedCheckIns, dateRange]);

  const weightChartData = useMemo(() => {
    return filteredCheckIns
      .filter((checkIn) => checkIn.weight)
      .map((checkIn) => ({
        date: formatDateShort(new Date(checkIn._creationTime).toISOString(), locale),
        weight: checkIn.weight ?? null,
      }));
  }, [filteredCheckIns, locale]);

  const measurementChartData = useMemo(() => {
    return filteredCheckIns
      .filter((checkIn) => checkIn.measurements)
      .map((checkIn) => {
        const measurements = checkIn.measurements as MeasurementData;
        return {
          date: formatDateShort(new Date(checkIn._creationTime).toISOString(), locale),
          chest: measurements.chest,
          waist: measurements.waist,
          hips: measurements.hips,
          arms: measurements.arms,
          thighs: measurements.thighs,
        };
      });
  }, [filteredCheckIns, locale]);

  // Compute date range for adherence stats
  const adherenceDateRange = useMemo(() => {
    if (filteredCheckIns.length === 0) return null;
    const first = new Date(filteredCheckIns[0]._creationTime);
    const last = new Date(filteredCheckIns[filteredCheckIns.length - 1]._creationTime);
    return {
      startDate: first.toISOString().split("T")[0],
      endDate: last.toISOString().split("T")[0],
    };
  }, [filteredCheckIns]);

  const adherenceStats = useQuery(
    api.completions.getAdherenceStats,
    isAuthenticated && adherenceDateRange ? adherenceDateRange : "skip",
  );

  // Wellness chart data (sleep + energy from check-ins)
  const wellnessChartData = useMemo(() => {
    return filteredCheckIns
      .filter((ci) => ci.sleepQuality != null || ci.energyLevel != null)
      .map((ci) => ({
        date: formatDateShort(new Date(ci._creationTime).toISOString(), locale),
        sleep: ci.sleepQuality ?? null,
        energy: ci.energyLevel ?? null,
      }));
  }, [filteredCheckIns, locale]);

  // Dietary adherence chart data
  const adherenceChartData = useMemo(() => {
    return filteredCheckIns
      .filter((ci) => ci.dietaryAdherence != null)
      .map((ci) => ({
        date: formatDateShort(new Date(ci._creationTime).toISOString(), locale),
        dietaryAdherence: ci.dietaryAdherence ?? null,
      }));
  }, [filteredCheckIns, locale]);

  // Body composition data from InBody scans
  interface InBodyData {
    bodyFatPercentage?: number;
    leanBodyMass?: number;
    skeletalMuscleMass?: number;
  }
  const bodyCompositionData = useMemo(() => {
    return filteredCheckIns
      .filter((ci) => (ci as unknown as { inBodyData?: InBodyData }).inBodyData)
      .map((ci) => {
        const inBody = (ci as unknown as { inBodyData: InBodyData }).inBodyData;
        return {
          date: formatDateShort(new Date(ci._creationTime).toISOString(), locale),
          bodyFat: inBody.bodyFatPercentage ?? null,
          leanMass: inBody.leanBodyMass ?? null,
          skeletalMuscle: inBody.skeletalMuscleMass ?? null,
        };
      });
  }, [filteredCheckIns, locale]);

  const firstCheckIn = filteredCheckIns[0];
  const latestCheckIn = filteredCheckIns[filteredCheckIns.length - 1];
  const weightChange =
    latestCheckIn?.weight && firstCheckIn?.weight ? latestCheckIn.weight - firstCheckIn.weight : 0;
  const weightChangePercent = firstCheckIn?.weight
    ? ((weightChange / firstCheckIn.weight) * 100).toFixed(1)
    : "0";

  // Rate of change (kg/week)
  const rateOfChange = useMemo(() => {
    if (!firstCheckIn?.weight || !latestCheckIn?.weight || firstCheckIn === latestCheckIn)
      return null;
    const daysBetween =
      (latestCheckIn._creationTime - firstCheckIn._creationTime) / (1000 * 60 * 60 * 24);
    if (daysBetween < 7) return null;
    const weeksBetween = daysBetween / 7;
    return (latestCheckIn.weight - firstCheckIn.weight) / weeksBetween;
  }, [firstCheckIn, latestCheckIn]);

  // Collect photo storage IDs per check-in (consolidated — used for both batch URL query and photo list)
  const checkInPhotoEntries = useMemo(() => {
    return filteredCheckIns.map((ci) => {
      const entries: Array<{ id: Id<"_storage">; label?: string }> = [];
      if (ci.progressPhotoFront) entries.push({ id: ci.progressPhotoFront });
      if (ci.progressPhotoBack) entries.push({ id: ci.progressPhotoBack });
      if (ci.progressPhotoSide) entries.push({ id: ci.progressPhotoSide });
      if (ci.progressPhotoIds) entries.push(...ci.progressPhotoIds.map((id) => ({ id })));
      // Include InBody scan photos with label
      const inBodyId = (ci as unknown as { inBodyStorageId?: Id<"_storage"> }).inBodyStorageId;
      if (inBodyId) entries.push({ id: inBodyId, label: "InBody" });
      return entries;
    });
  }, [filteredCheckIns]);

  const photoStorageIds = useMemo(
    () => checkInPhotoEntries.flatMap((entries) => entries.map((e) => e.id)),
    [checkInPhotoEntries],
  );

  // Resolve storage IDs to URLs in a single batch query
  const photoUrlMap = useQuery(
    api.storage.getFileUrlsBatch,
    photoStorageIds.length > 0 ? { storageIds: photoStorageIds } : "skip",
  );

  const allPhotos = useMemo(() => {
    if (!photoUrlMap) return [];
    return filteredCheckIns.flatMap((checkIn, i) => {
      const dateStr = formatDate(new Date(checkIn._creationTime).toISOString(), locale);
      return checkInPhotoEntries[i]
        .filter((entry) => photoUrlMap[entry.id])
        .map((entry) => ({ url: photoUrlMap[entry.id]!, date: dateStr, label: entry.label }));
    });
  }, [filteredCheckIns, checkInPhotoEntries, photoUrlMap, locale]);

  if (checkInsLoading) {
    return <ProgressSkeleton />;
  }

  const tabs = [
    { key: "charts" as const, icon: Activity, label: t("charts") },
    { key: "photos" as const, icon: Camera, label: t("photos") },
    { key: "history" as const, icon: Calendar, label: t("history") },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-5 px-4 py-6 lg:px-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground mt-0.5 text-sm">{t("description")}</p>
        </div>
        <div className="flex rounded-lg bg-neutral-100 p-1">
          {(["30", "90", "all"] as const).map((range) => (
            <button
              key={range}
              onClick={() => setDateRange(range)}
              className={cn(
                "rounded-md px-4 py-2.5 text-xs font-semibold transition-colors",
                dateRange === range
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {range === "30" ? t("days30") : range === "90" ? t("days90") : t("all")}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Overview */}
      <StatsOverview
        firstCheckIn={firstCheckIn}
        latestCheckIn={latestCheckIn}
        weightChange={weightChange}
        weightChangePercent={weightChangePercent}
        totalCheckIns={filteredCheckIns.length}
        rateOfChange={rateOfChange}
      />

      {/* Tabs */}
      <div className="flex rounded-xl bg-neutral-100 p-1">
        {tabs.map(({ key, icon: Icon, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={cn(
              "flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2 text-sm font-medium transition-colors",
              activeTab === key
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {activeTab === "charts" && (
        <>
          <WeekComparison checkIns={filteredCheckIns} />
          <ProgressCharts
            weightChartData={weightChartData}
            measurementChartData={measurementChartData}
            adherenceStats={adherenceStats ?? undefined}
            wellnessChartData={wellnessChartData}
            adherenceChartData={adherenceChartData}
            bodyCompositionData={bodyCompositionData}
            targetWeight={
              (assessment as { targetWeight?: number } | null | undefined)?.targetWeight
            }
          />
        </>
      )}
      {activeTab === "photos" && (
        <div className="space-y-4">
          <PhotoComparison photos={allPhotos} />
          <PhotosTab photos={allPhotos} />
        </div>
      )}
      {activeTab === "history" && <HistoryTab checkIns={filteredCheckIns} />}
    </div>
  );
}
