import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel/")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard — TODO</h1>
    </div>
  );
}
