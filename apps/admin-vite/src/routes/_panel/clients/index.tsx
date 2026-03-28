import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel/clients/")({
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Clients — TODO</h1>
    </div>
  );
}
