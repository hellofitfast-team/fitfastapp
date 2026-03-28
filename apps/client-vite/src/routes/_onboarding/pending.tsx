import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_onboarding/pending")({
  component: () => <div>TODO: Pending Approval</div>,
});
