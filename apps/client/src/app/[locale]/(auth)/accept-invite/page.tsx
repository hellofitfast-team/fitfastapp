"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@fitfast/i18n/navigation";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Lock, ArrowRight, Loader2, AlertCircle } from "lucide-react";

export default function AcceptInvitePage() {
  const t = useTranslations("auth");
  const router = useRouter();
  const searchParams = useSearchParams();
  const { signIn } = useAuthActions();
  const { isAuthenticated } = useConvexAuth();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = searchParams.get("token");

  // Validate the invite token
  const inviteData = useQuery(api.pendingSignups.validateInviteToken, token ? { token } : "skip");

  // If already signed in, redirect to pending
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/pending");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);

    if (password !== confirmPassword) {
      setError(t("passwordMismatch"));
      return;
    }

    if (password.length < 8) {
      setError(t("invalidPassword"));
      return;
    }

    if (!inviteData?.email) {
      setError(t("inviteExpired"));
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.set("email", inviteData.email);
      formData.set("password", password);
      formData.set("flow", "signUp");

      await signIn("password", formData);
      // isAuthenticated effect will redirect to /pending
    } catch {
      // Never expose raw server errors — show friendly message
      setError(t("accountCreationFailed"));
    } finally {
      setIsLoading(false);
    }
  };

  // Invalid link — no token present
  if (!token) {
    return (
      <div className="border-border bg-card animate-fade-in overflow-hidden rounded-2xl border shadow-sm">
        <div className="border-border border-b p-6 text-center">
          <div className="bg-primary/10 mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full">
            <span className="text-primary text-xl font-bold">FF</span>
          </div>
          <h1 className="text-2xl font-bold">{t("invalidInviteLink")}</h1>
        </div>
        <div className="p-6 text-center">
          <div className="bg-error-500/10 border-error-500/20 mb-4 flex items-center justify-center gap-2 rounded-lg border p-4">
            <AlertCircle className="text-error-500 h-5 w-5 shrink-0" />
            <p className="text-error-500 text-sm">{t("invalidInviteLink")}</p>
          </div>
          <Link href="/login" className="text-primary text-sm hover:underline">
            {t("signIn")}
          </Link>
        </div>
      </div>
    );
  }

  // Loading invite validation
  if (inviteData === undefined) {
    return (
      <div className="border-border bg-card animate-fade-in overflow-hidden rounded-2xl border shadow-sm">
        <div className="flex items-center justify-center p-6">
          <Loader2 className="text-primary h-6 w-6 animate-spin" />
        </div>
      </div>
    );
  }

  // Invalid or expired token
  if (inviteData === null) {
    return (
      <div className="border-border bg-card animate-fade-in overflow-hidden rounded-2xl border shadow-sm">
        <div className="border-border border-b p-6 text-center">
          <div className="bg-primary/10 mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full">
            <span className="text-primary text-xl font-bold">FF</span>
          </div>
          <h1 className="text-2xl font-bold">{t("inviteExpired")}</h1>
        </div>
        <div className="p-6 text-center">
          <div className="bg-error-500/10 border-error-500/20 mb-4 flex items-center justify-center gap-2 rounded-lg border p-4">
            <AlertCircle className="text-error-500 h-5 w-5 shrink-0" />
            <p className="text-error-500 text-sm">{t("inviteExpired")}</p>
          </div>
          <Link href="/login" className="text-primary text-sm hover:underline">
            {t("signIn")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="border-border bg-card animate-fade-in overflow-hidden rounded-2xl border shadow-sm">
      {/* Header */}
      <div className="border-border border-b p-6 text-center">
        <div className="bg-primary/10 mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full">
          <span className="text-primary text-xl font-bold">FF</span>
        </div>
        <h1 className="text-2xl font-bold">{t("acceptInvite")}</h1>
        <p className="text-muted-foreground mt-1 text-sm">{t("setPassword")}</p>
        <p className="mt-2 text-sm font-medium">{inviteData.email}</p>
      </div>

      {/* Form */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-error-500/10 border-error-500/20 flex items-start gap-2 rounded-lg border p-3">
              <AlertCircle className="text-error-500 mt-0.5 h-4 w-4 shrink-0" />
              <p className="text-error-500 text-sm">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium">
              {t("setPassword")}
            </label>
            <div className="relative">
              <Lock className="text-muted-foreground absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2" />
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-input bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full rounded-lg border ps-10 pe-4 text-sm transition-colors focus:ring-2 focus:outline-none"
                disabled={isLoading}
                required
                minLength={8}
              />
            </div>
            <p className="text-muted-foreground mt-1 text-xs">{t("passwordRequirements")}</p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium">
              {t("confirmPassword")}
            </label>
            <div className="relative">
              <Lock className="text-muted-foreground absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2" />
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-input bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full rounded-lg border ps-10 pe-4 text-sm transition-colors focus:ring-2 focus:outline-none"
                disabled={isLoading}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white transition-all active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("updatingPassword")}
              </>
            ) : (
              <>
                {t("createAccount")}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground text-xs">
            {t("signIn")}&nbsp;
            <Link href="/login" className="text-primary hover:underline">
              {t("login")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
