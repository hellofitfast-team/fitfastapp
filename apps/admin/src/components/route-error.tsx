import { useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { AlertTriangle } from "lucide-react";

export function RouteErrorComponent({ error, reset }: { error: Error; reset?: () => void }) {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[50vh] items-center justify-center p-4">
      <div className="w-full max-w-md rounded-xl border border-red-200 bg-red-50 p-6 text-center">
        <AlertTriangle className="mx-auto mb-3 h-8 w-8 text-red-500" />
        <h2 className="mb-2 text-lg font-semibold text-red-900">{t("common.error")}</h2>
        <p className="mb-4 text-sm text-red-700">
          {import.meta.env.DEV ? error.message : t("common.unexpectedError")}
        </p>
        <button
          onClick={() => {
            reset?.();
            router.invalidate();
          }}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          {t("common.retry")}
        </button>
      </div>
    </div>
  );
}
