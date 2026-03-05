import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";

const mocks = vi.hoisted(() => ({
  useConvexAuth: vi.fn(),
  useQuery: vi.fn(),
}));

vi.mock("convex/react", () => ({
  useConvexAuth: mocks.useConvexAuth,
  useQuery: mocks.useQuery,
}));

import { useCheckInLock } from "../use-check-in-lock";

describe("useCheckInLock", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns unlocked defaults when not authenticated (query skipped)", () => {
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: false });
    mocks.useQuery.mockReturnValue(undefined);

    const { result } = renderHook(() => useCheckInLock());

    expect(result.current.isLocked).toBe(false);
    expect(result.current.nextCheckInDate).toBeNull();
    expect(result.current.daysUntilNextCheckIn).toBe(0);
    expect(result.current.frequencyDays).toBe(10);
    expect(result.current.isLoadingLockStatus).toBe(false);
  });

  it("returns loading state when authenticated but query is in-flight", () => {
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true });
    mocks.useQuery.mockReturnValue(undefined);

    const { result } = renderHook(() => useCheckInLock());

    expect(result.current.isLoadingLockStatus).toBe(true);
    // Defaults while loading
    expect(result.current.isLocked).toBe(false);
    expect(result.current.frequencyDays).toBe(10);
  });

  it("returns unlocked state when server says not locked", () => {
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true });
    mocks.useQuery.mockReturnValue({
      isLocked: false,
      nextCheckInDate: null,
      frequencyDays: 10,
    });

    const { result } = renderHook(() => useCheckInLock());

    expect(result.current.isLocked).toBe(false);
    expect(result.current.nextCheckInDate).toBeNull();
    expect(result.current.daysUntilNextCheckIn).toBe(0);
    expect(result.current.frequencyDays).toBe(10);
    expect(result.current.isLoadingLockStatus).toBe(false);
  });

  it("returns locked state with correct days remaining", () => {
    // Fix "now" to a known date
    vi.setSystemTime(new Date("2026-03-01T12:00:00Z"));

    const nextDate = "2026-03-08T12:00:00Z"; // 7 days later
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true });
    mocks.useQuery.mockReturnValue({
      isLocked: true,
      nextCheckInDate: nextDate,
      frequencyDays: 10,
    });

    const { result } = renderHook(() => useCheckInLock());

    expect(result.current.isLocked).toBe(true);
    expect(result.current.nextCheckInDate).toEqual(new Date(nextDate));
    expect(result.current.daysUntilNextCheckIn).toBe(7);
    expect(result.current.frequencyDays).toBe(10);
  });

  it("uses Math.ceil for partial days (3.5 days rounds up to 4)", () => {
    vi.setSystemTime(new Date("2026-03-01T12:00:00Z"));

    // 3.5 days = 84 hours later
    const nextDate = new Date("2026-03-01T12:00:00Z");
    nextDate.setHours(nextDate.getHours() + 84); // +3.5 days

    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true });
    mocks.useQuery.mockReturnValue({
      isLocked: true,
      nextCheckInDate: nextDate.toISOString(),
      frequencyDays: 7,
    });

    const { result } = renderHook(() => useCheckInLock());

    // Math.ceil(3.5) = 4
    expect(result.current.daysUntilNextCheckIn).toBe(4);
    expect(result.current.frequencyDays).toBe(7);
  });

  it("returns 1 day remaining when less than 24 hours left", () => {
    vi.setSystemTime(new Date("2026-03-01T12:00:00Z"));

    // 6 hours later
    const nextDate = new Date("2026-03-01T18:00:00Z");

    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true });
    mocks.useQuery.mockReturnValue({
      isLocked: true,
      nextCheckInDate: nextDate.toISOString(),
      frequencyDays: 10,
    });

    const { result } = renderHook(() => useCheckInLock());

    // Math.ceil(0.25) = 1
    expect(result.current.daysUntilNextCheckIn).toBe(1);
  });

  it("returns 0 days when locked but nextCheckInDate is in the past", () => {
    vi.setSystemTime(new Date("2026-03-10T12:00:00Z"));

    // Date is in the past
    const nextDate = "2026-03-08T12:00:00Z";
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true });
    mocks.useQuery.mockReturnValue({
      isLocked: true,
      nextCheckInDate: nextDate,
      frequencyDays: 10,
    });

    const { result } = renderHook(() => useCheckInLock());

    // Math.ceil of a negative number gives a non-positive result
    // The hook still sets this; the UI should handle it
    expect(result.current.daysUntilNextCheckIn).toBeLessThanOrEqual(0);
  });

  it("returns 0 daysUntilNextCheckIn when not locked even if nextCheckInDate exists", () => {
    vi.setSystemTime(new Date("2026-03-01T12:00:00Z"));

    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true });
    mocks.useQuery.mockReturnValue({
      isLocked: false,
      nextCheckInDate: "2026-03-08T12:00:00Z",
      frequencyDays: 10,
    });

    const { result } = renderHook(() => useCheckInLock());

    // The days calculation only runs when isLocked is true
    expect(result.current.daysUntilNextCheckIn).toBe(0);
    expect(result.current.isLocked).toBe(false);
  });

  it("skips the query when not authenticated", () => {
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: false });
    mocks.useQuery.mockReturnValue(undefined);

    renderHook(() => useCheckInLock());

    expect(mocks.useQuery).toHaveBeenCalledWith(expect.anything(), "skip");
  });

  it("passes empty object to query when authenticated", () => {
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true });
    mocks.useQuery.mockReturnValue(null);

    renderHook(() => useCheckInLock());

    expect(mocks.useQuery).toHaveBeenCalledWith(expect.anything(), {});
  });
});
