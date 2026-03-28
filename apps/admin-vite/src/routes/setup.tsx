import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/setup")({
  component: SetupPage,
});

function SetupPage() {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <p>Setup — TODO</p>
    </div>
  );
}
