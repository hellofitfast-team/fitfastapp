import { useTranslation } from "react-i18next";
import { Stethoscope } from "lucide-react";
import { SectionCard } from "@fitfast/ui/section-card";
import { Textarea } from "@fitfast/ui/textarea";

interface MedicalSectionProps {
  medicalNotes: string;
  setMedicalNotes: (value: string) => void;
  isLoading: boolean;
}

export function MedicalSection({ medicalNotes, setMedicalNotes, isLoading }: MedicalSectionProps) {
  const { t } = useTranslation("translation", { keyPrefix: "onboarding" });

  return (
    <SectionCard
      icon={Stethoscope}
      title={t("assessment.medicalNotesTitle")}
      description={t("assessment.medicalNotesDescription")}
      variant="neutral"
    >
      <Textarea
        placeholder={t("assessment.medicalNotesPlaceholder")}
        value={medicalNotes}
        onChange={(e) => setMedicalNotes(e.target.value)}
        disabled={isLoading}
        className="min-h-[120px]"
      />
    </SectionCard>
  );
}
