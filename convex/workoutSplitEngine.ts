/**
 * Deterministic workout split selection engine.
 * Selects training split based on experience level and training days per week.
 * This is deterministic — same inputs always produce the same split.
 */

import { DEFAULT_CHECK_IN_FREQUENCY_DAYS } from "./constants";

export interface WorkoutSplit {
  splitType: string;
  splitName: string;
  splitNameAr: string;
  splitDescription: string;
  splitDescriptionAr: string;
  dayLabels: string[];
  dayLabelsAr: string[];
}

type ExperienceLevel = "beginner" | "intermediate" | "advanced";

const SPLITS: Record<string, Omit<WorkoutSplit, "dayLabels" | "dayLabelsAr">> = {
  full_body: {
    splitType: "full_body",
    splitName: "Full Body",
    splitNameAr: "تمرين الجسم الكامل",
    splitDescription:
      "Train all major muscle groups each session. Best for beginners building a foundation.",
    splitDescriptionAr:
      "تدريب جميع مجموعات العضلات الرئيسية في كل جلسة. الأفضل للمبتدئين لبناء أساس قوي.",
  },
  upper_lower: {
    splitType: "upper_lower",
    splitName: "Upper / Lower",
    splitNameAr: "علوي / سفلي",
    splitDescription:
      "Alternate between upper body and lower body days. Great balance of volume and recovery.",
    splitDescriptionAr: "تبديل بين أيام الجزء العلوي والسفلي. توازن ممتاز بين الحجم والاستشفاء.",
  },
  push_pull_legs: {
    splitType: "push_pull_legs",
    splitName: "Push / Pull / Legs",
    splitNameAr: "دفع / سحب / أرجل",
    splitDescription:
      "Push muscles one day, pull muscles the next, then legs. Excellent for intermediate to advanced lifters.",
    splitDescriptionAr:
      "عضلات الدفع يوم، عضلات السحب اليوم التالي، ثم الأرجل. ممتاز للمتوسطين والمتقدمين.",
  },
  ppl_2x: {
    splitType: "ppl_2x",
    splitName: "Push / Pull / Legs (2×)",
    splitNameAr: "دفع / سحب / أرجل (مرتين)",
    splitDescription:
      "PPL split repeated twice per week for maximum volume. For advanced lifters with 6 training days.",
    splitDescriptionAr:
      "تقسيم دفع/سحب/أرجل مكرر مرتين أسبوعياً لأقصى حجم تدريبي. للمتقدمين مع ٦ أيام تدريب.",
  },
  arnold: {
    splitType: "arnold",
    splitName: "Arnold Split",
    splitNameAr: "تقسيم أرنولد",
    splitDescription:
      "Chest and back together, shoulders and arms together, then legs. A classic advanced split for high volume.",
    splitDescriptionAr:
      "صدر وظهر معاً، أكتاف وذراعين معاً، ثم أرجل. تقسيم كلاسيكي متقدم لحجم تدريبي عالي.",
  },
  anterior_posterior: {
    splitType: "anterior_posterior",
    splitName: "Anterior / Posterior",
    splitNameAr: "أمامي / خلفي",
    splitDescription:
      "Front body muscles one day (chest, quads, shoulders), back body the next (back, hamstrings, glutes). Balanced push-pull approach.",
    splitDescriptionAr:
      "عضلات الجسم الأمامية يوم (صدر، فخذ أمامي، أكتاف)، والخلفية اليوم التالي (ظهر، فخذ خلفي، مؤخرة). نهج متوازن.",
  },
  bro_split: {
    splitType: "bro_split",
    splitName: "Bro Split",
    splitNameAr: "تقسيم العضلة الواحدة",
    splitDescription:
      "One major muscle group per day: chest, back, shoulders, arms, legs. Maximum focus and volume per body part.",
    splitDescriptionAr:
      "مجموعة عضلية رئيسية واحدة كل يوم: صدر، ظهر، أكتاف، ذراعين، أرجل. أقصى تركيز وحجم لكل جزء.",
  },
  phul: {
    splitType: "phul",
    splitName: "PHUL (Power / Hypertrophy)",
    splitNameAr: "قوة / تضخيم",
    splitDescription:
      "Power Upper and Lower days for strength, then Hypertrophy Upper and Lower days for size. Best of both worlds.",
    splitDescriptionAr: "أيام قوة للجزء العلوي والسفلي، ثم أيام تضخيم. الأفضل من العالمين.",
  },
};

/**
 * Generate day labels for a given split type across N training days in a cycle.
 */
function generateDayLabels(splitType: string, totalDays: number): { en: string[]; ar: string[] } {
  const labels: { en: string[]; ar: string[] } = { en: [], ar: [] };

  for (let i = 0; i < totalDays; i++) {
    switch (splitType) {
      case "full_body": {
        // Alternate: Full Body → Rest → Full Body → Rest
        const isTraining = i % 2 === 0;
        labels.en.push(isTraining ? "Full Body" : "Rest");
        labels.ar.push(isTraining ? "جسم كامل" : "راحة");
        break;
      }
      case "upper_lower": {
        // 3-day cycle: Upper → Lower → Rest → Upper → Lower → Rest ...
        const pos = i % 3;
        if (pos === 0) {
          labels.en.push("Upper");
          labels.ar.push("علوي");
        } else if (pos === 1) {
          labels.en.push("Lower");
          labels.ar.push("سفلي");
        } else {
          labels.en.push("Rest");
          labels.ar.push("راحة");
        }
        break;
      }
      case "push_pull_legs": {
        // 3-day rotation with rest every 3rd-4th day
        const cycle = i % 4;
        if (cycle === 0) {
          labels.en.push("Push");
          labels.ar.push("دفع");
        } else if (cycle === 1) {
          labels.en.push("Pull");
          labels.ar.push("سحب");
        } else if (cycle === 2) {
          labels.en.push("Legs");
          labels.ar.push("أرجل");
        } else {
          labels.en.push("Rest");
          labels.ar.push("راحة");
        }
        break;
      }
      case "ppl_2x": {
        // 6 on, 1 rest: Push → Pull → Legs → Push → Pull → Legs → Rest
        const pos6 = i % 7;
        if (pos6 === 6) {
          labels.en.push("Rest");
          labels.ar.push("راحة");
        } else {
          const ppl = ["Push", "Pull", "Legs"];
          const pplAr = ["دفع", "سحب", "أرجل"];
          labels.en.push(ppl[pos6 % 3]!);
          labels.ar.push(pplAr[pos6 % 3]!);
        }
        break;
      }
      case "arnold": {
        // Chest+Back → Shoulders+Arms → Legs → repeat, 1 rest every 3 training days
        const arnoldCycle = i % 4;
        if (arnoldCycle === 3) {
          labels.en.push("Rest");
          labels.ar.push("راحة");
        } else {
          const arnoldEn = ["Chest+Back", "Shoulders+Arms", "Legs"];
          const arnoldAr = ["صدر+ظهر", "أكتاف+ذراعين", "أرجل"];
          labels.en.push(arnoldEn[arnoldCycle]!);
          labels.ar.push(arnoldAr[arnoldCycle]!);
        }
        break;
      }
      case "anterior_posterior": {
        // Anterior → Posterior → Rest → repeat
        const apCycle = i % 3;
        if (apCycle === 0) {
          labels.en.push("Anterior");
          labels.ar.push("أمامي");
        } else if (apCycle === 1) {
          labels.en.push("Posterior");
          labels.ar.push("خلفي");
        } else {
          labels.en.push("Rest");
          labels.ar.push("راحة");
        }
        break;
      }
      case "bro_split": {
        // Chest → Back → Shoulders → Arms → Legs → Rest → repeat
        const broCycle = i % 6;
        if (broCycle === 5) {
          labels.en.push("Rest");
          labels.ar.push("راحة");
        } else {
          const broEn = ["Chest", "Back", "Shoulders", "Arms", "Legs"];
          const broAr = ["صدر", "ظهر", "أكتاف", "ذراعين", "أرجل"];
          labels.en.push(broEn[broCycle]!);
          labels.ar.push(broAr[broCycle]!);
        }
        break;
      }
      case "phul": {
        // Power Upper → Power Lower → Rest → Hypertrophy Upper → Hypertrophy Lower → Rest → repeat
        const phulCycle = i % 6;
        if (phulCycle === 2 || phulCycle === 5) {
          labels.en.push("Rest");
          labels.ar.push("راحة");
        } else {
          const phulEn = [
            "Power Upper",
            "Power Lower",
            "",
            "Hypertrophy Upper",
            "Hypertrophy Lower",
          ];
          const phulAr = ["قوة علوي", "قوة سفلي", "", "تضخيم علوي", "تضخيم سفلي"];
          labels.en.push(phulEn[phulCycle]!);
          labels.ar.push(phulAr[phulCycle]!);
        }
        break;
      }
      default: {
        labels.en.push(`Day ${i + 1}`);
        labels.ar.push(`يوم ${i + 1}`);
      }
    }
  }

  return labels;
}

/**
 * Select the optimal workout split based on experience level and training days.
 *
 * Decision matrix:
 * | Experience   | 2-3 days    | 4 days      | 5 days              | 6 days          |
 * |-------------|-------------|-------------|---------------------|-----------------|
 * | Beginner    | Full Body   | Full Body   | Upper/Lower         | Upper/Lower     |
 * | Intermediate| Full Body   | PHUL        | Anterior/Posterior  | Push/Pull/Legs  |
 * | Advanced    | Upper/Lower | PPL         | Bro Split           | Arnold          |
 */
export function selectWorkoutSplit(
  experienceLevel: ExperienceLevel | undefined,
  daysPerWeek: number,
  totalPlanDays: number = DEFAULT_CHECK_IN_FREQUENCY_DAYS,
): WorkoutSplit {
  const exp = experienceLevel || "beginner";
  let splitType: string;

  if (daysPerWeek <= 3) {
    splitType = exp === "advanced" ? "upper_lower" : "full_body";
  } else if (daysPerWeek === 4) {
    if (exp === "beginner") splitType = "full_body";
    else if (exp === "intermediate") splitType = "phul";
    else splitType = "push_pull_legs";
  } else if (daysPerWeek === 5) {
    if (exp === "beginner") splitType = "upper_lower";
    else if (exp === "intermediate") splitType = "anterior_posterior";
    else splitType = "bro_split";
  } else {
    // 6+ days
    if (exp === "beginner") splitType = "upper_lower";
    else if (exp === "intermediate") splitType = "push_pull_legs";
    else splitType = "arnold";
  }

  const split = SPLITS[splitType]!;
  const dayLabelData = generateDayLabels(splitType, totalPlanDays);

  return {
    ...split,
    dayLabels: dayLabelData.en,
    dayLabelsAr: dayLabelData.ar,
  };
}
