"use client";

import { useConvexAuth, useQuery } from "convex/react";
import { usePaginatedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useTranslations } from "next-intl";
import { ClientsList } from "./clients-list";
import { Loader2, Clock, Mail } from "lucide-react";
import { Button } from "@fitfast/ui/button";
import { CreateTestUserButton } from "./create-test-user-dialog";

const PAGE_SIZE = 50;

export default function AdminClientsPage() {
  const t = useTranslations("admin");
  const { isAuthenticated } = useConvexAuth();
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
                      {signup.planTier === "quarterly" ? t("quarterly") : t("monthly")}
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-xs text-amber-600">
                    <Mail className="h-3 w-3" />
                    <span>{t("inviteSent")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
