import { useTranslation } from "react-i18next";
import { AlertTriangle } from "lucide-react";
import { Button } from "@fitfast/ui/button";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary?: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-background flex min-h-dvh items-center justify-center p-4">
      <div className="border-border bg-card w-full max-w-md rounded-2xl border shadow-lg">
        <div className="space-y-5 p-8 text-center">
          <div className="bg-destructive/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <AlertTriangle className="text-destructive h-8 w-8" />
          </div>
          <h1 className="text-xl font-bold">{t("common.error")}</h1>
          <p className="text-muted-foreground text-sm">
            {error.message || t("common.unexpectedError")}
          </p>
          {resetErrorBoundary && (
            <Button onClick={resetErrorBoundary} className="w-full">
              {t("common.retry")}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
