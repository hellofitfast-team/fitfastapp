import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel/signups/$id")({
  component: SignupDetailPage,
});

function SignupDetailPage() {
  const { id } = Route.useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold">Signup {id} — TODO</h1>
    </div>
  );
}
