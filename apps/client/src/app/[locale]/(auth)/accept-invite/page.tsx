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
  const inviteData = useQuery(
    api.pendingSignups.validateInviteToken,
    token ? { token } : "skip",
  );

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
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : t("inviteExpired");
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  // Invalid link — no token present
  if (!token) {
    return (
      <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden animate-fade-in">
        <div className="p-6 text-center border-b border-border">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-3">
            <span className="text-xl font-bold text-primary">FF</span>
          </div>
          <h1 className="text-2xl font-bold">{t("invalidInviteLink")}</h1>
        </div>
        <div className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 rounded-lg bg-error-500/10 border border-error-500/20 p-4">
            <AlertCircle className="h-5 w-5 text-error-500 shrink-0" />
            <p className="text-sm text-error-500">
              {t("invalidInviteLink")}
            </p>
          </div>
          <Link
            href="/login"
            className="text-sm text-primary hover:underline"
          >
            {t("signIn")}
          </Link>
        </div>
      </div>
    );
  }

  // Loading invite validation
  if (inviteData === undefined) {
    return (
      <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden animate-fade-in">
        <div className="p-6 flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  // Invalid or expired token
  if (inviteData === null) {
    return (
      <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden animate-fade-in">
        <div className="p-6 text-center border-b border-border">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-3">
            <span className="text-xl font-bold text-primary">FF</span>
          </div>
          <h1 className="text-2xl font-bold">{t("inviteExpired")}</h1>
        </div>
        <div className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 rounded-lg bg-error-500/10 border border-error-500/20 p-4">
            <AlertCircle className="h-5 w-5 text-error-500 shrink-0" />
            <p className="text-sm text-error-500">
              {t("inviteExpired")}
            </p>
          </div>
          <Link
            href="/login"
            className="text-sm text-primary hover:underline"
          >
            {t("signIn")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="p-6 text-center border-b border-border">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-3">
          <span className="text-xl font-bold text-primary">FF</span>
        </div>
        <h1 className="text-2xl font-bold">{t("acceptInvite")}</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {t("setPassword")}
        </p>
        <p className="text-sm font-medium mt-2">{inviteData.email}</p>
      </div>

      {/* Form */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="flex items-start gap-2 rounded-lg bg-error-500/10 border border-error-500/20 p-3">
              <AlertCircle className="h-4 w-4 text-error-500 shrink-0 mt-0.5" />
              <p className="text-sm text-error-500">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1.5">
              {t("setPassword")}
            </label>
            <div className="relative">
              <Lock className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 ps-10 pe-4 rounded-lg border border-input bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                disabled={isLoading}
                required
                minLength={8}
              />
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {t("passwordRequirements")}
            </p>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium mb-1.5"
            >
              {t("confirmPassword")}
            </label>
            <div className="relative">
              <Lock className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-11 ps-10 pe-4 rounded-lg border border-input bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                disabled={isLoading}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.97] flex items-center justify-center gap-2"
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
          <p className="text-xs text-muted-foreground">
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
