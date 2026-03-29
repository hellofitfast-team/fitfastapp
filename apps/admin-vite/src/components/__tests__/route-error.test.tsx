import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { RouteErrorComponent } from "../route-error";

vi.mock("@tanstack/react-router", () => ({
  useRouter: () => ({ invalidate: vi.fn() }),
}));

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

describe("RouteErrorComponent", () => {
  it("renders error heading", () => {
    render(<RouteErrorComponent error={new Error("Test error")} />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("renders error message in dev mode", () => {
    render(<RouteErrorComponent error={new Error("Test error message")} />);
    expect(screen.getByText("Test error message")).toBeInTheDocument();
  });

  it("renders retry button", () => {
    render(<RouteErrorComponent error={new Error("fail")} />);
    expect(screen.getByText("Try again")).toBeInTheDocument();
  });

  it("calls reset on retry click", () => {
    const reset = vi.fn();
    render(<RouteErrorComponent error={new Error("fail")} reset={reset} />);
    fireEvent.click(screen.getByText("Try again"));
    expect(reset).toHaveBeenCalledOnce();
  });
});
