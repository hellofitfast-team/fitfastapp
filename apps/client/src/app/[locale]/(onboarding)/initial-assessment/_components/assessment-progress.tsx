"use client";

interface AssessmentProgressProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export function AssessmentProgress({
  currentStep,
  totalSteps,
  stepLabels,
}: AssessmentProgressProps) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;
        return (
          <div key={step} className="flex flex-1 flex-col items-center">
            <div
              className={`h-1.5 w-full rounded-full transition-colors duration-200 ${
                step <= currentStep ? "bg-primary" : "bg-neutral-200"
              }`}
            />
            <span className="text-muted-foreground mt-1.5 text-center text-[10px]">
              {stepLabels[i]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
