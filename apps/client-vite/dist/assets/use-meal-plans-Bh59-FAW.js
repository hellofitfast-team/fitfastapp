import { e as a, u, a as r } from "./index-BVud5pVb.js";
function t() {
  const { isAuthenticated: e } = a(),
    n = u(r.mealPlans.getCurrentPlan, e ? {} : "skip");
  return { mealPlan: n ?? null, isLoading: e && n === void 0, error: null };
}
export { t as u };
