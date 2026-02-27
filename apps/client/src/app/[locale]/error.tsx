"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@fitfast/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@fitfast/ui/card";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("common");
  const tErrors = useTranslations("errors");

  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="bg-error-100 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <AlertTriangle className="text-error-600 h-8 w-8" />
          </div>
          <CardTitle className="text-xl text-neutral-900">{t("error")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-sm text-neutral-600">{tErrors("somethingWentWrong")}</p>
          {error.digest && (
            <p className="text-xs text-neutral-400">
              {tErrors("errorId")}: {error.digest}
            </p>
          )}
          <Button onClick={() => reset()} className="w-full">
            {tErrors("tryAgain")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
