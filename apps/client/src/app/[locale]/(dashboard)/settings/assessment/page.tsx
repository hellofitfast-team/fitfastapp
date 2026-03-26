"use client";

import { useTranslations } from "next-intl";
import { Link } from "@fitfast/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Skeleton } from "@fitfast/ui/skeleton";
import { useAuth } from "@/hooks/use-auth";
import { GoalsSection } from "./_components/goals-section";
import { EquipmentSection } from "./_components/equipment-section";
import { ScheduleSection } from "./_components/schedule-section";
import { DietarySection } from "./_components/dietary-section";
import { MeasurementsSection } from "./_components/measurements-section";
import { MedicalSection } from "./_components/medical-section";

export default function AssessmentEditPage() {
  const t = useTranslations("settings.assessment");
  const assessment = useQuery(api.assessments.getMyAssessment);
  const { profile } = useAuth();

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
          href="/settings"
          className="text-muted-foreground hover:text-foreground mb-4 inline-flex items-center gap-1.5 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
          {t("backToSettings")}
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
          href="/settings"
          className="text-muted-foreground hover:text-foreground mb-2 inline-flex items-center gap-1.5 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
          {t("backToSettings")}
        </Link>
        <h1 className="text-2xl font-bold">{t("myAssessment")}</h1>
        <p className="text-muted-foreground mt-1 text-xs">{t("planUpdateNote")}</p>
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
