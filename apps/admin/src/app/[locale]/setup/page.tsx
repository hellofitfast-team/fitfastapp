"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuthActions } from "@convex-dev/auth/react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Lock, UserPlus, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

function createSetupSchema(t: (key: string) => string) {
  return z
    .object({
      password: z.string().min(8, t("passwordMinLength")),
      confirmPassword: z.string().min(8, t("passwordMinLength")),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("passwordMismatch"),
      path: ["confirmPassword"],
    });
}

type SetupFormData = z.infer<ReturnType<typeof createSetupSchema>>;

export default function AdminSetupPage() {
  const t = useTranslations("setup");
  const tValidation = useTranslations("validation");
  const setupSchema = createSetupSchema((key) => tValidation(key));
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const cardRef = useRef<HTMLDivElement>(null);

  const { signIn } = useAuthActions();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Validate the invite token
  const invite = useQuery(api.adminInvite.validateInvite, token ? { token } : "skip");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetupFormData>({
    resolver: zodResolver(setupSchema),
  });

  // Animate card on mount
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.opacity = "0";
      cardRef.current.style.transform = "translateY(20px)";
      const timer = setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.style.transition = "all 0.5s ease-out";
          cardRef.current.style.opacity = "1";
          cardRef.current.style.transform = "translateY(0)";
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const onSubmit = async (data: SetupFormData) => {
    if (!invite || !invite.valid || !invite.email) return;

    setIsLoading(true);
    setError(null);

    try {
      // Create account via Convex Auth signUp flow
      // The onNewUserCreated callback will detect the adminInvite and set isCoach=true
      await signIn("password", {
        email: invite.email,
        password: data.password,
        name: invite.fullName,
        flow: "signUp",
      });

      setSuccess(true);
      // Redirect to login after a brief success message
      setTimeout(() => router.replace("/"), 2000);
    } catch {
      setError(t("setupFailed"));
      setIsLoading(false);
    }
  };

  // No token provided
  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 p-4">
        <div className="max-w-md rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-xl">
          <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-400" />
          <h1 className="text-xl font-bold text-stone-900">{t("invalidLink")}</h1>
          <p className="mt-2 text-sm text-stone-500">{t("invalidLinkDesc")}</p>
        </div>
      </div>
    );
  }

  // Loading invite validation
  if (invite === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 p-4">
        <Loader2 className="h-8 w-8 animate-spin text-stone-400" />
      </div>
    );
  }

  // Invalid/expired/used token
  if (!invite.valid) {
    const errorMessages: Record<string, string> = {
      invalid: t("invalidLink"),
      used: t("inviteUsed"),
      expired: t("inviteExpired"),
    };
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 p-4">
        <div className="max-w-md rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-xl">
          <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-400" />
          <h1 className="text-xl font-bold text-stone-900">
            {errorMessages[invite.error] ?? t("invalidLink")}
          </h1>
          <p className="mt-2 text-sm text-stone-500">{t("contactAdmin")}</p>
        </div>
      </div>
    );
  }

  // Success state
  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 p-4">
        <div className="max-w-md rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-xl">
          <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-500" />
          <h1 className="text-xl font-bold text-stone-900">{t("setupComplete")}</h1>
          <p className="mt-2 text-sm text-stone-500">{t("redirecting")}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-stone-50 p-4"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #FF4500 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div ref={cardRef} className="relative w-full max-w-md">
        <div className="rounded-2xl border border-stone-200 bg-white shadow-xl shadow-stone-200/50">
          <div className="px-8 pt-10 pb-2 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="FitFast" className="mx-auto mb-5 h-14 w-14" />
            <h1 className="text-2xl font-black tracking-tighter text-stone-900 uppercase italic">
              {t("title")}
            </h1>
            <p className="mt-1.5 text-sm text-stone-500">{t("subtitle")}</p>
            <p className="mt-3 text-sm font-medium text-stone-700">
              {invite.fullName} ({invite.email})
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-8 pt-6 pb-8">
            {error && (
              <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Password field */}
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-xs font-semibold tracking-wide text-stone-500 uppercase"
              >
                {t("password")}
              </label>
              <div className="group relative">
                <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-stone-400 transition-colors group-focus-within:text-[#FF4500]" />
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  className="h-12 w-full rounded-xl border border-stone-200 bg-stone-50 pr-4 pl-10 text-sm transition-all focus:border-[#FF4500] focus:bg-white focus:ring-2 focus:ring-[#FF4500]/20 focus:outline-none"
                  placeholder={t("passwordPlaceholder")}
                  disabled={isLoading}
                />
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-xs font-semibold tracking-wide text-stone-500 uppercase"
              >
                {t("confirmPassword")}
              </label>
              <div className="group relative">
                <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-stone-400 transition-colors group-focus-within:text-[#FF4500]" />
                <input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  className="h-12 w-full rounded-xl border border-stone-200 bg-stone-50 pr-4 pl-10 text-sm transition-all focus:border-[#FF4500] focus:bg-white focus:ring-2 focus:ring-[#FF4500]/20 focus:outline-none"
                  placeholder={t("confirmPasswordPlaceholder")}
                  disabled={isLoading}
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1.5 text-xs text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#FF4500] text-sm font-bold text-white shadow-lg shadow-[#FF4500]/25 transition-all hover:bg-[#E03E00] hover:shadow-xl hover:shadow-[#FF4500]/30 active:scale-[0.98] disabled:opacity-60"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <UserPlus className="h-4 w-4" />
              )}
              {isLoading ? t("creating") : t("createAccount")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
