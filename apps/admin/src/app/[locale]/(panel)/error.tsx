"use client";

import * as Sentry from "@sentry/nextjs";
import { useTranslations } from "next-intl";

import { RouteError } from "@fitfast/ui/route-error";

export default function AdminPanelError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("routeErrors.adminPanel");

  return (
    <RouteError
      error={error}
      reset={reset}
      feature="admin-panel"
      route="/admin"
      labels={{
        title: t("title"),
        description: t("description"),
        retry: t("retry"),
      }}
      onError={(err, ctx) => Sentry.captureException(err, { tags: ctx })}
    />
  );
}
