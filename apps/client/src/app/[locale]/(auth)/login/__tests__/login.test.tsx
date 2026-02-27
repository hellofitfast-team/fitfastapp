import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mocks = vi.hoisted(() => ({
  pushFn: vi.fn(),
  replaceFn: vi.fn(),
  signInFn: vi.fn(() => Promise.resolve()),
  signOutFn: vi.fn(() => Promise.resolve()),
  useConvexAuth: vi.fn(),
  useQuery: vi.fn(),
  searchParams: new URLSearchParams(),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mocks.pushFn, replace: mocks.replaceFn }),
  useSearchParams: () => mocks.searchParams,
}));

vi.mock("convex/react", () => ({
  useConvexAuth: mocks.useConvexAuth,
  useQuery: mocks.useQuery,
}));

vi.mock("@convex-dev/auth/react", () => ({
  useAuthActions: () => ({ signIn: mocks.signInFn, signOut: mocks.signOutFn }),
}));

vi.mock("@fitfast/i18n/navigation", () => ({
  Link: ({ href, children, ...props }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import LoginPage from "../page";

describe("LoginPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Default: not authenticated, not loading
    mocks.useConvexAuth.mockReturnValue({ isAuthenticated: false, isLoading: false });
    mocks.useQuery.mockReturnValue(undefined);
    mocks.searchParams = new URLSearchParams();
  });

  it("renders the login form with email and password fields", () => {
    render(<LoginPage />);

    expect(screen.getByLabelText("email")).toBeInTheDocument();
    expect(screen.getByLabelText("password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /signIn/i })).toBeInTheDocument();
  });

  it("renders the sign in heading and description", () => {
    render(<LoginPage />);

    expect(screen.getByRole("heading", { name: "signIn" })).toBeInTheDocument();
    expect(screen.getByText("signInDescription")).toBeInTheDocument();
  });

  it("renders the forgot password and magic link links", () => {
    render(<LoginPage />);

    expect(screen.getByText("forgotPassword")).toBeInTheDocument();
    expect(screen.getByText("magicLink")).toBeInTheDocument();
  });

  it("shows validation error for empty email on submit", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    // Type a valid password but leave email empty
    await user.type(screen.getByLabelText("password"), "password123");
    await user.click(screen.getByRole("button", { name: /signIn/i }));

    await waitFor(() => {
      // The zod error message comes from t("validEmail") which returns "validEmail"
      expect(screen.getByText("validEmail")).toBeInTheDocument();
    });
  });

  it("shows both validation errors when submitting completely empty form", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    // Submit without typing anything
    await user.click(screen.getByRole("button", { name: /signIn/i }));

    await waitFor(() => {
      expect(screen.getByText("validEmail")).toBeInTheDocument();
      expect(screen.getByText("passwordMinLength")).toBeInTheDocument();
    });

    // signIn should NOT have been called since validation failed
    expect(mocks.signInFn).not.toHaveBeenCalled();
  });

  it("shows validation error for short password on submit", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(screen.getByLabelText("email"), "user@example.com");
    await user.type(screen.getByLabelText("password"), "abc");
    await user.click(screen.getByRole("button", { name: /signIn/i }));

    await waitFor(() => {
      // t("passwordMinLength") returns "passwordMinLength"
      expect(screen.getByText("passwordMinLength")).toBeInTheDocument();
    });
  });

  it("calls signIn with correct form data on valid submission", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(screen.getByLabelText("email"), "user@example.com");
    await user.type(screen.getByLabelText("password"), "password123");
    await user.click(screen.getByRole("button", { name: /signIn/i }));

    await waitFor(() => {
      expect(mocks.signInFn).toHaveBeenCalledOnce();
    });

    // Check the FormData passed to signIn
    const call = mocks.signInFn.mock.calls[0] as unknown as [string, FormData];
    const [provider, formData] = call;
    expect(provider).toBe("password");
    expect(formData).toBeInstanceOf(FormData);
    expect(formData.get("email")).toBe("user@example.com");
    expect(formData.get("password")).toBe("password123");
    expect(formData.get("flow")).toBe("signIn");
  });

  it("redirects to / after successful sign-in", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(screen.getByLabelText("email"), "user@example.com");
    await user.type(screen.getByLabelText("password"), "password123");
    await user.click(screen.getByRole("button", { name: /signIn/i }));

    await waitFor(() => {
      expect(mocks.replaceFn).toHaveBeenCalledWith("/");
    });
  });

  it("shows error message when signIn rejects", async () => {
    mocks.signInFn.mockRejectedValueOnce(new Error("Invalid credentials"));
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(screen.getByLabelText("email"), "user@example.com");
    await user.type(screen.getByLabelText("password"), "wrongpassword");
    await user.click(screen.getByRole("button", { name: /signIn/i }));

    await waitFor(() => {
      // t("invalidCredentials") => "invalidCredentials"
      expect(screen.getByText("invalidCredentials")).toBeInTheDocument();
    });
  });

  it("disables inputs while loading", async () => {
    // Make signIn hang so isLoading stays true
    mocks.signInFn.mockImplementation(() => new Promise(() => {}));
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(screen.getByLabelText("email"), "user@example.com");
    await user.type(screen.getByLabelText("password"), "password123");
    await user.click(screen.getByRole("button", { name: /signIn/i }));

    await waitFor(() => {
      expect(screen.getByLabelText("email")).toBeDisabled();
      expect(screen.getByLabelText("password")).toBeDisabled();
    });
  });

  it("has proper input types for email and password fields", () => {
    render(<LoginPage />);

    expect(screen.getByLabelText("email")).toHaveAttribute("type", "email");
    expect(screen.getByLabelText("password")).toHaveAttribute("type", "password");
  });

  it("has proper placeholder text", () => {
    render(<LoginPage />);

    expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument();
  });
});
