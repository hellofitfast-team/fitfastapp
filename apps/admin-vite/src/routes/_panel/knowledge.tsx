import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel/knowledge")({
  component: KnowledgePage,
});

function KnowledgePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Knowledge Base — TODO</h1>
    </div>
  );
}
