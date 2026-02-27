"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { Link } from "@fitfast/i18n/navigation";
import { Users, Search, ArrowRight, Zap, X, Loader2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface Client {
  id: string;
  fullName: string | null;
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

const tierLabels: Record<string, string> = {
  monthly: "Monthly",
  quarterly: "Quarterly",
  "3_months": "Quarterly",
  "6_months": "Semi-Annual",
  "12_months": "Annual",
};

function RejectModal({ client, onClose }: { client: Client; onClose: () => void }) {
  const rejectClient = useMutation(api.profiles.rejectClient);
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isSubmitting) onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, isSubmitting]);

  // Focus trap — keep Tab within the modal
  useEffect(() => {
    const modal = document.querySelector('[role="dialog"]');
    if (!modal) return;
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, textarea, input, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, []);

  const handleSubmit = async () => {
    if (!reason.trim()) return;
    setIsSubmitting(true);
    try {
      await rejectClient({
        profileId: client.id as Id<"profiles">,
        rejectionReason: reason.trim(),
      });
      toast({
        title: "Client rejected",
        description: `${client.fullName} has been rejected and removed.`,
        variant: "success",
      });
      onClose();
    } catch (err) {
      console.error("Reject failed:", err);
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Failed to reject client",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => {
          if (!isSubmitting) onClose();
        }}
      />

      {/* Modal panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="client-modal-title"
        className="relative z-10 w-full max-w-md rounded-xl border border-stone-200 bg-white p-6 shadow-xl"
      >
        {/* Close button */}
        <button
          onClick={() => {
            if (!isSubmitting) onClose();
          }}
          className="absolute end-4 top-4 rounded-md p-1 text-stone-400 transition-colors hover:text-stone-600"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <h2 id="client-modal-title" className="pe-8 text-lg font-semibold text-stone-900">
          Reject {client.fullName ?? "Client"}
        </h2>
        <p className="mt-1 text-sm text-stone-500">
          This will remove the client and send them a rejection email with your reason.
        </p>

        {/* Reason input */}
        <div className="mt-4 space-y-1.5">
          <label className="text-xs font-medium text-stone-500">Rejection Reason</label>
          <textarea
            ref={textareaRef}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Explain why this client is being rejected..."
            rows={3}
            className="w-full resize-none rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 transition-all placeholder:text-stone-400 focus:border-red-300 focus:ring-2 focus:ring-red-200 focus:outline-none"
          />
        </div>

        {/* Actions */}
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-50 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !reason.trim()}
            className="flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-50"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <X className="h-4 w-4" />
            )}
            Reject Client
          </button>
        </div>
      </div>
    </div>
  );
}

export function ClientsList({ clients }: { clients: Client[] }) {
  const t = useTranslations("admin");
  const locale = useLocale();

  const [search, setSearch] = useState("");
  const [rejectTarget, setRejectTarget] = useState<Client | null>(null);

  const filtered = clients.filter((c) => {
    const q = search.toLowerCase();
    return (c.fullName?.toLowerCase().includes(q) ?? false) || (c.phone?.includes(q) ?? false);
  });

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
        <input
          type="text"
          placeholder={t("search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="focus:ring-primary/20 focus:border-primary h-11 w-full rounded-xl border border-stone-200 bg-white ps-10 pe-4 text-sm text-stone-900 transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none"
        />
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
              {filtered.map((client) => (
                <tr
                  key={client.id}
                  className="border-b border-stone-100 transition-colors last:border-0 hover:bg-stone-50/50"
                >
                  <td className="px-4 py-4">
                    <p className="text-sm font-medium text-stone-900">{client.fullName ?? "---"}</p>
                    {client.phone && <p className="text-xs text-stone-400">{client.phone}</p>}
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-primary text-xs font-semibold">
                      {client.planTier ? (tierLabels[client.planTier] ?? client.planTier) : "---"}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-block rounded-full border px-2.5 py-1 text-xs font-medium ${
                        statusStyles[client.status ?? ""] ?? statusStyles.inactive
                      }`}
                    >
                      {client.status?.replace("_", " ") ?? "unknown"}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-xs text-stone-500">
                    {client.planEndDate ? formatDate(client.planEndDate, locale) : "---"}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-2">
                      {client.status === "pending_approval" && (
                        <>
                          <Link
                            href={`/clients/${client.userId}`}
                            className="border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors"
                          >
                            <Zap className="h-3.5 w-3.5" />
                            {t("activate")}
                          </Link>
                          <button
                            onClick={() => setRejectTarget(client)}
                            className="flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700 transition-colors hover:bg-red-100"
                          >
                            <X className="h-3.5 w-3.5" />
                            {t("reject")}
                          </button>
                        </>
                      )}
                      <Link
                        href={`/clients/${client.userId}`}
                        className="hover:border-primary/30 hover:text-primary flex h-11 w-11 items-center justify-center rounded-lg border border-stone-200 text-stone-400 transition-colors"
                      >
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Rejection modal */}
      {rejectTarget && <RejectModal client={rejectTarget} onClose={() => setRejectTarget(null)} />}
    </div>
  );
}
