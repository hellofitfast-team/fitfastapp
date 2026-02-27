import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FitFast Admin",
    template: "%s | FitFast Admin",
  },
  description: "FitFast coaching administration panel.",
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const locale = h.get("x-next-intl-locale") ?? "en";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <ConvexAuthNextjsServerProvider>
      <html lang={locale} dir={dir}>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Space+Grotesk:wght@500;600;700&family=Alexandria:wght@500;600;700;900&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="bg-background text-foreground min-h-screen antialiased">{children}</body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
