"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ClipboardList, ChevronDown, ChevronUp, ArrowUp, ArrowDown, Minus } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface CheckInSummary {
  submittedAt: number;
  weight?: number;
  energyLevel?: number;
  sleepQuality?: number;
  dietaryAdherence?: number;
}

interface CheckInHistoryCardProps {
  checkInHistory: CheckInSummary[];
}

function ScoreBar({ value, max = 10 }: { value: number; max?: number }) {
  const pct = Math.round((value / max) * 100);
  const color = pct >= 70 ? "bg-emerald-500" : pct >= 40 ? "bg-amber-500" : "bg-red-500";
  return (
    <div className="flex items-center gap-1.5">
      <div className="h-1.5 w-12 overflow-hidden rounded-full bg-stone-100">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-stone-500">{value}</span>
    </div>
  );
}

export function CheckInHistoryCard({ checkInHistory }: CheckInHistoryCardProps) {
  const t = useTranslations("clientInsights");
  const locale = useLocale();
  const [expanded, setExpanded] = useState(false);

  if (checkInHistory.length === 0) {
    return (
      <div className="rounded-xl border border-stone-200 bg-white p-5 lg:col-span-2">
        <div className="mb-4 flex items-center gap-2">
          <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <ClipboardList className="h-4 w-4" />
          </div>
          <h2 className="text-sm font-semibold text-stone-900">{t("checkInHistory")}</h2>
        </div>
        <p className="text-sm text-stone-400">{t("noCheckIns")}</p>
      </div>
    );
  }

  const visible = expanded ? checkInHistory : checkInHistory.slice(0, 5);

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 lg:col-span-2">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <ClipboardList className="h-4 w-4" />
          </div>
          <h2 className="text-sm font-semibold text-stone-900">{t("checkInHistory")}</h2>
        </div>
        {checkInHistory.length > 5 && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-medium text-stone-500 hover:text-stone-700"
          >
            {expanded ? t("showLess") : t("showMore")}
            {expanded ? (
              <ChevronUp className="h-3.5 w-3.5" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" />
            )}
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-100">
              <th className="pb-2 text-start text-xs font-medium text-stone-500">{t("date")}</th>
              <th className="pb-2 text-start text-xs font-medium text-stone-500">{t("weight")}</th>
              <th className="pb-2 text-start text-xs font-medium text-stone-500">{t("energy")}</th>
              <th className="pb-2 text-start text-xs font-medium text-stone-500">{t("sleep")}</th>
              <th className="pb-2 text-start text-xs font-medium text-stone-500">
                {t("adherence")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50">
            {visible.map((ci, idx) => {
              const prevWeight = visible[idx + 1]?.weight;
              const weightDelta =
                ci.weight != null && prevWeight != null ? ci.weight - prevWeight : null;

              return (
                <tr key={ci.submittedAt}>
                  <td className="py-2 text-stone-900">
                    {formatDate(new Date(ci.submittedAt), locale)}
                  </td>
                  <td className="py-2">
                    <div className="flex items-center gap-1">
                      <span className="text-stone-900">
                        {ci.weight != null ? `${ci.weight} kg` : "---"}
                      </span>
                      {weightDelta != null && weightDelta !== 0 && (
                        <span
                          className={`flex items-center text-xs ${weightDelta > 0 ? "text-red-500" : "text-emerald-500"}`}
                        >
                          {weightDelta > 0 ? (
                            <ArrowUp className="h-3 w-3" />
                          ) : (
                            <ArrowDown className="h-3 w-3" />
                          )}
                          {Math.abs(weightDelta).toFixed(1)}
                        </span>
                      )}
                      {weightDelta === 0 && <Minus className="h-3 w-3 text-stone-300" />}
                    </div>
                  </td>
                  <td className="py-2">
                    {ci.energyLevel != null ? <ScoreBar value={ci.energyLevel} /> : "---"}
                  </td>
                  <td className="py-2">
                    {ci.sleepQuality != null ? <ScoreBar value={ci.sleepQuality} /> : "---"}
                  </td>
                  <td className="py-2">
                    {ci.dietaryAdherence != null ? <ScoreBar value={ci.dietaryAdherence} /> : "---"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
