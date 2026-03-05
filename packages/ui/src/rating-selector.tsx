"use client";

import type { CSSProperties } from "react";
import { cn } from "./cn";

export interface RatingSelectorProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  label?: string;
  disabled?: boolean;
  labels?: { low: string; mid: string; high: string };
}

const ZONES = {
  low: {
    bg: "var(--color-error-500)",
    text: "#fff",
    ring: "var(--color-error-500)",
  },
  midLow: {
    bg: "var(--color-warning-600)",
    text: "#fff",
    ring: "var(--color-warning-600)",
  },
  midHigh: {
    bg: "var(--color-warning-500)",
    text: "var(--color-neutral-900)",
    ring: "var(--color-warning-500)",
  },
  high: {
    bg: "var(--color-success-500)",
    text: "#fff",
    ring: "var(--color-success-500)",
  },
} as const;

function getZone(num: number) {
  if (num <= 3) return ZONES.low;
  if (num <= 5) return ZONES.midLow;
  if (num <= 7) return ZONES.midHigh;
  return ZONES.high;
}

function getButtonStyle(num: number, isSelected: boolean): CSSProperties {
  if (!isSelected)
    return {
      backgroundColor: "var(--color-neutral-100)",
      color: "var(--color-neutral-500)",
    };
  const z = getZone(num);
  return { backgroundColor: z.bg, color: z.text };
}

function getBadgeStyle(value: number): CSSProperties {
  const z = getZone(value);
  return {
    backgroundColor: `color-mix(in srgb, ${z.bg} 10%, transparent)`,
    color: z.ring,
  };
}

function getZoneLabel(value: number, labels?: { low: string; mid: string; high: string }) {
  if (value <= 3) return labels?.low ?? "Needs work";
  if (value <= 7) return labels?.mid ?? "Moderate";
  return labels?.high ?? "Great";
}

export function RatingSelector({
  value,
  onChange,
  max = 10,
  label,
  disabled,
  labels,
}: RatingSelectorProps) {
  return (
    <div>
      {label && (
        <div className="mb-2.5 flex items-center justify-between">
          <label className="text-sm font-medium">{label}</label>
          <span className="rounded-full px-2 py-0.5 text-sm font-bold" style={getBadgeStyle(value)}>
            {value}/{max} · {getZoneLabel(value, labels)}
          </span>
        </div>
      )}
      <div className="flex gap-1.5">
        {Array.from({ length: max }, (_, i) => i + 1).map((num) => {
          const isSelected = value === num;
          return (
            <button
              key={num}
              type="button"
              onClick={() => onChange(num)}
              disabled={disabled}
              className={cn(
                "flex h-11 flex-1 items-center justify-center rounded-lg text-xs font-semibold transition-all",
                isSelected && "scale-110",
                disabled && "cursor-not-allowed opacity-50",
              )}
              style={{
                ...getButtonStyle(num, isSelected),
                ...(isSelected
                  ? {
                      boxShadow: `0 0 0 1px var(--color-background), 0 0 0 3px color-mix(in srgb, ${getZone(num).ring} 30%, transparent)`,
                    }
                  : undefined),
              }}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
}
