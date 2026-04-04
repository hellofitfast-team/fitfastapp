import { createContext, useContext, type ReactNode } from "react";
import { useConvexAuth } from "convex/react";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  userId: string | null;
  isCoach: boolean;
  isOwner: boolean;
}

const AuthContext = createContext<AuthState>({
  isAuthenticated: false,
  isLoading: true,
  userId: null,
  isCoach: false,
  isOwner: false,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  // getMyCoachProfile already falls back to legacy profiles table server-side
  const profile = useQuery(api.profiles.getMyCoachProfile, isAuthenticated ? {} : "skip");

  const auth: AuthState = {
    isAuthenticated,
    isLoading: isLoading || (isAuthenticated && profile === undefined),
    userId: profile?.userId ?? null,
    isCoach: !!profile,
    isOwner: !!(profile && "isOwner" in profile && profile.isOwner),
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
