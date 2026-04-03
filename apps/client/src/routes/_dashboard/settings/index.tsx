import { createFileRoute, Link } from "@tanstack/react-router";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@tanstack/react-router";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  ClipboardList,
  LogOut,
  AlertTriangle,
  X,
  Loader2,
  ChevronRight,
} from "lucide-react";
import { useQuery, useMutation, useAction } from "convex/react";
import { api } from "@convex/_generated/api";
import { Skeleton } from "@fitfast/ui/skeleton";
import { useForm } from "react-hook-form";
import { RouteErrorComponent } from "@/components/route-error";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@fitfast/ui/cn";
import { toast } from "@fitfast/ui/use-toast";
import { localTimeToUtc, utcTimeToLocal, formatDate } from "@fitfast/ui/format";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/_dashboard/settings/")({
  component: SettingsPage,
  errorComponent: ({ error, reset }) => <RouteErrorComponent error={error} reset={reset} />,
});

function SettingsCard({
  icon,
  title,
  children,
  animationDelay = "0ms",
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  animationDelay?: string;
}) {
  return (
    <div
      className="border-border bg-card shadow-card animate-slide-up overflow-hidden rounded-xl border"
      style={{ animationDelay }}
    >
      <div className="border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4">
        {icon}
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function createProfileSchema(t: (key: string) => string) {
  return z.object({
    fullName: z.string().min(2, t("nameMinLength")).max(100, t("nameMaxLength")),
    phone: z
      .string()
      .regex(/^[\d+\-\s()]*$/, t("invalidPhone"))
      .optional()
      .or(z.literal("")),
    language: z.enum(["en", "ar"]),
  });
}
type ProfileFormData = z.infer<ReturnType<typeof createProfileSchema>>;

function SettingsPage() {
  const { t } = useTranslation("translation", { keyPrefix: "settings" });
  const { t: tTracking } = useTranslation("translation", { keyPrefix: "tracking" });
  const { t: tValidation } = useTranslation("translation", { keyPrefix: "validation" });
  const profileSchema = createProfileSchema((key) => tValidation(key));
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const navigate = useNavigate();
  const profile = useQuery(api.profiles.getMyProfile);
  const updateProfile = useMutation(api.profiles.updateProfile);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      fullName: profile?.fullName || "",
      phone: profile?.phone || "",
      language: (profile?.language || "en") as "en" | "ar",
    },
  });

  const changePasswordAction = useAction(api.passwordChange.changePassword);
  const [reminderTime, setReminderTime] = useState("08:00");
  const [reminderInitialized, setReminderInitialized] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [passwordForm, setPasswordForm] = useState({ current: "", new: "", confirm: "" });
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  // Initialize reminder time from profile once.
  // Profile stores UTC — convert to local for the <input type="time"> display.
  if (profile?.notificationReminderTime && !reminderInitialized) {
    setReminderTime(utcTimeToLocal(profile.notificationReminderTime));
    setReminderInitialized(true);
  }

  useEffect(() => {
    if (profile) {
      reset({
        fullName: profile.fullName || "",
        phone: profile.phone || "",
        language: (profile.language || "en") as "en" | "ar",
      });
    }
  }, [profile, reset]);

  const onSubmit = async (data: ProfileFormData) => {
    setIsSaving(true);
    try {
      await updateProfile({
        fullName: data.fullName,
        phone: data.phone || undefined,
        language: data.language,
      });
      toast({ title: t("saveSuccess"), variant: "success" });
      // If language changed, switch locale immediately
      if (data.language !== locale) {
        i18n.changeLanguage(data.language);
      }
    } catch (err) {
      console.error("Failed to update profile:", err);
      toast({ title: t("errors.saveFailed"), variant: "destructive" });
    }
    setIsSaving(false);
  };

  const reminderDebounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(reminderDebounceRef.current), []);
  const handleReminderTimeChange = (newTime: string) => {
    setReminderTime(newTime);
    clearTimeout(reminderDebounceRef.current);
    reminderDebounceRef.current = setTimeout(async () => {
      try {
        // Convert local time to UTC before saving — cron engine runs in UTC
        await updateProfile({ notificationReminderTime: localTimeToUtc(newTime) });
      } catch {
        toast({ title: t("errors.saveFailed"), variant: "destructive" });
      }
    }, 300);
  };

  const calculatePlanDetails = () => {
    if (!profile?.planStartDate || !profile?.planEndDate) {
      return { daysRemaining: 0, progressPercentage: 0, formattedEndDate: "--" };
    }
    const today = new Date();
    const endDate = new Date(profile.planEndDate);
    const startDate = new Date(profile.planStartDate);
    const diffTime = endDate.getTime() - today.getTime();
    const daysRemaining = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const daysPassed = totalDays - daysRemaining;
    const progressPercentage =
      totalDays > 0 ? Math.min(100, Math.max(0, (daysPassed / totalDays) * 100)) : 0;
    const formattedEndDate = formatDate(endDate, locale);
    return { daysRemaining, progressPercentage, formattedEndDate };
  };

  const { daysRemaining, progressPercentage, formattedEndDate } = calculatePlanDetails();

  const handleSignOut = async () => {
    await authClient.signOut();
    navigate({ to: "/login", search: { error: undefined, message: undefined } });
  };

  const handleChangePassword = async () => {
    if (passwordForm.new.length < 8) {
      toast({ title: t("passwordTooShort"), variant: "destructive" });
      return;
    }
    if (passwordForm.new !== passwordForm.confirm) {
      toast({ title: t("passwordMismatch"), variant: "destructive" });
      return;
    }
    setIsChangingPassword(true);
    try {
      await changePasswordAction({
        currentPassword: passwordForm.current,
        newPassword: passwordForm.new,
      });
      toast({ title: t("passwordChanged"), variant: "success" });
      setShowPasswordDialog(false);
      setPasswordForm({ current: "", new: "", confirm: "" });
    } catch (err) {
      const message = err instanceof Error ? err.message : t("errors.saveFailed");
      toast({
        title: message.includes("incorrect") ? t("wrongPassword") : message,
        variant: "destructive",
      });
    } finally {
      setIsChangingPassword(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-5 py-4 lg:px-6 lg:py-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground mt-1 text-sm">{t("subtitle")}</p>
      </div>

      {/* Profile Settings */}
      <SettingsCard
        icon={<User className="text-primary h-4 w-4" />}
        title={t("profile")}
        animationDelay="0ms"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium">{t("email")}</label>
            <input
              type="email"
              value={profile?.email || ""}
              readOnly
              className="border-input text-muted-foreground h-11 w-full cursor-not-allowed rounded-lg border bg-neutral-50 px-3.5 text-sm"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">{t("fullName")}</label>
            <input
              type="text"
              placeholder={t("namePlaceholder")}
              {...register("fullName")}
              className={cn(
                "bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none",
                errors.fullName ? "border-error-500" : "border-input",
              )}
              aria-invalid={errors.fullName ? "true" : "false"}
            />
            {errors.fullName && (
              <p className="text-error-500 mt-1 text-xs" role="alert">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">{t("phone")}</label>
            <input
              type="tel"
              placeholder={t("phonePlaceholder")}
              {...register("phone")}
              className={cn(
                "bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none",
                errors.phone ? "border-error-500" : "border-input",
              )}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p className="text-error-500 mt-1 text-xs" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">{t("language")}</label>
            <select
              {...register("language")}
              className="border-input bg-card focus:ring-ring h-11 w-full cursor-pointer appearance-none rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none"
            >
              <option value="en">English</option>
              <option value="ar">{"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"}</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={isSaving}
            className="bg-primary hover:bg-primary/90 focus-visible:ring-ring w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.97] disabled:opacity-50"
          >
            {isSaving ? tTracking("saving") : t("saveChanges")}
          </button>
        </form>
      </SettingsCard>

      {/* Notifications */}
      <SettingsCard
        icon={<Bell className="text-primary h-4 w-4" />}
        title={t("notifications")}
        animationDelay="50ms"
      >
        <div className="space-y-5 p-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium">{t("reminderTime")}</label>
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => handleReminderTimeChange(e.target.value)}
              className="border-input bg-card focus:ring-ring h-11 rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none"
            />
          </div>
        </div>
      </SettingsCard>

      {/* Account */}
      <SettingsCard
        icon={<Shield className="text-primary h-4 w-4" />}
        title={t("account")}
        animationDelay="100ms"
      >
        <div className="space-y-3 p-4">
          <button
            type="button"
            onClick={() => setShowPasswordDialog(true)}
            className="focus-visible:ring-ring border-border w-full rounded-lg border py-2.5 text-sm font-medium transition-colors hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {t("changePassword")}
          </button>
          <button
            type="button"
            onClick={handleSignOut}
            className="border-error-500/30 bg-error-500/5 text-error-500 hover:bg-error-500/10 focus-visible:ring-error-500/50 flex w-full items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <LogOut className="h-4 w-4" />
            {t("signOut")}
          </button>
        </div>
      </SettingsCard>

      {/* Plan Details */}
      <SettingsCard
        icon={<CreditCard className="text-primary h-4 w-4" />}
        title={t("planDetails")}
        animationDelay="150ms"
      >
        <div className="space-y-4 p-4">
          {profile?.planTier ? (
            <>
              <div className="border-border flex items-center justify-between border-b py-2">
                <span className="text-muted-foreground text-xs">{t("planTier")}</span>
                <span className="text-sm font-semibold">{t(`planTiers.${profile.planTier}`)}</span>
              </div>
              <div className="border-border flex items-center justify-between border-b py-2">
                <span className="text-muted-foreground text-xs">{t("planStart")}</span>
                <span className="text-sm font-semibold">
                  {profile.planStartDate ? formatDate(profile.planStartDate, locale) : "--"}
                </span>
              </div>
              <div className="border-border flex items-center justify-between border-b py-2">
                <span className="text-muted-foreground text-xs">{t("planExpiry")}</span>
                <span className="text-sm font-semibold">{formattedEndDate}</span>
              </div>
              <div className="border-border flex items-center justify-between border-b py-2">
                <span className="text-muted-foreground text-xs">{t("status")}</span>
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                    profile.status === "active"
                      ? "bg-nutrition/10 text-nutrition"
                      : profile.status === "expired"
                        ? "bg-error-500/10 text-error-500"
                        : "bg-amber-500/10 text-amber-600",
                  )}
                >
                  {t(`statuses.${profile.status}`)}
                </span>
              </div>
              <div className="border-border rounded-lg border bg-neutral-50 p-4">
                <p className="text-muted-foreground mb-1 text-xs">{t("daysRemaining")}</p>
                <p className="text-3xl font-bold">{daysRemaining}</p>
                <div
                  className="mt-3 h-2 overflow-hidden rounded-full bg-neutral-200"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <div
                    className="bg-primary h-full rounded-full transition-all"
                    style={{ width: `${progressPercentage.toFixed(1)}%` }}
                  />
                </div>
              </div>
            </>
          ) : (
            <p className="text-muted-foreground py-4 text-center text-sm">{t("noPlan")}</p>
          )}
        </div>
      </SettingsCard>

      {/* My Assessment */}
      <Link
        to="/settings/assessment"
        className="border-border bg-card shadow-card animate-slide-up flex items-center gap-3 overflow-hidden rounded-xl border p-4 transition-colors hover:bg-neutral-50 active:scale-[0.99]"
        style={{ animationDelay: "200ms" }}
      >
        <div className="bg-primary/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
          <ClipboardList className="text-primary h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">{t("assessment.myAssessment")}</p>
          <p className="text-muted-foreground text-xs">{t("assessment.myAssessmentDesc")}</p>
        </div>
        <ChevronRight className="text-muted-foreground h-4 w-4 shrink-0 rtl:rotate-180" />
      </Link>

      {/* Change Password Dialog */}
      {showPasswordDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-card w-full max-w-sm rounded-2xl shadow-xl">
            <div className="border-border flex items-center justify-between border-b p-4">
              <h3 className="text-sm font-semibold">{t("changePassword")}</h3>
              <button
                type="button"
                onClick={() => setShowPasswordDialog(false)}
                aria-label={t("closeDialog")}
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-neutral-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3 p-4">
              <div>
                <label htmlFor="current-password" className="mb-1.5 block text-sm font-medium">
                  {t("currentPassword")}
                </label>
                <input
                  id="current-password"
                  type="password"
                  autoComplete="current-password"
                  value={passwordForm.current}
                  onChange={(e) => setPasswordForm((p) => ({ ...p, current: e.target.value }))}
                  className="border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="new-password" className="mb-1.5 block text-sm font-medium">
                  {t("newPassword")}
                </label>
                <input
                  id="new-password"
                  type="password"
                  autoComplete="new-password"
                  value={passwordForm.new}
                  onChange={(e) => setPasswordForm((p) => ({ ...p, new: e.target.value }))}
                  className="border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="mb-1.5 block text-sm font-medium">
                  {t("confirmNewPassword")}
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  value={passwordForm.confirm}
                  onChange={(e) => setPasswordForm((p) => ({ ...p, confirm: e.target.value }))}
                  className="border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none"
                />
              </div>
              <button
                type="button"
                onClick={handleChangePassword}
                disabled={
                  isChangingPassword ||
                  !passwordForm.current ||
                  !passwordForm.new ||
                  !passwordForm.confirm
                }
                className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-50"
              >
                {isChangingPassword && <Loader2 className="h-4 w-4 animate-spin" />}
                {t("changePassword")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
