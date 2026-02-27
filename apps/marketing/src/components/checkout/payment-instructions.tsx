"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useTranslations } from "next-intl";
import { Skeleton } from "@fitfast/ui/skeleton";
import { Wallet } from "lucide-react";

export function PaymentInstructions() {
  const t = useTranslations("checkout");
  const paymentMethods = useQuery(api.systemConfig.getPaymentMethods);
  const isLoading = paymentMethods === undefined;

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-4 w-40" />
        <div className="space-y-3 rounded-xl border border-[var(--color-border)] p-4">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-[var(--color-foreground)]">
        {t("paymentInstructions")}
      </p>

      {paymentMethods.length === 0 ? (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          <p className="text-sm text-[var(--color-muted-foreground)]">{t("noPaymentMethods")}</p>
        </div>
      ) : (
        <div className="divide-y divide-[var(--color-border)] rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]">
          {paymentMethods.map((method, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                <Wallet className="h-4 w-4 text-[var(--color-primary)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--color-foreground)]">
                  {method.type}
                </p>
                <p className="text-sm text-[var(--color-foreground)]">{method.accountName}</p>
                <p className="mt-0.5 font-mono text-sm text-[var(--color-primary)]">
                  {method.accountNumber}
                </p>
                {method.instructions && (
                  <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">
                    {method.instructions}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
