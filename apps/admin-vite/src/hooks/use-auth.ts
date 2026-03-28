import { useNavigate } from "@tanstack/react-router";
import { useConvexAuth } from "convex/react";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { authClient } from "@/lib/auth-client";

export function useAuth() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading: authLoading } = useConvexAuth();
  const profile = useQuery(api.profiles.getMyProfile, isAuthenticated ? {} : "skip");

  const signOut = async () => {
    try {
      await authClient.signOut();
    } finally {
      navigate({ to: "/login" });
    }
  };

  return {
    isAuthenticated,
    profile: profile ?? null,
    loading: authLoading || (isAuthenticated && profile === undefined),
    error: null,
    signOut,
  };
}
