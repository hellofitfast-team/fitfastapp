import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Space_Grotesk, Alexandria } from "next/font/google";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  variable: "--font-alexandria",
});

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
      <html
        lang={locale}
        dir={dir}
        className={`${inter.variable} ${spaceGrotesk.variable} ${alexandria.variable}`}
      >
        <body className="bg-background text-foreground min-h-screen font-sans antialiased">
          {children}
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
