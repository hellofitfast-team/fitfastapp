import { useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { AlertTriangle } from "lucide-react";

export function RouteErrorComponent({ error, reset }: { error: Error; reset?: () => void }) {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[50vh] items-center justify-center p-4">
      <div className="border-border bg-card w-full max-w-md rounded-2xl border p-6 text-center shadow-sm">
        <div className="bg-destructive/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
          <AlertTriangle className="text-destructive h-7 w-7" />
        </div>
        <h2 className="mb-2 text-lg font-semibold">{t("common.error")}</h2>
        <p className="text-muted-foreground mb-5 text-sm">
          {import.meta.env.DEV ? error.message : t("common.unexpectedError")}
        </p>
        <button
          onClick={() => {
            reset?.();
            router.invalidate();
          }}
          className="bg-primary hover:bg-primary/90 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors"
        >
          {t("common.retry")}
        </button>
      </div>
    </div>
  );
}
