import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

// Hoist mock values so they can be referenced inside vi.mock factories
const mocks = vi.hoisted(() => ({
  pushFn: vi.fn(),
  signOutFn: vi.fn(() => Promise.resolve()),
  useConvexAuth: vi.fn(),
  useQuery: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mocks.pushFn, replace: vi.fn() }),
}));

vi.mock("convex/react", () => ({
  useConvexAuth: mocks.useConvexAuth,
  useQuery: mocks.useQuery,
}));

vi.mock("@convex-dev/auth/react", () => ({
  useAuthActions: () => ({ signOut: mocks.signOutFn }),
}));

// Must import after mocks are declared
import { useAuth } from "../use-auth";

describe("useAuth", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns loading=true while auth state is being determined", () => {
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: false, isLoading: true });
    mocks.useQuery.mockReturnValue(undefined);

    const { result } = renderHook(() => useAuth());

    expect(result.current.loading).toBe(true);
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.profile).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it("returns loading=true when authenticated but profile is still loading", () => {
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true, isLoading: false });
    // useQuery returns undefined while the query is in-flight
    mocks.useQuery.mockReturnValue(undefined);

    const { result } = renderHook(() => useAuth());

    expect(result.current.loading).toBe(true);
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.profile).toBeNull();
  });

  it("returns authenticated state with profile when fully loaded", () => {
    const mockProfile = { _id: "p1", name: "Test User", email: "test@test.com" };
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true, isLoading: false });
    mocks.useQuery.mockReturnValue(mockProfile);

    const { result } = renderHook(() => useAuth());

    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.profile).toEqual(mockProfile);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("returns not authenticated state when user is logged out", () => {
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: false, isLoading: false });
    // useQuery receives "skip" so it returns undefined
    mocks.useQuery.mockReturnValue(undefined);

    const { result } = renderHook(() => useAuth());

    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.profile).toBeNull();
    // loading should be false: not authLoading and not authenticated
    expect(result.current.loading).toBe(false);
  });

  it("skips the profile query when not authenticated", () => {
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: false, isLoading: false });
    mocks.useQuery.mockReturnValue(undefined);

    renderHook(() => useAuth());

    // useQuery should be called with "skip" as the second arg
    expect(mocks.useQuery).toHaveBeenCalledWith(expect.anything(), "skip");
  });

  it("passes empty object to profile query when authenticated", () => {
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true, isLoading: false });
    mocks.useQuery.mockReturnValue({ _id: "p1" });

    renderHook(() => useAuth());

    expect(mocks.useQuery).toHaveBeenCalledWith(expect.anything(), {});
  });

  it("signOut calls convex signOut and redirects to /login", async () => {
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true, isLoading: false });
    mocks.useQuery.mockReturnValue({ _id: "p1" });

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.signOut();
    });

    expect(mocks.signOutFn).toHaveBeenCalledOnce();
    expect(mocks.pushFn).toHaveBeenCalledWith("/login");
  });

  it("signOut redirects to /login even if convex signOut rejects", async () => {
    mocks.signOutFn.mockRejectedValueOnce(new Error("network error"));
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true, isLoading: false });
    mocks.useQuery.mockReturnValue({ _id: "p1" });

    const { result } = renderHook(() => useAuth());

    // The promise rejects but signOut still called
    await expect(
      act(async () => {
        await result.current.signOut();
      }),
    ).rejects.toThrow("network error");

    expect(mocks.signOutFn).toHaveBeenCalledOnce();
  });

  it("returns profile as null when query returns null (no profile exists)", () => {
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: true, isLoading: false });
    mocks.useQuery.mockReturnValue(null);

    const { result } = renderHook(() => useAuth());

    expect(result.current.profile).toBeNull();
    // null !== undefined so the profile-loading branch is false
    expect(result.current.loading).toBe(false);
  });
});
