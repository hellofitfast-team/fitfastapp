"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useConvexAuth, useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { createLogger } from "@fitfast/config/logger";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@fitfast/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@fitfast/ui/dialog";

const log = createLogger("admin-faqs");
import { HelpCircle, Plus, Trash2, Save, X, Pencil, Loader2 } from "lucide-react";

export function FaqManager() {
  const t = useTranslations("admin");
  const tCommon = useTranslations("common");
  const { isAuthenticated } = useConvexAuth();
  const enFaqs = useQuery(api.faqs.getFAQs, isAuthenticated ? { language: "en" } : "skip");
  const arFaqs = useQuery(api.faqs.getFAQs, isAuthenticated ? { language: "ar" } : "skip");
  const createFAQ = useMutation(api.faqs.createFAQ);
  const updateFAQ = useMutation(api.faqs.updateFAQ);
  const deleteFAQ = useMutation(api.faqs.deleteFAQ);
  const bulkDeleteFAQs = useMutation(api.faqs.bulkDeleteFAQs);

  const { toast } = useToast();
  const allFaqs = [...(enFaqs ?? []), ...(arFaqs ?? [])];

  const [editingId, setEditingId] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [newLang, setNewLang] = useState<"en" | "ar">("en");
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Bulk selection state
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [showBulkDeleteDialog, setShowBulkDeleteDialog] = useState(false);
  const [isBulkDeleting, setIsBulkDeleting] = useState(false);

  const isAllSelected = allFaqs.length > 0 && selectedIds.size === allFaqs.length;

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(allFaqs.map((f) => f._id)));
    }
  };

  const handleCreate = async () => {
    if (!newQuestion.trim() || !newAnswer.trim()) return;
    setIsSaving(true);
    try {
      await createFAQ({
        question: newQuestion,
        answer: newAnswer,
        language: newLang,
        displayOrder: allFaqs.length,
      });
      setNewQuestion("");
      setNewAnswer("");
      setShowNew(false);
    } catch (err) {
      log.error({ err, language: newLang }, "Failed to create FAQ");
      toast({ title: t("faqSaveFailed"), variant: "destructive" });
    }
    setIsSaving(false);
  };

  const handleEdit = (faq: { _id: Id<"faqs">; question: string; answer: string }) => {
    setEditingId(faq._id);
    setEditQuestion(faq.question);
    setEditAnswer(faq.answer);
  };

  const handleSave = async (faqId: Id<"faqs">) => {
    setIsSaving(true);
    try {
      await updateFAQ({ faqId, question: editQuestion, answer: editAnswer });
      setEditingId(null);
    } catch (err) {
      log.error({ err, faqId }, "Failed to update FAQ");
      toast({ title: t("faqSaveFailed"), variant: "destructive" });
    }
    setIsSaving(false);
  };

  const handleDelete = async (faqId: Id<"faqs">) => {
    if (!window.confirm(t("confirmDeleteFaq"))) return;
    try {
      await deleteFAQ({ faqId });
      setSelectedIds((prev) => {
        const next = new Set(prev);
        next.delete(faqId);
        return next;
      });
    } catch (err) {
      log.error({ err, faqId }, "Failed to delete FAQ");
      toast({ title: t("faqDeleteFailed"), variant: "destructive" });
    }
  };

  const handleBulkDelete = async () => {
    setIsBulkDeleting(true);
    try {
      const ids = Array.from(selectedIds) as Id<"faqs">[];
      await bulkDeleteFAQs({ faqIds: ids });
      toast({
        title: t("bulkDeleteFaqSuccess", { count: ids.length }),
        variant: "success",
      });
      setSelectedIds(new Set());
    } catch (err) {
      log.error({ err }, "Failed to bulk delete FAQs");
      toast({ title: t("bulkDeleteFaqFailed"), variant: "destructive" });
    }
    setIsBulkDeleting(false);
    setShowBulkDeleteDialog(false);
  };

  return (
    <div className="space-y-4">
      {/* Action bar: Add FAQ + bulk actions */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setShowNew(!showNew)}
          className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors"
        >
          {showNew ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {showNew ? t("cancel") : t("addFaq")}
        </button>

        {allFaqs.length > 0 && (
          <>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={isAllSelected}
                onCheckedChange={toggleSelectAll}
                disabled={isBulkDeleting}
                aria-label={t("selectAll")}
              />
              <span className="text-xs text-stone-500">{t("selectAll")}</span>
            </div>

            {selectedIds.size > 0 && (
              <button
                type="button"
                onClick={() => setShowBulkDeleteDialog(true)}
                disabled={isBulkDeleting}
                className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-600 transition-colors hover:bg-red-100 disabled:opacity-50"
              >
                <Trash2 className="h-3.5 w-3.5" />
                {t("deleteSelected")} ({selectedIds.size})
              </button>
            )}
          </>
        )}
      </div>

      {/* New FAQ form */}
      {showNew && (
        <div className="space-y-3 rounded-xl border border-stone-200 bg-white p-5">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setNewLang("en")}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                newLang === "en"
                  ? "bg-primary text-white"
                  : "border border-stone-200 text-stone-600 hover:bg-stone-50"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setNewLang("ar")}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                newLang === "ar"
                  ? "bg-primary text-white"
                  : "border border-stone-200 text-stone-600 hover:bg-stone-50"
              }`}
            >
              AR
            </button>
          </div>
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder={t("questionPlaceholder")}
            className="focus:ring-primary/20 focus:border-primary w-full rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm font-medium text-stone-900 transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none"
          />
          <textarea
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            placeholder={t("answerPlaceholder")}
            rows={3}
            className="focus:ring-primary/20 focus:border-primary w-full resize-none rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm text-stone-900 transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleCreate}
            disabled={isSaving || !newQuestion.trim() || !newAnswer.trim()}
            className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium text-white transition-colors disabled:opacity-50"
          >
            <Save className="h-3 w-3" />
            {t("save")}
          </button>
        </div>
      )}

      {/* FAQ list */}
      {allFaqs.length === 0 && !showNew ? (
        <div className="rounded-xl border border-stone-200 bg-white p-12 text-center">
          <HelpCircle className="mx-auto mb-4 h-12 w-12 text-stone-300" />
          <p className="font-medium text-stone-500">{t("noResults")}</p>
        </div>
      ) : (
        <div className="space-y-2">
          {allFaqs.map((faq) => (
            <div
              key={faq._id}
              className={`rounded-xl border bg-white transition-colors ${
                selectedIds.has(faq._id)
                  ? "border-red-200 bg-red-50/30"
                  : "border-stone-200 hover:border-stone-300"
              }`}
            >
              {editingId === faq._id ? (
                <div className="space-y-3 p-5">
                  <input
                    type="text"
                    value={editQuestion}
                    onChange={(e) => setEditQuestion(e.target.value)}
                    className="focus:ring-primary/20 focus:border-primary w-full rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm font-medium text-stone-900 transition-all focus:ring-2 focus:outline-none"
                  />
                  <textarea
                    value={editAnswer}
                    onChange={(e) => setEditAnswer(e.target.value)}
                    rows={3}
                    className="focus:ring-primary/20 focus:border-primary w-full resize-none rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm text-stone-900 transition-all focus:ring-2 focus:outline-none"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleSave(faq._id)}
                      disabled={isSaving}
                      className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium text-white transition-colors disabled:opacity-50"
                    >
                      <Save className="h-3 w-3" />
                      {t("save")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="flex items-center gap-2 rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-50"
                    >
                      {t("cancel")}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3 p-4">
                  <div className="flex pt-0.5">
                    <Checkbox
                      checked={selectedIds.has(faq._id)}
                      onCheckedChange={() => toggleSelect(faq._id)}
                      disabled={isBulkDeleting}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-stone-900">{faq.question}</p>
                    <p className="mt-1 line-clamp-2 text-xs text-stone-500">{faq.answer}</p>
                    <span className="mt-2 inline-block rounded-full border border-stone-200 px-2 py-0.5 text-[10px] font-medium text-stone-500">
                      {faq.language.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <button
                      type="button"
                      onClick={() => handleEdit(faq)}
                      aria-label={tCommon("edit")}
                      className="hover:border-primary/30 hover:text-primary flex h-11 w-11 items-center justify-center rounded-lg border border-stone-200 text-stone-400 transition-colors"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(faq._id)}
                      aria-label={tCommon("delete")}
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-stone-200 text-stone-400 transition-colors hover:border-red-300 hover:text-red-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Bulk delete confirmation dialog */}
      <Dialog
        open={showBulkDeleteDialog}
        onOpenChange={(open) => {
          if (!isBulkDeleting) setShowBulkDeleteDialog(open);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("deleteSelected")}</DialogTitle>
            <DialogDescription>
              {t("confirmBulkDeleteFaq", { count: selectedIds.size })}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              type="button"
              onClick={() => setShowBulkDeleteDialog(false)}
              disabled={isBulkDeleting}
              className="rounded-lg border border-stone-200 px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-50 disabled:opacity-50"
            >
              {t("cancel")}
            </button>
            <button
              type="button"
              onClick={handleBulkDelete}
              disabled={isBulkDeleting}
              className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 disabled:opacity-50"
            >
              {isBulkDeleting && <Loader2 className="h-4 w-4 animate-spin" />}
              {t("deleteSelected")}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
