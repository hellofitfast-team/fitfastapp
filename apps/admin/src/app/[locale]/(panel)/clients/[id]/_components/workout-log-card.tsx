"use client";

/**
 * WorkoutLogCard — shows exercise logging stats for a client.
 * Displays total exercise logs, whether the client logs detailed data
 * (weights/reps) vs just quick-completing workouts.
 * Used on the admin client detail page.
 */

import { useTranslations } from "next-intl";
import { Dumbbell, BarChart3 } from "lucide-react";

interface WorkoutLogCardProps {
  exerciseLogCount: number;
  hasDetailedLogs: boolean;
  workoutCompletionRate: number | null;
}

export function WorkoutLogCard({
  exerciseLogCount,
  hasDetailedLogs,
  workoutCompletionRate,
}: WorkoutLogCardProps) {
  const t = useTranslations("clientInsights");

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
          <Dumbbell className="h-4 w-4" />
        </div>
        <h2 className="text-sm font-semibold text-stone-900">{t("workoutLogging")}</h2>
      </div>

      <dl className="space-y-2.5 text-sm">
        {/* Completion rate */}
        <div className="flex justify-between">
          <dt className="text-stone-500">{t("workoutCompletionRate")}</dt>
          <dd className="font-medium text-stone-900">
            {workoutCompletionRate !== null ? `${workoutCompletionRate}%` : "---"}
          </dd>
        </div>

        {/* Exercise log count */}
        <div className="flex justify-between">
          <dt className="flex items-center gap-1.5 text-stone-500">
            <BarChart3 className="h-3.5 w-3.5" />
            {t("exerciseLogsRecorded")}
          </dt>
          <dd className="font-medium text-stone-900">{exerciseLogCount}</dd>
        </div>

        {/* Logging style indicator */}
        <div className="flex justify-between">
          <dt className="text-stone-500">{t("loggingStyle")}</dt>
          <dd>
            {exerciseLogCount === 0 ? (
              <span className="text-stone-400">---</span>
            ) : hasDetailedLogs ? (
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                {t("detailedLogging")}
              </span>
            ) : (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                {t("quickCompleteOnly")}
              </span>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}
