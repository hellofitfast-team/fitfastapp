import { createContext, useContext, type ReactNode } from "react";
import { useConvexAuth } from "convex/react";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  userId: string | null;
  isCoach: false; // Client app never has coaches
}

const AuthContext = createContext<AuthState>({
  isAuthenticated: false,
  isLoading: true,
  userId: null,
  isCoach: false,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  // getMyClientProfile already falls back to legacy profiles table server-side
  const profile = useQuery(api.profiles.getMyClientProfile, isAuthenticated ? {} : "skip");

  const auth: AuthState = {
    isAuthenticated,
    isLoading: isLoading || (isAuthenticated && profile === undefined),
    userId: profile?.userId ?? null,
    isCoach: false, // Client app — never a coach
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
