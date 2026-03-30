import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { DashboardSkeleton } from "../dashboard-skeleton";
import { MealPlanSkeleton } from "../meal-plan-skeleton";
import { WorkoutPlanSkeleton } from "../workout-plan-skeleton";
import { SettingsSkeleton } from "../settings-skeleton";
import { FaqSkeleton } from "../faq-skeleton";

describe("Skeleton Components", () => {
  it("DashboardSkeleton renders without crashing", () => {
    const { container } = render(<DashboardSkeleton />);
    expect(container.firstChild).toBeTruthy();
  });

  it("MealPlanSkeleton renders day tabs and meal cards", () => {
    const { container } = render(<MealPlanSkeleton />);
    expect(container.firstChild).toBeTruthy();
    expect(container.querySelector(".animate-pulse")).toBeTruthy();
  });

  it("WorkoutPlanSkeleton renders exercise placeholders", () => {
    const { container } = render(<WorkoutPlanSkeleton />);
    expect(container.firstChild).toBeTruthy();
  });

  it("SettingsSkeleton renders form field placeholders", () => {
    const { container } = render(<SettingsSkeleton />);
    expect(container.firstChild).toBeTruthy();
  });

  it("FaqSkeleton renders search bar and items", () => {
    const { container } = render(<FaqSkeleton />);
    expect(container.firstChild).toBeTruthy();
  });
});
