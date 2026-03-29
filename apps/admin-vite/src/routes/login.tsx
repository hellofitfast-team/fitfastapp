import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useConvexAuth, useQuery, useAction } from "convex/react";
import { api } from "@convex/_generated/api";
import { authClient } from "@/lib/auth-client";
import { Mail, Lock, ArrowRight, Sparkles, Loader2 } from "lucide-react";

type LoginFormData = {
  email: string;
  password: string;
};

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>) => ({
    error: (search.error as string) ?? "",
  }),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const { t: tAdmin } = useTranslation("translation", { keyPrefix: "admin" });
  const { t: tValidation } = useTranslation("translation", { keyPrefix: "validation" });

  const loginSchema = z.object({
    email: z.string().email(tValidation("invalidEmail")),
    password: z.string().min(6, tValidation("passwordMinLength")),
  });

  const navigate = useNavigate();
  const { error: errorParam } = useSearch({ from: "/login" });
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [signInComplete, setSignInComplete] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [magicLinkLoading, setMagicLinkLoading] = useState(false);
  const requestSetupLink = useAction(api.adminInviteActions.requestInitialSetupLink);

  const { isAuthenticated: isConvexAuth } = useConvexAuth();
  const profile = useQuery(api.profiles.getMyProfile, isConvexAuth ? {} : "skip");
  const isSigningOut = useRef(false);

  const notCoachError = errorParam === "not_coach" ? tAdmin("notAuthorized") : null;

  useEffect(() => {
    if (errorParam === "not_coach" && isConvexAuth && !isSigningOut.current) {
      isSigningOut.current = true;
      void authClient.signOut().then(() => {
        isSigningOut.current = false;
      });
    }
  }, [errorParam, isConvexAuth]);

  useEffect(() => {
    if (!isConvexAuth || profile === undefined || isSigningOut.current) return;
    if (profile?.isCoach) {
      navigate({ to: "/", replace: true });
    } else if (isConvexAuth && profile && !profile.isCoach) {
      isSigningOut.current = true;
      void authClient.signOut().then(() => {
        isSigningOut.current = false;
        setError(tAdmin("notAuthorized"));
        setSignInComplete(false);
        setIsLoading(false);
      });
    } else if (signInComplete) {
      isSigningOut.current = true;
      void authClient.signOut().then(() => {
        isSigningOut.current = false;
        setError(tAdmin("notAuthorized"));
        setSignInComplete(false);
        setIsLoading(false);
      });
    }
  }, [isConvexAuth, profile, signInComplete, navigate, tAdmin]);

  useEffect(() => {
    if (!cardRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" },
      );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const watchedEmail = watch("email");
  const hasOwner = useQuery(api.adminInvite.hasOwner);
  const hasPendingInvite = useQuery(
    api.adminInvite.hasPendingInvite,
    hasOwner === false && watchedEmail?.includes("@") ? { email: watchedEmail } : "skip",
  );
  const showOwnerSetup = hasOwner === false && hasPendingInvite === true;

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await authClient.signIn.email({ email: data.email, password: data.password });
      if (result.error) {
        setError(tAdmin("invalidCredentials"));
        setIsLoading(false);
      } else {
        setSignInComplete(true);
      }
    } catch {
      setError(tAdmin("invalidCredentials"));
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 p-4">
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
              Fit<span className="text-primary">Fast</span>
            </h1>
            <p className="mt-1.5 text-sm text-stone-500">{tAdmin("signInDescription")}</p>
          </div>
          <div className="px-8 pt-6 pb-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {(error || notCoachError) && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-sm font-medium text-red-600">{error ?? notCoachError}</p>
                </div>
              )}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-700">
                  {tAdmin("email")}
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                    <Mail className="h-4 w-4 text-stone-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="coach@fitfast.app"
                    className="focus:ring-primary/20 focus:border-primary h-11 w-full rounded-xl border border-stone-200 bg-stone-50 ps-10 pe-4 text-sm text-stone-900 transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none"
                    {...register("email")}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-stone-700"
                >
                  {tAdmin("password")}
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                    <Lock className="h-4 w-4 text-stone-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="focus:ring-primary/20 focus:border-primary h-11 w-full rounded-xl border border-stone-200 bg-stone-50 ps-10 pe-4 text-sm text-stone-900 transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none"
                    {...register("password")}
                    disabled={isLoading}
                  />
                </div>
                {errors.password && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.password.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary shadow-primary/20 hover:bg-primary/90 flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white shadow-lg transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="animate-pulse">{tAdmin("signingIn")}...</span>
                ) : (
                  <>
                    {tAdmin("signIn")}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </>
                )}
              </button>
            </form>
            {showOwnerSetup && (
              <div className="mt-4 border-t border-stone-100 pt-4">
                {magicLinkSent ? (
                  <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                    <Sparkles className="h-4 w-4 shrink-0 text-emerald-600" />
                    <p className="text-sm text-emerald-700">{tAdmin("magicLinkSent")}</p>
                  </div>
                ) : (
                  <button
                    type="button"
                    disabled={magicLinkLoading}
                    onClick={async () => {
                      const emailValue = getValues("email");
                      if (!emailValue) {
                        setError(tAdmin("enterEmailFirst"));
                        return;
                      }
                      setMagicLinkLoading(true);
                      setError(null);
                      try {
                        await requestSetupLink({ email: emailValue, fullName: "Owner" });
                        setMagicLinkSent(true);
                      } catch (err) {
                        setError(err instanceof Error ? err.message : tAdmin("magicLinkFailed"));
                      } finally {
                        setMagicLinkLoading(false);
                      }
                    }}
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-50 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 disabled:opacity-50"
                  >
                    {magicLinkLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="text-primary h-4 w-4" />
                    )}
                    {tAdmin("setupWithMagicLink")}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-stone-400">{tAdmin("coachPanelFooter")}</p>
      </div>
    </div>
  );
}
