"use client";

import { useState } from "react";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { usePaginatedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { useTranslations } from "next-intl";
import { ClientsList } from "./clients-list";
import { Loader2, Clock, Mail, Trash2 } from "lucide-react";
import { Button } from "@fitfast/ui/button";
import { CreateTestUserButton } from "./create-test-user-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@fitfast/ui/dialog";
import { toast } from "@/hooks/use-toast";

const PAGE_SIZE = 50;

export default function AdminClientsPage() {
  const t = useTranslations("admin");
  const { isAuthenticated } = useConvexAuth();
  const [deleteTarget, setDeleteTarget] = useState<{
    _id: Id<"pendingSignups">;
    fullName: string;
  } | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteApprovedSignup = useMutation(api.pendingSignups.deleteApprovedSignup);
  const { results, status, loadMore } = usePaginatedQuery(
    api.profiles.listClientsPaginated,
    isAuthenticated ? {} : "skip",
    { initialNumItems: PAGE_SIZE },
  );

  const awaitingSignups = useQuery(
    api.pendingSignups.getApprovedAwaitingAccount,
    isAuthenticated ? {} : "skip",
  );

  const isLoading = status === "LoadingFirstPage";

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="text-primary h-8 w-8 animate-spin" />
      </div>
    );
  }

  const adaptedClients = (results ?? []).map((c) => ({
    id: c._id,
    fullName: c.fullName ?? null,
    email: c.email ?? null,
    phone: c.phone ?? null,
    status: c.status ?? null,
    planTier: c.planTier ?? null,
    planStartDate: c.planStartDate ?? null,
    planEndDate: c.planEndDate ?? null,
    createdAt: new Date(c._creationTime).toISOString(),
    userId: c.userId,
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-stone-900">{t("clients")}</h1>
          <p className="mt-1 text-sm text-stone-500">
            {adaptedClients.length}
            {status === "CanLoadMore" ? "+" : ""} {t("totalClients").toLowerCase()}
          </p>
        </div>
        <CreateTestUserButton />
      </div>

      {/* Approved signups awaiting account creation */}
      {awaitingSignups && awaitingSignups.length > 0 && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Clock className="h-4 w-4 text-amber-600" />
            <h2 className="text-sm font-semibold text-amber-900">{t("awaitingAccountCreation")}</h2>
          </div>
          <div className="space-y-2">
            {awaitingSignups.map((signup) => (
              <div
                key={signup._id}
                className="flex items-center justify-between rounded-lg bg-white/70 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-stone-900">{signup.fullName}</p>
                  <p className="text-xs text-stone-500">{signup.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  {signup.planTier && (
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                      {signup.planTier === "quarterly"
                        ? t("tierLabels.quarterly")
                        : t("tierLabels.monthly")}
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-xs text-amber-600">
                    <Mail className="h-3 w-3" />
                    <span>{t("inviteSent")}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDeleteTarget({ _id: signup._id, fullName: signup.fullName })}
                    aria-label={t("deleteAwaitingSignup")}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-red-200 text-red-400 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Delete awaiting signup confirmation */}
      <Dialog open={!!deleteTarget} onOpenChange={(open) => !open && setDeleteTarget(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("deleteAwaitingSignup")}</DialogTitle>
            <DialogDescription>{t("deleteAwaitingSignupConfirm")}</DialogDescription>
          </DialogHeader>
          <p className="text-sm font-medium text-stone-700">{deleteTarget?.fullName}</p>
          <DialogFooter className="gap-2 sm:gap-0">
            <button
              type="button"
              onClick={() => setDeleteTarget(null)}
              disabled={isDeleting}
              className="rounded-lg border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50"
            >
              {t("cancel")}
            </button>
            <button
              type="button"
              disabled={isDeleting}
              onClick={async () => {
                if (!deleteTarget) return;
                setIsDeleting(true);
                try {
                  await deleteApprovedSignup({
                    signupId: deleteTarget._id,
                  });
                  toast({ title: t("deleteAwaitingSignupSuccess"), variant: "success" });
                  setDeleteTarget(null);
                } catch (err) {
                  console.error("Delete awaiting signup failed:", err);
                  toast({
                    title: t("deleteAwaitingSignupFailed"),
                    description: err instanceof Error ? err.message : undefined,
                    variant: "destructive",
                  });
                } finally {
                  setIsDeleting(false);
                }
              }}
              className="flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-50"
            >
              {isDeleting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4" />
              )}
              {t("deleteAwaitingSignup")}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <ClientsList clients={adaptedClients} />

      {status === "CanLoadMore" && (
        <div className="flex justify-center pt-2 pb-8">
          <Button variant="outline" onClick={() => loadMore(PAGE_SIZE)}>
            {t("loadMore")}
          </Button>
        </div>
      )}

      {status === "LoadingMore" && (
        <div className="flex justify-center py-4">
          <Loader2 className="text-primary h-5 w-5 animate-spin" />
        </div>
      )}
    </div>
  );
}
