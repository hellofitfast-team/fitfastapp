# FitFast — Cost Analysis & AI Quality Report

> Last updated: 2026-03-12

## AI Model Configuration

| Model                       | Use Case                               | Input Cost     | Output Cost    | Provider           |
| --------------------------- | -------------------------------------- | -------------- | -------------- | ------------------ |
| `gemini-2.5-flash-lite`     | Meal plans, workout plans, translation | $0.10/M tokens | $0.40/M tokens | Google AI (direct) |
| `deepseek-chat`             | Fallback for plans/translation         | $0.14/M tokens | $0.28/M tokens | DeepSeek (direct)  |
| `qwen/qwen3-vl-8b-instruct` | Payment & InBody OCR                   | $0.06/M tokens | $0.40/M tokens | OpenRouter         |
| `qwen/qwen3-embedding-8b`   | RAG embeddings (1024 dims)             | —              | —              | OpenRouter         |

## Per-Operation Cost Breakdown

### Meal Plan Generation (7-day plan) — English vs Arabic

#### English (Langfuse trace `ffd3ee5d`)

| Metric         | Attempt 1 (truncated) | Attempt 2 (retry)     | Total        |
| -------------- | --------------------- | --------------------- | ------------ |
| Model          | gemini-2.5-flash-lite | gemini-2.5-flash-lite | —            |
| Input tokens   | 10,570                | 10,381                | 20,951       |
| Output tokens  | 15,760                | 5,313                 | 21,073       |
| Input cost     | $0.00106              | $0.00104              | $0.00210     |
| Output cost    | $0.00630              | $0.00213              | $0.00843     |
| **Total cost** | $0.00736              | $0.00316              | **$0.01052** |
| Latency        | 39.3s                 | 14.1s                 | 53.4s        |
| Finish reason  | `length` (truncated)  | `stop` (complete)     | —            |

#### Arabic (Langfuse trace `b0905287`)

| Metric         | Attempt 1 (truncated) | Attempt 2 (retry)     | Total        |
| -------------- | --------------------- | --------------------- | ------------ |
| Model          | gemini-2.5-flash-lite | gemini-2.5-flash-lite | —            |
| Input tokens   | 10,596                | 10,407                | 21,003       |
| Output tokens  | 21,705                | 5,487                 | 27,192       |
| Input cost     | $0.00106              | $0.00104              | $0.00210     |
| Output cost    | $0.00868              | $0.00219              | $0.01088     |
| **Total cost** | $0.00974              | $0.00324              | **$0.01298** |
| Latency        | 42.6s                 | 16.7s                 | 59.3s        |
| Finish reason  | `length` (truncated)  | `stop` (complete)     | —            |

#### Side-by-Side Comparison

| Metric                  | English  | Arabic   | Diff   |
| ----------------------- | -------- | -------- | ------ |
| Total tokens (in+out)   | 42,024   | 48,195   | +14.7% |
| Output tokens only      | 21,073   | 27,192   | +29.0% |
| Total cost              | $0.01052 | $0.01298 | +23.4% |
| Total latency           | 53.4s    | 59.3s    | +11.0% |
| Validation warnings     | 6        | 8        | +33%   |
| Truncation retry needed | Yes      | Yes      | Same   |

**Key finding:** Arabic output uses ~29% more tokens (matching the expected ~35% overhead for multi-byte Arabic UTF-8). Cost increase is 23% — still well under the $0.02/plan threshold. Both languages trigger truncation on attempt 1, confirming the retry mechanism is essential.

### Estimated Per-Client Monthly Costs

Assuming 1 check-in cycle per 10-14 days (2-3 cycles/month):

| Operation                 | Frequency/Month | Cost/Op      | Monthly Cost          |
| ------------------------- | --------------- | ------------ | --------------------- |
| Meal plan generation (EN) | 2-3×            | $0.005-0.011 | $0.010-0.033          |
| Meal plan generation (AR) | 2-3×            | $0.006-0.013 | $0.012-0.039          |
| Workout plan generation   | 2-3×            | ~$0.005      | $0.010-0.015          |
| Plan translation (if AR)  | 2-3×            | ~$0.001      | $0.002-0.003          |
| Payment OCR (signup)      | 0-1×            | ~$0.002      | $0.000-0.002          |
| RAG embedding (knowledge) | Rare            | ~$0.001      | ~$0.001               |
| **Total per client**      |                 |              | **~$0.03-0.05/month** |

### Scaling Projections

| Clients | Monthly AI Cost | Annual AI Cost |
| ------- | --------------- | -------------- |
| 100     | $3-5            | $36-60         |
| 250     | $7.50-12.50     | $90-150        |
| 500     | $15-25          | $180-300       |
| 1,000   | $30-50          | $360-600       |

**Target was <$0.20/client/month. Actual: ~$0.03-0.05/client/month — 4-6× under budget.**

---

## Infrastructure Costs (Monthly)

| Service         | Tier       | Cost           | Notes                                         |
| --------------- | ---------- | -------------- | --------------------------------------------- |
| Convex          | Pro        | $25/month      | Real-time backend, 1M function calls included |
| Vercel          | Pro        | $20/month      | 3 apps (client, admin, marketing)             |
| Resend          | Free tier  | $0             | Up to 3,000 emails/month                      |
| Sentry          | Team       | $26/month      | Error monitoring, 3 apps                      |
| Langfuse        | Cloud Free | $0             | 50K observations/month                        |
| Domain          | Annual     | ~$12/year      |                                               |
| **Total fixed** |            | **~$72/month** | Before AI costs                               |

### Total Cost at Scale

| Clients | Fixed + AI | Per-Client/Month |
| ------- | ---------- | ---------------- |
| 100     | $77        | $0.77            |
| 250     | $85        | $0.34            |
| 500     | $97        | $0.19            |
| 1,000   | $122       | $0.12            |

---

## Langfuse Observability Report

### English Trace (2026-03-12)

| Field               | Value                                  |
| ------------------- | -------------------------------------- |
| Trace ID            | `ffd3ee5d-0b6f-4c12-8553-b02fc04745af` |
| Trace name          | `generate-meal-plan`                   |
| User ID             | `m975yrjrjfmmvcran0r3de8hcn822fdz`     |
| Total cost          | $0.01052                               |
| Total latency       | 53.4s                                  |
| Generations         | 2 (1 truncated + 1 retry)              |
| Validation warnings | 6 (all auto-corrected)                 |
| Tags                | `meal-plan`                            |

**Span 1: `primary-gemini-stream`** (truncated)

- Tokens: 10,570 in / 15,760 out — Latency: 39.3s — Cost: $0.00736
- Finish reason: `length` — output hit token limit before completing 7-day JSON

**Span 2: `retry-primary-gemini`** (success)

- Tokens: 10,381 in / 5,313 out — Latency: 14.1s — Cost: $0.00316
- Finish reason: `stop` — Metadata: `reason: truncation-retry`

### Arabic Trace (2026-03-12)

| Field               | Value                                  |
| ------------------- | -------------------------------------- |
| Trace ID            | `b0905287-b249-4a2f-ab4a-4a1ed6a254b0` |
| Trace name          | `generate-meal-plan`                   |
| User ID             | `m975yrjrjfmmvcran0r3de8hcn822fdz`     |
| Total cost          | $0.01298                               |
| Total latency       | 59.3s                                  |
| Generations         | 2 (1 truncated + 1 retry)              |
| Validation warnings | 8 (all auto-corrected)                 |
| Tags                | `meal-plan`                            |

**Span 1: `primary-gemini-stream`** (truncated)

- Tokens: 10,596 in / 21,705 out — Latency: 42.6s — Cost: $0.00974
- Finish reason: `length` — Arabic output 38% larger, hit token limit earlier in plan

**Span 2: `retry-primary-gemini`** (success)

- Tokens: 10,407 in / 5,487 out — Latency: 16.7s — Cost: $0.00324
- Finish reason: `stop` — Metadata: `reason: truncation-retry`

### Error Handling Pipeline

```
AI Generation → JSON Extraction → Validation → Auto-Correction → Save
```

1. **Truncation detection**: If `finishReason === "length"`, auto-retries with simplified prompt (fewer output tokens requested)
2. **JSON extraction**: Handles markdown fences, trailing text, trailing commas, truncated JSON
3. **Macro validation**: Cross-checks P×4 + C×4 + F×9 ≈ calories (±30 cal tolerance)
4. **Auto-correction**: Recalculates stated calories from actual macros when mismatch detected
5. **Timeout**: 4-minute AbortSignal per generation, max 2 retries

---

## OCR Quality Assessment

Both OCR functions use `qwen/qwen3-vl-8b-instruct` via OpenRouter with vision input. Tested 2026-03-12 with real images.

### Payment Screenshot OCR (Instapay Transfer)

**Test image:** IPA-test.PNG — Instapay approved transfer screenshot

**Langfuse trace:** `8f75ec9d` | Latency: 3.2s | Model: qwen/qwen3-vl-8b-instruct

| Field            | Extracted                 | Expected                   | Match     |
| ---------------- | ------------------------- | -------------------------- | --------- |
| amount           | "350 EGP"                 | "350 EGP"                  | ✓ Exact   |
| sender_name      | "ZIAD ADEL MAHMOUD AHMED" | "ZIAD ADEL MAHMOUD AHMED"  | ✓ Exact   |
| reference_number | "443755439121"            | "443755439121"             | ✓ Exact   |
| date             | null                      | null (not prominent in UI) | ✓ Correct |
| bank             | "Instapay"                | "Instapay"                 | ✓ Exact   |

**Result: 5/5 fields correct.** The model correctly identified this as an Instapay transfer, extracted the transfer amount (350 EGP, not the total 350.5 which includes the 0.5 fee), and returned null for date which isn't prominently displayed.

| Metric         | Value         |
| -------------- | ------------- |
| Input tokens   | 2,625         |
| Output tokens  | 66            |
| Input cost     | $0.000158     |
| Output cost    | $0.000026     |
| **Total cost** | **$0.000184** |
| Latency        | 3.2s          |

### InBody OCR (InBody270 Result Sheet)

**Test image:** inbody-test.JPG — InBody270 scan (male, 21yo, 190cm, 89kg, 2024-08-28)

**Langfuse trace:** `11bd4897` | Latency: 4.0s | Model: qwen/qwen3-vl-8b-instruct

| Field              | Extracted | Expected             | Match                       |
| ------------------ | --------- | -------------------- | --------------------------- |
| bodyFatPercentage  | 13.0      | 13.0                 | ✓ Exact                     |
| leanBodyMass       | 44.4      | 77.4 (Fat Free Mass) | ✗ Wrong (confused with SMM) |
| skeletalMuscleMass | 44.4      | 44.4                 | ✓ Exact                     |
| bmi                | 24.7      | 24.7                 | ✓ Exact                     |
| visceralFatLevel   | 5         | 5                    | ✓ Exact                     |
| basalMetabolicRate | 2042      | 2042                 | ✓ Exact                     |
| totalBodyWater     | 56.9      | 56.9                 | ✓ Exact                     |

**Result: 6/7 fields correct.** The one error: `leanBodyMass` returned 44.4 (which is the Skeletal Muscle Mass value) instead of 77.4 (Fat Free Mass listed in Research Parameters). The InBody sheet labels this as "Fat Free Mass" not "Lean Body Mass", and both values appear near each other — the model picked the wrong one. All values passed physiological range validation.

| Metric         | Value         |
| -------------- | ------------- |
| Input tokens   | 1,335         |
| Output tokens  | 89            |
| Input cost     | $0.000080     |
| Output cost    | $0.000036     |
| **Total cost** | **$0.000116** |
| Latency        | 4.0s          |

### OCR Cost Summary

| OCR Type            | Tokens (in/out) | Cost      | Latency | Accuracy   |
| ------------------- | --------------- | --------- | ------- | ---------- |
| Payment screenshot  | 2,625 / 66      | $0.000184 | 3.2s    | 5/5 (100%) |
| InBody result sheet | 1,335 / 89      | $0.000116 | 4.0s    | 6/7 (86%)  |

**Cost context:** OCR is ~60-110× cheaper than meal plan generation ($0.011-0.013/plan). At 1,000 clients:

- Payment OCR (one-time per signup): $0.18 total
- InBody OCR (per check-in, if used): ~$0.28/month (assuming 50% of clients use InBody)
- Combined OCR: <$0.50/month — negligible vs $30-50/month for plan generation

**Note:** Langfuse shows `totalCost: 0` for OCR traces because Langfuse Cloud doesn't have built-in pricing for `qwen/qwen3-vl-8b-instruct` via OpenRouter. Costs above are calculated from OpenRouter pricing: $0.06/M input, $0.40/M output.

---

## AI Output Quality Assessment

### Test Configuration

- Client: 26yo male, 96kg, 180cm, sedentary + 4 training days/week
- Goal: body recomposition
- Language: English
- Plan duration: 7 days

### Nutrition Target Accuracy

Targets calculated deterministically via Mifflin-St Jeor (not by AI):

| Target   | Formula                                        | Value     |
| -------- | ---------------------------------------------- | --------- |
| BMR      | 10×96 + 6.25×180 - 5×26 + 5                    | 1960 kcal |
| TDEE     | 1960 × 1.4 (sedentary + 4×0.05 training bonus) | 2744 kcal |
| Calories | TDEE × 1.0 (body recomposition = maintenance)  | 2744 kcal |
| Protein  | 96kg × 1.6 g/kg                                | 154g      |
| Fat      | 96kg × 0.9 g/kg                                | 86g       |
| Carbs    | (2744 - 154×4 - 86×9) / 4                      | 339g      |

### Daily Macro Adherence (AI-generated meals vs targets)

| Day | Calories | Cal Diff | % Off | Protein | Carbs | Fat         |
| --- | -------- | -------- | ----- | ------- | ----- | ----------- |
| 1   | 2745     | +1       | 0.0%  | 154 ✓   | 339 ✓ | 86 ✓        |
| 2   | 2653     | -91      | -3.3% | 154 ✓   | 339 ✓ | 76 ✗ (-10g) |
| 3   | 2744     | 0        | 0.0%  | 154 ✓   | 339 ✓ | 86 ✓        |
| 4   | 2776     | +32      | +1.2% | 154 ✓   | 339 ✓ | 86 ✓        |
| 5   | 2768     | +24      | +0.9% | 154 ✓   | 339 ✓ | 86 ✓        |
| 6   | 2744     | 0        | 0.0%  | 154 ✓   | 339 ✓ | 86 ✓        |
| 7   | 2694     | -50      | -1.8% | 154 ✓   | 339 ✓ | 81 ✗ (-5g)  |

**Summary:**

- **Protein**: 100% exact — 154g all 7 days
- **Carbs**: 100% exact — 339g all 7 days
- **Fat**: 71% exact (5/7 days), worst deviation -10g
- **Calories**: ±3.3% max, 3/7 days exact

### Per-Meal Macro Cross-Check (P×4 + C×4 + F×9 vs stated calories)

Largest per-meal mismatches (after auto-correction):

| Meal                              | Stated Cal | Macro Cal | Gap |
| --------------------------------- | ---------- | --------- | --- |
| Ground Beef with Rice & Spinach   | 750        | 720       | 30  |
| Tuna Salad Sandwich               | 350        | 375       | 25  |
| Chicken Breast with Sweet Potato  | 750        | 725       | 25  |
| Lean Beef Steak with Sweet Potato | 1000       | 1024      | 24  |
| Shrimp with Brown Rice            | 700        | 680       | 20  |

All within the ±30 cal tolerance. The auto-correction validator caught and fixed 6 meals with larger gaps before saving.

### Egyptian Food Database Usage

The expanded food database (124 items: 104 ingredients + 20 recipes) dramatically improved cultural relevance:

| Day | Egyptian Foods Used                                          |
| --- | ------------------------------------------------------------ |
| 2   | Baladi bread, foul medames, chicken thighs                   |
| 3   | Protein pancakes (recipe), chicken kabsa (recipe)            |
| 5   | Foul medames + eggs + baladi bread (breakfast)               |
| 6   | Chicken shawarma bowl (recipe), grilled kofta + baladi bread |
| 7   | Okra/bamia, healthy koshari (recipe)                         |

**45 unique foods** used across 7 days. Egyptian staples appear naturally in contextually appropriate meals (foul for breakfast, koshari for dinner, kofta with bread).

### Food Database Impact (Before vs After)

| Metric                   | Before (35 foods)            | After (124 foods)                  |
| ------------------------ | ---------------------------- | ---------------------------------- |
| Seed ingredients         | 31                           | 104                                |
| Seed recipes             | 4                            | 20                                 |
| Egyptian-specific items  | ~8                           | ~50+                               |
| Prompt format            | Flat list, no Arabic         | Categorized, bilingual, with fiber |
| AI macro accuracy        | Fabricated for unknown foods | Uses verified USDA/NNI values      |
| Prompt tokens (food ref) | ~1,500                       | ~3,500                             |
| Cost increase            | —                            | +$0.0002/plan (negligible)         |

---

## Arabic AI Output Quality Assessment

### Test Configuration

- Same client: 26yo male, 96kg, 180cm, sedentary + 4 training days/week
- Goal: body recomposition
- Language: **Arabic**
- Plan duration: 7 days
- Same nutrition targets: 2744 cal | 154P | 339C | 86F

### Daily Macro Adherence (Arabic plan vs targets)

| Day | Calories | Cal Diff | % Off | Protein | Carbs | Fat        |
| --- | -------- | -------- | ----- | ------- | ----- | ---------- |
| 1   | 2744     | 0        | 0.0%  | 154 ✓   | 339 ✓ | 86 ✓       |
| 2   | 2806     | +62      | +2.3% | 154 ✓   | 339 ✓ | 86 ✓       |
| 3   | 2744     | 0        | 0.0%  | 154 ✓   | 339 ✓ | 86 ✓       |
| 4   | 2811     | +67      | +2.4% | 154 ✓   | 339 ✓ | 91 ✗ (+5g) |
| 5   | 2776     | +32      | +1.2% | 154 ✓   | 339 ✓ | 86 ✓       |
| 6   | 2791     | +47      | +1.7% | 154 ✓   | 339 ✓ | 86 ✓       |
| 7   | 2786     | +42      | +1.5% | 154 ✓   | 339 ✓ | 86 ✓       |

**Summary:**

- **Protein**: 100% exact — 154g all 7 days
- **Carbs**: 100% exact — 339g all 7 days
- **Fat**: 86% exact (6/7 days), worst deviation +5g (better than English)
- **Calories**: ±2.4% max, 2/7 days exact (slightly higher trend due to auto-correction rounding)

### Per-Meal Macro Cross-Check (Arabic plan)

Largest per-meal mismatches (after auto-correction):

| Meal (Arabic)                  | Translation                               | Stated Cal | Macro Cal | Gap |
| ------------------------------ | ----------------------------------------- | ---------- | --------- | --- |
| فول مدمس مع بيض وخبز بلدي      | Foul with eggs & baladi bread             | 685        | 665       | 20  |
| كبسة دجاج صحية مع سلطة         | Healthy chicken kabsa + salad             | 800        | 785       | 15  |
| شاورما دجاج صحية مع أرز بني    | Healthy chicken shawarma + brown rice     | 800        | 785       | 15  |
| سلمون مشوي مع بطاطا حلوة وسلطة | Grilled salmon + sweet potato             | 800        | 770       | 30  |
| فطير مشلتت (صحي) مع عسل وجبن   | Healthy feteer meshaltet + honey & cheese | 700        | 670       | 30  |

All within the ±30 cal tolerance. 8 meals had larger gaps pre-correction (vs 6 for English).

### Arabic Food Names & Cultural Authenticity

All food names are **genuine Arabic** — not transliterated English:

| Day | Arabic Meals                             | Cultural Notes                                                     |
| --- | ---------------------------------------- | ------------------------------------------------------------------ |
| 1   | فول مدمس مع بيض وخبز بلدي، كفتة لحم بقري | Foul + baladi bread breakfast, kofta dinner — classic Egyptian     |
| 2   | بان كيك بروتين، سمك بلطي مشوي مع فريك    | Tilapia (Nile fish!) with freekeh — authentic Egyptian grain       |
| 3   | بيض أومليت بالخضار، كبسة دجاج صحية       | Kabsa — popular MENA rice dish                                     |
| 4   | شوفان مع حليب وبروتين، ستيك لحم بقري     | Oat + protein breakfast, beef steak dinner                         |
| 5   | ملوخية بالفراخ مع أرز أبيض               | Molokhia with chicken — Egypt's national dish                      |
| 6   | فطير مشلتت (صحي)، شاورما دجاج            | Feteer meshaltet (Egyptian layered pastry!), shawarma              |
| 7   | شكشوكة، حمام مشوي مع فريك                | Shakshuka breakfast, grilled pigeon with freekeh — deeply Egyptian |

**Standout findings:**

- **حمام مشوي مع فريك** (grilled pigeon with freekeh) — an iconic Egyptian dish rarely seen in AI-generated plans
- **فطير مشلتت** (feteer meshaltet) — traditional Egyptian pastry, adapted as "healthy" version
- **سمك بلطي** (tilapia) — the Nile Delta staple, not generic "fish"
- **ملوخية بالفراخ** — Egypt's unofficial national dish, contextually correct for lunch
- All ingredient quantities use Arabic units (جرام, ملعقة, رغيف, بيضة)

### English vs Arabic Quality Comparison

| Metric                | English                     | Arabic                                        |
| --------------------- | --------------------------- | --------------------------------------------- |
| Protein accuracy      | 100% (7/7)                  | 100% (7/7)                                    |
| Carbs accuracy        | 100% (7/7)                  | 100% (7/7)                                    |
| Fat accuracy          | 71% (5/7)                   | 86% (6/7)                                     |
| Max calorie deviation | ±3.3%                       | ±2.4%                                         |
| Validation warnings   | 6                           | 8                                             |
| Egyptian food variety | Good (foul, koshari, kofta) | Excellent (pigeon, feteer, molokhia, tilapia) |
| Food name quality     | English names               | Genuine Arabic (not transliterated)           |
| Cost                  | $0.01052                    | $0.01298 (+23%)                               |
| Latency               | 53.4s                       | 59.3s (+11%)                                  |

---

## Quality Verdict

The AI meal plan generation produces **nutritionally accurate, culturally appropriate** meal plans in both English and Arabic:

- Deterministic calorie/macro targets (code, not AI) ensure mathematical correctness
- AI adherence to targets: protein/carbs 100% exact in both languages, fat within 12% (EN) / 6% (AR), calories within 3.3% (EN) / 2.4% (AR)
- Post-generation validator catches and auto-corrects remaining macro inconsistencies (6 EN / 8 AR corrections)
- **Arabic food names are genuine Arabic** — not transliterated English. Ingredients use Arabic units (جرام, ملعقة, رغيف)
- Arabic plan features deeply Egyptian dishes: pigeon with freekeh, feteer meshaltet, molokhia, Nile tilapia
- Egyptian food coverage is comprehensive in both languages — foul, baladi bread, molokhia, bamia, koshari, kofta, shawarma all appear naturally
- Arabic generation costs 23% more ($0.013 vs $0.011) due to multi-byte token overhead — still well under budget
- Truncation retry mechanism essential for both languages (both hit output token limits on attempt 1)
