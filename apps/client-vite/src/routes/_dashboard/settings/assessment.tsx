import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { Skeleton } from "@fitfast/ui/skeleton";
import { GoalsSection } from "@/components/settings-assessment/goals-section";
import { EquipmentSection } from "@/components/settings-assessment/equipment-section";
import { ScheduleSection } from "@/components/settings-assessment/schedule-section";
import { DietarySection } from "@/components/settings-assessment/dietary-section";
import { MeasurementsSection } from "@/components/settings-assessment/measurements-section";
import { MedicalSection } from "@/components/settings-assessment/medical-section";

export const Route = createFileRoute("/_dashboard/settings/assessment")({
  component: AssessmentEditPage,
});

function AssessmentEditPage() {
  const { t } = useTranslation("translation", { keyPrefix: "settings" });
  const assessment = useQuery(api.assessments.getMyAssessment);
  const profile = useQuery(api.profiles.getMyProfile);

  if (assessment === undefined) {
    return (
      <div className="mx-auto max-w-2xl space-y-5 py-4 lg:px-6 lg:py-6">
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-9 rounded-lg" />
          <Skeleton className="h-7 w-48" />
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (!assessment) {
    return (
      <div className="mx-auto max-w-2xl py-4 lg:px-6 lg:py-6">
        <Link
          to="/settings"
          className="text-muted-foreground hover:text-foreground mb-4 inline-flex items-center gap-1.5 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
          {t("assessment.backToSettings")}
        </Link>
        <p className="text-muted-foreground py-12 text-center text-sm">
          No assessment found. Please complete your initial assessment first.
        </p>
      </div>
    );
  }

  const gender = assessment.gender as string | undefined;

  return (
    <div className="mx-auto max-w-2xl space-y-5 py-4 lg:px-6 lg:py-6">
      {/* Header */}
      <div>
        <Link
          to="/settings"
          className="text-muted-foreground hover:text-foreground mb-2 inline-flex items-center gap-1.5 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
          {t("assessment.backToSettings")}
        </Link>
        <h1 className="text-2xl font-bold">{t("assessment.myAssessment")}</h1>
        <p className="text-muted-foreground mt-1 text-xs">{t("assessment.planUpdateNote")}</p>
      </div>

      <GoalsSection assessment={assessment} />
      <EquipmentSection assessment={assessment} />
      <ScheduleSection assessment={assessment} />
      <DietarySection assessment={assessment} />
      <MeasurementsSection assessment={assessment} />
      {gender === "female" && <MedicalSection assessment={assessment} />}
    </div>
  );
}
