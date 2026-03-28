import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@fitfast/ui/button";
import { AssessmentProgress } from "@/components/assessment/assessment-progress";
import { GoalsSection } from "@/components/assessment/goals-section";
import { BasicInfoSection } from "@/components/assessment/basic-info-section";
import { ScheduleSection } from "@/components/assessment/schedule-section";
import { getDayLimits } from "@/components/assessment/constants";
import { DietarySection } from "@/components/assessment/dietary-section";
import { MedicalSection } from "@/components/assessment/medical-section";
import { MeasurementsSection } from "@/components/assessment/measurements-section";
import {
  FemaleHealthSection,
  type FemaleHealthData,
} from "@/components/assessment/female-health-section";

export const Route = createFileRoute("/_onboarding/initial-assessment")({
  component: InitialAssessmentPage,
});

const TOTAL_STEPS = 6;

function InitialAssessmentPage() {
  const { t, i18n } = useTranslation("translation", { keyPrefix: "onboarding" });
  const { t: tCommon } = useTranslation("translation", { keyPrefix: "common" });
  const { t: tErrors } = useTranslation("translation", { keyPrefix: "errors" });
  const locale = i18n.language;
  const navigate = useNavigate();
  const profile = useQuery(api.profiles.getMyProfile);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const submitAssessment = useMutation(api.assessments.submitAssessment);
  const updateProfile = useMutation(api.profiles.updateProfile);
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);

  // Step labels from translations
  const STEP_LABELS = [
    t("assessment.steps.goals"),
    t("assessment.steps.bodyInfo"),
    t("assessment.steps.schedule"),
    t("assessment.steps.diet"),
    t("assessment.steps.measurements"),
    t("assessment.steps.medical"),
  ];

  // Form state
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [secondaryFocuses, setSecondaryFocuses] = useState<string[]>([]);
  const [currentWeight, setCurrentWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [sessionDuration, setSessionDuration] = useState("");
  const [trainingTime, setTrainingTime] = useState("");
  const [mealsPerDay, setMealsPerDay] = useState("");
  const [selectedFoodPrefs, setSelectedFoodPrefs] = useState<string[]>([]);
  const [foodPrefsOther, setFoodPrefsOther] = useState("");
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [allergiesOther, setAllergiesOther] = useState("");
  const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>([]);
  const [restrictionsOther, setRestrictionsOther] = useState("");
  const [equipment, setEquipment] = useState("");
  const [measurementMethod, setMeasurementMethod] = useState<"manual" | "inbody">("manual");
  const [chest, setChest] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [arms, setArms] = useState("");
  const [thighs, setThighs] = useState("");
  const [inBodyFile, setInBodyFile] = useState<File | null>(null);
  const [medicalNotes, setMedicalNotes] = useState("");
  const [femaleHealth, setFemaleHealth] = useState<FemaleHealthData>({});

  const getFinalValues = (selected: string[], otherValue: string) => {
    const values = selected.filter((s) => s !== "other" && s !== "none");
    if (selected.includes("other") && otherValue.trim()) {
      values.push(otherValue.trim());
    }
    return values;
  };

  // Per-step validation
  const validateStep = (step: number): string | null => {
    switch (step) {
      case 1: {
        if (!primaryGoal) return tErrors("goalRequired");
        return null;
      }
      case 2: {
        if (!currentWeight || !height) return tErrors("weightHeightRequired");
        if (!age || !gender) return tErrors("ageGenderRequired");
        // Range validation for anthropometric data
        const w = parseFloat(String(currentWeight));
        const h = parseFloat(String(height));
        const a = parseFloat(String(age));
        if (isNaN(w) || w < 30 || w > 300) return tErrors("weightOutOfRange");
        if (isNaN(h) || h < 100 || h > 250) return tErrors("heightOutOfRange");
        if (isNaN(a) || a < 13 || a > 120) return tErrors("ageOutOfRange");
        if (!activityLevel) return tErrors("activityLevelRequired");
        if (!experienceLevel) return tErrors("experienceLevelRequired");
        if (!equipment) return tErrors("equipmentRequired");
        return null;
      }
      case 3: {
        const limits = getDayLimits(primaryGoal, experienceLevel);
        if (selectedDays.length < limits.min) return tErrors("workoutDaysMin", { min: limits.min });
        if (!sessionDuration) return tErrors("sessionDurationRequired");
        return null;
      }
      case 4:
        return null; // Dietary is optional
      case 5: {
        // Measurements: InBody requires file, manual is optional
        if (measurementMethod === "inbody" && !inBodyFile) {
          return tErrors("inBodyFileRequired");
        }
        return null;
      }
      case 6:
        return null; // Medical is optional
      default:
        return null;
    }
  };

  // Guard: block form submission for a short window after advancing to the last step.
  const justAdvancedToFinal = useRef(false);

  // Step navigation
  const handleNext = () => {
    const validationError = validateStep(currentStep);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    if (currentStep < TOTAL_STEPS) {
      if (currentStep + 1 === TOTAL_STEPS) {
        justAdvancedToFinal.current = true;
        setTimeout(() => {
          justAdvancedToFinal.current = false;
        }, 300);
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setError(null);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Guard: only allow submission from the final step.
    if (currentStep < TOTAL_STEPS) {
      return;
    }

    // Guard: block submission from click propagation
    if (justAdvancedToFinal.current) {
      return;
    }

    // Final validation for the last step (all steps should already be validated)
    for (let step = 1; step <= TOTAL_STEPS; step++) {
      const validationError = validateStep(step);
      if (validationError) {
        setCurrentStep(step);
        setError(validationError);
        return;
      }
    }

    if (!profile) {
      setError(tErrors("signInRequired"));
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const finalGoals = [primaryGoal, ...secondaryFocuses];
      const finalFoodPrefs = getFinalValues(selectedFoodPrefs, foodPrefsOther);
      const finalAllergies = getFinalValues(selectedAllergies, allergiesOther);
      const finalRestrictions = getFinalValues(selectedRestrictions, restrictionsOther);
      const finalEquipment = equipment;

      const language = (locale === "ar" ? "ar" : "en") as "en" | "ar";

      // Upload InBody file to storage if present
      let inBodyStorageId: Id<"_storage"> | undefined;
      if (measurementMethod === "inbody" && inBodyFile) {
        const uploadUrl = await generateUploadUrl({});
        const result = await fetch(uploadUrl, {
          method: "POST",
          headers: { "Content-Type": inBodyFile.type },
          body: inBodyFile,
        });
        if (!result.ok) throw new Error(`Failed to upload InBody file (${result.status})`);
        const json = await result.json().catch(() => null);
        if (!json?.storageId) throw new Error("Upload succeeded but no storageId returned");
        inBodyStorageId = json.storageId as Id<"_storage">;
      }

      // Build measurements from manual input
      const measurements =
        measurementMethod === "manual"
          ? {
              chest: chest ? parseFloat(chest) : undefined,
              waist: waist ? parseFloat(waist) : undefined,
              hips: hips ? parseFloat(hips) : undefined,
              arms: arms ? parseFloat(arms) : undefined,
              thighs: thighs ? parseFloat(thighs) : undefined,
            }
          : {};

      await submitAssessment({
        goals: finalGoals.join(", "),
        currentWeight: parseFloat(currentWeight),
        height: parseFloat(height),
        age: parseInt(age),
        gender: gender as "male" | "female",
        activityLevel: activityLevel
          ? (activityLevel as "sedentary" | "lightly_active" | "moderately_active" | "very_active")
          : undefined,
        experienceLevel: experienceLevel as "beginner" | "intermediate" | "advanced",
        scheduleAvailability: {
          days: selectedDays,
          sessionDuration: sessionDuration ? parseInt(sessionDuration) : undefined,
          preferredTime: trainingTime || undefined,
        },
        foodPreferences: finalFoodPrefs.length > 0 ? finalFoodPrefs : undefined,
        allergies: finalAllergies.length > 0 ? finalAllergies : undefined,
        dietaryRestrictions: finalRestrictions.length > 0 ? finalRestrictions : undefined,
        medicalConditions: medicalNotes ? [medicalNotes] : undefined,
        exerciseHistory: finalEquipment,
        measurements,
        measurementMethod,
        inBodyStorageId,
        femaleHealth:
          gender === "female" && Object.keys(femaleHealth).length > 0 ? femaleHealth : undefined,
        lifestyleHabits: {
          equipment: finalEquipment,
          mealsPerDay: mealsPerDay ? parseInt(mealsPerDay) : undefined,
        },
        // Schedule server-side plan generation (survives client navigation)
        generatePlans: { language },
      });

      // Update profile status to active
      try {
        await updateProfile({});
      } catch (updateError) {
        console.error("Error updating profile:", updateError);
      }

      // Navigate immediately — plans generate server-side via scheduler
      navigate({ to: "/" });
    } catch (err) {
      console.error("Assessment error:", err);
      setError(tErrors("unexpectedError"));
    } finally {
      setIsLoading(false);
    }
  };

  if (profile === undefined) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="text-primary h-8 w-8 animate-spin" />
          <p className="text-muted-foreground text-sm">{tCommon("loading")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-3xl space-y-6 pb-12">
      {/* Full-screen generating overlay */}
      {isLoading && (
        <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 px-6 text-center">
            <div className="relative">
              <div className="border-primary/20 h-16 w-16 rounded-full border-4" />
              <div className="border-primary absolute inset-0 h-16 w-16 animate-spin rounded-full border-4 border-t-transparent" />
            </div>
            <div className="space-y-1.5">
              <p className="text-lg font-semibold">{t("assessment.submitting")}</p>
              <p className="text-muted-foreground max-w-xs text-sm">
                {t("assessment.generatingDescription")}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">{t("assessment.title")}</h1>
        <p className="text-muted-foreground mt-2 text-sm">{t("assessment.subtitle")}</p>
      </div>

      {/* Progress Bar */}
      <AssessmentProgress
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        stepLabels={STEP_LABELS}
      />

      <form onSubmit={onSubmit} className="space-y-6">
        {error && (
          <div className="border-error-500/30 bg-error-500/10 rounded-lg border p-4">
            <p className="text-error-500 text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Step content */}
        <div className="touch-pan-y">
          {currentStep === 1 && (
            <div style={{ animation: "fadeIn 0.2s ease-out" }}>
              <GoalsSection
                primaryGoal={primaryGoal}
                setPrimaryGoal={setPrimaryGoal}
                secondaryFocuses={secondaryFocuses}
                setSecondaryFocuses={setSecondaryFocuses}
                isLoading={isLoading}
              />
            </div>
          )}
          {currentStep === 2 && (
            <div style={{ animation: "fadeIn 0.2s ease-out" }}>
              <BasicInfoSection
                currentWeight={currentWeight}
                setCurrentWeight={setCurrentWeight}
                height={height}
                setHeight={setHeight}
                age={age}
                setAge={setAge}
                gender={gender}
                setGender={(g: string) => {
                  setGender(g);
                  if (g !== "female") setFemaleHealth({});
                }}
                activityLevel={activityLevel}
                setActivityLevel={setActivityLevel}
                experienceLevel={experienceLevel}
                setExperienceLevel={setExperienceLevel}
                equipment={equipment}
                setEquipment={setEquipment}
                isLoading={isLoading}
              />
            </div>
          )}
          {currentStep === 3 && (
            <div style={{ animation: "fadeIn 0.2s ease-out" }}>
              <ScheduleSection
                selectedDays={selectedDays}
                setSelectedDays={setSelectedDays}
                sessionDuration={sessionDuration}
                setSessionDuration={setSessionDuration}
                trainingTime={trainingTime}
                setTrainingTime={setTrainingTime}
                primaryGoal={primaryGoal}
                experienceLevel={experienceLevel}
                isLoading={isLoading}
              />
            </div>
          )}
          {currentStep === 4 && (
            <div style={{ animation: "fadeIn 0.2s ease-out" }}>
              <DietarySection
                selectedFoodPrefs={selectedFoodPrefs}
                setSelectedFoodPrefs={setSelectedFoodPrefs}
                foodPrefsOther={foodPrefsOther}
                setFoodPrefsOther={setFoodPrefsOther}
                mealsPerDay={mealsPerDay}
                setMealsPerDay={setMealsPerDay}
                selectedAllergies={selectedAllergies}
                setSelectedAllergies={setSelectedAllergies}
                allergiesOther={allergiesOther}
                setAllergiesOther={setAllergiesOther}
                selectedRestrictions={selectedRestrictions}
                setSelectedRestrictions={setSelectedRestrictions}
                restrictionsOther={restrictionsOther}
                setRestrictionsOther={setRestrictionsOther}
                isLoading={isLoading}
              />
            </div>
          )}
          {currentStep === 5 && (
            <div style={{ animation: "fadeIn 0.2s ease-out" }}>
              <MeasurementsSection
                measurementMethod={measurementMethod}
                setMeasurementMethod={setMeasurementMethod}
                chest={chest}
                setChest={setChest}
                waist={waist}
                setWaist={setWaist}
                hips={hips}
                setHips={setHips}
                arms={arms}
                setArms={setArms}
                thighs={thighs}
                setThighs={setThighs}
                inBodyFile={inBodyFile}
                onInBodyFileChange={setInBodyFile}
                isLoading={isLoading}
              />
            </div>
          )}
          {currentStep === 6 && (
            <div className="space-y-4" style={{ animation: "fadeIn 0.2s ease-out" }}>
              {gender === "female" && (
                <FemaleHealthSection
                  data={femaleHealth}
                  onChange={setFemaleHealth}
                  isLoading={isLoading}
                />
              )}
              <MedicalSection
                medicalNotes={medicalNotes}
                setMedicalNotes={setMedicalNotes}
                isLoading={isLoading}
              />
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1 || isLoading}
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {tCommon("back")}
          </Button>

          {currentStep < TOTAL_STEPS ? (
            <Button type="button" variant="gradient" onClick={handleNext} disabled={isLoading}>
              {tCommon("next")}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              disabled={isLoading}
              loading={isLoading}
            >
              {t(isLoading ? "assessment.submitting" : "assessment.completeAssessment")}
              {!isLoading && <ArrowRight className="h-5 w-5 rtl:rotate-180" />}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
