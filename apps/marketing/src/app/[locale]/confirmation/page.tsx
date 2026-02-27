import { getTranslations, setRequestLocale } from "next-intl/server";
import { CheckCircle2 } from "lucide-react";
import { Link } from "@fitfast/i18n/navigation";

interface ConfirmationPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ConfirmationPage({ params }: ConfirmationPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("confirmation");

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-4 py-16">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-center shadow-sm">
          {/* Checkmark icon */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
              <CheckCircle2 className="h-9 w-9 text-[var(--color-primary)]" />
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-2 text-2xl font-bold text-[var(--color-foreground)]">{t("title")}</h1>

          {/* Subtitle */}
          <p className="mb-4 text-base font-medium text-[var(--color-foreground)]">
            {t("subtitle")}
          </p>

          {/* Explanation */}
          <p className="mb-4 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
            {t("explanation")}
          </p>

          {/* Timeline */}
          <div className="mb-8 rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 px-4 py-3">
            <p className="text-sm font-medium text-[var(--color-primary)]">{t("timeline")}</p>
          </div>

          {/* Back to home */}
          <Link
            href="/"
            className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-[var(--color-primary)] text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary)]/90"
          >
            {t("backToHome")}
          </Link>
        </div>
      </div>
    </main>
  );
}
