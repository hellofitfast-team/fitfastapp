"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "@fitfast/i18n/navigation";
import { useAuthActions } from "@convex-dev/auth/react";
import { ArrowLeft, Mail, CheckCircle2, Zap, Loader2 } from "lucide-react";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const t = useTranslations("auth");
  const tCommon = useTranslations("common");
  const { signIn } = useAuthActions();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [sentEmail, setSentEmail] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.set("email", data.email);
      formData.set("flow", "reset");

      await signIn("password", formData);
      setSentEmail(data.email);
      setEmailSent(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : t("unexpectedError");
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="border-border bg-card overflow-hidden rounded-xl border shadow-lg">
        <div className="border-border bg-success-500/5 border-b p-6 text-center">
          <div className="bg-success-500/10 mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full">
            <CheckCircle2 className="text-success-500 h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold">{t("emailSent")}</h1>
          <p className="text-muted-foreground mt-1 text-sm">{t("emailSentDescription")}</p>
        </div>
        <div className="space-y-4 p-6">
          <div className="border-border rounded-lg border bg-neutral-50 p-3.5 text-center">
            <p className="text-muted-foreground mb-1 text-xs">{t("email")}</p>
            <p className="text-sm font-medium">{sentEmail}</p>
          </div>
          <Link href={`/set-password?email=${encodeURIComponent(sentEmail)}`} className="block">
            <button className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white transition-colors">
              {t("enterCode")}
            </button>
          </Link>
          <Link href="/login" className="block">
            <button className="border-border flex w-full items-center justify-center gap-2 rounded-lg border py-3 text-sm font-medium transition-colors hover:bg-neutral-50">
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              {tCommon("back")}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="border-border bg-card overflow-hidden rounded-xl border shadow-lg">
      {/* Header */}
      <div className="border-border border-b p-6 text-center">
        <div className="bg-primary/10 mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full">
          <Zap className="text-primary h-7 w-7" />
        </div>
        <h1 className="text-2xl font-bold">{t("magicLink")}</h1>
        <p className="text-muted-foreground mt-1 text-sm">{t("magicLinkDescription")}</p>
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
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              {t("email")}
            </label>
            <div className="relative">
              <Mail className="text-muted-foreground absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2" />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="border-input bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full rounded-lg border ps-10 pe-4 text-sm transition-colors focus:ring-2 focus:outline-none"
                {...register("email")}
                disabled={isLoading}
              />
            </div>
            {errors.email && <p className="text-error-500 mt-1 text-xs">{errors.email.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white transition-all active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("sendingMagicLink")}...
              </>
            ) : (
              <>
                {t("sendMagicLink")}
                <Zap className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-4">
          <Link href="/login">
            <button className="border-border flex w-full items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-medium transition-colors hover:bg-neutral-50">
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              {tCommon("back")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
