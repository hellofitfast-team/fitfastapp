import { useState, useEffect, useCallback, useRef } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useSwipeable } from "react-swipeable";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { useAuth } from "@/lib/auth-context";
import { useCheckInLock } from "@/hooks/use-check-in-lock";
import { toast } from "@fitfast/ui/use-toast";
import { Weight, Dumbbell, UtensilsCrossed, Camera, ClipboardCheck, Loader2 } from "lucide-react";
import * as Sentry from "@sentry/react";
import { MAX_UPLOAD_SIZE_BYTES, MAX_UPLOAD_SIZE_MB } from "@/lib/constants";
import { RouteErrorComponent } from "@/components/route-error";
import {
  createCheckInSchema,
  type CheckInFormData,
  type ProgressPhotos,
} from "@/components/check-in/types";

import { CheckInLocked } from "@/components/check-in/check-in-locked";
import { StepProgress } from "@/components/check-in/step-progress";
import { WeightStep } from "@/components/check-in/weight-step";
import { FitnessStep } from "@/components/check-in/fitness-step";
import { DietaryStep } from "@/components/check-in/dietary-step";
import { PhotosStep } from "@/components/check-in/photos-step";
import { ReviewStep } from "@/components/check-in/review-step";
import { StepNavigation } from "@/components/check-in/step-navigation";

export const Route = createFileRoute("/_dashboard/check-in")({
  component: CheckInPage,
  errorComponent: ({ error, reset }) => <RouteErrorComponent error={error} reset={reset} />,
});

const STEP_ICONS = [Weight, Dumbbell, UtensilsCrossed, Camera, ClipboardCheck];

function CheckInPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const isRTL = locale === "ar";
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const assessment = useQuery(api.assessments.getMyAssessment);
  const isFemale = assessment?.gender === "female";

  const checkInSchema = createCheckInSchema((key) => t(key));

  const startCheckInWorkflow = useMutation(api.checkIns.startCheckInWorkflow);
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);

  // Build steps with translations
  const STEPS = [
    { id: 1, name: t("checkIn.steps.weight"), icon: STEP_ICONS[0] },
    { id: 2, name: t("checkIn.steps.fitness"), icon: STEP_ICONS[1] },
    { id: 3, name: t("checkIn.steps.dietary"), icon: STEP_ICONS[2] },
    { id: 4, name: t("checkIn.steps.photos"), icon: STEP_ICONS[3] },
    { id: 5, name: t("checkIn.steps.review"), icon: STEP_ICONS[4] },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progressPhotos, setProgressPhotos] = useState<ProgressPhotos>({
    front: null,
    back: null,
    side: null,
  });
  const [inBodyFile, setInBodyFile] = useState<File | null>(null);

  // Use the extracted hook for lock status
  const {
    isLocked: isCheckInLocked,
    nextCheckInDate,
    daysUntilNextCheckIn,
    frequencyDays,
    isLoadingLockStatus,
  } = useCheckInLock();

  const methods = useForm<CheckInFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- zodResolver type inference gap with react-hook-form v7
    resolver: zodResolver(checkInSchema) as any,
    defaultValues: {
      energyLevel: 5,
      sleepQuality: 5,
      dietaryAdherence: 5,
      measurementMethod: "manual" as const,
    },
  });

  // Pre-fill weight from last check-in
  const latestCheckIn = useQuery(api.checkIns.getLatestCheckIn);

  useEffect(() => {
    if (latestCheckIn?.weight && !methods.getValues("weight")) {
      methods.setValue("weight", latestCheckIn.weight);
    }
  }, [latestCheckIn, methods]);

  const validateFile = (file: File): boolean => {
    const isImage = file.type.startsWith("image/");
    const isUnderSizeLimit = file.size <= MAX_UPLOAD_SIZE_BYTES;
    if (!isImage || !isUnderSizeLimit) {
      toast({
        title: t("checkIn.invalidFile"),
        description: t("checkIn.invalidFileDescription", { maxFileMB: MAX_UPLOAD_SIZE_MB }),
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleProgressPhoto = (position: keyof ProgressPhotos, file: File | null) => {
    if (file && !validateFile(file)) return;
    setProgressPhotos((prev) => ({ ...prev, [position]: file }));
  };

  const handleInBodyFile = (file: File | null) => {
    if (file && !validateFile(file)) return;
    setInBodyFile(file);
  };

  const uploadFileToStorage = async (
    file: File,
    purpose?: "progress_photo" | "ticket_screenshot",
  ): Promise<Id<"_storage">> => {
    const uploadUrl = await generateUploadUrl({ purpose });
    const result = await fetch(uploadUrl, {
      method: "POST",
      headers: { "Content-Type": file.type },
      body: file,
      signal: AbortSignal.timeout(30_000),
    });
    if (!result.ok) throw new Error(`Upload failed: ${result.status}`);
    const json = await result.json();
    if (!json.storageId) throw new Error("Upload succeeded but no storageId returned");
    return json.storageId as Id<"_storage">;
  };

  const validateStep = async (step: number): Promise<boolean> => {
    let fields: (keyof CheckInFormData)[] = [];
    switch (step) {
      case 1: {
        fields = ["weight"];
        const isValid = await methods.trigger(fields);
        if (!isValid) return false;

        const method = methods.getValues("measurementMethod");

        if (method === "inbody") {
          if (!inBodyFile) {
            toast({
              title: t("checkIn.invalidFile"),
              description: t("checkIn.inBodyRequired"),
              variant: "destructive",
            });
            return false;
          }
        } else {
          // Manual method: require at least one non-zero body measurement
          const { chest, waist, hips, arms, thighs } = methods.getValues();
          const hasAnyMeasurement = [chest, waist, hips, arms, thighs].some(
            (v) => v !== undefined && v > 0,
          );
          if (!hasAnyMeasurement) {
            toast({
              title: t("checkIn.measurementsRequired"),
              description: t("checkIn.measurementsRequiredDescription"),
              variant: "destructive",
            });
            return false;
          }
        }

        return true;
      }
      case 2:
        fields = ["workoutPerformance", "energyLevel", "sleepQuality"];
        break;
      case 3:
        fields = ["dietaryAdherence"];
        break;
      case 4:
        return true;
      default:
        return true;
    }
    return await methods.trigger(fields);
  };

  const handleNext = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < STEPS.length) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Swipe support: In LTR, swipe left = next, swipe right = back
  // In RTL (Arabic), directions are inverted: swipe right = next, swipe left = back
  const validateStepRef = useRef(validateStep);
  validateStepRef.current = validateStep;

  const handleSwipeNext = useCallback(async () => {
    if (currentStep === 4) return; // Disable swipe on photos step to avoid drag/drop conflicts
    const isValid = await validateStepRef.current(currentStep);
    if (isValid && currentStep < STEPS.length) setCurrentStep((s) => s + 1);
  }, [currentStep, STEPS.length]);

  const handleSwipeBack = useCallback(() => {
    if (currentStep === 4) return; // Disable swipe on photos step to avoid drag/drop conflicts
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  }, [currentStep]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (isRTL) {
        handleSwipeBack();
      } else {
        handleSwipeNext();
      }
    },
    onSwipedRight: () => {
      if (isRTL) {
        handleSwipeNext();
      } else {
        handleSwipeBack();
      }
    },
    trackMouse: false,
    trackTouch: true,
    preventScrollOnSwipe: false,
    delta: 50,
  });

  // Prevent form submission on Enter key (only submit on explicit button click)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentStep < STEPS.length) {
      e.preventDefault();
    }
  };

  const onSubmit = async (data: CheckInFormData) => {
    if (!isAuthenticated) {
      toast({
        title: t("checkIn.authRequired"),
        description: t("checkIn.authRequiredDescription"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Upload progress photos
      const photoUploads: {
        progressPhotoFront?: Id<"_storage">;
        progressPhotoBack?: Id<"_storage">;
        progressPhotoSide?: Id<"_storage">;
      } = {};
      if (progressPhotos.front) {
        photoUploads.progressPhotoFront = await uploadFileToStorage(
          progressPhotos.front,
          "progress_photo",
        );
      }
      if (progressPhotos.back) {
        photoUploads.progressPhotoBack = await uploadFileToStorage(
          progressPhotos.back,
          "progress_photo",
        );
      }
      if (progressPhotos.side) {
        photoUploads.progressPhotoSide = await uploadFileToStorage(
          progressPhotos.side,
          "progress_photo",
        );
      }

      // Upload InBody file if applicable
      let inBodyStorageId: Id<"_storage"> | undefined;
      if (data.measurementMethod === "inbody" && inBodyFile) {
        inBodyStorageId = await uploadFileToStorage(inBodyFile);
      }

      const measurements =
        data.measurementMethod === "manual"
          ? {
              chest: data.chest || undefined,
              waist: data.waist || undefined,
              hips: data.hips || undefined,
              arms: data.arms || undefined,
              thighs: data.thighs || undefined,
            }
          : undefined;

      const language = (locale === "ar" ? "ar" : "en") as "en" | "ar";

      await startCheckInWorkflow({
        weight: data.weight,
        measurementMethod: data.measurementMethod,
        measurements,
        inBodyStorageId,
        workoutPerformance: data.workoutPerformance,
        energyLevel: data.energyLevel,
        sleepQuality: data.sleepQuality,
        dietaryAdherence: data.dietaryAdherence,
        newInjuries: data.newInjuries || undefined,
        ...photoUploads,
        notes: [data.dietNotes, data.notes].filter(Boolean).join("\n\n") || undefined,
        cyclePhase: data.cyclePhase || undefined,
        language,
        planDuration: frequencyDays,
      });

      toast({
        title: t("checkIn.checkInSuccess"),
        description: t("checkIn.plansGenerateInBackground"),
      });

      navigate({ to: "/" });
    } catch (error) {
      Sentry.captureException(error, {
        tags: { feature: "check-in-submission" },
      });
      toast({
        title: t("checkIn.submissionFailed"),
        description: error instanceof Error ? error.message : t("checkIn.tryAgain"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-5 px-4 py-6 pb-8">
      {/* Submission Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-card mx-4 rounded-2xl p-8 text-center shadow-xl">
            <Loader2 className="text-primary mx-auto mb-4 h-10 w-10 animate-spin" />
            <p className="text-lg font-bold">{t("checkIn.submitting")}</p>
            <p className="text-muted-foreground mt-2 text-sm">
              {t("checkIn.plansGenerateInBackground")}
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">{t("checkIn.title")}</h1>
        <p className="text-muted-foreground mt-1 text-sm">{t("checkIn.subtitle")}</p>
      </div>

      {/* Check-in Locked Notice */}
      {isLoadingLockStatus ? (
        <div className="border-border bg-card rounded-xl border p-12 text-center">
          <Loader2 className="text-muted-foreground mx-auto mb-4 h-10 w-10 animate-spin" />
          <p className="text-muted-foreground text-sm font-semibold">{t("common.loading")}</p>
        </div>
      ) : isCheckInLocked && nextCheckInDate ? (
        <CheckInLocked
          nextCheckInDate={nextCheckInDate}
          daysUntilNextCheckIn={daysUntilNextCheckIn}
          frequencyDays={frequencyDays}
        />
      ) : null}

      {/* Show form only if NOT locked */}
      {!isLoadingLockStatus && !isCheckInLocked && (
        <>
          {/* Progress Steps */}
          <StepProgress currentStep={currentStep} steps={STEPS} />

          {/* Screen reader announcement for current step */}
          <div className="sr-only" aria-live="polite" role="status">
            {t("checkIn.stepOf", { current: currentStep, total: STEPS.length })}
          </div>

          {/* Form with FormProvider -- swipe to navigate steps */}
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              onKeyDown={handleKeyDown}
              className="space-y-5"
            >
              {/* Swipeable step content */}
              <div {...swipeHandlers} className="touch-pan-y">
                <div key={currentStep} className="motion-safe:animate-fade-in">
                  {/* Step 1: Weight & Measurements */}
                  {currentStep === 1 && (
                    <WeightStep inBodyFile={inBodyFile} onInBodyFileChange={handleInBodyFile} />
                  )}

                  {/* Step 2: Fitness Metrics */}
                  {currentStep === 2 && <FitnessStep isFemale={isFemale} />}

                  {/* Step 3: Dietary Adherence */}
                  {currentStep === 3 && <DietaryStep />}

                  {/* Step 4: Progress Photos */}
                  {currentStep === 4 && (
                    <PhotosStep
                      progressPhotos={progressPhotos}
                      onPhotoChange={handleProgressPhoto}
                    />
                  )}

                  {/* Step 5: Review & Submit */}
                  {currentStep === 5 && (
                    <ReviewStep progressPhotos={progressPhotos} inBodyFile={inBodyFile} />
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <StepNavigation
                currentStep={currentStep}
                totalSteps={STEPS.length}
                isSubmitting={isSubmitting}
                onBack={handleBack}
                onNext={handleNext}
              />
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
}
