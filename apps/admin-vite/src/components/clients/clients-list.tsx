import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { useMutation, useAction } from "convex/react";
import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import {
  Users,
  Search,
  ArrowRight,
  Zap,
  X,
  Loader2,
  CheckCircle2,
  Clock,
  XCircle,
  MinusCircle,
  Trash2,
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@fitfast/ui/dialog";

interface Client {
  id: string;
  fullName: string | null;
  email: string | null;
  phone: string | null;
  status: string | null;
  planTier: string | null;
  planStartDate: string | null;
  planEndDate: string | null;
  createdAt: string;
  userId: string;
}

const statusStyles: Record<string, string> = {
  active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  pending_approval: "bg-primary/10 text-primary border-primary/20",
  inactive: "bg-stone-100 text-stone-500 border-stone-200",
  expired: "bg-red-50 text-red-700 border-red-200",
};

/** Status icon for colorblind accessibility */
const STATUS_ICONS: Record<string, typeof CheckCircle2> = {
  active: CheckCircle2,
  pending_approval: Clock,
  inactive: MinusCircle,
  expired: XCircle,
};

// tierLabels moved to admin.tierLabels in translation files

function RejectModal({
  client,
  open,
  onOpenChange,
}: {
  client: Client;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const rejectClient = useMutation(api.profiles.rejectClient);
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async () => {
    if (!reason.trim()) return;
    setIsSubmitting(true);
    try {
      await rejectClient({
        profileId: client.id as Id<"profiles">,
        rejectionReason: reason.trim(),
      });
      toast({
        title: t("clientDetail.rejected"),
        description: t("rejectSuccess", { name: client.fullName ?? "" }),
        variant: "success",
      });
      onOpenChange(false);
    } catch (err) {
      console.error("Reject failed:", err); // Sentry captures this
      toast({
        title: t("actionError"),
        description: err instanceof Error ? err.message : t("clientDetail.rejectFailed"),
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!isSubmitting) onOpenChange(value);
      }}
    >
      <DialogContent
        className="max-w-md"
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          textareaRef.current?.focus();
        }}
      >
        <DialogHeader>
          <DialogTitle>
            {t("rejectDialogTitle", { name: client.fullName ?? t("client") })}
          </DialogTitle>
          <DialogDescription>{t("rejectDialogDescription")}</DialogDescription>
        </DialogHeader>

        {/* Reason input */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-stone-500">
            {t("clientDetail.rejectionReason")}
          </label>
          <textarea
            ref={textareaRef}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder={t("clientDetail.rejectionPlaceholder")}
            rows={3}
            className="w-full resize-none rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 transition-all placeholder:text-stone-400 focus:border-red-300 focus:ring-2 focus:ring-red-200 focus:outline-none"
          />
        </div>

        <DialogFooter>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            disabled={isSubmitting}
            className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-50 disabled:opacity-50"
          >
            {t("cancel")}
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || !reason.trim()}
            className="flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-50"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <X className="h-4 w-4" />
            )}
            {t("clientDetail.confirmReject")}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function DeleteTestUserModal({
  client,
  open,
  onOpenChange,
}: {
  client: Client;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  // t uses t("admin.xxx") pattern
  const deleteTestUser = useAction(api.testUsers.deleteTestUser);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDelete = async () => {
    setIsSubmitting(true);
    try {
      await deleteTestUser({ profileId: client.id as Id<"profiles"> });
      toast({
        title: t("deleteTestUserSuccess"),
        variant: "success",
      });
      onOpenChange(false);
    } catch (err) {
      console.error("Delete test user failed:", err);
      toast({
        title: t("actionError"),
        description: err instanceof Error ? err.message : t("deleteTestUserFailed"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!isSubmitting) onOpenChange(value);
      }}
    >
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>{t("deleteTestUser")}</DialogTitle>
          <DialogDescription>{t("deleteTestUserDesc")}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            disabled={isSubmitting}
            className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-50 disabled:opacity-50"
          >
            {t("cancel")}
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={isSubmitting}
            className="flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-50"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}
            {t("deleteTestUser")}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function BulkDeleteModal({
  count,
  open,
  onOpenChange,
  onConfirm,
  isDeleting,
}: {
  count: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  isDeleting: boolean;
}) {
  // t uses t("admin.xxx") pattern

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!isDeleting) onOpenChange(value);
      }}
    >
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>{t("bulkDeleteTitle")}</DialogTitle>
          <DialogDescription>{t("bulkDeleteDesc", { count })}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            disabled={isDeleting}
            className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-50 disabled:opacity-50"
          >
            {t("cancel")}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-50"
          >
            {isDeleting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}
            {t("bulkDeleteConfirm", { count })}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ClientsList({ clients }: { clients: Client[] }) {
  // t uses t("admin.xxx") pattern
  const locale = i18n.language;
  const bulkDelete = useMutation(api.profiles.bulkDeleteClients);

  const [search, setSearch] = useState("");
  const [rejectTarget, setRejectTarget] = useState<Client | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Client | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showBulkDelete, setShowBulkDelete] = useState(false);
  const [isBulkDeleting, setIsBulkDeleting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setSelected(new Set()); // Clear selection when search changes to prevent deleting invisible clients
    setCurrentPage(1); // Reset to first page on search
  };

  const filtered = clients.filter((c) => {
    const q = search.toLowerCase();
    return (
      (c.fullName?.toLowerCase().includes(q) ?? false) ||
      (c.email?.toLowerCase().includes(q) ?? false) ||
      (c.phone?.includes(q) ?? false)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedClients = filtered.slice(
    (safeCurrentPage - 1) * rowsPerPage,
    safeCurrentPage * rowsPerPage,
  );

  const allFilteredSelected = filtered.length > 0 && filtered.every((c) => selected.has(c.id));

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (allFilteredSelected) {
      // Deselect all filtered
      setSelected((prev) => {
        const next = new Set(prev);
        for (const c of filtered) next.delete(c.id);
        return next;
      });
    } else {
      // Select all filtered
      setSelected((prev) => {
        const next = new Set(prev);
        for (const c of filtered) next.add(c.id);
        return next;
      });
    }
  };

  const handleBulkDelete = async () => {
    setIsBulkDeleting(true);
    try {
      const profileIds = [...selected] as Id<"profiles">[];
      const result = await bulkDelete({ profileIds });
      toast({
        title: t("bulkDeleteSuccess", { count: result.deleted }),
        variant: "success",
      });
      setSelected(new Set());
      setShowBulkDelete(false);
    } catch (err) {
      console.error("Bulk delete failed:", err);
      toast({
        title: t("actionError"),
        description: err instanceof Error ? err.message : t("bulkDeleteFailed"),
        variant: "destructive",
      });
    } finally {
      setIsBulkDeleting(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Search + bulk actions bar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder={t("search")}
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="focus:ring-primary/20 focus:border-primary h-11 w-full rounded-xl border border-stone-200 bg-white ps-10 pe-4 text-sm text-stone-900 transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none"
          />
        </div>

        {selected.size > 0 && (
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setSelected(new Set())}
              className="flex h-11 items-center gap-1.5 rounded-xl border border-stone-200 bg-white px-3 text-sm font-medium text-stone-500 transition-colors hover:bg-stone-50"
            >
              <X className="h-3.5 w-3.5" />
              {t("clearSelection")}
            </button>
            <button
              type="button"
              onClick={() => setShowBulkDelete(true)}
              className="flex h-11 items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-medium text-red-700 transition-colors hover:bg-red-100"
            >
              <Trash2 className="h-4 w-4" />
              {t("bulkDeleteBtn", { count: selected.size })}
            </button>
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-stone-200 bg-white p-12 text-center">
          <Users className="mx-auto mb-4 h-12 w-12 text-stone-300" />
          <p className="font-medium text-stone-500">{t("noResults")}</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50/50">
                <th className="w-12 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={allFilteredSelected}
                    onChange={toggleSelectAll}
                    className="text-primary focus:ring-primary/20 h-4 w-4 cursor-pointer rounded border-stone-300"
                    aria-label={t("selectAll")}
                  />
                </th>
                <th className="px-4 py-3 text-start text-xs font-medium tracking-wide text-stone-500 uppercase">
                  {t("client")}
                </th>
                <th className="px-4 py-3 text-start text-xs font-medium tracking-wide text-stone-500 uppercase">
                  {t("plan")}
                </th>
                <th className="px-4 py-3 text-start text-xs font-medium tracking-wide text-stone-500 uppercase">
                  {t("status")}
                </th>
                <th className="px-4 py-3 text-start text-xs font-medium tracking-wide text-stone-500 uppercase">
                  {t("date")}
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {paginatedClients.map((client) => {
                const isSelected = selected.has(client.id);
                return (
                  <tr
                    key={client.id}
                    className={`border-b border-stone-100 transition-colors last:border-0 focus-within:bg-stone-50 ${
                      isSelected ? "bg-primary/5" : "hover:bg-stone-50/50"
                    }`}
                  >
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(client.id)}
                        className="text-primary focus:ring-primary/20 h-4 w-4 cursor-pointer rounded border-stone-300"
                        aria-label={t("selectClient", { name: client.fullName ?? "" })}
                      />
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-sm font-medium text-stone-900">
                        {client.fullName ?? "---"}
                      </p>
                      {client.phone && <p className="text-xs text-stone-400">{client.phone}</p>}
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-primary text-xs font-semibold">
                        {client.planTier
                          ? t(`tierLabels.${client.planTier}`, { defaultMessage: client.planTier })
                          : "---"}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      {(() => {
                        const StatusIcon = STATUS_ICONS[client.status ?? ""] ?? MinusCircle;
                        return (
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${
                              statusStyles[client.status ?? ""] ?? statusStyles.inactive
                            }`}
                          >
                            <StatusIcon className="h-3 w-3" />
                            {client.status
                              ? t(`statusLabels.${client.status}`, {
                                  defaultMessage: client.status,
                                })
                              : "—"}
                          </span>
                        );
                      })()}
                    </td>
                    <td className="px-4 py-4 text-xs text-stone-500">
                      {client.planEndDate ? formatDate(client.planEndDate, locale) : "---"}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {client.status === "pending_approval" && (
                          <>
                            <Link
                              to={`/clients/${client.userId}`}
                              className="border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors"
                            >
                              <Zap className="h-3.5 w-3.5" />
                              {t("activate")}
                            </Link>
                            <button
                              type="button"
                              onClick={() => setRejectTarget(client)}
                              className="flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700 transition-colors hover:bg-red-100"
                            >
                              <X className="h-3.5 w-3.5" />
                              {t("reject")}
                            </button>
                          </>
                        )}
                        {client.email?.endsWith("@fitfast.test") && (
                          <button
                            type="button"
                            onClick={() => setDeleteTarget(client)}
                            aria-label={t("deleteTestUser")}
                            className="flex h-11 w-11 items-center justify-center rounded-lg border border-red-200 text-red-400 transition-colors hover:border-red-300 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                        <Link
                          to={`/clients/${client.userId}`}
                          aria-label={t("viewClient")}
                          className="hover:border-primary/30 hover:text-primary flex h-11 w-11 items-center justify-center rounded-lg border border-stone-200 text-stone-400 transition-colors"
                        >
                          <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination footer */}
      {filtered.length > 0 && (
        <div className="flex items-center justify-between rounded-xl border border-stone-200 bg-white px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <span>{t("rowsPerPage")}:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="rounded-md border border-stone-200 bg-white px-2 py-1 text-sm text-stone-700"
            >
              {[5, 10, 20, 50].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-4 text-sm text-stone-500">
            <span>
              {(safeCurrentPage - 1) * rowsPerPage + 1}–
              {Math.min(safeCurrentPage * rowsPerPage, filtered.length)} {t("of")} {filtered.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled={safeCurrentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="rounded-md border border-stone-200 px-2.5 py-1 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {t("previous")}
              </button>
              <span className="px-2 text-xs font-medium text-stone-700">
                {safeCurrentPage} / {totalPages}
              </span>
              <button
                type="button"
                disabled={safeCurrentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-md border border-stone-200 px-2.5 py-1 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {t("next")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rejection modal */}
      {rejectTarget && (
        <RejectModal
          client={rejectTarget}
          open={!!rejectTarget}
          onOpenChange={(open) => {
            if (!open) setRejectTarget(null);
          }}
        />
      )}

      {/* Delete test user modal */}
      {deleteTarget && (
        <DeleteTestUserModal
          client={deleteTarget}
          open={!!deleteTarget}
          onOpenChange={(open) => {
            if (!open) setDeleteTarget(null);
          }}
        />
      )}

      {/* Bulk delete confirmation modal */}
      <BulkDeleteModal
        count={selected.size}
        open={showBulkDelete}
        onOpenChange={setShowBulkDelete}
        onConfirm={handleBulkDelete}
        isDeleting={isBulkDeleting}
      />
    </div>
  );
}
