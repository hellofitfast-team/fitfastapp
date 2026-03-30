import { useState } from "react";
import { useAction } from "convex/react";
import { api } from "@convex/_generated/api";
import { useTranslation } from "react-i18next";
import { toast } from "@/hooks/use-toast";
import { COPY_NOTIFICATION_TIMEOUT } from "@/lib/constants";
import { UserPlus, Loader2, Copy, Check } from "lucide-react";
import { Button } from "@fitfast/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@fitfast/ui/dialog";

type PlanTier = "monthly" | "quarterly";
type Scenario =
  | "active"
  | "active_with_plans"
  | "active_with_history"
  | "expiring"
  | "expired"
  | "pending";

interface Credentials {
  email: string;
  password: string;
  fullName: string;
  status: string;
}

const SCENARIOS: { value: Scenario; labelKey: string; descKey: string }[] = [
  { value: "active", labelKey: "scenarioActive", descKey: "scenarioActiveDesc" },
  {
    value: "active_with_plans",
    labelKey: "scenarioActiveWithPlans",
    descKey: "scenarioActiveWithPlansDesc",
  },
  {
    value: "active_with_history",
    labelKey: "scenarioActiveWithHistory",
    descKey: "scenarioActiveWithHistoryDesc",
  },
  { value: "expiring", labelKey: "scenarioExpiring", descKey: "scenarioExpiringDesc" },
  { value: "expired", labelKey: "scenarioExpired", descKey: "scenarioExpiredDesc" },
  { value: "pending", labelKey: "scenarioPending", descKey: "scenarioPendingDesc" },
];

export function CreateTestUserButton() {
  const { t, i18n } = useTranslation("translation", { keyPrefix: "admin" });
  const locale = i18n.language;
  const [open, setOpen] = useState(false);
  const [planTier, setPlanTier] = useState<PlanTier>("monthly");
  const [scenario, setScenario] = useState<Scenario>("active");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [credentials, setCredentials] = useState<Credentials | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const createTestUser = useAction(api.testUsers.createTestUser);

  const handleCreate = async () => {
    setIsSubmitting(true);
    try {
      const result = await createTestUser({
        planTier,
        scenario,
        language: locale === "ar" ? "ar" : "en",
      });
      setCredentials(result);
      toast({ title: t("testUserCreated"), variant: "success" });
    } catch (err) {
      console.error("Create test user failed:", err);
      const message = err instanceof Error ? err.message : t("testUserCreationFailed");
      toast({ title: message, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), COPY_NOTIFICATION_TIMEOUT);
    } catch {
      // Clipboard API may fail if page is not focused
    }
  };

  const handleClose = () => {
    setOpen(false);
    // Reset state after dialog animation
    setTimeout(() => {
      setCredentials(null);
      setPlanTier("monthly");
      setScenario("active");
      setCopiedField(null);
    }, 200);
  };

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)} className="gap-1.5">
        <UserPlus className="h-4 w-4" />
        {t("createTestUser")}
      </Button>

      <Dialog
        open={open}
        onOpenChange={(value) => {
          if (!isSubmitting) {
            if (!value) handleClose();
            else setOpen(true);
          }
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{t("createTestUser")}</DialogTitle>
            <DialogDescription>{t("createTestUserDesc")}</DialogDescription>
          </DialogHeader>

          {credentials ? (
            /* ── Success: show credentials ── */
            <div className="space-y-4">
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <p className="mb-3 text-sm font-medium text-emerald-800">
                  {t("testUserCredentials")}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-600">{t("email")}</span>
                    <div className="flex items-center gap-1.5">
                      <code className="rounded bg-white px-2 py-0.5 text-xs text-stone-800">
                        {credentials.email}
                      </code>
                      <button
                        type="button"
                        onClick={() => handleCopy(credentials.email, "email")}
                        className="rounded p-1 text-emerald-600 transition-colors hover:bg-emerald-100"
                      >
                        {copiedField === "email" ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-600">{t("password")}</span>
                    <div className="flex items-center gap-1.5">
                      <code className="rounded bg-white px-2 py-0.5 text-xs text-stone-800">
                        {credentials.password}
                      </code>
                      <button
                        type="button"
                        onClick={() => handleCopy(credentials.password, "password")}
                        className="rounded p-1 text-emerald-600 transition-colors hover:bg-emerald-100"
                      >
                        {copiedField === "password" ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-600">{t("status")}</span>
                    <span className="text-xs font-medium text-stone-800">{credentials.status}</span>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button onClick={handleClose}>{t("done")}</Button>
              </DialogFooter>
            </div>
          ) : (
            /* ── Form: configure test user ── */
            <div className="space-y-5">
              {/* Plan tier */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-stone-500">{t("planTier")}</label>
                <div className="flex gap-2" role="radiogroup">
                  {(["monthly", "quarterly"] as const).map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      role="radio"
                      aria-checked={planTier === tier}
                      aria-label={t(`tierLabels.${tier}`)}
                      onClick={() => setPlanTier(tier)}
                      className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                        planTier === tier
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-stone-200 text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      {t(`tierLabels.${tier}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scenario */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-stone-500">{t("scenario")}</label>
                <div className="space-y-2" role="radiogroup">
                  {SCENARIOS.map(({ value, labelKey, descKey }) => (
                    <button
                      key={value}
                      type="button"
                      role="radio"
                      aria-checked={scenario === value}
                      aria-label={t(labelKey)}
                      onClick={() => setScenario(value)}
                      className={`w-full rounded-lg border px-3 py-2.5 text-start transition-colors ${
                        scenario === value
                          ? "border-primary bg-primary/5"
                          : "border-stone-200 hover:bg-stone-50"
                      }`}
                    >
                      <p
                        className={`text-sm font-medium ${
                          scenario === value ? "text-primary" : "text-stone-800"
                        }`}
                      >
                        {t(labelKey)}
                      </p>
                      <p className="text-xs text-stone-500">{t(descKey)}</p>
                    </button>
                  ))}
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={handleClose} disabled={isSubmitting}>
                  {t("cancel")}
                </Button>
                <Button onClick={handleCreate} disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                  {t("create")}
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
