import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useConvexAuth, useQuery, useMutation } from "convex/react";
import { api } from "@convex/_generated/api";
import { Calendar, DollarSign, Share2, Wallet, Dumbbell, UserPlus } from "lucide-react";
import { MAX_PRICING_PLANS } from "@convex/constants";
import { PlansManager } from "@/components/settings/plans-manager";
import { PaymentMethodsManager } from "@/components/settings/payment-methods-manager";
import { SocialLinksManager } from "@/components/settings/social-links-manager";
import { SaveButton } from "@/components/settings/save-button";
import { NotificationToggle } from "@/components/settings/notification-toggle";
import { InviteCoachDialog } from "@/components/settings/invite-coach-dialog";
import { TeamTable } from "@/components/settings/team-table";

export function AdminSettingsForm() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const tSettings = (key: string) => t(`settings.${key}`);
  const { isAuthenticated } = useConvexAuth();
  const setConfig = useMutation(api.systemConfig.setConfig);

  const checkInConfig = useQuery(
    api.systemConfig.getConfig,
    isAuthenticated
      ? {
          key: "check_in_frequency_days",
        }
      : "skip",
  );

  const workoutDurationConfig = useQuery(
    api.systemConfig.getConfig,
    isAuthenticated ? { key: "workout_plan_duration_days" } : "skip",
  );

  const [checkInDays, setCheckInDays] = useState<string | null>(null);
  const [workoutDuration, setWorkoutDuration] = useState<string | null>(null);

  const effectiveCheckInDays = checkInDays ?? String(checkInConfig?.value ?? "10");
  const effectiveWorkoutDuration = workoutDuration ?? String(workoutDurationConfig?.value ?? "30");

  if (checkInConfig === undefined || workoutDurationConfig === undefined) {
    return null;
  }

  const handleSave = async () => {
    try {
      const clamp = (val: string, min: number, max: number, fallback: number) => {
        const n = Number(val);
        if (isNaN(n)) return fallback;
        return Math.max(min, Math.min(max, Math.round(n)));
      };

      await Promise.all([
        setConfig({
          key: "check_in_frequency_days",
          value: clamp(effectiveCheckInDays, 7, 30, 10),
        }),
        setConfig({
          key: "workout_plan_duration_days",
          value: clamp(effectiveWorkoutDuration, 1, 90, 30),
        }),
      ]);
    } catch (error) {
      console.error("Save error:", error);
      throw error;
    }
  };

  return (
    <div className="max-w-3xl space-y-8">
      {/* ===== General Settings ===== */}
      <div className="space-y-6">
        {/* Check-in frequency */}
        <div className="rounded-xl border border-stone-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <Calendar className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-semibold text-stone-900">{t("checkInFrequency")}</h2>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min="7"
              max="30"
              value={effectiveCheckInDays}
              onChange={(e) => setCheckInDays(e.target.value)}
              className="text-primary focus:ring-primary/20 focus:border-primary h-11 w-24 rounded-xl border border-stone-200 bg-stone-50 px-3 text-center text-lg font-bold transition-all focus:ring-2 focus:outline-none"
            />
            <span className="text-sm text-stone-500">{t("daysBetweenCheckIns")}</span>
          </div>
        </div>

        {/* Workout plan duration */}
        <div className="rounded-xl border border-stone-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <Dumbbell className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-semibold text-stone-900">{t("workoutPlanDuration")}</h2>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min="1"
              max="90"
              value={effectiveWorkoutDuration}
              onChange={(e) => setWorkoutDuration(e.target.value)}
              className="text-primary focus:ring-primary/20 focus:border-primary h-11 w-24 rounded-xl border border-stone-200 bg-stone-50 px-3 text-center text-lg font-bold transition-all focus:ring-2 focus:outline-none"
            />
            <span className="text-sm text-stone-500">{t("daysWorkoutPlan")}</span>
          </div>
        </div>

        {/* Notification toggle */}
        <NotificationToggle />

        {/* Save general settings */}
        <div className="flex justify-end">
          <SaveButton onSave={handleSave} label={t("save")} savingLabel={t("saving")} />
        </div>
      </div>

      {/* ===== Pricing Plans ===== */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <DollarSign className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-stone-900">{tSettings("pricingPlans")}</h2>
            <p className="mt-0.5 text-xs text-stone-400">
              {t("configurePlans", { maxPlans: MAX_PRICING_PLANS })}
            </p>
          </div>
        </div>
        <PlansManager />
      </div>

      {/* ===== Payment Methods ===== */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <Wallet className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-stone-900">{tSettings("paymentMethods")}</h2>
            <p className="mt-0.5 text-xs text-stone-400">{t("configurePayments")}</p>
          </div>
        </div>
        <PaymentMethodsManager />
      </div>

      {/* ===== Social Links ===== */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <Share2 className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-stone-900">{tSettings("socialLinks")}</h2>
            <p className="mt-0.5 text-xs text-stone-400">{tSettings("socialLinksDesc")}</p>
          </div>
        </div>
        <SocialLinksManager />
      </div>

      {/* ===== Team Management ===== */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <UserPlus className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-stone-900">{tSettings("teamManagement")}</h2>
            <p className="mt-0.5 text-xs text-stone-400">{tSettings("teamManagementDesc")}</p>
          </div>
        </div>
        <TeamTable />
        <InviteCoachDialog />
      </div>
    </div>
  );
}
