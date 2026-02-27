"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@fitfast/ui/drawer";
import { useTranslations } from "next-intl";
import { CheckoutForm } from "./checkout-form";
import type { SelectedPlan } from "./checkout-form";
import { X } from "lucide-react";

interface CheckoutDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan: SelectedPlan | null;
  onSuccess: () => void;
}

export function CheckoutDrawer({
  open,
  onOpenChange,
  selectedPlan,
  onSuccess,
}: CheckoutDrawerProps) {
  const t = useTranslations("checkout");

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="flex max-h-[92dvh] flex-col">
        {/* Header */}
        <DrawerHeader className="relative flex-shrink-0 border-b border-[var(--color-border)] px-6 pt-6 pb-4">
          <div className="pe-8">
            <DrawerTitle className="text-start text-lg font-bold text-[var(--color-foreground)]">
              {t("formTitle")}
            </DrawerTitle>
            {selectedPlan && (
              <DrawerDescription className="mt-1 text-start text-sm text-[var(--color-muted-foreground)]">
                {selectedPlan.name} — {selectedPlan.price.toLocaleString("en-EG")}{" "}
                {selectedPlan.currency} / {selectedPlan.duration}
              </DrawerDescription>
            )}
          </div>

          {/* Close button */}
          <DrawerClose asChild>
            <button
              className="absolute end-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-muted)] text-[var(--color-muted-foreground)] transition-colors hover:bg-[var(--color-border)]"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </DrawerClose>
        </DrawerHeader>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {selectedPlan && <CheckoutForm selectedPlan={selectedPlan} onSuccess={onSuccess} />}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
