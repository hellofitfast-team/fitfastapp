"use client";

import { memo, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { BookOpen } from "lucide-react";
import { cn } from "@fitfast/ui/cn";

const MAX_REFLECTION_LENGTH = 3000;

interface ReflectionForm {
  reflection: string;
}

interface DailyReflectionProps {
  defaultReflection: string;
  onSubmit: (data: { reflection: string }) => void;
}

export const DailyReflection = memo(function DailyReflection({
  defaultReflection,
  onSubmit,
}: DailyReflectionProps) {
  const t = useTranslations("tracking");

  const { register, handleSubmit, reset, formState, watch } = useForm<ReflectionForm>({
    defaultValues: { reflection: defaultReflection || "" },
  });

  useEffect(() => {
    reset({ reflection: defaultReflection || "" });
  }, [defaultReflection, reset]);

  const reflectionValue = watch("reflection");
  const charCount = reflectionValue?.length ?? 0;
  const charPercent = (charCount / MAX_REFLECTION_LENGTH) * 100;

  return (
    <div className="border-border bg-card shadow-card overflow-hidden rounded-xl border">
      <div className="border-border bg-routine/8 flex items-center gap-2 border-b p-4">
        <BookOpen className="text-routine h-4 w-4" />
        <div>
          <h2 className="text-sm font-semibold">{t("dailyReflection")}</h2>
          <p className="text-muted-foreground text-xs">{t("howWasYourDay")}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-4">
        <textarea
          {...register("reflection", { maxLength: MAX_REFLECTION_LENGTH })}
          placeholder={t("writeReflection")}
          maxLength={MAX_REFLECTION_LENGTH}
          className="border-input placeholder:text-muted-foreground focus:ring-ring min-h-[100px] w-full resize-none rounded-lg border bg-neutral-50 p-3 text-sm transition-colors focus:ring-2 focus:outline-none"
        />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="bg-primary hover:bg-primary/90 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all active:scale-[0.97] disabled:opacity-50"
          >
            {formState.isSubmitting ? t("saving") : t("saveReflection")}
          </button>
          <span
            className={cn(
              "text-xs",
              charPercent >= 95
                ? "font-semibold text-red-500"
                : charPercent >= 80
                  ? "text-amber-500"
                  : "text-muted-foreground",
            )}
          >
            {charCount}/{MAX_REFLECTION_LENGTH}
          </span>
        </div>
      </form>
    </div>
  );
});
