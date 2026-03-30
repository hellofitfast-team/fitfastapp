import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ErrorFallback } from "../error-fallback";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "common.error": "Something went wrong",
        "common.unexpectedError": "An unexpected error occurred",
        "common.retry": "Try again",
      };
      return translations[key] ?? key;
    },
  }),
}));

describe("ErrorFallback", () => {
  it("renders error heading", () => {
    render(<ErrorFallback error={new Error("Test error")} />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<ErrorFallback error={new Error("Test error message")} />);
    expect(screen.getByText("Test error message")).toBeInTheDocument();
  });

  it("renders retry button when resetErrorBoundary provided", () => {
    const reset = vi.fn();
    render(<ErrorFallback error={new Error("fail")} resetErrorBoundary={reset} />);
    const btn = screen.getByRole("button", { name: "Try again" });
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(reset).toHaveBeenCalledOnce();
  });
});
