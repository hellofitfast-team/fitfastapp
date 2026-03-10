"use client";

import { useTranslations, useLocale } from "next-intl";
import { MessageSquare } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface SupportCardProps {
  openTicketsCount: number;
  totalTicketsCount: number;
  lastTicketDate: number | null;
}

export function SupportCard({
  openTicketsCount,
  totalTicketsCount,
  lastTicketDate,
}: SupportCardProps) {
  const t = useTranslations("clientInsights");
  const locale = useLocale();

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5">
      <div className="mb-4 flex items-center gap-2">
        <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
          <MessageSquare className="h-4 w-4" />
        </div>
        <h2 className="text-sm font-semibold text-stone-900">{t("support")}</h2>
      </div>
      <dl className="space-y-2.5 text-sm">
        <div className="flex justify-between">
          <dt className="text-stone-500">{t("openTickets")}</dt>
          <dd className="font-medium">
            {openTicketsCount > 0 ? (
              <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
                {openTicketsCount}
              </span>
            ) : (
              <span className="text-stone-900">0</span>
            )}
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-stone-500">{t("totalTickets")}</dt>
          <dd className="font-medium text-stone-900">{totalTicketsCount}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-stone-500">{t("lastTicket")}</dt>
          <dd className="text-stone-900">
            {lastTicketDate ? formatDate(new Date(lastTicketDate), locale) : t("noTickets")}
          </dd>
        </div>
      </dl>
    </div>
  );
}
