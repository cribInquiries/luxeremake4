import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
// app/contact/page.tsx
import { Metadata } from "next";

// eslint-disable-next-line import/no-unused-modules
export const metadata: Metadata = {
  title: "Contact Us | Luxe Managements",
  description:
    "Get in touch with Luxe Managements for expert Airbnb property management in Adelaide.",
  keywords: [
    "Contact",
    "Get in Touch",
    "Airbnb Management",
    "Adelaide",
    "Luxe Managements",
  ],
  openGraph: {
    title: "Contact Us | Luxe Managements",
    description:
      "Reach out today to discuss your Airbnb hosting needs and how we can help.",
    url: "/contact",
    images: [
      {
        url: "/contact/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxe Managements team ready to assist",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Luxe Managements",
    description:
      "Reach out today to discuss your Airbnb hosting needs and how we can help.",
    images: ["/contact/og-image.jpg"],
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
