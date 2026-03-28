import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { TicketsList } from "@/components/tickets/tickets-list";

export const Route = createFileRoute("/_panel/tickets")({
  component: AdminTicketsPage,
});

function AdminTicketsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-stone-900">
          {t("admin.openTickets")}
        </h1>
        <p className="mt-1 text-sm text-stone-500">{t("admin.manageTickets")}</p>
      </div>
      <TicketsList />
    </div>
  );
}
