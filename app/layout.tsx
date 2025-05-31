// app/layout.tsx
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LuxeAiAssistance from "@/components/luxeComponents/LuxeAiAssistance";
import Loading from "./loading";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ClientProviderWithFallback = dynamic(
  () => import("@/components/chakra-snippets/ClientProvider"),
  { loading: () => <Loading /> }
);

export const metadata: Metadata = {
  title: "Luxe Managements Airbnb Property Management Adelaide",
  description:
    "Airbnb management services designed to maximize your rental income in Adelaide. Our comprehensive solutions include property styling, professional photography, cleaning, and guest care to ensure your property stands out and operates smoothly.",
  metadataBase: new URL("https://www.luxemanagements.com"),
  alternates: {
    canonical: "https://www.luxemanagements.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Luxe Managements Airbnb Property Management Adelaide",
    description:
      "Airbnb management services designed to maximize your rental income in Adelaide. Our comprehensive solutions include property styling, professional photography, cleaning, and guest care to ensure your property stands out and operates smoothly.",
    url: "https://www.luxemanagements.com",
    siteName: "Luxe Managements",
    images: [
      {
        url: "https://www.luxemanagements.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxe Managements Airbnb property management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Managements Airbnb Property Management Adelaide",
    description:
      "Airbnb management services designed to maximize your rental income in Adelaide. Our comprehensive solutions include property styling, professional photography, cleaning, and guest care to ensure your property stands out and operates smoothly.",
    images: ["https://www.luxemanagements.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        {/* Analytics and Speed Insights load after hydration */}
        <Analytics />
        <SpeedInsights />

        <ClientProviderWithFallback>
          <LuxeAiAssistance />
          <main>{children}</main>
        </ClientProviderWithFallback>
      </body>
    </html>
  );
}
