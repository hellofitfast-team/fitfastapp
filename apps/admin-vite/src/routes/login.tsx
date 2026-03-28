import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <p>Login — TODO</p>
    </div>
  );
}
