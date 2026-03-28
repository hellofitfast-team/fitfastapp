import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel/notifications")({
  component: NotificationsPage,
});

function NotificationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Notifications — TODO</h1>
    </div>
  );
}
