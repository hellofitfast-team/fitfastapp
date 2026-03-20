"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useProfile } from "@/hooks/use-profile";
import { MobileHeader } from "./mobile-header";
import { ClientSidebar } from "./client-sidebar";
import { DesktopHeader } from "./desktop-header";
import { BottomNav } from "./bottom-nav";
import { MoreMenu } from "./more-menu";
import { ExpiryBanner } from "./expiry-banner";

interface DashboardShellProps {
  children: React.ReactNode;
  userName?: string;
  daysUntilExpiry?: number | null;
}

export function DashboardShell({ children, userName, daysUntilExpiry }: DashboardShellProps) {
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const hasBanner = daysUntilExpiry !== null && daysUntilExpiry !== undefined;

  // Sync profile.language with the detected/chosen UI locale
  const locale = useLocale();
  const { profile } = useProfile();
  const updateProfile = useMutation(api.profiles.updateProfile);
  const hasSynced = useRef(false);

  useEffect(() => {
    if (profile && profile.language !== locale && !hasSynced.current) {
      hasSynced.current = true;
      updateProfile({ language: locale as "en" | "ar" });
    }
  }, [locale, profile, updateProfile]);

  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex min-h-dvh lg:h-dvh">
      {/* Noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Sidebar — fixed & off-screen on mobile, in-flow on desktop (lg+) */}
      <ClientSidebar />

      {/* Content column */}
      <div className="flex flex-1 flex-col">
        {/* Near-expiry banner */}
        {hasBanner && <ExpiryBanner daysUntilExpiry={daysUntilExpiry} />}

        {/* Desktop header (lg+) */}
        <DesktopHeader userName={userName} />

        {/* Mobile header (below lg) */}
        <MobileHeader userName={userName} />

        {/* Single main content — scrolls on desktop, mobile bottom-nav padding */}
        <main
          aria-label="Main content"
          className="relative z-0 flex-1 overflow-x-hidden overflow-y-auto p-4 pb-[calc(var(--height-bottom-nav)+max(0.5rem,env(safe-area-inset-bottom))+0.75rem)] lg:p-8 lg:pb-8"
        >
          {children}
        </main>

        {/* Mobile bottom navigation (below lg) */}
        <BottomNav onMoreClick={() => setMoreMenuOpen(true)} />
        <MoreMenu open={moreMenuOpen} onOpenChange={setMoreMenuOpen} />
      </div>
    </div>
  );
}
