import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Mail, ArrowRight } from "lucide-react";
import { RouteErrorComponent } from "@/components/route-error";

export const Route = createFileRoute("/_auth/magic-link")({
  component: MagicLinkPage,
  errorComponent: ({ error, reset }) => <RouteErrorComponent error={error} reset={reset} />,
});

function MagicLinkPage() {
  const { t } = useTranslation("translation", { keyPrefix: "auth" });

  return (
    <div className="border-border bg-card animate-fade-in overflow-hidden rounded-2xl border shadow-sm">
      <div className="border-border border-b p-6 text-center">
        <div className="bg-primary/10 mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full">
          <Mail className="text-primary h-7 w-7" />
        </div>
        <h1 className="text-2xl font-bold">{t("magicLinkTitle")}</h1>
        <p className="text-muted-foreground mt-2 text-sm">{t("magicLinkDesc")}</p>
      </div>
      <div className="space-y-4 p-6 text-center">
        <p className="text-muted-foreground text-sm">{t("magicLinkNotSupported")}</p>
        <Link
          to="/login"
          search={{ error: "", message: "" }}
          className="bg-primary hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-colors"
        >
          {t("signInWithPassword")}
          <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </Link>
      </div>
    </div>
  );
}
