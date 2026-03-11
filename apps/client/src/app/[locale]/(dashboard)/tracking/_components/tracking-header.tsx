"use client";

/**
 * TrackingHeader — hero section for the daily tracking page.
 *
 * Shows a prominent SVG progress ring (80px), streak flame,
 * and two colored stat pills (meals + workout) with mini progress
 * bar fills inside. All colors use existing design tokens.
 */

import { useTranslations, useLocale } from "next-intl";
import { Flame, Utensils, Dumbbell } from "lucide-react";
import { cn } from "@fitfast/ui/cn";
import { formatDateWithWeekday } from "@/lib/utils";
import { useStreak } from "@/hooks/use-streak";

interface TrackingHeaderProps {
  selectedDate: string;
  completionPercentage: number;
  mealProgress: { completed: number; total: number };
  workoutDone: boolean;
}

/** SVG circular progress ring radius and circumference */
const RING_RADIUS = 34;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

/**
 * Pick the ring stroke color based on completion percentage.
 * Uses existing design tokens: muted (0%), streak amber (1-99%), nutrition green (100%).
 */
function getRingColor(pct: number): string {
  if (pct === 0) return "var(--color-muted-foreground)";
  if (pct >= 100) return "var(--color-nutrition)";
  return "var(--color-streak)";
}

export function TrackingHeader({
  selectedDate,
  completionPercentage,
  mealProgress,
  workoutDone,
}: TrackingHeaderProps) {
  const t = useTranslations("tracking");
  const locale = useLocale();
  const { streak } = useStreak();

  // SVG progress ring offset — decreases as completion increases
  const strokeDashoffset = RING_CIRCUMFERENCE * (1 - completionPercentage / 100);

  return (
    <div className="flex items-start gap-5">
      {/* Hero progress ring */}
      <div className="relative shrink-0">
        <svg width={80} height={80} viewBox="0 0 80 80" className="-rotate-90">
          {/* Background track */}
          <circle
            cx={40}
            cy={40}
            r={RING_RADIUS}
            fill="none"
            stroke="var(--color-muted)"
            strokeWidth={6}
            opacity={0.3}
          />
          {/* Progress arc */}
          <circle
            cx={40}
            cy={40}
            r={RING_RADIUS}
            fill="none"
            stroke={getRingColor(completionPercentage)}
            strokeWidth={6}
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        {/* Center percentage text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg leading-none font-bold">{completionPercentage}%</span>
        </div>
      </div>

      {/* Title + date + stats */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2.5">
          <h1 className="text-xl leading-tight font-bold">{t("title")}</h1>
          {streak > 0 && (
            <span className="bg-streak/15 text-streak flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold">
              <Flame className="h-3.5 w-3.5" />
              {streak}
            </span>
          )}
        </div>
        <p className="text-muted-foreground mt-0.5 text-sm">
          {formatDateWithWeekday(
            new Date(selectedDate.includes("T") ? selectedDate : selectedDate + "T12:00:00"),
            locale,
          )}
        </p>

        {/* Stat pills with mini progress bars */}
        <div className="mt-3 flex flex-wrap gap-2">
          {/* Meals pill */}
          <StatPill
            icon={<Utensils className="h-3 w-3" />}
            label={`${mealProgress.completed}/${mealProgress.total} ${t("mealsCompleted")}`}
            progress={mealProgress.total > 0 ? mealProgress.completed / mealProgress.total : 0}
            colorClass="nutrition"
          />
          {/* Workout pill */}
          <StatPill
            icon={<Dumbbell className="h-3 w-3" />}
            label={workoutDone ? t("workoutCompleted") : t("workoutNotCompleted")}
            progress={workoutDone ? 1 : 0}
            colorClass="fitness"
          />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// StatPill — colored badge with a mini progress bar fill inside
// ---------------------------------------------------------------------------

interface StatPillProps {
  icon: React.ReactNode;
  label: string;
  progress: number; // 0–1
  colorClass: "nutrition" | "fitness";
}

/** Renders a rounded pill with an icon, label, and subtle background fill */
function StatPill({ icon, label, progress, colorClass }: StatPillProps) {
  const bgClass = colorClass === "nutrition" ? "bg-nutrition/10" : "bg-fitness/10";
  const textClass = colorClass === "nutrition" ? "text-nutrition" : "text-fitness";
  const fillClass = colorClass === "nutrition" ? "bg-nutrition/20" : "bg-fitness/20";

  return (
    <div className={cn("relative overflow-hidden rounded-full px-3 py-1", bgClass)}>
      {/* Mini progress bar fill — grows from left to right */}
      <div
        className={cn("absolute inset-y-0 start-0 transition-all duration-500", fillClass)}
        style={{ width: `${Math.round(progress * 100)}%` }}
      />
      <span className={cn("relative flex items-center gap-1.5 text-xs font-semibold", textClass)}>
        {icon}
        {label}
      </span>
    </div>
  );
}
