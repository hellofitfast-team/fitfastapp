import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "@/components/auth/LocaleSwitcher";
import { Dumbbell } from "lucide-react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tBrand = await getTranslations("brand");
  const tAuth = await getTranslations("auth");

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Brand Header with Gradient */}
      <div className="bg-gradient-to-b from-primary/5 to-background">
        <header className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold tracking-tight text-primary">
              {tBrand("name")}
            </span>
          </div>
          <LocaleSwitcher />
        </header>

        {/* Brand Section */}
        <div className="flex flex-col items-center gap-2 pt-8 pb-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-2">
            <Dumbbell className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-primary">FitFast</h1>
          <p className="text-sm text-muted-foreground">{tAuth("brandTagline")}</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-1 justify-center px-4 pb-12 -mt-4">
        <div className="w-full max-w-md">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-center md:text-start">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {tBrand("name")} — {tBrand("copyright")}
          </p>
          <p className="text-xs text-muted-foreground">
            {tBrand("tagline")}
          </p>
        </div>
      </footer>
    </div>
  );
}
