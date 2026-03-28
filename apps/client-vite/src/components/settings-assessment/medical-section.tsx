import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Heart, Loader2, AlertTriangle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@convex/_generated/api";
import { cn } from "@fitfast/ui/cn";
import { toast } from "@fitfast/ui/use-toast";

// Keys must match both the assessment DB values AND the i18n keys under femaleHealth
const MENSTRUAL_OPTIONS = [
  { value: "regular", key: "regular" },
  { value: "irregular", key: "irregular" },
  { value: "amenorrhea", key: "amenorrhea" },
  { value: "postmenopausal", key: "postmenopausal" },
  { value: "prefer_not_say", key: "preferNotSay" },
] as const;

export function MedicalSection({ assessment }: { assessment: any }) {
  const { t } = useTranslation("translation", { keyPrefix: "settings" });
  const { t: tMedical } = useTranslation("translation", { keyPrefix: "onboarding" });
  const submitAssessment = useMutation(api.assessments.submitAssessment);

  const fh = assessment.femaleHealth as any;
  const [menstrualStatus, setMenstrualStatus] = useState(fh?.menstrualStatus ?? "");
  const [isPregnant, setIsPregnant] = useState(fh?.isPregnant ?? false);
  const [isBreastfeeding, setIsBreastfeeding] = useState(fh?.isBreastfeeding ?? false);
  const [hormonalMedication, setHormonalMedication] = useState(fh?.hormonalMedication ?? "");
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const hasChanges =
    menstrualStatus !== (fh?.menstrualStatus ?? "") ||
    isPregnant !== (fh?.isPregnant ?? false) ||
    isBreastfeeding !== (fh?.isBreastfeeding ?? false) ||
    hormonalMedication !== (fh?.hormonalMedication ?? "");

  const doSave = async () => {
    setShowConfirm(false);
    setIsSaving(true);
    try {
      await submitAssessment({
        femaleHealth: {
          menstrualStatus: menstrualStatus || undefined,
          isPregnant,
          isBreastfeeding,
          hormonalMedication: hormonalMedication || undefined,
        },
      });
      toast({ title: t("assessment.saved"), variant: "success" });
    } catch {
      toast({ title: t("assessment.noChanges"), variant: "destructive" });
    }
    setIsSaving(false);
  };

  const handleSave = () => {
    if (!hasChanges) return;
    setShowConfirm(true);
  };

  const inputClass =
    "border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm focus:ring-2 focus:outline-none";

  return (
    <>
      <div className="border-border bg-card overflow-hidden rounded-xl border">
        <div className="border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4">
          <Heart className="text-primary h-4 w-4" />
          <h3 className="text-sm font-semibold">{t("assessment.medicalTitle")}</h3>
        </div>
        <div className="space-y-4 p-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium">
              {t("assessment.menstrualStatus")}
            </label>
            <select
              value={menstrualStatus}
              onChange={(e) => setMenstrualStatus(e.target.value)}
              className={inputClass}
            >
              <option value="">--</option>
              {MENSTRUAL_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {tMedical(`assessment.femaleHealth.${opt.key}`)}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">{t("assessment.pregnancy")}</label>
            <button
              type="button"
              onClick={() => setIsPregnant(!isPregnant)}
              className={cn(
                "relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200",
                isPregnant ? "bg-primary" : "bg-neutral-200",
              )}
              role="switch"
              aria-checked={isPregnant}
            >
              <span
                className={cn(
                  "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-200",
                  isPregnant
                    ? "translate-x-5 rtl:-translate-x-5"
                    : "translate-x-0.5 rtl:-translate-x-0.5",
                )}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">{t("assessment.breastfeeding")}</label>
            <button
              type="button"
              onClick={() => setIsBreastfeeding(!isBreastfeeding)}
              className={cn(
                "relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200",
                isBreastfeeding ? "bg-primary" : "bg-neutral-200",
              )}
              role="switch"
              aria-checked={isBreastfeeding}
            >
              <span
                className={cn(
                  "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-200",
                  isBreastfeeding
                    ? "translate-x-5 rtl:-translate-x-5"
                    : "translate-x-0.5 rtl:-translate-x-0.5",
                )}
              />
            </button>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium">
              {t("assessment.hormonalMedication")}
            </label>
            <input
              type="text"
              value={hormonalMedication}
              onChange={(e) => setHormonalMedication(e.target.value)}
              className={inputClass}
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            disabled={!hasChanges || isSaving}
            className="bg-primary hover:bg-primary/90 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-50"
          >
            {isSaving ? (
              <Loader2 className="mx-auto h-4 w-4 animate-spin" />
            ) : (
              t(hasChanges ? "assessment.save" : "assessment.noChanges")
            )}
          </button>
        </div>
      </div>

      {/* Safety confirmation dialog */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-card w-full max-w-sm rounded-2xl shadow-xl">
            <div className="space-y-3 p-5">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <h3 className="text-sm font-semibold">{t("assessment.safetyWarning")}</h3>
              </div>
              <p className="text-muted-foreground text-xs">{t("assessment.safetyWarningDesc")}</p>
              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowConfirm(false)}
                  className="border-border flex-1 rounded-lg border py-2.5 text-sm font-medium transition-colors hover:bg-neutral-50"
                >
                  {t("assessment.cancel")}
                </button>
                <button
                  type="button"
                  onClick={doSave}
                  className="bg-primary hover:bg-primary/90 flex-1 rounded-lg py-2.5 text-sm font-semibold text-white transition-all"
                >
                  {t("assessment.confirm")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
