"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSignIn, useClerk } from "@clerk/nextjs";
import { useConvexAuth, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Mail, Lock, ArrowRight } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
  const t = useTranslations("admin");
  const router = useRouter();
  const searchParams = useSearchParams();
  const cardRef = useRef<HTMLDivElement>(null);
  const { signIn, setActive, isLoaded } = useSignIn();
  const { signOut } = useClerk();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkingCoach, setCheckingCoach] = useState(false);

  const { isAuthenticated: isConvexAuth } = useConvexAuth();
  const profile = useQuery(api.profiles.getMyProfile, isConvexAuth ? {} : "skip");

  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam === "coach_account") {
      setError(t("coachAccountRedirect"));
    }
  }, [searchParams, t]);

  // Redirect if already authenticated as coach
  useEffect(() => {
    if (!isConvexAuth || profile === undefined) return;
    if (checkingCoach) return; // handled below

    if (profile?.isCoach) {
      router.replace("/");
    }
  }, [isConvexAuth, profile, checkingCoach, router]);

  // After sign-in, check if user is coach (wait for Convex to pick up Clerk JWT)
  useEffect(() => {
    if (!checkingCoach || !isConvexAuth || profile === undefined) return;

    if (profile?.isCoach) {
      router.replace("/");
    } else {
      signOut().then(() => {
        setError(t("notAuthorized"));
        setCheckingCoach(false);
        setIsLoading(false);
      });
    }
  }, [checkingCoach, isConvexAuth, profile, router, signOut, t]);

  // GSAP entrance animation
  useEffect(() => {
    if (!cardRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
      );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const doSignIn = async (data: LoginFormData) => {
    const result = await signIn!.create({
      identifier: data.email,
    });

    if (result.status === "complete" && result.createdSessionId) {
      await setActive!({ session: result.createdSessionId });
      setCheckingCoach(true);
      return;
    }

    const firstFactor = result.supportedFirstFactors?.find(
      (f) => f.strategy === "password",
    );

    if (firstFactor) {
      const attemptResult = await signIn!.attemptFirstFactor({
        strategy: "password",
        password: data.password,
      });

      if (attemptResult.status === "complete" && attemptResult.createdSessionId) {
        await setActive!({ session: attemptResult.createdSessionId });
        setCheckingCoach(true);
      } else {
        setError(t("invalidCredentials"));
        setIsLoading(false);
      }
    } else {
      setError(t("invalidCredentials"));
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: LoginFormData) => {
    if (!isLoaded || !signIn) return;
    setIsLoading(true);
    setError(null);

    try {
      await doSignIn(data);
    } catch (err: unknown) {
      const clerkErr = err as { errors?: Array<{ message?: string; code?: string }> };
      const code = clerkErr?.errors?.[0]?.code;

      // If a stale session exists, clear it and retry once
      if (code === "session_exists") {
        try {
          await signOut();
          await doSignIn(data);
          return;
        } catch (retryErr: unknown) {
          console.error("Clerk signIn retry error:", retryErr);
          const retryClerkErr = retryErr as { errors?: Array<{ message?: string; code?: string }> };
          setError(retryClerkErr?.errors?.[0]?.message || t("invalidCredentials"));
          setIsLoading(false);
          return;
        }
      }

      console.error("Clerk signIn error:", err);
      setError(clerkErr?.errors?.[0]?.message || t("invalidCredentials"));
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-stone-50 p-4"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #FF4500 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div ref={cardRef} className="relative w-full max-w-md">
        <div className="rounded-2xl border border-stone-200 bg-white shadow-xl shadow-stone-200/50">
          <div className="px-8 pt-10 pb-2 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="FitFast"
              className="mx-auto h-14 w-14 mb-5"
            />
            <h1 className="text-2xl font-black italic tracking-tighter uppercase text-stone-900" style={{ fontFamily: "var(--font-display)" }}>
              Fit<span className="text-[#FF4500]">Fast</span>
            </h1>
            <p className="text-sm text-stone-500 mt-1.5">
              {t("signInDescription")}
            </p>
          </div>

          <div className="px-8 pt-6 pb-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-sm font-medium text-red-600">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">
                  {t("email")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <Mail className="h-4 w-4 text-stone-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="coach@fitfast.app"
                    className="w-full h-11 ps-10 pe-4 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    {...register("email")}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-1.5">
                  {t("password")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <Lock className="h-4 w-4 text-stone-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full h-11 ps-10 pe-4 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
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
                disabled={isLoading || !isLoaded}
                className="btn-magnetic w-full h-11 rounded-xl bg-[#FF4500] text-white font-semibold text-sm hover:bg-[#CC3700] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#FF4500]/20"
              >
                {isLoading ? (
                  <span className="animate-pulse">{t("signingIn")}...</span>
                ) : (
                  <>
                    {t("signIn")}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-xs text-stone-400 mt-6">
          Coach Panel &middot; Authorized Access Only
        </p>
      </div>
    </div>
  );
}
