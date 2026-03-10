"use client";

import { useTranslations } from "next-intl";
import { TrendingUp, ArrowUp, ArrowDown, Minus } from "lucide-react";

interface ProgressCardProps {
  initialWeight: number | null;
  latestWeight: number | null;
  mealCompletionRate: number | null;
  workoutCompletionRate: number | null;
}

function CompletionBar({ label, rate }: { label: string; rate: number | null }) {
  const t = useTranslations("clientInsights");
  if (rate === null) {
    return (
      <div className="flex justify-between text-sm">
        <dt className="text-stone-500">{label}</dt>
        <dd className="text-stone-400">{t("noCompletions")}</dd>
      </div>
    );
  }

  const color = rate >= 70 ? "bg-emerald-500" : rate >= 40 ? "bg-amber-500" : "bg-red-500";
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <dt className="text-stone-500">{label}</dt>
        <dd className="font-medium text-stone-900">{rate}%</dd>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-100">
        <div
          className={`h-full rounded-full transition-all ${color}`}
          style={{ width: `${rate}%` }}
        />
      </div>
    </div>
  );
}

export function ProgressCard({
  initialWeight,
  latestWeight,
  mealCompletionRate,
  workoutCompletionRate,
}: ProgressCardProps) {
  const t = useTranslations("clientInsights");

  const weightDelta =
    initialWeight != null && latestWeight != null ? latestWeight - initialWeight : null;

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 lg:col-span-2">
      <div className="mb-4 flex items-center gap-2">
        <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
          <TrendingUp className="h-4 w-4" />
        </div>
        <h2 className="text-sm font-semibold text-stone-900">{t("progress")}</h2>
      </div>
      <dl className="space-y-4">
        {/* Weight comparison */}
        <div className="flex flex-wrap gap-6 rounded-lg bg-stone-50 p-3">
          <div className="text-sm">
            <dt className="text-xs text-stone-500">{t("initialWeight")}</dt>
            <dd className="font-medium text-stone-900">
              {initialWeight != null ? `${initialWeight} kg` : "---"}
            </dd>
          </div>
          <div className="text-sm">
            <dt className="text-xs text-stone-500">{t("latestWeight")}</dt>
            <dd className="font-medium text-stone-900">
              {latestWeight != null ? `${latestWeight} kg` : "---"}
            </dd>
          </div>
          {weightDelta != null && (
            <div className="text-sm">
              <dt className="text-xs text-stone-500">{t("weightChange")}</dt>
              <dd className="flex items-center gap-1 font-medium">
                {weightDelta > 0 ? (
                  <>
                    <ArrowUp className="h-3.5 w-3.5 text-red-500" />
                    <span className="text-red-600">+{weightDelta.toFixed(1)} kg</span>
                  </>
                ) : weightDelta < 0 ? (
                  <>
                    <ArrowDown className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-600">{weightDelta.toFixed(1)} kg</span>
                  </>
                ) : (
                  <>
                    <Minus className="h-3.5 w-3.5 text-stone-400" />
                    <span className="text-stone-500">0 kg</span>
                  </>
                )}
              </dd>
            </div>
          )}
        </div>

        {/* Completion rates */}
        <CompletionBar label={t("mealCompletion")} rate={mealCompletionRate} />
        <CompletionBar label={t("workoutCompletion")} rate={workoutCompletionRate} />
      </dl>
    </div>
  );
}
