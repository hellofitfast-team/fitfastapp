import { internalMutation, internalQuery } from "./_generated/server";

// ---------------------------------------------------------------------------
// Resistance band exercise seed data — covers all major muscle groups
// ---------------------------------------------------------------------------

const RESISTANCE_BAND_EXERCISES = [
  // CHEST (2)
  {
    name: "Band Chest Press",
    nameAr: "ضغط صدر بالحبل",
    category: "compound" as const,
    movementPattern: "push" as const,
    primaryMuscles: ["chest"],
    secondaryMuscles: ["shoulders", "triceps"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Anchor band behind you at chest height. Grip handles, press arms forward until fully extended. Squeeze chest at the top, slowly return.",
    instructionsAr:
      "ثبّت الحبل خلفك عند مستوى الصدر. امسك المقابض وادفع للأمام حتى تمتد الذراعان بالكامل. اضغط على الصدر في الأعلى ثم عد ببطء.",
    contraindications: ["shoulder"],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 15,
    defaultRestSeconds: 60,
    sortOrder: 400,
  },
  {
    name: "Band Chest Fly",
    nameAr: "فتح صدر بالحبل",
    category: "isolation" as const,
    movementPattern: "push" as const,
    primaryMuscles: ["chest"],
    secondaryMuscles: ["shoulders"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Anchor band behind you at chest height. With arms slightly bent, bring handles together in front of chest in a hugging motion. Slowly return.",
    instructionsAr:
      "ثبّت الحبل خلفك عند مستوى الصدر. مع ثني الذراعين قليلاً، اجمع المقابض أمام الصدر بحركة عناق. عد ببطء.",
    contraindications: ["shoulder"],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 15,
    defaultRestSeconds: 60,
    sortOrder: 401,
  },

  // BACK (3)
  {
    name: "Band Bent-Over Row",
    nameAr: "تجديف منحني بالحبل",
    category: "compound" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["back"],
    secondaryMuscles: ["biceps", "rear delts"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Stand on band with feet shoulder-width apart. Hinge at hips, pull handles to lower chest. Squeeze shoulder blades together. Lower slowly.",
    instructionsAr:
      "قف على الحبل بعرض الكتفين. انحنِ من الوركين واسحب المقابض إلى أسفل الصدر. اضغط على لوحي الكتف معاً. أنزل ببطء.",
    contraindications: ["lower back"],
    defaultSets: 3,
    defaultRepsMin: 10,
    defaultRepsMax: 15,
    defaultRestSeconds: 60,
    sortOrder: 402,
  },
  {
    name: "Band Lat Pulldown",
    nameAr: "سحب علوي بالحبل",
    category: "compound" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["back"],
    secondaryMuscles: ["biceps"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Anchor band overhead. Kneel or stand, grip band wide. Pull down to upper chest while squeezing lats. Slowly return overhead.",
    instructionsAr:
      "ثبّت الحبل في الأعلى. اركع أو قف وامسك الحبل بعرض. اسحب لأسفل إلى أعلى الصدر مع ضغط عضلات الظهر. عد ببطء.",
    contraindications: ["shoulder"],
    defaultSets: 3,
    defaultRepsMin: 10,
    defaultRepsMax: 15,
    defaultRestSeconds: 60,
    sortOrder: 403,
  },
  {
    name: "Band Face Pull",
    nameAr: "سحب للوجه بالحبل",
    category: "accessory" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["rear delts", "back"],
    secondaryMuscles: ["shoulders"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Anchor band at face height. Pull band toward face with elbows high, externally rotating shoulders. Squeeze rear delts. Return slowly.",
    instructionsAr:
      "ثبّت الحبل عند مستوى الوجه. اسحب الحبل نحو الوجه مع رفع الكوعين وتدوير الكتفين للخارج. اضغط على الدالية الخلفية. عد ببطء.",
    contraindications: [],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 20,
    defaultRestSeconds: 45,
    sortOrder: 404,
  },

  // SHOULDERS (4)
  {
    name: "Band Shoulder Press",
    nameAr: "ضغط كتف بالحبل",
    category: "compound" as const,
    movementPattern: "push" as const,
    primaryMuscles: ["shoulders"],
    secondaryMuscles: ["triceps"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Stand on band, grip handles at shoulder height. Press overhead until arms are fully extended. Lower back to shoulders.",
    instructionsAr:
      "قف على الحبل وامسك المقابض عند الكتفين. ادفع للأعلى حتى تمتد الذراعان بالكامل. عد إلى الكتفين.",
    contraindications: ["shoulder"],
    defaultSets: 3,
    defaultRepsMin: 10,
    defaultRepsMax: 15,
    defaultRestSeconds: 60,
    sortOrder: 405,
  },
  {
    name: "Band Lateral Raise",
    nameAr: "رفع جانبي بالحبل",
    category: "isolation" as const,
    movementPattern: "push" as const,
    primaryMuscles: ["shoulders"],
    secondaryMuscles: [],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Stand on band, arms at sides. Raise arms out to sides until parallel with floor. Keep slight bend in elbows. Lower slowly.",
    instructionsAr:
      "قف على الحبل والذراعان بجانبك. ارفع الذراعين للجانبين حتى يوازيا الأرض. حافظ على ثني بسيط في الكوعين. أنزل ببطء.",
    contraindications: ["shoulder"],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 20,
    defaultRestSeconds: 45,
    sortOrder: 406,
  },
  {
    name: "Band Front Raise",
    nameAr: "رفع أمامي بالحبل",
    category: "isolation" as const,
    movementPattern: "push" as const,
    primaryMuscles: ["shoulders"],
    secondaryMuscles: [],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Stand on band, arms in front of thighs. Raise one or both arms forward to shoulder height. Lower slowly.",
    instructionsAr:
      "قف على الحبل والذراعان أمام الفخذين. ارفع ذراعاً أو كلاهما للأمام إلى مستوى الكتف. أنزل ببطء.",
    contraindications: ["shoulder"],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 15,
    defaultRestSeconds: 45,
    sortOrder: 407,
  },
  {
    name: "Band Upright Row",
    nameAr: "تجديف عمودي بالحبل",
    category: "compound" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["shoulders"],
    secondaryMuscles: ["traps", "biceps"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Stand on band, grip handles close together. Pull up along body to chin height, elbows leading. Lower slowly.",
    instructionsAr:
      "قف على الحبل وامسك المقابض قريبة من بعض. اسحب للأعلى بمحاذاة الجسم حتى الذقن. أنزل ببطء.",
    contraindications: ["shoulder"],
    defaultSets: 3,
    defaultRepsMin: 10,
    defaultRepsMax: 15,
    defaultRestSeconds: 60,
    sortOrder: 408,
  },

  // BICEPS (2)
  {
    name: "Band Bicep Curl",
    nameAr: "ثني باي بالحبل",
    category: "isolation" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["biceps"],
    secondaryMuscles: [],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Stand on band, arms at sides with palms forward. Curl handles toward shoulders keeping elbows pinned. Lower slowly.",
    instructionsAr:
      "قف على الحبل والذراعان بجانبك والكفان للأمام. اثنِ المقابض نحو الكتفين مع تثبيت الكوعين. أنزل ببطء.",
    contraindications: [],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 15,
    defaultRestSeconds: 45,
    sortOrder: 409,
  },
  {
    name: "Band Hammer Curl",
    nameAr: "ثني هامر بالحبل",
    category: "isolation" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["biceps"],
    secondaryMuscles: ["forearms"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Stand on band, palms facing each other. Curl handles toward shoulders with neutral grip. Squeeze at top, lower slowly.",
    instructionsAr:
      "قف على الحبل والكفان مواجهان لبعضهما. اثنِ المقابض نحو الكتفين بقبضة محايدة. اضغط في الأعلى وأنزل ببطء.",
    contraindications: [],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 15,
    defaultRestSeconds: 45,
    sortOrder: 410,
  },

  // TRICEPS (2)
  {
    name: "Band Tricep Pushdown",
    nameAr: "ضغط تراي بالحبل",
    category: "isolation" as const,
    movementPattern: "push" as const,
    primaryMuscles: ["triceps"],
    secondaryMuscles: [],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Anchor band overhead. Grip handles with palms down, elbows at sides. Push down until arms are straight. Slowly return.",
    instructionsAr:
      "ثبّت الحبل في الأعلى. امسك المقابض بالكفين للأسفل والكوعين بجانبك. ادفع للأسفل حتى تستقيم الذراعان. عد ببطء.",
    contraindications: [],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 15,
    defaultRestSeconds: 45,
    sortOrder: 411,
  },
  {
    name: "Band Overhead Tricep Extension",
    nameAr: "تمديد تراي علوي بالحبل",
    category: "isolation" as const,
    movementPattern: "push" as const,
    primaryMuscles: ["triceps"],
    secondaryMuscles: [],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Step on band, hold behind head with both hands. Extend arms overhead until straight. Keep elbows close to head. Lower slowly.",
    instructionsAr:
      "قف على الحبل وامسكه خلف الرأس بكلتا اليدين. مدّ الذراعين للأعلى حتى تستقيم. حافظ على الكوعين قريبين من الرأس. أنزل ببطء.",
    contraindications: ["shoulder"],
    defaultSets: 3,
    defaultRepsMin: 10,
    defaultRepsMax: 15,
    defaultRestSeconds: 45,
    sortOrder: 412,
  },

  // QUADRICEPS (2)
  {
    name: "Band Squat",
    nameAr: "سكوات بالحبل",
    category: "compound" as const,
    movementPattern: "squat" as const,
    primaryMuscles: ["quads", "glutes"],
    secondaryMuscles: ["hamstrings", "core"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Stand on band with feet shoulder-width, hold handles at shoulders. Squat until thighs are parallel. Drive through heels to stand.",
    instructionsAr:
      "قف على الحبل بعرض الكتفين وامسك المقابض عند الكتفين. انزل حتى يتوازى الفخذان مع الأرض. ادفع بالكعبين للوقوف.",
    contraindications: ["knee"],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 20,
    defaultRestSeconds: 60,
    sortOrder: 413,
  },
  {
    name: "Band Leg Extension",
    nameAr: "تمديد رجل بالحبل",
    category: "isolation" as const,
    movementPattern: "push" as const,
    primaryMuscles: ["quads"],
    secondaryMuscles: [],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Sit on chair, loop band around ankle and chair leg behind you. Extend leg forward until straight. Squeeze quad at top. Lower slowly.",
    instructionsAr:
      "اجلس على كرسي ولفّ الحبل حول الكاحل وساق الكرسي خلفك. مدّ الرجل للأمام حتى تستقيم. اضغط على الفخذ في الأعلى. أنزل ببطء.",
    contraindications: ["knee"],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 15,
    defaultRestSeconds: 45,
    sortOrder: 414,
  },

  // HAMSTRINGS (2)
  {
    name: "Band Romanian Deadlift",
    nameAr: "ديدلفت روماني بالحبل",
    category: "compound" as const,
    movementPattern: "hinge" as const,
    primaryMuscles: ["hamstrings", "glutes"],
    secondaryMuscles: ["back", "core"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Stand on band, hold handles in front of thighs. Hinge at hips pushing butt back, lowering handles along legs. Feel hamstring stretch. Return to standing.",
    instructionsAr:
      "قف على الحبل وامسك المقابض أمام الفخذين. انحنِ من الوركين مع دفع المؤخرة للخلف. اشعر بتمدد أوتار الركبة. عد للوقوف.",
    contraindications: ["lower back"],
    defaultSets: 3,
    defaultRepsMin: 10,
    defaultRepsMax: 15,
    defaultRestSeconds: 60,
    sortOrder: 415,
  },
  {
    name: "Band Leg Curl",
    nameAr: "ثني رجل بالحبل",
    category: "isolation" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["hamstrings"],
    secondaryMuscles: [],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Lie face down, loop band around ankle and anchor at floor level. Curl heel toward glutes against resistance. Lower slowly.",
    instructionsAr:
      "استلقِ على وجهك ولفّ الحبل حول الكاحل وثبّته عند مستوى الأرض. اثنِ الكعب نحو المؤخرة ضد المقاومة. أنزل ببطء.",
    contraindications: ["knee"],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 15,
    defaultRestSeconds: 45,
    sortOrder: 416,
  },

  // GLUTES (2)
  {
    name: "Band Hip Thrust",
    nameAr: "هيب ثرست بالحبل",
    category: "compound" as const,
    movementPattern: "hinge" as const,
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings", "core"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Sit on floor with upper back on bench, band across hips anchored to floor. Drive hips up squeezing glutes at top. Lower slowly.",
    instructionsAr:
      "اجلس على الأرض مع وضع أعلى الظهر على البنش والحبل عبر الوركين. ادفع الوركين للأعلى مع ضغط المؤخرة. أنزل ببطء.",
    contraindications: [],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 20,
    defaultRestSeconds: 60,
    sortOrder: 417,
  },
  {
    name: "Band Glute Kickback",
    nameAr: "ركلة خلفية بالحبل",
    category: "isolation" as const,
    movementPattern: "hinge" as const,
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "On all fours, loop band around one foot and hold other end. Kick leg straight back squeezing glute at top. Lower slowly. Repeat other side.",
    instructionsAr:
      "على أربع، لفّ الحبل حول قدم واحدة وامسك الطرف الآخر. اركل الرجل للخلف مع ضغط المؤخرة. أنزل ببطء. كرّر على الجانب الآخر.",
    contraindications: [],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 15,
    defaultRestSeconds: 45,
    sortOrder: 418,
  },

  // CORE (2)
  {
    name: "Band Pallof Press",
    nameAr: "بالوف برس بالحبل",
    category: "accessory" as const,
    movementPattern: "rotation" as const,
    primaryMuscles: ["core"],
    secondaryMuscles: ["shoulders"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Anchor band at chest height to side. Hold with both hands at chest. Press arms straight out resisting rotation. Hold 2 seconds. Return to chest.",
    instructionsAr:
      "ثبّت الحبل عند مستوى الصدر جانبياً. امسك بكلتا اليدين عند الصدر. ادفع الذراعين للأمام مقاوماً الدوران. ثبّت لثانيتين. عد للصدر.",
    contraindications: [],
    defaultSets: 3,
    defaultRepsMin: 10,
    defaultRepsMax: 12,
    defaultRestSeconds: 45,
    sortOrder: 419,
  },
  {
    name: "Band Woodchop",
    nameAr: "وود تشوب بالحبل",
    category: "accessory" as const,
    movementPattern: "rotation" as const,
    primaryMuscles: ["core"],
    secondaryMuscles: ["shoulders"],
    equipment: ["resistance_band"],
    difficulty: "beginner" as const,
    instructions:
      "Anchor band low to one side. Grip with both hands, rotate and pull diagonally up across body. Control the return. Repeat other side.",
    instructionsAr:
      "ثبّت الحبل في الأسفل جانبياً. امسك بكلتا اليدين ودوّر واسحب قطرياً للأعلى عبر الجسم. تحكم في العودة. كرّر على الجانب الآخر.",
    contraindications: ["lower back"],
    defaultSets: 3,
    defaultRepsMin: 10,
    defaultRepsMax: 15,
    defaultRestSeconds: 45,
    sortOrder: 420,
  },
];

// ---------------------------------------------------------------------------
// Seed mutations
// ---------------------------------------------------------------------------

export const seedAll = internalMutation({
  args: {},
  handler: async (ctx) => {
    let inserted = 0;
    let skipped = 0;
    const now = Date.now();

    for (const exercise of RESISTANCE_BAND_EXERCISES) {
      // Idempotent: check if exercise already exists by name
      const existing = await ctx.db
        .query("exerciseDatabase")
        .filter((q) => q.eq(q.field("name"), exercise.name))
        .first();

      if (existing) {
        skipped++;
        continue;
      }

      await ctx.db.insert("exerciseDatabase", {
        ...exercise,
        isActive: true,
        createdAt: now,
        updatedAt: now,
      });
      inserted++;
    }

    console.log(
      `[Seed] Resistance band exercises: inserted ${inserted}, skipped ${skipped} (already existed).`,
    );
    return { inserted, skipped };
  },
});

export const countByEquipment = internalQuery({
  args: {},
  handler: async (ctx) => {
    const allExercises = await ctx.db.query("exerciseDatabase").collect();
    const counts: Record<string, number> = {};

    for (const ex of allExercises) {
      if (ex.equipment.length === 0) {
        counts["bodyweight"] = (counts["bodyweight"] ?? 0) + 1;
      }
      for (const eq of ex.equipment) {
        counts[eq] = (counts[eq] ?? 0) + 1;
      }
    }

    // Sort by count descending
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    return { total: allExercises.length, byEquipment: Object.fromEntries(sorted) };
  },
});
