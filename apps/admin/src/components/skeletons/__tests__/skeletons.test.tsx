import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { DashboardSkeleton } from "../dashboard-skeleton";
import { ClientsSkeleton } from "../clients-skeleton";
import { TableSkeleton } from "../table-skeleton";

describe("Skeleton Components", () => {
  it("DashboardSkeleton renders without crashing", () => {
    const { container } = render(<DashboardSkeleton />);
    expect(container.firstChild).toBeTruthy();
  });

  it("ClientsSkeleton renders without crashing", () => {
    const { container } = render(<ClientsSkeleton />);
    expect(container.firstChild).toBeTruthy();
  });

  it("TableSkeleton renders with default props", () => {
    const { container } = render(<TableSkeleton />);
    expect(container.firstChild).toBeTruthy();
  });

  it("TableSkeleton renders custom rows and cols", () => {
    const { container } = render(<TableSkeleton rows={10} cols={6} />);
    expect(container.firstChild).toBeTruthy();
  });
});
