import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "@/components/auth/LocaleSwitcher";
import Image from "next/image";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const tBrand = await getTranslations("brand");
  const tAuth = await getTranslations("auth");

  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex min-h-dvh flex-col">
      {/* Brand Header with Gradient */}
      <div className="from-primary/5 to-background bg-gradient-to-b">
        <header className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 pt-[env(safe-area-inset-top,0px)]">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="FitFast" width={24} height={24} className="h-6 w-6" />
            <span className="text-sm font-bold tracking-tight">{tBrand("name")}</span>
          </div>
          <LocaleSwitcher />
        </header>

        {/* Brand Section */}
        <div className="flex flex-col items-center gap-2 pt-8 pb-10">
          <Image src="/logo.svg" alt="FitFast" width={64} height={64} className="mb-2 h-16 w-16" />
          <h1 className="text-2xl font-bold">FitFast</h1>
          <p className="text-muted-foreground text-sm">{tAuth("brandTagline")}</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="-mt-4 flex flex-1 justify-center px-4 pb-12">
        <div className="w-full max-w-md">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-border bg-card border-t py-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-center md:flex-row md:items-center md:justify-between md:text-start">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} {tBrand("name")} — {tBrand("copyright")}
          </p>
          <p className="text-muted-foreground text-xs">{tBrand("tagline")}</p>
        </div>
      </footer>
    </div>
  );
}
