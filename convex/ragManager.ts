"use node";

import { RAG } from "@convex-dev/rag";
import { components } from "./_generated/api";

/**
 * Singleton RAG client. Embedding model uses OpenRouter → Qwen3 Embedding 8B.
 * Qwen3 is #1 on MTEB multilingual (70.58), supports 8 Arabic dialects,
 * and costs 50% less than text-embedding-3-small ($0.01/M vs $0.02/M).
 *
 * The provider is created lazily at first use (inside Node actions) since
 * process.env is only available at runtime in the Node environment.
 */
function createRagClient() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { createOpenRouter } =
    require("@openrouter/ai-sdk-provider") as typeof import("@openrouter/ai-sdk-provider");
  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY!,
  });

  return new RAG<{ tag: string }>(components.rag, {
    textEmbeddingModel: openrouter.textEmbeddingModel("qwen/qwen3-embedding-8b"),
    embeddingDimension: 1024,
    filterNames: ["tag"],
  });
}

let _ragClient: RAG<{ tag: string }> | null = null;

export function getRagClient(): RAG<{ tag: string }> {
  if (!_ragClient) {
    _ragClient = createRagClient();
  }
  return _ragClient;
}
