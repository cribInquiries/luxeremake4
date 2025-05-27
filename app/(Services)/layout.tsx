import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
// app/services/page.tsx
import { Metadata } from "next";

// eslint-disable-next-line import/no-unused-modules
export const metadata: Metadata = {
  title: "Our Services | Luxe Managements",
  description:
    "Explore our full suite of Airbnb property management services in Adelaide: hosting, styling, cleaning, guest care and more.",
  keywords: [
    "Airbnb Services",
    "Property Management Services",
    "Adelaide",
    "Luxe Managements",
  ],
  openGraph: {
    title: "Our Services | Luxe Managements",
    description:
      "Hosting, styling, cleaning, and guest care—see how we maximise your Airbnb returns.",
    url: "/services",
    images: [
      {
        url: "/services/og-image.png",
        width: 1200,
        height: 630,
        alt: "Styled Airbnb interior by Luxe Managements",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Luxe Managements",
    description:
      "Hosting, styling, cleaning, and guest care—see how we maximise your Airbnb returns.",
    images: ["/services/og-image.png"],
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>

      <FAQ type="general" />
      <Footer />
    </>
  );
};

export default Layout;
