import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Clock, CheckCircle2, Mail, RefreshCw } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { Card, CardContent } from "@fitfast/ui/card";
import { cn } from "@fitfast/ui/cn";
import { RouteErrorComponent } from "@/components/route-error";

export const Route = createFileRoute("/_onboarding/pending")({
  component: PendingPage,
  errorComponent: ({ error, reset }) => <RouteErrorComponent error={error} reset={reset} />,
});

function PendingPage() {
  const { t } = useTranslation("translation", { keyPrefix: "onboarding" });
  const navigate = useNavigate();
  const profile = useQuery(api.profiles.getMyProfile);

  // Real-time auto-redirect — Convex subscription updates profile reactively
  useEffect(() => {
    if (!profile) return;

    if (profile.status === "active") {
      navigate({ to: "/initial-assessment" });
    } else if (profile.status === "inactive" || profile.status === "expired") {
      navigate({ to: "/login", search: { error: "rejected", message: undefined } });
    }
  }, [profile, navigate]);

  // Manual refresh — full reload re-establishes Convex WebSocket connection
  const handleManualRefresh = useCallback(() => {
    window.location.reload();
  }, []);

  const steps = [
    {
      icon: CheckCircle2,
      title: t("pending.stepSignupComplete"),
      description: t("pending.stepSignupCompleteDesc"),
      complete: true,
    },
    {
      icon: Clock,
      title: t("pending.stepUnderReview"),
      description: t("pending.stepUnderReviewDesc"),
      complete: false,
      active: true,
    },
    {
      icon: Mail,
      title: t("pending.stepApprovalNotification"),
      description: t("pending.stepApprovalNotificationDesc"),
      complete: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="py-6 text-center">
        <div className="bg-primary/10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
          <Clock className="text-primary h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{t("pending.title")}</h1>
        <p className="text-muted-foreground mt-2 text-sm">{t("pending.subtitle")}</p>
      </div>

      {/* Progress Steps */}
      <Card>
        <div className="divide-border divide-y">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-4 p-5",
                step.complete && "bg-success-500/5",
                step.active && "bg-primary/5",
              )}
            >
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                  step.complete
                    ? "bg-success-500 text-white"
                    : step.active
                      ? "bg-primary text-white"
                      : "text-muted-foreground bg-neutral-100",
                )}
              >
                <step.icon className="h-5 w-5" />
              </div>
              <div>
                <p
                  className={cn(
                    "font-semibold",
                    !step.complete && !step.active && "text-muted-foreground",
                  )}
                >
                  {step.title}
                </p>
                <p className="text-muted-foreground mt-0.5 text-xs">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Info Box */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-5">
          <p className="text-muted-foreground mb-1 text-xs">{t("pending.infoLabel")}</p>
          <p className="text-sm font-medium">{t("pending.message")}</p>
        </CardContent>
      </Card>

      {/* Current Status */}
      {profile && (
        <Card>
          <CardContent className="flex items-center justify-between gap-4 p-5">
            <div>
              <p className="text-muted-foreground mb-1.5 text-xs">{t("pending.currentStatus")}</p>
              <span className="bg-primary/10 text-primary inline-flex items-center rounded-full px-3 py-1 text-sm font-medium">
                {t(`pending.statuses.${profile.status}`)}
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Check status button */}
      <button
        type="button"
        onClick={handleManualRefresh}
        className="border-border hover:bg-muted flex w-full items-center justify-center gap-2 rounded-xl border bg-neutral-50 p-4 text-sm font-medium transition-colors"
      >
        <RefreshCw className="h-4 w-4" />
        {t("pending.checkStatus")}
      </button>

      {/* Approval time notice */}
      <div className="border-border rounded-xl border bg-neutral-50 p-6 text-center">
        <p className="text-muted-foreground text-xs">{t("pending.approvalTime")}</p>
      </div>
    </div>
  );
}
