"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@fitfast/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@fitfast/ui/cn";

export function Navbar() {
  const t = useTranslations("landing");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed top-6 right-0 left-0 z-[100] flex justify-center px-4">
      <nav
        className={cn(
          "pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
          isScrolled
            ? "border border-[var(--color-border)] bg-[var(--color-background)]/80 shadow-sm backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div
          className="group flex cursor-pointer items-center gap-3"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/logo.png"
            alt="FitFast Icon"
            className="h-10 w-10 rounded-2xl object-contain shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className={cn(
              "text-2xl font-black tracking-tighter uppercase italic transition-colors duration-300",
              isScrolled ? "text-[var(--color-foreground)]" : "text-slate-800",
            )}
          >
            Fit<span className="text-[var(--color-primary)]">Fast</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div
            className={cn(
              "transition-colors duration-300",
              isScrolled ? "text-[var(--color-foreground)]" : "text-slate-700",
            )}
          >
            <LanguageSwitcher />
          </div>
          <a href="#pricing">
            <Button
              className={cn(
                "group relative overflow-hidden rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95",
                "bg-[var(--color-primary)] text-white hover:text-white",
              )}
            >
              <span className="relative z-10">{t("heroCta") || "Pick a plan"}</span>
              <span
                className={cn(
                  "absolute inset-0 z-0 translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0",
                  "bg-[var(--color-primary-dark)]",
                )}
              />
            </Button>
          </a>
        </div>
      </nav>
    </div>
  );
}
