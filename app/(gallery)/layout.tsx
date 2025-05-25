import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
// app/gallery/page.tsx
import { Metadata } from "next";

// eslint-disable-next-line import/no-unused-modules
export const metadata: Metadata = {
  title: "Gallery | Luxe Managements",
  description:
    "Browse our portfolio of beautifully styled Airbnb properties managed by Luxe Managements in Adelaide.",
  keywords: [
    "Gallery",
    "Airbnb Photos",
    "Property Styling",
    "Adelaide",
    "Luxe Managements",
  ],
  openGraph: {
    title: "Gallery | Luxe Managements",
    description:
      "See before-and-after shots of our most stunning Airbnb makeovers.",
    url: "/gallery",
    images: [
      {
        url: "/gallery/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Before and after Airbnb styling examples",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Luxe Managements",
    description:
      "See before-and-after shots of our most stunning Airbnb makeovers.",
    images: ["/gallery/og-image.jpg"],
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <FAQ type="general" />
      <Footer />
    </>
  );
};

export default Layout;
