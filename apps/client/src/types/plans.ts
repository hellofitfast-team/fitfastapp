/** Shape of AI-generated meal plan data stored in planData field */
export interface GeneratedMealPlan {
  dailyTargets?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  weeklyPlan: {
    [day: string]: {
      meals: Array<{
        name: string;
        type: "breakfast" | "lunch" | "dinner" | "snack";
        time: string;
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
        ingredients: string[];
        instructions: string[];
        alternatives?: string[];
      }>;
      dailyTotals: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
      };
    };
  };
  weeklyTotals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  notes: string;
}

/** A training day with exercises, warmup, and cooldown */
export interface WorkoutDay {
  restDay?: false;
  workoutName: string;
  duration: number;
  targetMuscles: string[];
  warmup: {
    exercises: Array<{
      name: string;
      duration: number;
      instructions: string[];
    }>;
  };
  exercises: Array<{
    name: string;
    sets: number;
    reps: string;
    rest: number;
    notes?: string;
    targetMuscles: string[];
    equipment?: string;
  }>;
  cooldown: {
    exercises: Array<{
      name: string;
      duration: number;
      instructions: string[];
    }>;
  };
}

/** A rest day — no workout fields required */
export interface RestDay {
  restDay: true;
  workoutName?: string;
  duration?: number;
  targetMuscles?: string[];
  warmup?: {
    exercises: Array<{
      name: string;
      duration: number;
      instructions: string[];
    }>;
  };
  exercises?: Array<{
    name: string;
    sets: number;
    reps: string;
    rest: number;
    notes?: string;
    targetMuscles: string[];
    equipment?: string;
  }>;
  cooldown?: {
    exercises: Array<{
      name: string;
      duration: number;
      instructions: string[];
    }>;
  };
}

/** Shape of AI-generated workout plan data stored in planData field */
export interface GeneratedWorkoutPlan {
  splitType?: string;
  splitName?: string;
  splitDescription?: string;
  weeklyPlan: {
    [day: string]: WorkoutDay | RestDay;
  };
  progressionNotes: string;
  safetyTips: string[];
}
