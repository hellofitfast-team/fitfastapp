"use client";

/**
 * ExerciseHistoryDrawer — shows the last 20 sessions for a specific exercise.
 * Displays a compact table with date, weight per set, and reps.
 * Highlights personal bests (heaviest weight, most reps) with a visual indicator.
 * Opens as a bottom drawer on mobile using the Vaul-based Drawer component.
 */

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { History, Trophy, TrendingUp, TrendingDown } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@fitfast/ui/drawer";
import { cn } from "@fitfast/ui/cn";
import { useExerciseHistory } from "@/hooks/use-exercise-logs";

interface ExerciseHistoryDrawerProps {
  exerciseName: string | null;
  open: boolean;
  onClose: () => void;
}

export function ExerciseHistoryDrawer({ exerciseName, open, onClose }: ExerciseHistoryDrawerProps) {
  const t = useTranslations("tracking");
  const { history, isLoading } = useExerciseHistory(exerciseName, open);

  /** Find the personal best weight across all sessions */
  const personalBest = useMemo(() => {
    let maxWeight = 0;
    let maxReps = 0;
    for (const log of history) {
      for (const s of log.sets) {
        if (s.weight != null && s.weight > maxWeight) maxWeight = s.weight;
        if (s.reps != null && s.reps > maxReps) maxReps = s.reps;
      }
    }
    return { maxWeight, maxReps };
  }, [history]);

  /** Compute the weight trend (latest vs second-latest session) */
  const trend = useMemo(() => {
    if (history.length < 2) return null;
    const latestWeights = history[0].sets.map((s) => s.weight ?? 0);
    const prevWeights = history[1].sets.map((s) => s.weight ?? 0);
    const latestMax = latestWeights.length > 0 ? Math.max(...latestWeights) : 0;
    const prevMax = prevWeights.length > 0 ? Math.max(...prevWeights) : 0;
    if (latestMax === 0 && prevMax === 0) return null;
    if (latestMax > prevMax) return "up" as const;
    if (latestMax < prevMax) return "down" as const;
    return "same" as const;
  }, [history]);

  return (
    <Drawer open={open} onOpenChange={(o) => !o && onClose()}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader>
          <DrawerTitle className="flex items-center gap-2">
            <History className="text-fitness h-5 w-5" />
            {exerciseName ?? t("exerciseHistory")}
          </DrawerTitle>
          <DrawerDescription>
            {history.length > 0 ? `${history.length} ${t("pastSessions")}` : t("noHistoryYet")}
          </DrawerDescription>
        </DrawerHeader>

        <div className="overflow-y-auto px-4 pb-6">
          {/* Personal bests banner */}
          {personalBest.maxWeight > 0 && (
            <div className="mb-4 flex items-center gap-3 rounded-lg bg-amber-50 p-3">
              <Trophy className="h-5 w-5 text-amber-500" />
              <div className="flex-1">
                <p className="text-xs font-semibold text-amber-700">{t("personalBest")}</p>
                <p className="text-xs text-amber-600">
                  {personalBest.maxWeight}kg
                  {personalBest.maxReps > 0 ? ` • ${personalBest.maxReps} ${t("reps")}` : ""}
                </p>
              </div>
              {trend && (
                <div
                  className={cn(
                    "flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold",
                    trend === "up" && "bg-fitness/15 text-fitness",
                    trend === "down" && "bg-destructive/10 text-destructive",
                    trend === "same" && "bg-neutral-100 text-neutral-500",
                  )}
                >
                  {trend === "up" && <TrendingUp className="h-3 w-3" />}
                  {trend === "down" && <TrendingDown className="h-3 w-3" />}
                  {trend === "up" ? t("improving") : trend === "down" ? t("decreased") : t("same")}
                </div>
              )}
            </div>
          )}

          {/* Loading state */}
          {isLoading && (
            <div className="space-y-3">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="h-12 animate-pulse rounded-lg bg-neutral-100" />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!isLoading && history.length === 0 && (
            <div className="py-8 text-center">
              <History className="text-muted-foreground/30 mx-auto h-10 w-10" />
              <p className="text-muted-foreground mt-3 text-sm">{t("noHistoryYet")}</p>
              <p className="text-muted-foreground mt-1 text-xs">{t("startLogging")}</p>
            </div>
          )}

          {/* Session list */}
          {!isLoading && history.length > 0 && (
            <div className="space-y-2">
              {history.map((log, idx) => {
                const weights = log.sets.map((s) => s.weight ?? 0);
                const bestSetWeight = weights.length > 0 ? Math.max(...weights) : 0;
                const isPB = bestSetWeight === personalBest.maxWeight && bestSetWeight > 0;

                return (
                  <div
                    key={log.date + "-" + log.exerciseIndex}
                    className={cn(
                      "rounded-lg border p-3",
                      isPB ? "border-amber-200 bg-amber-50/50" : "border-border",
                    )}
                  >
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-xs font-semibold">
                        {log.date}
                        {isPB && <Trophy className="ms-1 inline h-3 w-3 text-amber-500" />}
                      </span>
                      <span className="text-muted-foreground text-[10px]">
                        {log.sets.filter((s) => s.completed).length}/{log.sets.length} {t("sets")}
                      </span>
                    </div>

                    {/* Compact sets display */}
                    <div className="flex flex-wrap gap-1.5">
                      {log.sets.map((s) => (
                        <span
                          key={s.setIndex}
                          className={cn(
                            "rounded-md px-2 py-0.5 text-[10px] font-medium",
                            s.completed
                              ? "bg-fitness/10 text-fitness"
                              : "bg-neutral-100 text-neutral-400",
                          )}
                        >
                          {s.weight != null ? `${s.weight}kg` : "—"}
                          {s.reps != null ? ` × ${s.reps}` : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
