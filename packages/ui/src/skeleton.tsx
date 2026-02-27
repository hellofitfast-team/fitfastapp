import * as React from "react";
import { cn } from "./cn";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("animate-pulse rounded-lg bg-neutral-200", className)}
      {...props}
    />
  );
}

export function SkeletonText({
  className,
  lines = 3,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { lines?: number }) {
  return (
    <div className={cn("space-y-2", className)} role="status" aria-label="Loading" {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn("h-4 animate-pulse rounded-md bg-neutral-200", i === lines - 1 && "w-3/4")}
        />
      ))}
    </div>
  );
}

export function SkeletonCircle({
  className,
  size = 40,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { size?: number }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("animate-pulse rounded-full bg-neutral-200", className)}
      style={{ width: size, height: size }}
      {...props}
    />
  );
}

export function SkeletonCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("border-border space-y-3 rounded-xl border p-5", className)}
      {...props}
    >
      <div className="h-4 w-2/3 animate-pulse rounded-md bg-neutral-200" />
      <div className="space-y-2">
        <div className="h-3 animate-pulse rounded-md bg-neutral-200" />
        <div className="h-3 w-4/5 animate-pulse rounded-md bg-neutral-200" />
      </div>
    </div>
  );
}

/** Home page widget grid skeleton — matches WidgetCard shape */
export function SkeletonWidgetCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("border-border bg-card rounded-xl border p-4", className)}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-2">
          <div className="h-3 w-20 animate-pulse rounded bg-neutral-200" />
          <div className="h-7 w-14 animate-pulse rounded-md bg-neutral-200" />
          <div className="h-3 w-24 animate-pulse rounded bg-neutral-200" />
        </div>
        <div className="ms-3 h-11 w-11 shrink-0 animate-pulse rounded-xl bg-neutral-200" />
      </div>
    </div>
  );
}

/** Collapsed meal card skeleton — matches meal plan card shape */
export function SkeletonMealCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("border-border bg-card rounded-xl border p-4", className)}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 animate-pulse rounded-lg bg-neutral-200" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 animate-pulse rounded bg-neutral-200" />
          <div className="h-3 w-20 animate-pulse rounded bg-neutral-200" />
        </div>
        <div className="h-4 w-12 shrink-0 animate-pulse rounded bg-neutral-200" />
      </div>
    </div>
  );
}

/** Exercise card skeleton — matches workout plan card shape */
export function SkeletonWorkoutCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("border-border bg-card space-y-3 rounded-xl border p-4", className)}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 shrink-0 animate-pulse rounded-lg bg-neutral-200" />
        <div className="flex-1 space-y-1.5">
          <div className="h-4 w-36 animate-pulse rounded bg-neutral-200" />
          <div className="h-3 w-24 animate-pulse rounded bg-neutral-200" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-10 animate-pulse rounded-lg bg-neutral-200" />
        ))}
      </div>
    </div>
  );
}

/** Ticket list item skeleton — matches ticket card shape */
export function SkeletonTicketItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("border-border bg-card rounded-xl border p-4", className)}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 animate-pulse rounded-lg bg-neutral-200" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-48 animate-pulse rounded bg-neutral-200" />
          <div className="h-3 w-32 animate-pulse rounded bg-neutral-200" />
        </div>
        <div className="h-4 w-4 shrink-0 animate-pulse rounded bg-neutral-200" />
      </div>
    </div>
  );
}
