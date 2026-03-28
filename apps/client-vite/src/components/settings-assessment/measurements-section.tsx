import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Ruler, Loader2 } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@convex/_generated/api";
import { toast } from "@fitfast/ui/use-toast";

export function MeasurementsSection({ assessment }: { assessment: any }) {
  const { t } = useTranslation("settings");
  const { t: tUnits } = useTranslation("units");
  const submitAssessment = useMutation(api.assessments.submitAssessment);

  const m = assessment.measurements as Record<string, number | undefined> | undefined;
  const [weight, setWeight] = useState(String(assessment.currentWeight ?? ""));
  const [height, setHeight] = useState(String(assessment.height ?? ""));
  const [age, setAge] = useState(String(assessment.age ?? ""));
  const [chest, setChest] = useState(String(m?.chest ?? ""));
  const [waist, setWaist] = useState(String(m?.waist ?? ""));
  const [hips, setHips] = useState(String(m?.hips ?? ""));
  const [arms, setArms] = useState(String(m?.arms ?? ""));
  const [thighs, setThighs] = useState(String(m?.thighs ?? ""));
  const [isSaving, setIsSaving] = useState(false);

  const parse = (v: string) => (v.trim() ? parseFloat(v) : undefined);

  const hasChanges =
    parse(weight) !== assessment.currentWeight ||
    parse(height) !== assessment.height ||
    parse(age) !== assessment.age ||
    parse(chest) !== m?.chest ||
    parse(waist) !== m?.waist ||
    parse(hips) !== m?.hips ||
    parse(arms) !== m?.arms ||
    parse(thighs) !== m?.thighs;

  const handleSave = async () => {
    if (!hasChanges) return;
    setIsSaving(true);
    try {
      await submitAssessment({
        ...(parse(weight) !== undefined ? { currentWeight: parse(weight) } : {}),
        ...(parse(height) !== undefined ? { height: parse(height) } : {}),
        ...(parse(age) !== undefined ? { age: parse(age) } : {}),
        measurements: {
          chest: parse(chest),
          waist: parse(waist),
          hips: parse(hips),
          arms: parse(arms),
          thighs: parse(thighs),
        },
        measurementMethod: "manual",
      });
      toast({ title: t("assessment.saved"), variant: "success" });
    } catch {
      toast({ title: t("assessment.noChanges"), variant: "destructive" });
    }
    setIsSaving(false);
  };

  const inputClass =
    "border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm focus:ring-2 focus:outline-none";

  return (
    <div className="border-border bg-card overflow-hidden rounded-xl border">
      <div className="border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4">
        <Ruler className="text-primary h-4 w-4" />
        <h3 className="text-sm font-semibold">{t("assessment.measurementsTitle")}</h3>
      </div>
      <div className="space-y-4 p-4">
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="mb-1.5 block text-xs font-medium">
              {t("assessment.currentWeight")} ({tUnits("kg")})
            </label>
            <input
              type="number"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium">
              {t("assessment.height")} ({tUnits("cm")})
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium">{t("assessment.age")}</label>
            <input
              type="number"
              min={13}
              max={120}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
        <div className="border-border border-t pt-3">
          <p className="text-muted-foreground mb-2 text-xs font-medium">
            Body Measurements ({tUnits("cm")})
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { key: "chest", value: chest, set: setChest },
              { key: "waist", value: waist, set: setWaist },
              { key: "hips", value: hips, set: setHips },
              { key: "arms", value: arms, set: setArms },
              { key: "thighs", value: thighs, set: setThighs },
            ].map(({ key, value, set }) => (
              <div key={key}>
                <label className="mb-1 block text-xs font-medium">{t(`assessment.${key}`)}</label>
                <input
                  type="number"
                  step="0.1"
                  value={value}
                  onChange={(e) => set(e.target.value)}
                  className={inputClass}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={handleSave}
          disabled={!hasChanges || isSaving}
          className="bg-primary hover:bg-primary/90 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-50"
        >
          {isSaving ? (
            <Loader2 className="mx-auto h-4 w-4 animate-spin" />
          ) : (
            t(hasChanges ? "assessment.save" : "assessment.noChanges")
          )}
        </button>
      </div>
    </div>
  );
}
