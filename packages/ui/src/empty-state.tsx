"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { Button } from "./button";
import { cn } from "./cn";

export type EmptyStateVariant = "default" | "primary" | "nutrition" | "fitness" | "routine";

export interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: EmptyStateVariant;
  action?: {
    label: string;
    onClick: () => void;
    href?: string;
  };
  className?: string;
}

const ICON_VARIANTS: Record<EmptyStateVariant, { bg: string; icon: string }> = {
  default: { bg: "bg-neutral-100", icon: "text-muted-foreground" },
  primary: { bg: "bg-primary/10", icon: "text-primary" },
  nutrition: { bg: "bg-nutrition/10", icon: "text-nutrition" },
  fitness: { bg: "bg-fitness/10", icon: "text-fitness" },
  routine: { bg: "bg-routine/10", icon: "text-routine" },
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  variant = "default",
  action,
  className,
}: EmptyStateProps) {
  const styles = ICON_VARIANTS[variant];

  return (
    <div className={cn("rounded-xl border border-border bg-card p-10 text-center", className)}>
      <div className={cn("flex h-16 w-16 items-center justify-center mx-auto rounded-2xl", styles.bg)}>
        <Icon className={cn("h-8 w-8", styles.icon)} />
      </div>
      <h3 className="mt-5 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
        {description}
      </p>
      {action && (
        <Button onClick={action.onClick} className="mt-5">
          {action.label}
        </Button>
      )}
    </div>
  );
}
