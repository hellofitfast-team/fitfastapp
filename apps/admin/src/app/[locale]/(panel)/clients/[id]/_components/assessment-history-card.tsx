"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { History, ChevronDown, ChevronRight } from "lucide-react";
import { toDateLocale } from "@/lib/utils";

interface HistoryEntry {
  _id: string;
  _creationTime: number;
  changedFields: string[];
  previousValues?: Record<string, unknown>;
  assessmentSnapshot: Record<string, unknown>;
  versionNumber: number;
  createdAt: number;
}

interface AssessmentHistoryCardProps {
  history: HistoryEntry[];
  currentVersion: number;
}

const COLLAPSED_LIMIT = 3;

/** Known field keys → assessmentDetails translation keys */
const FIELD_LABEL_MAP: Record<string, string> = {
  goals: "goals",
  currentWeight: "weight",
  height: "height",
  age: "age",
  gender: "gender",
  activityLevel: "activityLevel",
  exerciseHistory: "exerciseHistory",
  measurements: "measurements",
  scheduleAvailability: "schedule",
  foodPreferences: "foodPreferences",
  allergies: "allergies",
  dietaryRestrictions: "dietaryRestrictions",
  medicalConditions: "medicalConditions",
  injuries: "injuries",
  experienceLevel: "level",
  lifestyleHabits: "lifestyle",
};

function formatFieldValue(value: unknown): string {
  if (value === null || value === undefined) return "---";
  if (Array.isArray(value)) return value.length > 0 ? value.join(", ") : "---";
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .filter(([, v]) => v != null)
      .map(([k, v]) => `${k}: ${v}`);
    return entries.length > 0 ? entries.join(", ") : "---";
  }
  return String(value);
}

function getFieldLabel(field: string, tA: ReturnType<typeof useTranslations>): string {
  const key = FIELD_LABEL_MAP[field];
  if (!key) return field.charAt(0).toUpperCase() + field.slice(1);
  try {
    return tA(key);
  } catch {
    return field.charAt(0).toUpperCase() + field.slice(1);
  }
}

function HistoryEntryRow({
  entry,
  tA,
  tH,
  locale,
}: {
  entry: HistoryEntry;
  tA: ReturnType<typeof useTranslations>;
  tH: ReturnType<typeof useTranslations>;
  locale: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const fromVersion = entry.versionNumber;
  const toVersion = entry.versionNumber + 1;
  const date = new Date(entry.createdAt);
  const hasPreviousValues =
    entry.previousValues != null && Object.keys(entry.previousValues).length > 0;

  return (
    <div className="relative ps-6">
      {/* Timeline dot */}
      <div className="bg-primary/20 absolute start-0 top-1.5 h-3 w-3 rounded-full border-2 border-white" />

      <div className="rounded-lg border border-stone-100 bg-stone-50/50 p-3">
        {/* Header */}
        <button
          type="button"
          onClick={() => hasPreviousValues && setExpanded(!expanded)}
          className={`flex w-full items-center justify-between gap-2 text-start ${!hasPreviousValues ? "cursor-default" : ""}`}
        >
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary rounded px-1.5 py-0.5 text-xs font-semibold">
              {tH("versionBadge", { from: fromVersion, to: toVersion })}
            </span>
            <span className="text-xs text-stone-400">
              {date.toLocaleDateString(toDateLocale(locale), {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="rounded-full bg-stone-200 px-2 py-0.5 text-xs font-medium text-stone-600">
              {tH("fieldsChanged", { count: entry.changedFields.length })}
            </span>
            {hasPreviousValues &&
              (expanded ? (
                <ChevronDown className="h-3.5 w-3.5 text-stone-400" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
              ))}
          </div>
        </button>

        {/* Expanded: show old values of changed fields */}
        {expanded && hasPreviousValues && (
          <div className="mt-3 space-y-1.5 border-t border-stone-100 pt-3">
            {entry.changedFields.map((field) => {
              const oldVal = entry.previousValues![field];
              const label = getFieldLabel(field, tA);
              return (
                <div key={field} className="flex items-baseline justify-between gap-2 text-xs">
                  <span className="font-medium text-stone-600">{label}</span>
                  <span className="max-w-[180px] truncate text-end text-stone-400 line-through">
                    {formatFieldValue(oldVal)}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* No previousValues (legacy entries): just show field names */}
        {expanded && !hasPreviousValues && entry.changedFields.length > 0 && (
          <div className="mt-3 border-t border-stone-100 pt-3">
            <div className="flex flex-wrap gap-1.5">
              {entry.changedFields.map((field) => (
                <span
                  key={field}
                  className="rounded-full bg-stone-100 px-2 py-0.5 text-xs text-stone-600"
                >
                  {getFieldLabel(field, tA)}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function AssessmentHistoryCard({ history, currentVersion }: AssessmentHistoryCardProps) {
  const tH = useTranslations("assessmentHistory");
  const tA = useTranslations("assessmentDetails");
  const locale = useLocale();
  const [showAll, setShowAll] = useState(false);

  if (history.length === 0) return null;

  const visibleEntries = showAll ? history : history.slice(0, COLLAPSED_LIMIT);
  const hasMore = history.length > COLLAPSED_LIMIT;

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 lg:col-span-2">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <History className="h-4 w-4" />
          </div>
          <h2 className="text-sm font-semibold text-stone-900">{tH("title")}</h2>
        </div>
        <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-semibold">
          {tH("currentVersion", { version: currentVersion })}
        </span>
      </div>

      {/* Timeline */}
      <div className="relative space-y-3">
        {/* Vertical connector line */}
        <div className="absolute start-[5px] top-0 bottom-0 w-0.5 bg-stone-200" />

        {visibleEntries.map((entry) => (
          <HistoryEntryRow key={entry._id} entry={entry} tA={tA} tH={tH} locale={locale} />
        ))}
      </div>

      {/* Show more/less */}
      {hasMore && (
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="mt-3 w-full text-center text-xs font-medium text-stone-400 transition-colors hover:text-stone-600"
        >
          {showAll ? tH("showLess") : tH("showAll", { count: history.length })}
        </button>
      )}
    </div>
  );
}
