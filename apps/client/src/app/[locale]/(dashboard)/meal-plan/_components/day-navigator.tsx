"use client";

import { useLocale, useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { cn } from "@fitfast/ui/cn";
import { toDateLocale } from "@/lib/utils";

interface DayNavigatorProps {
  totalDays: number;
  selectedDay: number;
  onSelectDay: (day: number) => void;
  planStartDate: string;
  todayDayIndex: number;
  featureColor?: "nutrition" | "fitness";
}

const ACCENT = {
  nutrition: {
    dot: "text-nutrition",
    pill: "bg-nutrition/10 text-nutrition hover:bg-nutrition/20",
  },
  fitness: {
    dot: "text-fitness",
    pill: "bg-fitness/10 text-fitness hover:bg-fitness/20",
  },
} as const;

function getDateForDay(startDate: string, dayIndex: number): Date {
  // Parse YYYY-MM-DD manually to avoid UTC-vs-local timezone shift.
  // new Date("2026-03-09") is UTC midnight, which in UTC+2 (Egypt) becomes
  // the previous calendar day — breaking weekday labels.
  const [y, m, d] = startDate.split("-").map(Number);
  const base = new Date(y, m - 1, d);
  base.setDate(base.getDate() + dayIndex);
  return base;
}

function formatDate(date: Date, locale: string): string {
  return date.toLocaleDateString(toDateLocale(locale), {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function getWeekdayShort(date: Date, locale: string): string {
  return date.toLocaleDateString(toDateLocale(locale), {
    weekday: "short",
  });
}

export function DayNavigator({
  totalDays,
  selectedDay,
  onSelectDay,
  planStartDate,
  todayDayIndex,
  featureColor = "nutrition",
}: DayNavigatorProps) {
  const locale = useLocale();
  const tCommon = useTranslations("common");
  const accent = ACCENT[featureColor];

  const isToday = selectedDay === todayDayIndex;
  const atStart = selectedDay <= 0;
  const atEnd = selectedDay >= totalDays - 1;

  const currentDate = getDateForDay(planStartDate, selectedDay);
  const centerLabel = isToday
    ? `${tCommon("today")} · ${formatDate(currentDate, locale)}`
    : formatDate(currentDate, locale);

  const prevDate = !atStart ? getDateForDay(planStartDate, selectedDay - 1) : null;
  const nextDate = !atEnd ? getDateForDay(planStartDate, selectedDay + 1) : null;
  const prevHint = prevDate ? getWeekdayShort(prevDate, locale) : "";
  const nextHint = nextDate ? getWeekdayShort(nextDate, locale) : "";

  return (
    <div className="bg-card border-border flex items-center justify-between rounded-xl border p-3">
      {/* Previous button */}
      <button
        onClick={() => onSelectDay(selectedDay - 1)}
        disabled={atStart}
        className="flex shrink-0 items-center gap-1 text-sm font-medium transition-opacity disabled:opacity-30"
        aria-label="Previous day"
      >
        <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
        {prevHint && (
          <span className="text-muted-foreground hidden text-xs sm:inline">{prevHint}</span>
        )}
      </button>

      {/* Center: date + back to today */}
      <div className="flex min-w-0 flex-1 flex-col items-center gap-1">
        <span className="flex max-w-full items-center gap-1.5 truncate text-sm font-semibold">
          {isToday && <span className={cn("text-xs", accent.dot)}>●</span>}
          {centerLabel}
        </span>
        {!isToday && (
          <button
            onClick={() => onSelectDay(todayDayIndex)}
            className={cn(
              "rounded-full px-2.5 py-0.5 text-[10px] font-medium transition-colors",
              accent.pill,
            )}
          >
            <RotateCcw className="me-1 inline h-2.5 w-2.5" />
            {tCommon("backToToday")}
          </button>
        )}
      </div>

      {/* Next button */}
      <button
        onClick={() => onSelectDay(selectedDay + 1)}
        disabled={atEnd}
        className="flex shrink-0 items-center gap-1 text-sm font-medium transition-opacity disabled:opacity-30"
        aria-label="Next day"
      >
        {nextHint && (
          <span className="text-muted-foreground hidden text-xs sm:inline">{nextHint}</span>
        )}
        <ChevronRight className="h-4 w-4 rtl:rotate-180" />
      </button>
    </div>
  );
}
