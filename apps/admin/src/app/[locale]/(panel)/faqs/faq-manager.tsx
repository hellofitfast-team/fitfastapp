"use client";

import { useState, useMemo } from "react";
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
  const faqs = useQuery(api.faqs.getFAQs, isAuthenticated ? { language: "en" } : "skip");
  const createFAQ = useMutation(api.faqs.createFAQ);
  const updateFAQ = useMutation(api.faqs.updateFAQ);
  const deleteFAQ = useMutation(api.faqs.deleteFAQ);
  const bulkDeleteFAQs = useMutation(api.faqs.bulkDeleteFAQs);

  const { toast } = useToast();
  const allFaqs = faqs ?? [];

  const [editingId, setEditingId] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [editQuestionEn, setEditQuestionEn] = useState("");
  const [editAnswerEn, setEditAnswerEn] = useState("");
  const [editQuestionAr, setEditQuestionAr] = useState("");
  const [editAnswerAr, setEditAnswerAr] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Bulk selection state
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [showBulkDeleteDialog, setShowBulkDeleteDialog] = useState(false);
  const [isBulkDeleting, setIsBulkDeleting] = useState(false);

  // Filter out stale IDs that no longer exist in the current FAQ list
  const allFaqIds = useMemo(() => new Set(allFaqs.map((f) => f._id)), [allFaqs]);
  const validSelectedIds = useMemo(
    () => new Set([...selectedIds].filter((id) => allFaqIds.has(id as Id<"faqs">))),
    [selectedIds, allFaqIds],
  );

  const isAllSelected = allFaqs.length > 0 && validSelectedIds.size === allFaqs.length;
  const isSomeSelected = validSelectedIds.size > 0 && !isAllSelected;

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
        questionEn: newQuestion,
        answerEn: newAnswer,
        displayOrder: allFaqs.length,
      });
      setNewQuestion("");
      setNewAnswer("");
      setShowNew(false);
    } catch (err) {
      log.error({ err }, "Failed to create FAQ");
      toast({ title: t("faqSaveFailed"), variant: "destructive" });
    }
    setIsSaving(false);
  };

  const handleEdit = (faq: Record<string, unknown> & { _id: Id<"faqs"> }) => {
    setEditingId(faq._id);
    setEditQuestionEn((faq.questionEn as string) ?? "");
    setEditAnswerEn((faq.answerEn as string) ?? "");
    setEditQuestionAr((faq.questionAr as string) ?? "");
    setEditAnswerAr((faq.answerAr as string) ?? "");
  };

  const handleSave = async (faqId: Id<"faqs">) => {
    setIsSaving(true);
    try {
      await updateFAQ({
        faqId,
        questionEn: editQuestionEn,
        answerEn: editAnswerEn,
        questionAr: editQuestionAr || undefined,
        answerAr: editAnswerAr || undefined,
      });
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
    const ids = Array.from(validSelectedIds) as Id<"faqs">[];
    if (ids.length === 0) {
      setShowBulkDeleteDialog(false);
      return;
    }
    setIsBulkDeleting(true);
    try {
      await bulkDeleteFAQs({ faqIds: ids });
      toast({
        title: t("bulkDeleteFaqSuccess", { count: ids.length }),
        variant: "success",
      });
      setSelectedIds(new Set());
      setShowBulkDeleteDialog(false);
    } catch (err) {
      log.error({ err }, "Failed to bulk delete FAQs");
      toast({ title: t("bulkDeleteFaqFailed"), variant: "destructive" });
    } finally {
      setIsBulkDeleting(false);
    }
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
                checked={isAllSelected ? true : isSomeSelected ? "indeterminate" : false}
                onCheckedChange={toggleSelectAll}
                disabled={isBulkDeleting}
                aria-label={t("selectAll")}
              />
              <span className="text-xs text-stone-500">{t("selectAll")}</span>
            </div>

            {validSelectedIds.size > 0 && (
              <button
                type="button"
                onClick={() => setShowBulkDeleteDialog(true)}
                disabled={isBulkDeleting}
                className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-600 transition-colors hover:bg-red-100 disabled:opacity-50"
              >
                <Trash2 className="h-3.5 w-3.5" />
                {t("deleteSelected")} ({validSelectedIds.size})
              </button>
            )}
          </>
        )}
      </div>

      {/* New FAQ form */}
      {showNew && (
        <div className="space-y-3 rounded-xl border border-stone-200 bg-white p-5">
          <p className="text-xs font-medium text-stone-500">{t("autoTranslated")}</p>
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder={t("questionEnPlaceholder")}
            className="focus:ring-primary/20 focus:border-primary w-full rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm font-medium text-stone-900 transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none"
          />
          <textarea
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            placeholder={t("answerEnPlaceholder")}
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
                validSelectedIds.has(faq._id)
                  ? "border-red-200 bg-red-50/30"
                  : "border-stone-200 hover:border-stone-300"
              }`}
            >
              {editingId === faq._id ? (
                <div className="space-y-3 p-5">
                  {/* English fields */}
                  <p className="text-xs font-medium text-stone-500">EN</p>
                  <input
                    type="text"
                    value={editQuestionEn}
                    onChange={(e) => setEditQuestionEn(e.target.value)}
                    placeholder={t("questionEnPlaceholder")}
                    className="focus:ring-primary/20 focus:border-primary w-full rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm font-medium text-stone-900 transition-all focus:ring-2 focus:outline-none"
                  />
                  <textarea
                    value={editAnswerEn}
                    onChange={(e) => setEditAnswerEn(e.target.value)}
                    placeholder={t("answerEnPlaceholder")}
                    rows={3}
                    className="focus:ring-primary/20 focus:border-primary w-full resize-none rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm text-stone-900 transition-all focus:ring-2 focus:outline-none"
                  />
                  {/* Arabic fields */}
                  <p className="text-xs font-medium text-stone-500">AR</p>
                  <input
                    type="text"
                    dir="rtl"
                    value={editQuestionAr}
                    onChange={(e) => setEditQuestionAr(e.target.value)}
                    placeholder={t("questionArPlaceholder")}
                    className="focus:ring-primary/20 focus:border-primary w-full rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm font-medium text-stone-900 transition-all focus:ring-2 focus:outline-none"
                  />
                  <textarea
                    dir="rtl"
                    value={editAnswerAr}
                    onChange={(e) => setEditAnswerAr(e.target.value)}
                    placeholder={t("answerArPlaceholder")}
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
                      checked={validSelectedIds.has(faq._id)}
                      onCheckedChange={() => toggleSelect(faq._id)}
                      disabled={isBulkDeleting}
                      aria-label={t("selectFaq", {
                        question:
                          ((faq as Record<string, unknown>).questionEn as string) ?? faq.question,
                      })}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    {/* English text */}
                    <p className="text-sm font-medium text-stone-900">
                      {((faq as Record<string, unknown>).questionEn as string) ?? faq.question}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-stone-500">
                      {((faq as Record<string, unknown>).answerEn as string) ?? faq.answer}
                    </p>
                    {/* Arabic preview */}
                    {(faq as Record<string, unknown>).questionAr && (
                      <div className="mt-2 border-t border-stone-100 pt-2">
                        <span className="mr-1.5 inline-block rounded bg-stone-100 px-1.5 py-0.5 text-[10px] font-semibold text-stone-500">
                          AR
                        </span>
                        <span dir="rtl" className="text-xs text-stone-500">
                          {(faq as Record<string, unknown>).questionAr as string}
                        </span>
                      </div>
                    )}
                    {/* Translation status indicators */}
                    {(faq as Record<string, unknown>).translationStatus === "pending" && (
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <Loader2 className="h-3 w-3 animate-spin text-amber-500" />
                        <span className="text-[10px] font-medium text-amber-600">
                          {t("translating")}
                        </span>
                      </div>
                    )}
                    {(faq as Record<string, unknown>).translationStatus === "failed" && (
                      <span className="mt-1.5 inline-block text-[10px] font-medium text-red-500">
                        {t("translationFailed")}
                      </span>
                    )}
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <button
                      type="button"
                      onClick={() =>
                        handleEdit(faq as Record<string, unknown> & { _id: Id<"faqs"> })
                      }
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
              {t("confirmBulkDeleteFaq", { count: validSelectedIds.size })}
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
