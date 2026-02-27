import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function OnboardingLayout({ children }: { children: React.ReactNode }) {
  const tBrand = await getTranslations("brand");

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <header className="border-border bg-card border-b">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-center px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="FitFast" width={32} height={32} className="h-8 w-8" />
            <h1 className="text-lg font-bold tracking-tight">{tBrand("name")}</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl p-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="border-border bg-card mt-8 border-t py-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} {tBrand("name")}
          </p>
          <p className="text-muted-foreground text-xs">{tBrand("tagline")}</p>
        </div>
      </footer>
    </div>
  );
}
