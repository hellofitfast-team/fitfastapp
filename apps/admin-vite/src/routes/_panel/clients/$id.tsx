import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel/clients/$id")({
  component: ClientDetailPage,
});

function ClientDetailPage() {
  const { id } = Route.useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold">Client {id} — TODO</h1>
    </div>
  );
}
