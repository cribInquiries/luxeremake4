import type { Metadata } from "next"

import PricingClient from "@/components/pricing/pricing-client"

export const metadata: Metadata = {
  title: "18% Commission | Adelaide Airbnb Property Management | Short Term Rental Services",
  description:
    "Full-service Adelaide Airbnb property management at 18% commission. Professional short-term rental management including cleaning, guest services, dynamic pricing, and 24/7 support for vacation rental owners.",
  keywords: [
    "Adelaide Airbnb management",
    "short term rental management Adelaide",
    "property management Adelaide",
    "Airbnb hosting services",
    "vacation rental management",
    "short stay property management",
    "Airbnb cleaning services Adelaide",
    "rental property management",
  ],
  openGraph: {
    title: "18% Commission Adelaide Airbnb Property Management",
    description: "Full-service short-term rental management in Adelaide. Everything included at 18% commission.",
    type: "website",
  },
}

export default function PricingPage() {
  return <PricingClient />
}
