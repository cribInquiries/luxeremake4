import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
// app/pricing/page.tsx
import { Metadata } from "next";

// eslint-disable-next-line import/no-unused-modules
export const metadata: Metadata = {
  title: "Pricing Plans | Luxe Managements",
  description:
    "Transparent pricing for our Airbnb property management, styling, cleaning and add-on services in Adelaide.",
  keywords: [
    "Pricing",
    "Airbnb Management Pricing",
    "Adelaide",
    "Luxe Managements",
  ],
  openGraph: {
    title: "Pricing Plans | Luxe Managements",
    description:
      "Discover our flexible pricing tiers and see which plan fits your Airbnb goals.",
    url: "/pricing",
    images: [
      {
        url: "/pricing/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pricing tiers overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans | Luxe Managements",
    description:
      "Discover our flexible pricing tiers and see which plan fits your Airbnb goals.",
    images: ["/pricing/og-image.png"],
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
