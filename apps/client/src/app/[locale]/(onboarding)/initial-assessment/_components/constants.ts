// ── Primary goal (single select) ─────────────────────────────────────────────
// Each maps to a distinct caloric & training strategy the AI can act on.
export const PRIMARY_GOALS = [
  { id: "lose_fat", label: "LOSE FAT", description: "Reduce body fat while preserving muscle" },
  { id: "build_muscle", label: "BUILD MUSCLE", description: "Gain muscle mass and size" },
  { id: "body_recomposition", label: "BODY RECOMPOSITION", description: "Lose fat and build muscle simultaneously — best for beginners" },
  { id: "get_stronger", label: "GET STRONGER", description: "Increase strength and lifting performance" },
  { id: "improve_fitness", label: "IMPROVE OVERALL FITNESS", description: "Balanced health, energy, and body composition" },
];

// ── Optional secondary focus (multi-select, up to 2) ────────────────────────
// These layer on top of the primary goal without conflicting.
export const SECONDARY_FOCUSES = [
  { id: "improve_endurance", label: "IMPROVE ENDURANCE" },
  { id: "improve_flexibility", label: "IMPROVE FLEXIBILITY" },
  { id: "boost_energy", label: "BOOST ENERGY & RECOVERY" },
  { id: "build_habit", label: "BUILD A CONSISTENT HABIT" },
];

export const CUISINE_PREFERENCES = [
  { id: "mediterranean", label: "MEDITERRANEAN" },
  { id: "middle_eastern", label: "MIDDLE EASTERN" },
  { id: "asian", label: "ASIAN CUISINE" },
  { id: "western", label: "WESTERN" },
  { id: "indian", label: "INDIAN" },
  { id: "latin", label: "LATIN" },
  { id: "mixed", label: "NO PREFERENCE" },
];

export const MEALS_PER_DAY = [
  { id: "3_meals", label: "3 MEALS" },
  { id: "3_plus_snacks", label: "3 MEALS + SNACKS" },
  { id: "5_small", label: "5 SMALL MEALS" },
  { id: "flexible", label: "FLEXIBLE" },
];

export const COMMON_ALLERGIES = [
  { id: "none", label: "NONE" },
  { id: "nuts", label: "NUTS" },
  { id: "dairy", label: "DAIRY" },
  { id: "eggs", label: "EGGS" },
  { id: "shellfish", label: "SHELLFISH" },
  { id: "gluten", label: "GLUTEN" },
  { id: "soy", label: "SOY" },
  { id: "fish", label: "FISH" },
  { id: "lactose", label: "LACTOSE" },
];

export const DIETARY_RESTRICTIONS = [
  { id: "none", label: "NONE" },
  { id: "no_beef", label: "NO BEEF" },
  { id: "vegetarian", label: "VEGETARIAN" },
  { id: "vegan", label: "VEGAN" },
];

export const GENDER_OPTIONS = [
  { id: "male", label: "MALE" },
  { id: "female", label: "FEMALE" },
];

export const EQUIPMENT_OPTIONS = [
  { id: "full_gym", label: "FULL GYM ACCESS" },
  { id: "home_basic", label: "HOME (BASIC: DUMBBELLS, MAT)" },
  { id: "home_advanced", label: "HOME (ADVANCED: BENCH, BARBELL)" },
  { id: "bodyweight", label: "BODYWEIGHT ONLY" },
  { id: "resistance_bands", label: "RESISTANCE BANDS" },
  { id: "other", label: "OTHER" },
];

export const DAYS = [
  { id: "Mon", label: "M" },
  { id: "Tue", label: "T" },
  { id: "Wed", label: "W" },
  { id: "Thu", label: "T" },
  { id: "Fri", label: "F" },
  { id: "Sat", label: "S" },
  { id: "Sun", label: "S" },
];

// ── Session duration options ─────────────────────────────────────────────────
export const SESSION_DURATIONS = [
  { id: "30", label: "30 MIN" },
  { id: "45", label: "45 MIN" },
  { id: "60", label: "60 MIN" },
  { id: "90", label: "90+ MIN" },
];

// ── Preferred training time ──────────────────────────────────────────────────
export const TRAINING_TIMES = [
  { id: "morning", label: "MORNING" },
  { id: "afternoon", label: "AFTERNOON" },
  { id: "evening", label: "EVENING" },
  { id: "varies", label: "VARIES" },
];

// ── Day limits by goal × experience ─────────────────────────────────────────
// min = minimum days needed to see real results for this goal
// max = maximum before recovery becomes an issue at this experience level
// recommended = sweet spot the AI will suggest
type DayLimits = { min: number; max: number; recommended: number };

const DAY_LIMITS: Record<string, Record<string, DayLimits>> = {
  lose_fat:            { beginner: { min: 3, max: 5, recommended: 3 }, intermediate: { min: 3, max: 5, recommended: 4 }, advanced: { min: 3, max: 6, recommended: 5 } },
  build_muscle:        { beginner: { min: 3, max: 4, recommended: 3 }, intermediate: { min: 3, max: 5, recommended: 4 }, advanced: { min: 4, max: 6, recommended: 5 } },
  body_recomposition:  { beginner: { min: 3, max: 4, recommended: 3 }, intermediate: { min: 3, max: 5, recommended: 4 }, advanced: { min: 4, max: 6, recommended: 5 } },
  get_stronger:        { beginner: { min: 3, max: 4, recommended: 3 }, intermediate: { min: 3, max: 5, recommended: 4 }, advanced: { min: 3, max: 5, recommended: 4 } },
  improve_fitness:     { beginner: { min: 3, max: 5, recommended: 3 }, intermediate: { min: 3, max: 5, recommended: 4 }, advanced: { min: 3, max: 6, recommended: 5 } },
};

const DEFAULT_LIMITS: DayLimits = { min: 3, max: 6, recommended: 4 };

export function getDayLimits(goal: string, experience: string): DayLimits {
  return DAY_LIMITS[goal]?.[experience] ?? DEFAULT_LIMITS;
}
