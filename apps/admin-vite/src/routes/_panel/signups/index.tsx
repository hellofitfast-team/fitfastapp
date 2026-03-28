import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel/signups/")({
  component: SignupsPage,
});

function SignupsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Signups — TODO</h1>
    </div>
  );
}
