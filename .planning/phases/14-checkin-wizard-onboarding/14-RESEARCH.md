# Phase 14: Check-in Wizard and Onboarding - Research

**Researched:** 2026-02-22
**Domain:** Multi-step wizard UI, swipe navigation, form state management
**Confidence:** HIGH

## Summary

Phase 14 transforms two existing features -- the check-in form and the onboarding initial assessment -- from single-page scrollable forms into guided step-by-step wizards with swipe navigation. Both features already exist and work correctly; this phase is purely a UI renovation.

The check-in page already has a step wizard structure (5 steps with StepProgress, StepNavigation, and per-step validation via React Hook Form + Zod). The main additions are: (1) adding swipe gesture support via react-swipeable, (2) redesigning the progress bar to be segmented, (3) adding a proper review summary, and (4) pre-filling the last check-in's weight. The onboarding assessment currently displays all sections on one long page and needs to be split into one-question-per-screen with back/next navigation and transitions.

**Primary recommendation:** Install react-swipeable v7, add `useSwipeable` to the existing check-in wizard container, and refactor onboarding from a monolithic form to a step-based wizard reusing the same FormProvider + per-step validation pattern already proven in check-in.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| CHECK-01 | Step-by-step wizard (Weight -> Measurements -> Photos -> Notes -> Review) | Already implemented as 5 steps in check-in page. Current steps: Weight+Measurements, Fitness, Dietary, Photos, Review. Needs reordering per requirement. |
| CHECK-02 | Swipe between steps via react-swipeable | react-swipeable v7.0.2 useSwipeable hook -- install and integrate with existing step navigation |
| CHECK-03 | Segmented progress bar at top | StepProgress component exists but uses connected circles. Redesign to segmented bar style. |
| CHECK-04 | Pre-fill last check-in's weight as smart default | getLatestCheckIn query exists in convex/checkIns.ts. Use it to set defaultValues in useForm. |
| CHECK-05 | Review summary screen before submit | ReviewStep component exists but only shows 5 fields. Enhance to show ALL entered data including measurements and notes. |
| ONBOARD-01 | Guided wizard -- one question per screen, large inputs, back/next navigation | Current assessment is one long scrollable form with 5 sections. Refactor to step wizard with individual screens. |
| ONBOARD-02 | Step progress indicator at top | Reuse StepProgress pattern from check-in (or a shared variant). |
| ONBOARD-03 | Smooth transitions between steps | CSS transitions on step mount/unmount. Use Tailwind animation classes (fadeIn, slideUp from Phase 12). |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| react-swipeable | 7.0.2 | Touch swipe gesture detection | Explicitly specified in requirements (CHECK-02). 2.1k GitHub stars, lightweight hook API. |
| react-hook-form | 7.71.1 | Multi-step form state management | Already installed and used in current check-in page. FormProvider pattern works perfectly for wizard steps. |
| zod | 4.3.6 | Per-step validation | Already installed and used for check-in schema validation. |

### Already Available (no install needed)
| Library | Version | Purpose | Notes |
|---------|---------|---------|-------|
| @fitfast/ui | workspace | SectionCard, FormField, Input, Textarea, RatingSelector, Button, Slider | All UI primitives already used in current check-in and assessment |
| lucide-react | 0.563.0 | Step icons | Already used for Weight, Dumbbell, Camera, etc. |
| vaul | 1.1.2 | Bottom drawer | Available if needed for photo picker UX |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| react-swipeable | Native touch events | react-swipeable handles edge cases (velocity, delta thresholds, multi-touch) that are tedious to implement correctly |
| react-swipeable | framer-motion drag | Framer Motion is 50KB+ bundle for a feature that only needs directional swipe detection |

**Installation:**
```bash
pnpm --filter @fitfast/client add react-swipeable
```

## Architecture Patterns

### Current Check-in Structure (already exists)
```
apps/client/src/app/[locale]/(dashboard)/check-in/
├── page.tsx                    # Main wizard controller (useState for step, FormProvider, submission)
├── error.tsx                   # Error boundary
└── _components/
    ├── step-progress.tsx       # Circle progress indicator
    ├── step-navigation.tsx     # Back/Next/Submit buttons
    ├── weight-step.tsx         # Step 1: weight + measurements
    ├── fitness-step.tsx        # Step 2: workout performance, energy, sleep
    ├── dietary-step.tsx        # Step 3: dietary adherence, injuries
    ├── photos-step.tsx         # Step 4: photo upload
    ├── review-step.tsx         # Step 5: summary + notes
    └── check-in-locked.tsx     # Lock state when within check-in cycle
```

### Current Onboarding Structure (needs refactoring)
```
apps/client/src/app/[locale]/(onboarding)/
├── layout.tsx                  # Server component with header/footer
├── welcome/page.tsx            # Welcome screen
├── pending/page.tsx            # Pending approval screen
└── initial-assessment/
    ├── page.tsx                # ONE GIANT FORM with all sections (needs wizard conversion)
    └── _components/
        ├── constants.ts        # FITNESS_GOALS, FOOD_PREFERENCES, ALLERGIES, etc.
        ├── goals-section.tsx   # Multi-select fitness goals
        ├── basic-info-section.tsx  # Weight, height, experience, equipment
        ├── schedule-section.tsx    # Day picker for workout schedule
        ├── dietary-section.tsx     # Food prefs, allergies, restrictions
        └── medical-section.tsx     # Free-text medical notes
```

### Pattern 1: Swipeable Step Wizard
**What:** Wrap the step content area with useSwipeable handlers that trigger step navigation
**When to use:** Check-in wizard, onboarding wizard
**Example:**
```typescript
// Source: react-swipeable GitHub docs + existing check-in pattern
import { useSwipeable } from 'react-swipeable';

function WizardContainer() {
  const [currentStep, setCurrentStep] = useState(1);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // In RTL mode, swipe left = go back
      const isRtl = document.dir === 'rtl';
      if (isRtl) handleBack();
      else handleNext();
    },
    onSwipedRight: () => {
      const isRtl = document.dir === 'rtl';
      if (isRtl) handleNext();
      else handleBack();
    },
    delta: 50, // Minimum distance for swipe
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div {...handlers}>
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
    </div>
  );
}
```

### Pattern 2: Smart Defaults with Previous Check-in Data
**What:** Pre-fill the weight field with the user's last check-in value
**When to use:** CHECK-04
**Example:**
```typescript
// Source: existing convex/checkIns.ts getLatestCheckIn query
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

function CheckInPage() {
  const latestCheckIn = useQuery(api.checkIns.getLatestCheckIn);

  const methods = useForm<CheckInFormData>({
    resolver: zodResolver(checkInSchema),
    defaultValues: {
      weight: latestCheckIn?.weight ?? undefined,
      energyLevel: 5,
      sleepQuality: 5,
      dietaryAdherence: 5,
    },
  });

  // Reset weight default when latestCheckIn loads
  useEffect(() => {
    if (latestCheckIn?.weight && !methods.getValues("weight")) {
      methods.setValue("weight", latestCheckIn.weight);
    }
  }, [latestCheckIn]);
}
```

### Pattern 3: Segmented Progress Bar
**What:** Replace connected circles with a segmented bar where each segment fills based on completion
**When to use:** CHECK-03, ONBOARD-02
**Example:**
```typescript
function SegmentedProgress({ currentStep, totalSteps, stepLabels }: Props) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
          <div
            className={cn(
              "h-1.5 w-full rounded-full transition-colors",
              i + 1 <= currentStep ? "bg-primary" : "bg-neutral-200"
            )}
          />
          <span className="text-[10px] text-muted-foreground">
            {stepLabels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}
```

### Pattern 4: Onboarding Wizard Conversion (useState-based)
**What:** Convert the monolithic assessment form to a step wizard. Since the current assessment uses individual useState hooks (not React Hook Form), keep that approach but add step navigation.
**When to use:** ONBOARD-01
**Note:** The current onboarding does NOT use React Hook Form -- it uses raw useState for each field. Two options: (a) keep useState and add step wrapper, or (b) migrate to React Hook Form + FormProvider for consistency with check-in. Option (b) is recommended for consistency but is more work.

### Anti-Patterns to Avoid
- **Unmounting form state on step change:** React Hook Form with FormProvider already handles this -- form state persists in the provider even when step components unmount. Do NOT store form data in a separate store (Zustand/localStorage) since RHF already handles persistence.
- **Validating all steps at once on submit:** Validate per-step on "Next" click (already implemented via `validateStep()`). This prevents users from seeing errors on fields they haven't reached yet.
- **Blocking swipe during photo upload:** Swipe gestures could interfere with photo drag-and-drop. Disable swipe detection on the photos step or use a higher delta threshold.
- **Forgetting RTL swipe inversion:** Swipe left in LTR = go forward, but in RTL = go backward. Must invert based on `document.dir` or locale.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Swipe gesture detection | Custom touchstart/touchend handlers | react-swipeable useSwipeable | Handles velocity, delta thresholds, direction locking, multi-touch prevention |
| Form state across wizard steps | Custom state management or Zustand store | React Hook Form FormProvider | Already in use, persists state across step mount/unmount natively |
| Per-step validation | Manual field checking | RHF `trigger()` with field arrays per step | Already implemented in `validateStep()`, handles async validation |
| Photo upload to Convex | Custom upload logic | Existing `generateUploadUrl` + fetch POST pattern | Already implemented in check-in page, includes file validation |

**Key insight:** The check-in wizard already exists with working step navigation, per-step validation, photo upload, and form submission. This phase is about adding swipe, redesigning the progress bar, enhancing the review screen, and applying the same wizard pattern to onboarding.

## Common Pitfalls

### Pitfall 1: Swipe Conflicts with Scroll
**What goes wrong:** Horizontal swipe gestures interfere with vertical page scrolling, especially on the textarea/notes steps
**Why it happens:** react-swipeable captures all touch events by default
**How to avoid:** Use `preventScrollOnSwipe: true` only when confident the content fits without scrolling, or set a high `delta` (50-75px) so small swipes don't trigger navigation. Consider disabling swipe on steps with long scrollable content.
**Warning signs:** Users unable to scroll through textarea content on mobile

### Pitfall 2: RTL Swipe Direction
**What goes wrong:** Swipe left goes "forward" in LTR but should go "backward" in RTL
**Why it happens:** Swipe handlers are coded for LTR only
**How to avoid:** Check locale/dir at handler level and invert left/right accordingly. The existing StepNavigation already handles RTL with `rtl:rotate-180` on arrow icons.
**Warning signs:** Arabic users swiping the wrong direction

### Pitfall 3: Onboarding State Management Mismatch
**What goes wrong:** Onboarding currently uses ~12 individual useState hooks, not React Hook Form. Converting to wizard steps without migrating to RHF means state persists but validation is manual.
**Why it happens:** Onboarding was built before the check-in refactoring
**How to avoid:** Either (a) migrate onboarding to RHF+Zod for consistency, or (b) keep useState but ensure all state is lifted to the parent page component (which it already is). Option (b) is simpler since state already lives in the parent.
**Warning signs:** Lost form data when navigating between steps

### Pitfall 4: Smart Default Race Condition
**What goes wrong:** `getLatestCheckIn` query returns `undefined` initially (loading), then the actual value. If `useForm` is initialized before data loads, defaultValues won't update.
**Why it happens:** Convex queries are reactive but useForm defaultValues only apply on mount
**How to avoid:** Use `useEffect` + `setValue()` to update weight when latestCheckIn loads, with a guard to not overwrite user edits.
**Warning signs:** Weight field stays empty even though user has previous check-ins

### Pitfall 5: Step Reordering Mismatch
**What goes wrong:** Requirements say "Weight -> Measurements -> Photos -> Notes -> Review" but current code has "Weight+Measurements -> Fitness -> Dietary -> Photos -> Review"
**Why it happens:** Requirements define a different step order than what's currently implemented
**How to avoid:** Carefully decide: does the requirement literally mean 5 separate steps for each of those, or does it mean the existing 5 steps rebranded? The current steps already cover all fields. Recommend keeping the current step grouping but ensuring the progress bar labels match the requirement wording.
**Warning signs:** Confusion between requirement step names and implementation step groupings

## Code Examples

### Existing Check-in Form Schema (from page.tsx)
```typescript
// Source: apps/client/src/app/[locale]/(dashboard)/check-in/page.tsx
export const checkInSchema = z.object({
  weight: z.coerce.number().positive().min(20).max(300),
  chest: z.coerce.number().optional(),
  waist: z.coerce.number().optional(),
  hips: z.coerce.number().optional(),
  arms: z.coerce.number().optional(),
  thighs: z.coerce.number().optional(),
  workoutPerformance: z.string().min(10),
  energyLevel: z.coerce.number().min(1).max(10),
  sleepQuality: z.coerce.number().min(1).max(10),
  dietaryAdherence: z.coerce.number().min(1).max(10),
  dietNotes: z.string().optional(),
  newInjuries: z.string().optional(),
  notes: z.string().optional(),
});
```

### Existing Step Validation (from page.tsx)
```typescript
// Source: apps/client/src/app/[locale]/(dashboard)/check-in/page.tsx
const validateStep = async (step: number): Promise<boolean> => {
  let fields: (keyof CheckInFormData)[] = [];
  switch (step) {
    case 1: fields = ["weight"]; break;
    case 2: fields = ["workoutPerformance", "energyLevel", "sleepQuality"]; break;
    case 3: fields = ["dietaryAdherence"]; break;
    case 4: return true; // Photos - no validation
    default: return true;
  }
  return await methods.trigger(fields);
};
```

### Existing Photo Upload Pattern (from page.tsx)
```typescript
// Source: apps/client/src/app/[locale]/(dashboard)/check-in/page.tsx
const uploadPhotosToStorage = async (): Promise<Id<"_storage">[]> => {
  if (uploadedPhotos.length === 0) return [];
  const uploadedIds: Id<"_storage">[] = [];
  for (const photo of uploadedPhotos) {
    const uploadUrl = await generateUploadUrl({});
    const result = await fetch(uploadUrl, {
      method: "POST",
      headers: { "Content-Type": photo.type },
      body: photo,
    });
    const { storageId } = await result.json();
    uploadedIds.push(storageId as Id<"_storage">);
  }
  return uploadedIds;
};
```

### Existing Submission Flow
```typescript
// Source: apps/client/src/app/[locale]/(dashboard)/check-in/page.tsx
// Check-in uses LEGACY submitCheckIn mutation (not the workflow version)
// The page ALSO calls generateMealPlan and generateWorkoutPlan actions directly
// Note: startCheckInWorkflow exists in convex/checkIns.ts but page.tsx doesn't use it yet
const submitCheckIn = useMutation(api.checkIns.submitCheckIn);
const generateMealPlan = useAction(api.ai.generateMealPlan);
const generateWorkoutPlan = useAction(api.ai.generateWorkoutPlan);
```

### Onboarding Assessment Fields (5 sections, ~12 state variables)
```typescript
// Source: apps/client/src/app/[locale]/(onboarding)/initial-assessment/page.tsx
// Section 1 - Goals: selectedGoals[], goalsOther
// Section 2 - Basic Info: currentWeight, height, experienceLevel, equipment, equipmentOther
// Section 3 - Schedule: selectedDays[]
// Section 4 - Dietary: selectedFoodPrefs[], foodPrefsOther, selectedAllergies[], allergiesOther, selectedRestrictions[], restrictionsOther
// Section 5 - Medical: medicalNotes
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Single scrollable form | Step wizard with RHF FormProvider | Phase 8 (2026-02-15) | Check-in already uses step pattern |
| Direct AI calls from client | Durable workflow via Convex | Phase 4-5 (2026-02-13) | startCheckInWorkflow exists but page still uses legacy flow |
| No check-in lock | 14-day lock based on systemConfig | Phase 8 (2026-02-15) | useCheckInLock hook + getLockStatus query |

**Note:** The check-in page still uses the legacy `submitCheckIn` mutation + direct AI action calls instead of the newer `startCheckInWorkflow`. This phase should NOT change the submission flow -- that's a backend concern outside scope.

## Open Questions

1. **Step grouping vs requirement wording**
   - What we know: Requirements say "Weight -> Measurements -> Photos -> Notes -> Review" (5 steps). Current implementation has "Weight+Measurements -> Fitness -> Dietary -> Photos -> Review" (5 steps).
   - What's unclear: Should we literally reorder to match requirements, or keep current grouping? Current grouping makes more sense UX-wise (fitness metrics together, dietary together).
   - Recommendation: Keep current 5-step grouping but rename progress labels to match requirement spirit. The success criteria says "Weight, Measurements, Photos, Notes, Review" which is close enough.

2. **Onboarding form state approach**
   - What we know: Current assessment uses ~12 useState hooks. Check-in uses React Hook Form.
   - What's unclear: Should we migrate onboarding to RHF for consistency?
   - Recommendation: Keep useState approach but add step navigation wrapper. Migration to RHF is extra scope with no user-visible benefit. The state already lives in the parent component, so step mount/unmount won't lose data.

3. **CSS transitions from Phase 12**
   - What we know: Phase 14 depends on Phase 12 which defines animation keyframes (fadeIn, slideUp, slideDown, scaleIn).
   - What's unclear: Will those animation classes be available by the time Phase 14 is implemented?
   - Recommendation: Use simple Tailwind transitions as fallback. If Phase 12 animations are available, use them. If not, `transition-opacity duration-200` works fine.

## Sources

### Primary (HIGH confidence)
- Codebase inspection: `apps/client/src/app/[locale]/(dashboard)/check-in/` -- all 8 files read
- Codebase inspection: `apps/client/src/app/[locale]/(onboarding)/initial-assessment/` -- all 7 files read
- Codebase inspection: `convex/checkIns.ts`, `convex/checkInWorkflow.ts`, `convex/storage.ts` -- full read
- Codebase inspection: `convex/schema.ts` -- checkIns and initialAssessments table schemas

### Secondary (MEDIUM confidence)
- [react-swipeable GitHub](https://github.com/FormidableLabs/react-swipeable) -- v7.0.2, useSwipeable API
- [React Hook Form multi-step patterns](https://react-hook-form.com/advanced-usage) -- FormProvider approach for wizard forms

### Tertiary (LOW confidence)
- None -- all findings verified against codebase

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- react-swipeable explicitly named in requirements, RHF already in use
- Architecture: HIGH -- existing code thoroughly examined, patterns are clear
- Pitfalls: HIGH -- based on actual code analysis, not theoretical concerns

**Research date:** 2026-02-22
**Valid until:** 2026-03-22 (stable -- no fast-moving dependencies)
