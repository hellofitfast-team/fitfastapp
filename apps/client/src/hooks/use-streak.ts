"use client";

import { useConvexAuth, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export function useStreak() {
  const { isAuthenticated } = useConvexAuth();
  const data = useQuery(api.completions.getStreak, isAuthenticated ? {} : "skip");

  return {
    streak: data?.currentStreak ?? 0,
    isLoading: isAuthenticated && data === undefined,
  };
}
