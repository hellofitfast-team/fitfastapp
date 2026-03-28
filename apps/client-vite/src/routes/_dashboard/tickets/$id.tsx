import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/tickets/$id")({
  component: () => <div>TODO: Ticket Detail</div>,
});
