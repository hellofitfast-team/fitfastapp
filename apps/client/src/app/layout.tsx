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
    default: "FitFast - AI-Powered Fitness Coaching",
    template: "%s | FitFast",
  },
  description:
    "Personalized meal plans and workout routines powered by AI. Track your progress and achieve your fitness goals.",
  keywords: ["fitness", "coaching", "meal plan", "workout", "AI", "health", "Egypt", "MENA"],
  authors: [{ name: "FitFast" }],
  creator: "FitFast",
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "FitFast",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "FitFast",
    title: "FitFast - AI-Powered Fitness Coaching",
    description:
      "Personalized meal plans and workout routines powered by AI. Track your progress and achieve your fitness goals.",
  },
  twitter: {
    card: "summary",
    title: "FitFast - AI-Powered Fitness Coaching",
    description:
      "Personalized meal plans and workout routines powered by AI. Track your progress and achieve your fitness goals.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF4500",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
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
        <body className="bg-background text-foreground min-h-dvh overflow-x-hidden font-sans antialiased">
          {children}
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
