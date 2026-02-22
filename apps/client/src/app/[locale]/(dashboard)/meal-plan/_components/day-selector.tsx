"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { cn } from "@fitfast/ui/cn";

interface DaySelectorProps {
  totalDays: number;
  selectedDay: number;
  onSelectDay: (day: number) => void;
  planStartDate?: string;
  restDays?: number[];
  featureColor?: "nutrition" | "fitness";
}

const ACTIVE_STYLES = {
  nutrition: "bg-[#10B981] text-white",
  fitness: "bg-[#F97316] text-white",
} as const;

export function DaySelector({
  totalDays,
  selectedDay,
  onSelectDay,
  planStartDate,
  restDays = [],
  featureColor = "nutrition",
}: DaySelectorProps) {
  const locale = useLocale();
  const activeRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll selected day into view on mount
  useEffect(() => {
    activeRef.current?.scrollIntoView({ inline: "center", behavior: "smooth" });
  }, [selectedDay]);

  const getWeekdayLabel = (dayIndex: number): string => {
    if (!planStartDate) return "";
    try {
      const date = new Date(planStartDate);
      date.setDate(date.getDate() + dayIndex);
      return date.toLocaleDateString(locale === "ar" ? "ar-u-nu-latn" : "en-US", {
        weekday: "short",
      });
    } catch {
      return "";
    }
  };

  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
      {Array.from({ length: totalDays }, (_, i) => {
        const isActive = selectedDay === i;
        const isRest = restDays.includes(i);
        const weekday = getWeekdayLabel(i);

        return (
          <button
            key={i}
            ref={isActive ? activeRef : undefined}
            onClick={() => onSelectDay(i)}
            className={cn(
              "flex-shrink-0 min-w-[48px] px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors text-center",
              isActive
                ? ACTIVE_STYLES[featureColor]
                : isRest
                ? "bg-neutral-100 text-neutral-400"
                : "bg-neutral-100 text-muted-foreground hover:bg-neutral-200"
            )}
          >
            <div>Day {i + 1}</div>
            {weekday && (
              <div className="text-[10px] mt-0.5 opacity-80">{weekday}</div>
            )}
          </button>
        );
      })}
    </div>
  );
}
