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

type SetPasswordFormData = {
  code: string;
  password: string;
  confirmPassword: string;
};

export default function SetPasswordPage() {
  const t = useTranslations("auth");

  const setPasswordSchema = z
    .object({
      code: z.string().min(1, t("verificationRequired")),
      password: z
        .string()
        .min(8, t("passwordRequirements"))
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, t("passwordComplexity")),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("passwordsMustMatch"),
      path: ["confirmPassword"],
    });
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
      setError(t("emailNotFound"));
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
      const message = err instanceof Error ? err.message : t("unexpectedError");
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  if (passwordSet) {
    return (
      <div className="border-border bg-card overflow-hidden rounded-xl border shadow-lg">
        <div className="border-border bg-success-500/5 border-b p-6 text-center">
          <div className="bg-success-500/10 mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full">
            <CheckCircle2 className="text-success-500 h-7 w-7" />
          </div>
          <h1 className="text-xl font-bold">{t("passwordSet")}</h1>
          <p className="text-muted-foreground mt-1 text-sm">{t("redirectingToDashboard")}</p>
        </div>
        <div className="flex justify-center p-6">
          <Loader2 className="text-success-500 h-6 w-6 animate-spin" />
        </div>
      </div>
    );
  }

  const getPasswordStrength = () => {
    if (!password) return { level: 0, text: t("passwordStrength.weak") };
    const hasLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const score = [hasLength, hasUpper, hasLower, hasNumber].filter(Boolean).length;
    if (score === 4) return { level: 3, text: t("passwordStrength.strong") };
    if (score >= 2) return { level: 2, text: t("passwordStrength.medium") };
    return { level: 1, text: t("passwordStrength.weak") };
  };

  const strength = getPasswordStrength();

  return (
    <div className="border-border bg-card overflow-hidden rounded-xl border shadow-lg">
      {/* Header */}
      <div className="border-border border-b p-6 text-center">
        <div className="bg-primary/10 mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full">
          <Lock className="text-primary h-7 w-7" />
        </div>
        <h1 className="text-2xl font-bold">{t("setPassword")}</h1>
        <p className="text-muted-foreground mt-1 text-sm">{t("createPasswordDescription")}</p>
        {email && <p className="mt-2 text-sm font-medium">{email}</p>}
      </div>

      {/* Form */}
      <div className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {error && (
            <div className="bg-error-500/10 border-error-500/20 rounded-lg border p-3">
              <p className="text-error-500 text-sm">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="code" className="mb-1.5 block text-sm font-medium">
              {t("verificationCode")}
            </label>
            <input
              id="code"
              type="text"
              placeholder="123456"
              autoComplete="one-time-code"
              className="border-input bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full rounded-lg border px-4 text-center text-sm tracking-widest transition-colors focus:ring-2 focus:outline-none"
              {...register("code")}
              disabled={isLoading}
            />
            {errors.code && <p className="text-error-500 mt-1 text-xs">{errors.code.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium">
              {t("password")}
            </label>
            <div className="relative">
              <Lock className="text-muted-foreground absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2" />
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
                className="border-input bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full rounded-lg border ps-10 pe-4 text-sm transition-colors focus:ring-2 focus:outline-none"
                {...register("password")}
                disabled={isLoading}
              />
            </div>
            <p className="text-muted-foreground mt-1 text-xs">{t("passwordRequirements")}</p>
            {errors.password && (
              <p className="text-error-500 mt-1 text-xs">{errors.password.message}</p>
            )}

            {password && password.length > 0 && (
              <div className="mt-2.5 space-y-1.5">
                <div className="flex gap-1">
                  <div
                    className={cn(
                      "h-1.5 flex-1 rounded-full",
                      strength.level >= 1 ? "bg-error-500" : "bg-neutral-200",
                    )}
                  />
                  <div
                    className={cn(
                      "h-1.5 flex-1 rounded-full",
                      strength.level >= 2 ? "bg-amber-500" : "bg-neutral-200",
                    )}
                  />
                  <div
                    className={cn(
                      "h-1.5 flex-1 rounded-full",
                      strength.level >= 3 ? "bg-success-500" : "bg-neutral-200",
                    )}
                  />
                </div>
                <p className="text-muted-foreground text-xs">
                  {t("passwordStrength.label")}:{" "}
                  <span
                    className={cn(
                      strength.level === 3
                        ? "text-success-500"
                        : strength.level === 2
                          ? "text-amber-500"
                          : "text-error-500",
                    )}
                  >
                    {strength.text}
                  </span>
                </p>
              </div>
            )}
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
                autoComplete="new-password"
                className="border-input bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full rounded-lg border ps-10 pe-4 text-sm transition-colors focus:ring-2 focus:outline-none"
                {...register("confirmPassword")}
                disabled={isLoading}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-error-500 mt-1 text-xs">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white transition-all active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("updatingPassword")}...
              </>
            ) : (
              <>
                {t("setPassword")}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
