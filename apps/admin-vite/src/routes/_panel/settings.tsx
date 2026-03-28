import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings — TODO</h1>
    </div>
  );
}
