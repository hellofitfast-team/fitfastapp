import { useState, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useQuery, useMutation } from "convex/react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { Button } from "@fitfast/ui/button";
import { Input } from "@fitfast/ui/input";
import { Checkbox } from "@fitfast/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@fitfast/ui/dialog";
import { cn } from "@fitfast/ui/cn";
import { useToast } from "@/hooks/use-toast";
import { Plus, Search, Pencil, Trash2, Power, Loader2, X } from "lucide-react";

type Category = "compound" | "accessory" | "isolation" | "warmup" | "cooldown" | "cardio";

const CATEGORIES: Category[] = [
  "compound",
  "accessory",
  "isolation",
  "warmup",
  "cooldown",
  "cardio",
];

interface ExerciseFormData {
  name: string;
  nameAr: string;
  category: Category;
  movementPattern: string;
  primaryMuscles: string;
  secondaryMuscles: string;
  equipment: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  instructions: string;
  instructionsAr: string;
  contraindications: string;
  defaultSets: number;
  defaultRepsMin: number;
  defaultRepsMax: number;
  defaultRestSeconds: number;
  sortOrder: number;
  gifUrl: string;
}

const INITIAL_FORM: ExerciseFormData = {
  name: "",
  nameAr: "",
  category: "compound",
  movementPattern: "push",
  primaryMuscles: "",
  secondaryMuscles: "",
  equipment: "",
  difficulty: "intermediate",
  instructions: "",
  instructionsAr: "",
  contraindications: "",
  defaultSets: 3,
  defaultRepsMin: 8,
  defaultRepsMax: 12,
  defaultRestSeconds: 60,
  sortOrder: 100,
  gifUrl: "",
};

export function ExerciseManager() {
  const { t, i18n } = useTranslation("translation", { keyPrefix: "exercises" });
  const tCommon = (key: string) => i18n.t(`common.${key}`);
  const locale = i18n.language;
  const { toast } = useToast();

  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<Category | "all">("all");
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<Id<"exerciseDatabase"> | null>(null);
  const [form, setForm] = useState<ExerciseFormData>(INITIAL_FORM);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [togglingId, setTogglingId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<Id<"exerciseDatabase">>>(new Set());
  const [bulkDeleting, setBulkDeleting] = useState(false);
  const [bulkDeactivating, setBulkDeactivating] = useState(false);
  const [showBulkDeleteConfirm, setShowBulkDeleteConfirm] = useState(false);

  // Queries
  const allExercises = useQuery(api.exerciseDatabase.listExercises);
  const searchResults = useQuery(
    api.exerciseDatabase.searchExercises,
    searchQuery.trim() ? { query: searchQuery.trim() } : "skip",
  );

  // Mutations
  const createExercise = useMutation(api.exerciseDatabase.createExercise);
  const updateExercise = useMutation(api.exerciseDatabase.updateExercise);
  const toggleActive = useMutation(api.exerciseDatabase.toggleActive);
  const togglePregnancyUnsafe = useMutation(api.exerciseDatabase.togglePregnancyUnsafe);
  const deleteExercise = useMutation(api.exerciseDatabase.deleteExercise);
  const [togglingPregnancyId, setTogglingPregnancyId] = useState<string | null>(null);

  const exercises = searchQuery.trim() ? searchResults : allExercises;
  // imageUrl is dynamically added by listExercises (resolves gifStorageId → CDN URL)
  const filteredExercises = (
    filterCategory === "all" ? exercises : exercises?.filter((e) => e.category === filterCategory)
  ) as (NonNullable<typeof exercises>[number] & { imageUrl?: string })[] | undefined;

  function openAddModal() {
    setEditingId(null);
    setForm(INITIAL_FORM);
    setShowModal(true);
  }

  function openEditModal(exercise: NonNullable<typeof filteredExercises>[number]) {
    setEditingId(exercise._id);
    setForm({
      name: exercise.name,
      nameAr: exercise.nameAr,
      category: exercise.category as Category,
      movementPattern: exercise.movementPattern,
      primaryMuscles: exercise.primaryMuscles.join(", "),
      secondaryMuscles: exercise.secondaryMuscles.join(", "),
      equipment: exercise.equipment.join(", "),
      difficulty: exercise.difficulty,
      instructions: exercise.instructions,
      instructionsAr: exercise.instructionsAr,
      contraindications: exercise.contraindications.join(", "),
      defaultSets: exercise.defaultSets,
      defaultRepsMin: exercise.defaultRepsMin,
      defaultRepsMax: exercise.defaultRepsMax,
      defaultRestSeconds: exercise.defaultRestSeconds,
      sortOrder: exercise.sortOrder ?? 100,
      gifUrl: exercise.gifUrl ?? "",
    });
    setShowModal(true);
  }

  // Validate exercise form fields
  const formValidationError = (() => {
    if (!form.name || !form.nameAr) return null; // handled by disabled state
    if (form.defaultSets < 1) return t("validation.setsMin");
    if (form.defaultRepsMin < 1) return t("validation.repsMin");
    if (form.defaultRepsMax < form.defaultRepsMin) return t("validation.repsMaxMin");
    if (form.defaultRestSeconds < 0) return t("validation.restNegative");
    return null;
  })();

  async function handleSave() {
    if (formValidationError) {
      setSaveError(formValidationError);
      return;
    }
    setSaving(true);
    setSaveError(null);
    try {
      const splitToArray = (s: string) =>
        s
          .split(",")
          .map((x) => x.trim())
          .filter(Boolean);

      const data = {
        name: form.name,
        nameAr: form.nameAr,
        category: form.category,
        movementPattern: form.movementPattern as any,
        primaryMuscles: splitToArray(form.primaryMuscles),
        secondaryMuscles: splitToArray(form.secondaryMuscles),
        equipment: splitToArray(form.equipment),
        difficulty: form.difficulty,
        instructions: form.instructions,
        instructionsAr: form.instructionsAr,
        contraindications: splitToArray(form.contraindications),
        defaultSets: form.defaultSets,
        defaultRepsMin: form.defaultRepsMin,
        defaultRepsMax: form.defaultRepsMax,
        defaultRestSeconds: form.defaultRestSeconds,
        sortOrder: form.sortOrder,
        ...(form.gifUrl.trim() ? { gifUrl: form.gifUrl.trim() } : {}),
      };

      if (editingId) {
        await updateExercise({ id: editingId, ...data });
      } else {
        await createExercise(data);
      }
      setShowModal(false);
    } catch (err) {
      console.error("Save failed:", err);
      setSaveError(err instanceof Error ? err.message : t("saveFailed"));
    } finally {
      setSaving(false);
    }
  }

  async function handleToggle(id: Id<"exerciseDatabase">) {
    setTogglingId(id);
    try {
      await toggleActive({ id });
    } catch (err) {
      console.error("Toggle failed:", err);
      toast({
        title: err instanceof Error ? err.message : t("saveFailed"),
        variant: "destructive",
      });
    } finally {
      setTogglingId(null);
    }
  }

  async function handleTogglePregnancy(id: Id<"exerciseDatabase">) {
    setTogglingPregnancyId(id);
    try {
      await togglePregnancyUnsafe({ id });
    } catch (err) {
      console.error("Toggle pregnancy failed:", err);
      toast({
        title: err instanceof Error ? err.message : t("saveFailed"),
        variant: "destructive",
      });
    } finally {
      setTogglingPregnancyId(null);
    }
  }

  async function handleDelete(id: Id<"exerciseDatabase">) {
    if (!confirm(t("deleteConfirm"))) return;
    try {
      await deleteExercise({ id });
    } catch (err) {
      console.error("Delete failed:", err);
      toast({
        title: err instanceof Error ? err.message : t("saveFailed"),
        variant: "destructive",
      });
    }
  }

  const handleSelect = useCallback((id: Id<"exerciseDatabase">, checked: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  }, []);

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked && filteredExercises) {
        setSelected(new Set(filteredExercises.map((e) => e._id)));
      } else {
        setSelected(new Set());
      }
    },
    [filteredExercises],
  );

  async function handleBulkDelete() {
    setShowBulkDeleteConfirm(false);
    setBulkDeleting(true);
    try {
      const ids = Array.from(selected);
      await Promise.all(ids.map((id) => deleteExercise({ id })));
      toast({ title: t("bulkDeleteSuccess") });
      setSelected(new Set());
    } catch (err) {
      console.error("Bulk delete failed:", err);
      toast({
        title: err instanceof Error ? err.message : t("saveFailed"),
        variant: "destructive",
      });
    } finally {
      setBulkDeleting(false);
    }
  }

  async function handleBulkDeactivate() {
    setBulkDeactivating(true);
    try {
      const activeSelected =
        filteredExercises?.filter((e) => selected.has(e._id) && e.isActive) ?? [];
      await Promise.all(activeSelected.map((e) => toggleActive({ id: e._id })));
      toast({ title: t("bulkDeactivateSuccess") });
      setSelected(new Set());
    } catch (err) {
      console.error("Bulk deactivate failed:", err);
      toast({
        title: err instanceof Error ? err.message : t("saveFailed"),
        variant: "destructive",
      });
    } finally {
      setBulkDeactivating(false);
    }
  }

  const isLoading = exercises === undefined;

  return (
    <div className="space-y-4">
      {/* Search + Filter + Add */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <Input
            placeholder={t("searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ps-9"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value as Category | "all")}
          className="rounded-md border border-stone-200 bg-white px-3 py-2 text-sm"
        >
          <option value="all">{t("allCategories")}</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {t(cat)}
            </option>
          ))}
        </select>
        <Button onClick={openAddModal} className="gap-2">
          <Plus className="h-4 w-4" />
          {t("addExercise")}
        </Button>
      </div>

      {/* Exercise count */}
      {filteredExercises && (
        <p className="text-sm text-stone-500">
          {t("exerciseCount", { count: filteredExercises.length })}
        </p>
      )}

      {/* Bulk Action Bar */}
      {selected.size > 0 && (
        <div className="flex items-center gap-3 rounded-lg border border-stone-200 bg-stone-50 px-4 py-2.5">
          <span className="text-sm font-medium text-stone-700">
            {t("selectedCount", { count: selected.size })}
          </span>
          <div className="flex-1" />
          <Button
            variant="outline"
            size="sm"
            onClick={handleBulkDeactivate}
            disabled={bulkDeactivating || bulkDeleting}
          >
            {bulkDeactivating && <Loader2 className="me-2 h-3.5 w-3.5 animate-spin" />}
            <Power className="me-1.5 h-3.5 w-3.5" />
            {t("deactivateSelected")}
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => setShowBulkDeleteConfirm(true)}
            disabled={bulkDeleting || bulkDeactivating}
          >
            {bulkDeleting && <Loader2 className="me-2 h-3.5 w-3.5 animate-spin" />}
            <Trash2 className="me-1.5 h-3.5 w-3.5" />
            {t("deleteSelected")}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setSelected(new Set())}>
            <X className="me-1.5 h-3.5 w-3.5" />
            {t("clearSelection")}
          </Button>
        </div>
      )}

      {/* Exercise List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-stone-400" />
        </div>
      ) : !filteredExercises || filteredExercises.length === 0 ? (
        <p className="py-12 text-center text-sm text-stone-400">{t("noExercises")}</p>
      ) : (
        <ExerciseTable
          exercises={filteredExercises}
          togglingId={togglingId}
          togglingPregnancyId={togglingPregnancyId}
          onToggle={handleToggle}
          onTogglePregnancy={handleTogglePregnancy}
          onEdit={openEditModal}
          onDelete={handleDelete}
          selected={selected}
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
          t={t}
          tCommon={tCommon}
        />
      )}

      {/* Bulk Delete Confirmation Dialog */}
      <Dialog open={showBulkDeleteConfirm} onOpenChange={setShowBulkDeleteConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("bulkDeleteConfirmTitle")}</DialogTitle>
            <DialogDescription>
              {t("bulkDeleteConfirmDescription", { count: selected.size })}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBulkDeleteConfirm(false)}>
              {tCommon("cancel")}
            </Button>
            <Button variant="destructive" onClick={handleBulkDelete}>
              <Trash2 className="me-1.5 h-3.5 w-3.5" />
              {t("deleteSelected")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add/Edit Modal — uses Dialog for focus trap, Escape key, aria-modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingId ? t("editExercise") : t("addExercise")}</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-stone-600">{t("name")}</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-stone-600">{t("nameAr")}</label>
              <Input
                dir="rtl"
                value={form.nameAr}
                onChange={(e) => setForm({ ...form, nameAr: e.target.value })}
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("category")}
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value as Category })}
                className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {t(cat)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("movementPattern")}
              </label>
              <select
                value={form.movementPattern}
                onChange={(e) => setForm({ ...form, movementPattern: e.target.value })}
                className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
              >
                {["push", "pull", "squat", "hinge", "carry", "rotation", "other"].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("difficulty")}
              </label>
              <select
                value={form.difficulty}
                onChange={(e) => setForm({ ...form, difficulty: e.target.value as any })}
                className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
              >
                {["beginner", "intermediate", "advanced"].map((d) => (
                  <option key={d} value={d}>
                    {t(d)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("sortOrder")}
              </label>
              <Input
                type="number"
                value={form.sortOrder}
                onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) })}
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("primaryMuscles")} (comma-separated)
              </label>
              <Input
                value={form.primaryMuscles}
                onChange={(e) => setForm({ ...form, primaryMuscles: e.target.value })}
                placeholder="chest, shoulders, triceps"
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("secondaryMuscles")} (comma-separated)
              </label>
              <Input
                value={form.secondaryMuscles}
                onChange={(e) => setForm({ ...form, secondaryMuscles: e.target.value })}
                placeholder="core, back"
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("equipment")} (comma-separated)
              </label>
              <Input
                value={form.equipment}
                onChange={(e) => setForm({ ...form, equipment: e.target.value })}
                placeholder="barbell, bench"
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("contraindications")} (comma-separated)
              </label>
              <Input
                value={form.contraindications}
                onChange={(e) => setForm({ ...form, contraindications: e.target.value })}
                placeholder="knee, lower back"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("instructions")}
              </label>
              <textarea
                value={form.instructions}
                onChange={(e) => setForm({ ...form, instructions: e.target.value })}
                rows={2}
                className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("instructionsAr")}
              </label>
              <textarea
                dir="rtl"
                value={form.instructionsAr}
                onChange={(e) => setForm({ ...form, instructionsAr: e.target.value })}
                rows={2}
                className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm"
              />
            </div>

            <div className="md:col-span-2">
              {/* Show stored image if it exists */}
              {editingId &&
                (() => {
                  const editExercise = filteredExercises?.find((e) => e._id === editingId);
                  return editExercise?.imageUrl && !form.gifUrl.trim() ? (
                    <div className="mb-3">
                      <p className="mb-1 text-xs font-medium text-stone-600">{t("currentImage")}</p>
                      <img
                        src={editExercise.imageUrl}
                        alt={editExercise.name}
                        width={128}
                        height={128}
                        decoding="async"
                        loading="lazy"
                        className="h-32 w-32 rounded-lg border border-stone-200 bg-stone-50 object-cover"
                      />
                    </div>
                  ) : null;
                })()}
              <label className="mb-1 block text-xs font-medium text-stone-600">{t("gifUrl")}</label>
              <div className="flex gap-2">
                <Input
                  value={form.gifUrl}
                  onChange={(e) => setForm({ ...form, gifUrl: e.target.value })}
                  placeholder={t("gifUrlPlaceholder")}
                  className="flex-1"
                />
                {form.gifUrl.trim() && (
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, gifUrl: "" })}
                    className="rounded-md border border-stone-200 px-2 text-xs text-stone-500 hover:bg-stone-50"
                  >
                    {t("removeGif")}
                  </button>
                )}
              </div>
              {form.gifUrl.trim() && /^https:\/\/.+/.test(form.gifUrl.trim()) && (
                <div className="mt-2">
                  <p className="mb-1 text-xs text-stone-500">{t("gifPreview")}</p>
                  <img
                    src={form.gifUrl}
                    alt="Exercise GIF preview"
                    width={128}
                    height={128}
                    decoding="async"
                    className="h-32 w-32 rounded-lg border border-stone-200 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("defaultSets")}
              </label>
              <Input
                type="number"
                value={form.defaultSets}
                onChange={(e) => setForm({ ...form, defaultSets: Number(e.target.value) })}
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("defaultRepsMin")}
              </label>
              <Input
                type="number"
                value={form.defaultRepsMin}
                onChange={(e) => setForm({ ...form, defaultRepsMin: Number(e.target.value) })}
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("defaultRepsMax")}
              </label>
              <Input
                type="number"
                value={form.defaultRepsMax}
                onChange={(e) => setForm({ ...form, defaultRepsMax: Number(e.target.value) })}
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-stone-600">
                {t("defaultRestSeconds")}
              </label>
              <Input
                type="number"
                value={form.defaultRestSeconds}
                onChange={(e) => setForm({ ...form, defaultRestSeconds: Number(e.target.value) })}
              />
            </div>
          </div>

          {saveError && (
            <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{saveError}</p>
          )}

          <div className="mt-6 flex justify-end gap-3">
            <Button variant="outline" onClick={() => setShowModal(false)}>
              {tCommon("cancel")}
            </Button>
            <Button
              onClick={handleSave}
              disabled={saving || !form.name || !form.nameAr || !!formValidationError}
            >
              {saving && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
              {tCommon("save")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ExerciseTable -- virtualized table for large exercise databases
// ---------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ExerciseItem = any;

function ExerciseTable({
  exercises,
  togglingId,
  togglingPregnancyId,
  onToggle,
  onTogglePregnancy,
  onEdit,
  onDelete,
  selected,
  onSelect,
  onSelectAll,
  t,
  tCommon,
}: {
  exercises: ExerciseItem[];
  togglingId: string | null;
  togglingPregnancyId: string | null;
  onToggle: (id: Id<"exerciseDatabase">) => void;
  onTogglePregnancy: (id: Id<"exerciseDatabase">) => void;
  onEdit: (exercise: ExerciseItem) => void;
  onDelete: (id: Id<"exerciseDatabase">) => void;
  selected: Set<Id<"exerciseDatabase">>;
  onSelect: (id: Id<"exerciseDatabase">, checked: boolean) => void;
  onSelectAll: (checked: boolean) => void;
  t: (key: string) => string;
  tCommon: (key: string) => string;
}) {
  const allSelected = exercises.length > 0 && exercises.every((e) => selected.has(e._id));
  const someSelected = exercises.some((e) => selected.has(e._id));
  const headerChecked: import("@fitfast/ui/checkbox").CheckedState = allSelected
    ? true
    : someSelected
      ? "indeterminate"
      : false;
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: exercises.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 58,
    overscan: 10,
  });

  return (
    <div className="overflow-hidden rounded-lg border border-stone-200">
      {/* Header — uses same flex layout + widths as rows */}
      <div className="flex items-center bg-stone-50 text-xs font-medium text-stone-600">
        <div className="w-10 shrink-0 px-3 py-3 text-center">
          <Checkbox
            checked={headerChecked}
            onCheckedChange={onSelectAll}
            aria-label={t("selectAll")}
          />
        </div>
        <div className="w-14 shrink-0 px-3 py-3">{t("image")}</div>
        <div className="min-w-0 flex-1 px-3 py-3">{t("name")}</div>
        <div className="hidden min-w-0 flex-1 px-3 py-3 text-end xl:block">{t("nameAr")}</div>
        <div className="hidden w-28 shrink-0 px-3 py-3 md:block">{t("category")}</div>
        <div className="hidden w-32 shrink-0 px-3 py-3 lg:block">{t("difficulty")}</div>
        <div className="hidden w-44 shrink-0 px-3 py-3 xl:block">{t("primaryMuscles")}</div>
        <div className="w-16 shrink-0 px-3 py-3 text-center">{t("isActive")}</div>
        <div className="hidden w-24 shrink-0 px-3 py-3 text-center xl:block">
          {t("pregnancyUnsafe")}
        </div>
        <div className="w-20 shrink-0 px-3 py-3 text-end">{tCommon("edit")}</div>
      </div>

      {/* Virtualized rows */}
      <div ref={parentRef} style={{ maxHeight: "70vh", overflow: "auto" }}>
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {virtualizer.getVirtualItems().map((virtualRow) => {
            const exercise = exercises[virtualRow.index];
            return (
              <div
                key={exercise._id}
                data-index={virtualRow.index}
                ref={virtualizer.measureElement}
                className={cn(
                  "absolute top-0 left-0 flex w-full items-center border-b border-stone-100 text-sm transition-colors hover:bg-stone-50",
                  !exercise.isActive && "opacity-50",
                  selected.has(exercise._id) && "bg-stone-50",
                )}
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <div className="flex w-10 shrink-0 items-center justify-center px-3 py-3">
                  <Checkbox
                    checked={selected.has(exercise._id)}
                    onCheckedChange={(checked) => onSelect(exercise._id, checked)}
                    aria-label={`${t("selectExercise")} ${exercise.name}`}
                  />
                </div>
                <div className="w-14 shrink-0 px-3 py-3">
                  {exercise.imageUrl ? (
                    <img
                      src={exercise.imageUrl}
                      alt={exercise.name}
                      width={40}
                      height={40}
                      decoding="async"
                      className="h-10 w-10 rounded-md border border-stone-200 bg-stone-50 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-dashed border-stone-200 text-xs text-stone-300">
                      —
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1 truncate px-3 py-3 font-medium">{exercise.name}</div>
                <div
                  className="hidden min-w-0 flex-1 truncate px-3 py-3 text-end text-stone-500 xl:block"
                  dir="rtl"
                >
                  {exercise.nameAr}
                </div>
                <div className="hidden w-28 shrink-0 px-3 py-3 md:block">
                  <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600">
                    {t(exercise.category)}
                  </span>
                </div>
                <div className="hidden w-32 shrink-0 px-3 py-3 text-stone-500 lg:block">
                  {t(exercise.difficulty)}
                </div>
                <div className="hidden w-44 shrink-0 truncate px-3 py-3 text-stone-500 xl:block">
                  {exercise.primaryMuscles.slice(0, 3).join(", ")}
                </div>
                <div className="w-16 shrink-0 px-3 py-3 text-center">
                  <button
                    onClick={() => onToggle(exercise._id)}
                    disabled={togglingId === exercise._id}
                    className={cn(
                      "mx-auto flex h-7 w-7 items-center justify-center rounded-md transition-colors",
                      exercise.isActive
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-stone-100 text-stone-400 hover:bg-stone-200",
                    )}
                  >
                    {togglingId === exercise._id ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <Power className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
                <div className="hidden w-24 shrink-0 px-3 py-3 text-center xl:block">
                  <button
                    onClick={() => onTogglePregnancy(exercise._id)}
                    disabled={togglingPregnancyId === exercise._id}
                    className={cn(
                      "mx-auto flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold transition-colors",
                      exercise.pregnancyUnsafe
                        ? "bg-red-100 text-red-600 hover:bg-red-200"
                        : "bg-stone-100 text-stone-400 hover:bg-stone-200",
                    )}
                    title={
                      exercise.pregnancyUnsafe ? "Marked as pregnancy-unsafe" : "Safe for pregnancy"
                    }
                  >
                    {togglingPregnancyId === exercise._id ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : exercise.pregnancyUnsafe ? (
                      "⚠"
                    ) : (
                      "✓"
                    )}
                  </button>
                </div>
                <div className="w-20 shrink-0 px-3 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => onEdit(exercise)}
                      className="flex h-7 w-7 items-center justify-center rounded-md text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-600"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => onDelete(exercise._id)}
                      className="flex h-7 w-7 items-center justify-center rounded-md text-stone-400 transition-colors hover:bg-red-50 hover:text-red-500"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
