"use client";

import { useConvexAuth } from "convex/react";
import { usePaginatedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useTranslations } from "next-intl";
import { ClientsList } from "./clients-list";
import { Loader2 } from "lucide-react";
import { Button } from "@fitfast/ui/button";

const PAGE_SIZE = 50;

export default function AdminClientsPage() {
  const t = useTranslations("admin");
  const { isAuthenticated } = useConvexAuth();
  const { results, status, loadMore } = usePaginatedQuery(
    api.profiles.listClientsPaginated,
    isAuthenticated ? {} : "skip",
    { initialNumItems: PAGE_SIZE },
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
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-stone-900">{t("clients")}</h1>
        <p className="mt-1 text-sm text-stone-500">
          {adaptedClients.length}
          {status === "CanLoadMore" ? "+" : ""} {t("totalClients").toLowerCase()}
        </p>
      </div>

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
