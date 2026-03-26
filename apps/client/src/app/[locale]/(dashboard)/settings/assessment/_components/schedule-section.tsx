"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Calendar, Loader2 } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { cn } from "@fitfast/ui/cn";
import { useToast } from "@/hooks/use-toast";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const DURATIONS = [30, 45, 60, 90] as const;
const TIMES = ["morning", "afternoon", "evening", "varies"] as const;

export function ScheduleSection({ assessment }: { assessment: any }) {
  const t = useTranslations("settings.assessment");
  const tSchedule = useTranslations("onboarding.assessment");
  const { toast } = useToast();
  const submitAssessment = useMutation(api.assessments.submitAssessment);

  const sched = assessment.scheduleAvailability as any;
  const [days, setDays] = useState<string[]>(sched?.days ?? []);
  const [duration, setDuration] = useState<number>(sched?.sessionDuration ?? 60);
  const [preferredTime, setPreferredTime] = useState(sched?.preferredTime ?? "varies");
  const [isSaving, setIsSaving] = useState(false);

  const initialDays = (sched?.days ?? []) as string[];
  const hasChanges =
    JSON.stringify([...days].sort()) !== JSON.stringify([...initialDays].sort()) ||
    duration !== (sched?.sessionDuration ?? 60) ||
    preferredTime !== (sched?.preferredTime ?? "varies");

  const toggleDay = (day: string) => {
    setDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]));
  };

  const handleSave = async () => {
    if (days.length === 0) {
      toast({ title: "Select at least 1 training day", variant: "destructive" });
      return;
    }
    if (!hasChanges) return;
    setIsSaving(true);
    try {
      await submitAssessment({
        scheduleAvailability: { days, sessionDuration: duration, preferredTime },
      });
      toast({ title: t("saved"), variant: "success" });
    } catch {
      toast({ title: t("noChanges"), variant: "destructive" });
    }
    setIsSaving(false);
  };

  return (
    <div className="border-border bg-card overflow-hidden rounded-xl border">
      <div className="border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4">
        <Calendar className="text-primary h-4 w-4" />
        <h3 className="text-sm font-semibold">{t("scheduleTitle")}</h3>
      </div>
      <div className="space-y-4 p-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium">{t("trainingDays")}</label>
          <div className="flex flex-wrap gap-2">
            {DAYS.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={cn(
                  "min-w-[44px] rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors",
                  days.includes(day)
                    ? "border-fitness/30 bg-fitness/8 text-fitness"
                    : "border-border hover:bg-neutral-50",
                )}
              >
                {tSchedule(`days.${day}`)}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium">{t("sessionDuration")}</label>
          <div className="flex gap-2">
            {DURATIONS.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDuration(d)}
                className={cn(
                  "flex-1 rounded-lg border p-2.5 text-center text-xs font-medium transition-colors",
                  duration === d
                    ? "border-fitness/30 bg-fitness/8 text-fitness"
                    : "border-border hover:bg-neutral-50",
                )}
              >
                {d} min
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium">{t("preferredTime")}</label>
          <select
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm focus:ring-2 focus:outline-none"
          >
            {TIMES.map((id) => (
              <option key={id} value={id}>
                {tSchedule(`trainingTimes.${id}`)}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={handleSave}
          disabled={!hasChanges || isSaving || days.length === 0}
          className="bg-primary hover:bg-primary/90 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-50"
        >
          {isSaving ? (
            <Loader2 className="mx-auto h-4 w-4 animate-spin" />
          ) : (
            t(hasChanges ? "save" : "noChanges")
          )}
        </button>
      </div>
    </div>
  );
}
