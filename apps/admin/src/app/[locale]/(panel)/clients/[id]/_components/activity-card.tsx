"use client";

import { useTranslations } from "next-intl";
import { Activity, Bell, Clock } from "lucide-react";

interface ActivityCardProps {
  lastCheckInDate: number | null;
  checkInCount: number;
  expectedCheckIns: number;
  pushSubscriptionActive: boolean;
}

export function ActivityCard({
  lastCheckInDate,
  checkInCount,
  expectedCheckIns,
  pushSubscriptionActive,
}: ActivityCardProps) {
  const t = useTranslations("clientInsights");

  const daysAgo = lastCheckInDate
    ? Math.floor((Date.now() - lastCheckInDate) / (1000 * 60 * 60 * 24))
    : null;

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5">
      <div className="mb-4 flex items-center gap-2">
        <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
          <Activity className="h-4 w-4" />
        </div>
        <h2 className="text-sm font-semibold text-stone-900">{t("activity")}</h2>
      </div>
      <dl className="space-y-2.5 text-sm">
        <div className="flex justify-between">
          <dt className="flex items-center gap-1.5 text-stone-500">
            <Clock className="h-3.5 w-3.5" />
            {t("lastCheckIn")}
          </dt>
          <dd className="font-medium text-stone-900">
            {daysAgo !== null ? (
              <span
                className={daysAgo > 21 ? "text-red-600" : daysAgo > 14 ? "text-amber-600" : ""}
              >
                {t("daysAgo", { days: daysAgo })}
              </span>
            ) : (
              "---"
            )}
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-stone-500">{t("checkInAdherence")}</dt>
          <dd className="font-medium text-stone-900">
            {expectedCheckIns > 0 ? (
              <span
                className={
                  checkInCount / expectedCheckIns < 0.5
                    ? "text-red-600"
                    : checkInCount / expectedCheckIns < 0.8
                      ? "text-amber-600"
                      : "text-emerald-600"
                }
              >
                {t("adherenceFormat", { completed: checkInCount, expected: expectedCheckIns })}
              </span>
            ) : (
              `${checkInCount}`
            )}
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="flex items-center gap-1.5 text-stone-500">
            <Bell className="h-3.5 w-3.5" />
            {t("pushStatus")}
          </dt>
          <dd>
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                pushSubscriptionActive
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-stone-100 text-stone-500"
              }`}
            >
              {pushSubscriptionActive ? t("pushActive") : t("pushInactive")}
            </span>
          </dd>
        </div>
      </dl>
    </div>
  );
}
