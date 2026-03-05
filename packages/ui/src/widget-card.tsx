"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "./cn";

const FEATURE_ICON_STYLES = {
  primary: {
    bg: "bg-primary",
    shadow: "shadow-[0_4px_16px_rgba(255,69,0,0.15)]",
  },
  nutrition: {
    bg: "bg-nutrition",
    shadow: "shadow-[0_4px_16px_rgba(16,185,129,0.15)]",
  },
  fitness: {
    bg: "bg-fitness",
    shadow: "shadow-[0_4px_16px_rgba(249,115,22,0.15)]",
  },
  streak: {
    bg: "bg-streak",
    shadow: "shadow-[0_4px_16px_rgba(245,158,11,0.15)]",
  },
  routine: {
    bg: "bg-routine",
    shadow: "shadow-[0_4px_16px_rgba(139,92,246,0.15)]",
  },
} as const;

export type WidgetFeatureColor = keyof typeof FEATURE_ICON_STYLES;

export interface WidgetCardProps {
  icon?: LucideIcon;
  title: string;
  value?: string | number;
  subtitle?: string;
  trend?: { direction: "up" | "down" | "neutral"; label: string };
  featureColor?: WidgetFeatureColor;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function WidgetCard({
  icon: Icon,
  title,
  value,
  subtitle,
  trend,
  featureColor = "primary",
  children,
  className,
  onClick,
}: WidgetCardProps) {
  const Comp = onClick ? "button" : "div";
  const iconStyles = FEATURE_ICON_STYLES[featureColor];

  return (
    <Comp
      onClick={onClick}
      className={cn(
        "border-border bg-card shadow-card rounded-xl border p-4 text-start transition-all duration-200",
        "hover:shadow-lifted",
        onClick && "cursor-pointer active:scale-[0.97]",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-muted-foreground truncate text-xs font-medium">{title}</p>
          {value !== undefined && <p className="mt-1 text-2xl font-bold tracking-tight">{value}</p>}
          {subtitle && <p className="text-muted-foreground mt-0.5 text-xs">{subtitle}</p>}
          {trend && (
            <p
              className={cn(
                "mt-1 text-xs font-medium",
                trend.direction === "neutral" && "text-muted-foreground",
              )}
              style={
                trend.direction === "up"
                  ? { color: "var(--color-success-600)" }
                  : trend.direction === "down"
                    ? { color: "var(--color-error-500)" }
                    : undefined
              }
            >
              {trend.direction === "up" && "\u2191 "}
              {trend.direction === "down" && "\u2193 "}
              {trend.label}
            </p>
          )}
        </div>
        {Icon && (
          <div
            className={cn(
              "ms-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
              iconStyles.bg,
              iconStyles.shadow,
            )}
          >
            <Icon className="h-5 w-5 text-white" />
          </div>
        )}
      </div>
      {children && <div className="mt-3">{children}</div>}
    </Comp>
  );
}
