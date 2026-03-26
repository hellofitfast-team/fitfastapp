import { internalMutation, internalQuery } from "./_generated/server";

// ---------------------------------------------------------------------------
// One-time migration: tag exercises as pregnancy-unsafe based on rules.
// Conservative blanket filter — any exercise unsafe in ANY trimester is tagged.
// Coach can override via admin exercise table toggle.
// ---------------------------------------------------------------------------

// Exercises matching ANY of these rules are tagged pregnancyUnsafe: true
const UNSAFE_NAME_PATTERNS = [
  // Plyometrics / high-impact
  /box jump/i,
  /burpee/i,
  /jump squat/i,
  /jumping/i,
  /plyo/i,
  // Abdominal flexion
  /crunch/i,
  /sit.?up/i,
  /v.?up/i,
  /leg raise/i,
  // Supine barbell
  /bench press/i,
  /skull crusher/i,
  // Heavy overhead
  /snatch/i,
  /clean and jerk/i,
  // Advanced/acrobatic
  /handstand/i,
  /muscle.?up/i,
  /dragon flag/i,
  /planche/i,
  /front lever/i,
];

const UNSAFE_INSTRUCTION_PATTERNS = [
  /lying on.*back/i,
  /supine/i,
  /lie face up/i,
  /lie on.*bench/i,
  /flat on.*back/i,
];

function isPregnancyUnsafe(exercise: {
  name: string;
  equipment: string[];
  category: string;
  movementPattern: string;
  instructions: string;
}): boolean {
  // Rule 1: Name matches known unsafe patterns
  if (UNSAFE_NAME_PATTERNS.some((p) => p.test(exercise.name))) return true;

  // Rule 2: Instructions indicate supine position
  if (UNSAFE_INSTRUCTION_PATTERNS.some((p) => p.test(exercise.instructions))) return true;

  // Rule 3: Heavy barbell compounds (squat/hinge with barbell)
  if (
    exercise.equipment.includes("barbell") &&
    exercise.category === "compound" &&
    (exercise.movementPattern === "squat" || exercise.movementPattern === "hinge")
  ) {
    return true;
  }

  // Rule 4: Heavy barbell overhead press
  if (
    exercise.equipment.includes("barbell") &&
    exercise.category === "compound" &&
    exercise.movementPattern === "push" &&
    /press|overhead/i.test(exercise.name)
  ) {
    return true;
  }

  return false;
}

export const tagAll = internalMutation({
  args: {},
  handler: async (ctx) => {
    const exercises = await ctx.db.query("exerciseDatabase").collect();
    let tagged = 0;
    let safe = 0;
    let skipped = 0;

    for (const ex of exercises) {
      // Skip if already tagged (idempotent)
      if (ex.pregnancyUnsafe !== undefined) {
        skipped++;
        continue;
      }

      const unsafe = isPregnancyUnsafe(ex);
      await ctx.db.patch(ex._id, {
        pregnancyUnsafe: unsafe,
        updatedAt: Date.now(),
      });

      if (unsafe) tagged++;
      else safe++;
    }

    console.log(
      `[Seed] Pregnancy safety tags: ${tagged} unsafe, ${safe} safe, ${skipped} already tagged.`,
    );
    return { tagged, safe, skipped };
  },
});

export const countPregnancyUnsafe = internalQuery({
  args: {},
  handler: async (ctx) => {
    const exercises = await ctx.db.query("exerciseDatabase").collect();
    const unsafe = exercises.filter((e) => e.pregnancyUnsafe === true);
    const safe = exercises.filter((e) => e.pregnancyUnsafe === false);
    const untagged = exercises.filter((e) => e.pregnancyUnsafe === undefined);

    return {
      total: exercises.length,
      unsafe: unsafe.length,
      safe: safe.length,
      untagged: untagged.length,
      unsafeNames: unsafe.map((e) => e.name),
    };
  },
});
