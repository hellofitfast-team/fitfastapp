import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel/tickets")({
  component: TicketsPage,
});

function TicketsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Tickets — TODO</h1>
    </div>
  );
}
