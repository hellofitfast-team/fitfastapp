import { c as n } from "./createLucideIcon-CflinLEd.js";
import { e as t, u as e, a as r } from "./index-BVud5pVb.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  i = n("zap", u);
function c() {
  const { isAuthenticated: a } = t(),
    o = e(r.workoutPlans.getCurrentPlan, a ? {} : "skip");
  return { workoutPlan: o ?? null, isLoading: a && o === void 0, error: null };
}
export { i as Z, c as u };
