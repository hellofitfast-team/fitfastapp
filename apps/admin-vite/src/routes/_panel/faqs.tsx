import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel/faqs")({
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">FAQs — TODO</h1>
    </div>
  );
}
