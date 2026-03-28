import { z } from "zod";

// Schema factory for i18n validation messages
export function createCheckInSchema(t: (key: string) => string) {
  return z.object({
    weight: z.coerce
      .number()
      .positive(t("checkIn.validation.weightPositive"))
      .min(20, t("checkIn.validation.weightTooLow"))
      .max(300, t("checkIn.validation.weightTooHigh")),
    measurementMethod: z.enum(["manual", "inbody"]).default("manual"),
    chest: z.coerce
      .number()
      .min(10, t("checkIn.validation.measurementRange"))
      .max(500, t("checkIn.validation.measurementRange"))
      .optional()
      .or(z.literal(0).transform(() => undefined)),
    waist: z.coerce
      .number()
      .min(10, t("checkIn.validation.measurementRange"))
      .max(500, t("checkIn.validation.measurementRange"))
      .optional()
      .or(z.literal(0).transform(() => undefined)),
    hips: z.coerce
      .number()
      .min(10, t("checkIn.validation.measurementRange"))
      .max(500, t("checkIn.validation.measurementRange"))
      .optional()
      .or(z.literal(0).transform(() => undefined)),
    arms: z.coerce
      .number()
      .min(10, t("checkIn.validation.measurementRange"))
      .max(500, t("checkIn.validation.measurementRange"))
      .optional()
      .or(z.literal(0).transform(() => undefined)),
    thighs: z.coerce
      .number()
      .min(10, t("checkIn.validation.measurementRange"))
      .max(500, t("checkIn.validation.measurementRange"))
      .optional()
      .or(z.literal(0).transform(() => undefined)),
    workoutPerformance: z.string().min(10, t("checkIn.validation.workoutPerformanceMin")),
    energyLevel: z.coerce
      .number()
      .min(1, t("checkIn.validation.ratingRange"))
      .max(10, t("checkIn.validation.ratingRange")),
    sleepQuality: z.coerce
      .number()
      .min(1, t("checkIn.validation.ratingRange"))
      .max(10, t("checkIn.validation.ratingRange")),
    dietaryAdherence: z.coerce
      .number()
      .min(1, t("checkIn.validation.ratingRange"))
      .max(10, t("checkIn.validation.ratingRange")),
    dietNotes: z.string().optional(),
    newInjuries: z.string().optional(),
    notes: z.string().optional(),
    cyclePhase: z
      .enum(["menstrual", "follicular", "ovulatory", "luteal", "not_tracking"])
      .optional(),
  });
}

export type CheckInFormData = z.infer<ReturnType<typeof createCheckInSchema>>;

export interface ProgressPhotos {
  front: File | null;
  back: File | null;
  side: File | null;
}
