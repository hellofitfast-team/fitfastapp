"use client";

import { useState } from "react";
import { useRouter } from "@fitfast/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuthActions } from "@convex-dev/auth/react";
import { Lock, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@fitfast/ui/cn";

const setPasswordSchema = z
  .object({
    code: z.string().min(1, "Verification code is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SetPasswordFormData = z.infer<typeof setPasswordSchema>;

export default function SetPasswordPage() {
  const t = useTranslations("auth");
  const router = useRouter();
  const searchParams = useSearchParams();
  const { signIn } = useAuthActions();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [passwordSet, setPasswordSet] = useState(false);

  const email = searchParams.get("email") ?? "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SetPasswordFormData>({
    resolver: zodResolver(setPasswordSchema),
  });

  const password = watch("password");

  const onSubmit = async (data: SetPasswordFormData) => {
    if (!email) {
      setError("Email not found. Please start the password reset process again.");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.set("email", email);
      formData.set("code", data.code);
      formData.set("newPassword", data.password);
      formData.set("flow", "reset-verification");

      await signIn("password", formData);
      setPasswordSet(true);
      setTimeout(() => {
        router.replace("/");
      }, 2000);
    } catch (err: unknown) {
      const message = err instanceof Error
        ? err.message
        : "An unexpected error occurred. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  if (passwordSet) {
    return (
      <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden">
        <div className="p-6 text-center border-b border-border bg-success-500/5">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-success-500/10 mb-3">
            <CheckCircle2 className="h-7 w-7 text-success-500" />
          </div>
          <h1 className="text-xl font-bold">{t("passwordSet")}</h1>
          <p className="text-sm text-muted-foreground mt-1">{t("redirectingToDashboard")}</p>
        </div>
        <div className="p-6 flex justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-success-500" />
        </div>
      </div>
    );
  }

  const getPasswordStrength = () => {
    if (!password) return { level: 0, text: "Weak" };
    const hasLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const score = [hasLength, hasUpper, hasLower, hasNumber].filter(Boolean).length;
    if (score === 4) return { level: 3, text: "Strong" };
    if (score >= 2) return { level: 2, text: "Medium" };
    return { level: 1, text: "Weak" };
  };

  const strength = getPasswordStrength();

  return (
    <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-6 text-center border-b border-border">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-3">
          <Lock className="h-7 w-7 text-primary" />
        </div>
        <h1 className="text-2xl font-bold">{t("setPassword")}</h1>
        <p className="text-sm text-muted-foreground mt-1">{t("createPasswordDescription")}</p>
        {email && <p className="text-sm font-medium mt-2">{email}</p>}
      </div>

      {/* Form */}
      <div className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {error && (
            <div className="rounded-lg bg-error-500/10 border border-error-500/20 p-3">
              <p className="text-sm text-error-500">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="code" className="block text-sm font-medium mb-1.5">
              {t("verificationCode")}
            </label>
            <input
              id="code"
              type="text"
              placeholder="123456"
              autoComplete="one-time-code"
              className="w-full h-11 px-4 rounded-lg border border-input bg-card text-sm text-center tracking-widest placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              {...register("code")}
              disabled={isLoading}
            />
            {errors.code && (
              <p className="mt-1 text-xs text-error-500">{errors.code.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1.5">
              {t("password")}
            </label>
            <div className="relative">
              <Lock className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
                className="w-full h-11 ps-10 pe-4 rounded-lg border border-input bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                {...register("password")}
                disabled={isLoading}
              />
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{t("passwordRequirements")}</p>
            {errors.password && (
              <p className="mt-1 text-xs text-error-500">{errors.password.message}</p>
            )}

            {password && password.length > 0 && (
              <div className="mt-2.5 space-y-1.5">
                <div className="flex gap-1">
                  <div className={cn("h-1.5 flex-1 rounded-full", strength.level >= 1 ? "bg-error-500" : "bg-neutral-200")} />
                  <div className={cn("h-1.5 flex-1 rounded-full", strength.level >= 2 ? "bg-amber-500" : "bg-neutral-200")} />
                  <div className={cn("h-1.5 flex-1 rounded-full", strength.level >= 3 ? "bg-success-500" : "bg-neutral-200")} />
                </div>
                <p className="text-xs text-muted-foreground">
                  Strength: <span className={cn(
                    strength.level === 3 ? "text-success-500" : strength.level === 2 ? "text-amber-500" : "text-error-500"
                  )}>{strength.text}</span>
                </p>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1.5">
              {t("confirmPassword")}
            </label>
            <div className="relative">
              <Lock className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
                className="w-full h-11 ps-10 pe-4 rounded-lg border border-input bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                {...register("confirmPassword")}
                disabled={isLoading}
              />
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-error-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.97] flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <><Loader2 className="h-4 w-4 animate-spin" />{t("updatingPassword")}...</>
            ) : (
              <>{t("setPassword")}<ArrowRight className="h-4 w-4 rtl:rotate-180" /></>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
