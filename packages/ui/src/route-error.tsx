"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { AlertTriangle } from "lucide-react";
import { Button } from "./button";

export interface RouteErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
  feature: string;
  route: string;
  translationKey: string;
}

export function RouteError({ error, reset, feature, route, translationKey }: RouteErrorProps) {
  const t = useTranslations(translationKey);

  useEffect(() => {
    Sentry.captureException(error, {
      tags: { feature, route },
    });
  }, [error, feature, route]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-4">
      <div className="border-border bg-card w-full max-w-md rounded-2xl border shadow-lg">
        <div className="space-y-5 p-8 text-center">
          <div className="bg-error-500/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <AlertTriangle className="text-error-500 h-8 w-8" />
          </div>
          <h1 className="text-xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground text-sm">{t("description")}</p>
          {error.digest && (
            <p className="text-muted-foreground text-xs">Error ID: {error.digest}</p>
          )}
          <Button onClick={() => reset()} className="w-full">
            {t("retry")}
          </Button>
        </div>
      </div>
    </div>
  );
}
