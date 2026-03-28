import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel/exercises")({
  component: ExercisesPage,
});

function ExercisesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Exercises — TODO</h1>
    </div>
  );
}
