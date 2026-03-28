import { useState, useEffect, useRef } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authClient } from "@/lib/auth-client";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { Lock, UserPlus, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

function createSetupSchema(t: (key: string) => string) {
  return z
    .object({
      password: z.string().min(8, t("validation.passwordMinLength")),
      confirmPassword: z.string().min(8, t("validation.passwordMinLength")),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("validation.passwordMismatch"),
      path: ["confirmPassword"],
    });
}

type SetupFormData = z.infer<ReturnType<typeof createSetupSchema>>;

export const Route = createFileRoute("/setup")({
  component: AdminSetupPage,
  validateSearch: (search: Record<string, unknown>) => ({
    token: (search.token as string) || undefined,
  }),
});

function AdminSetupPage() {
  const { t } = useTranslation();
  const setupSchema = createSetupSchema((key) => t(key));
  const navigate = useNavigate();
  const { token } = Route.useSearch();
  const cardRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

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
      await authClient.signUp.email({
        email: invite.email,
        password: data.password,
        name: invite.fullName,
      });

      setSuccess(true);
      setTimeout(() => navigate({ to: "/" }), 2000);
    } catch {
      setError(t("setup.setupFailed"));
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 p-4">
        <div className="max-w-md rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-xl">
          <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-400" />
          <h1 className="text-xl font-bold text-stone-900">{t("setup.invalidLink")}</h1>
          <p className="mt-2 text-sm text-stone-500">{t("setup.invalidLinkDesc")}</p>
        </div>
      </div>
    );
  }

  if (invite === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 p-4">
        <Loader2 className="h-8 w-8 animate-spin text-stone-400" />
      </div>
    );
  }

  if (!invite.valid) {
    const errorMessages: Record<string, string> = {
      invalid: t("setup.invalidLink"),
      used: t("setup.inviteUsed"),
      expired: t("setup.inviteExpired"),
    };
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 p-4">
        <div className="max-w-md rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-xl">
          <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-400" />
          <h1 className="text-xl font-bold text-stone-900">
            {errorMessages[invite.error] ?? t("setup.invalidLink")}
          </h1>
          <p className="mt-2 text-sm text-stone-500">{t("setup.contactAdmin")}</p>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 p-4">
        <div className="max-w-md rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-xl">
          <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-500" />
          <h1 className="text-xl font-bold text-stone-900">{t("setup.setupComplete")}</h1>
          <p className="mt-2 text-sm text-stone-500">{t("setup.redirecting")}</p>
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
            <img src="/logo.svg" alt="FitFast" className="mx-auto mb-5 h-14 w-14" />
            <h1 className="text-2xl font-black tracking-tighter text-stone-900 uppercase italic">
              {t("setup.title")}
            </h1>
            <p className="mt-1.5 text-sm text-stone-500">{t("setup.subtitle")}</p>
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

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-xs font-semibold tracking-wide text-stone-500 uppercase"
              >
                {t("setup.password")}
              </label>
              <div className="group relative">
                <Lock className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400 transition-colors group-focus-within:text-[#FF4500]" />
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  className="h-12 w-full rounded-xl border border-stone-200 bg-stone-50 ps-10 pe-4 text-sm transition-all focus:border-[#FF4500] focus:bg-white focus:ring-2 focus:ring-[#FF4500]/20 focus:outline-none"
                  placeholder={t("setup.passwordPlaceholder")}
                  disabled={isLoading}
                />
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-xs font-semibold tracking-wide text-stone-500 uppercase"
              >
                {t("setup.confirmPassword")}
              </label>
              <div className="group relative">
                <Lock className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400 transition-colors group-focus-within:text-[#FF4500]" />
                <input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  className="h-12 w-full rounded-xl border border-stone-200 bg-stone-50 ps-10 pe-4 text-sm transition-all focus:border-[#FF4500] focus:bg-white focus:ring-2 focus:ring-[#FF4500]/20 focus:outline-none"
                  placeholder={t("setup.confirmPasswordPlaceholder")}
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
              {isLoading ? t("setup.creating") : t("setup.createAccount")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
