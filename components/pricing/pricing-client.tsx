"use client"

import type React from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { useRef, useState, useEffect } from "react"

type Category = {
  title: string
  description: string
  icon: React.ReactNode
  items: string[]
}

const categories: Category[] = [
  {
    title: "Turnkey Operations",
    description: "We run every on-the-ground task so you never worry about the next reservation.",
    icon: null,
    items: [
      "Cleaning and amenity restocking after every checkout",
      "Deep cleans between every stay - no skipped rotations",
      "Monthly deep restoration & detailing of the property",
      "Full furnishing, styling, seasonal decor and replacements",
      "Bill, utility, and subscription management",
      "Vendor sourcing, vetting, and quality control",
    ],
  },
  {
    title: "Guest Experience & Protection",
    description: "Your guests feel taken care of while your asset stays protected around the clock.",
    icon: null,
    items: [
      "24/7 guest communication, vetting, and concierge",
      "Smart lock, access codes, and identity verification",
      "24/7 home protection services with rapid incident response",
      "24/7 party monitoring, noise detection, and occupancy alerts",
      "Insurance claim management and damage remediation",
      "Guest review management and reputation building",
    ],
  },
  {
    title: "Revenue & Owner Performance",
    description: "We obsess over profitability so you can scale faster with total clarity.",
    icon: null,
    items: [
      "18% commission on earned revenue - no onboarding or hidden fees",
      "24/7 pricing optimisation powered by live market data",
      "Profit optimisation, expense audits, and supply cost controls",
      "Monthly payouts with transparent payment breakdowns",
      "Owner dashboard with KPI tracking & tax-ready reporting",
      "Quarterly strategy sessions & portfolio growth roadmaps",
    ],
  },
  {
    title: "Brand & Market Acceleration",
    description: "We craft a standout listing that outperforms the market on every channel.",
    icon: null,
    items: [
      "Professional photography, videography, and virtual tour capture",
      "Listing copywriting and OTA optimisation for every platform",
      "In-stay upsells, local partnerships, and experience curation",
      "Reputation boosting with proactive review solicitation",
      "In-home welcome guides, brand collateral, and guest gifts",
      "Post-stay nurture to drive repeat and direct bookings",
    ],
  },
]

const servicesWithDetails = [
  {
    title: "Cleaning after checkout",
    detail: "Professional Adelaide property cleaning between Airbnb guests",
  },
  {
    title: "Deep cleans every stay",
    detail: "Short-term rental deep cleaning services for every guest arrival",
  },
  {
    title: "Monthly restorations",
    detail: "Comprehensive property maintenance for Adelaide vacation rentals",
  },
  {
    title: "Full furnishing",
    detail: "Airbnb property styling and furnishing packages",
  },
  {
    title: "Bill management",
    detail: "Complete utility and expense management for rental properties",
  },
  {
    title: "Vendor coordination",
    detail: "Adelaide property management vendor network and quality control",
  },
  {
    title: "24/7 guest support",
    detail: "Round-the-clock concierge for short-term rental guests",
  },
  {
    title: "Smart lock access",
    detail: "Secure keyless entry systems for Airbnb properties",
  },
  {
    title: "Party monitoring",
    detail: "24/7 noise detection and unauthorized party prevention",
  },
  {
    title: "Damage remediation",
    detail: "Rapid property damage response and insurance claim handling",
  },
  {
    title: "Review management",
    detail: "5-star Airbnb review optimization and reputation management",
  },
  {
    title: "Dynamic pricing",
    detail: "AI-powered revenue optimization for Adelaide short-term rentals",
  },
  {
    title: "Profit optimization",
    detail: "Strategic expense audits to maximize rental property returns",
  },
  {
    title: "Transparent payouts",
    detail: "Monthly owner distributions with detailed financial breakdowns",
  },
  {
    title: "Tax-ready reports",
    detail: "Compliant financial reporting for short-term rental taxation",
  },
  {
    title: "Strategy sessions",
    detail: "Quarterly property portfolio growth planning and analysis",
  },
  {
    title: "Pro photography",
    detail: "Professional Airbnb listing photography and virtual tours",
  },
  {
    title: "Listing copywriting",
    detail: "SEO-optimized descriptions for maximum booking conversion",
  },
  {
    title: "Welcome guides",
    detail: "Custom guest experience collateral for premium stays",
  },
  {
    title: "Local partnerships",
    detail: "Adelaide experience curation and in-stay upsell opportunities",
  },
  {
    title: "Maintenance scheduling",
    detail: "Preventative property maintenance to protect your investment",
  },
  {
    title: "HVAC & safety checks",
    detail: "Regular safety inspections and HVAC system maintenance",
  },
  {
    title: "Inventory management",
    detail: "Automated restocking systems for short-term rental supplies",
  },
  {
    title: "Permit compliance",
    detail: "Adelaide short-term rental licensing and regulation management",
  },
  {
    title: "Insurance reviews",
    detail: "Coverage optimization for vacation rental property protection",
  },
  {
    title: "Direct booking setup",
    detail: "Property management website and direct booking infrastructure",
  },
]

const PillarSection = ({ title, subtitle, features, side, dark }: PillarSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 ${dark ? "bg-black text-white" : ""} ${dark ? "rounded-2xl px-6 py-12 sm:rounded-3xl sm:px-8 sm:py-20 md:px-16" : ""}`}
      role="article"
      aria-label={`${title} property management services`}
    >
      <div className={side === "right" ? "lg:order-2" : ""}>
        <h3 className="mb-3 text-4xl font-semibold tracking-tight sm:mb-4 sm:text-6xl md:text-7xl">{title}</h3>
        <p className={`text-lg sm:text-2xl ${dark ? "text-gray-400" : "text-gray-600"}`}>{subtitle}</p>
      </div>

      <ul className={`space-y-3 sm:space-y-4 ${side === "right" ? "lg:order-1" : ""}`} role="list">
        {features.map((feature, i) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: side === "left" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 sm:rounded-2xl sm:px-6 sm:py-4 ${dark ? "bg-white/5" : "bg-gray-50"}`}
          >
            <div className={`h-2 w-2 shrink-0 rounded-full ${dark ? "bg-white" : "bg-black"}`} aria-hidden="true" />
            <span className={`text-base font-medium sm:text-lg ${dark ? "text-gray-200" : "text-gray-800"}`}>
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

const ServiceCard = ({ item, index }: { item: { title: string; detail: string }; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
      role="listitem"
    >
      <div className="flex h-12 items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md sm:h-14 sm:gap-3 sm:px-5 sm:py-4">
        <div
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black sm:h-6 sm:w-6"
          aria-hidden="true"
        >
          <Check size={12} className="text-white sm:h-3.5 sm:w-3.5" />
        </div>
        <span className="text-xs font-medium text-gray-800 sm:text-sm">{item.title}</span>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full z-50 mt-2 rounded-xl bg-white p-3 shadow-xl ring-1 ring-black/5 sm:p-4"
            role="tooltip"
            aria-label={`Details for ${item.title}`}
          >
            <p className="text-xs text-gray-600 sm:text-sm">{item.detail}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

type PillarSectionProps = {
  title: string
  subtitle: string
  features: string[]
  side: "left" | "right"
  dark?: boolean
}

export default function PricingClient() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const [displayedNumber, setDisplayedNumber] = useState(100)

  useEffect(() => {
    const totalDuration = 2000 // 2 seconds total
    const fastPhase = 1200 // 1.2 seconds for 100-25
    const slowPhase = 800 // 0.8 seconds for 25-18

    const fastSteps = 50 // Fast countdown steps
    const slowSteps = 25 // Slow countdown steps for final stretch

    let currentStep = 0

    // Fast phase: 100 to 25
    const fastInterval = setInterval(() => {
      currentStep++
      const decrement = (100 - 25) / fastSteps
      const newValue = Math.max(25, 100 - decrement * currentStep)
      setDisplayedNumber(Math.round(newValue))

      if (currentStep >= fastSteps) {
        clearInterval(fastInterval)
        currentStep = 0

        // Slow phase: 25 to 18
        const slowInterval = setInterval(() => {
          currentStep++
          const decrement = (25 - 18) / slowSteps
          const newValue = Math.max(18, 25 - decrement * currentStep)
          setDisplayedNumber(Math.round(newValue))

          if (currentStep >= slowSteps) {
            clearInterval(slowInterval)
            setDisplayedNumber(18)
          }
        }, slowPhase / slowSteps)
      }
    }, fastPhase / fastSteps)

    return () => {
      clearInterval(fastInterval)
    }
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 text-center sm:px-6"
        aria-labelledby="pricing-hero-title"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            id="pricing-hero-title"
            className="mb-6 text-6xl font-semibold tracking-tight text-black sm:mb-8 sm:text-7xl md:text-8xl lg:text-9xl"
          >
            {displayedNumber}%
          </h1>
          <p className="mb-3 text-xl font-medium text-black sm:mb-4 sm:text-2xl md:text-3xl">
            Adelaide Airbnb Property Management
          </p>
          <p className="mx-auto max-w-2xl px-4 text-base text-gray-600 sm:text-lg md:text-xl">
            Full-service short-term rental management. One price. Everything included.
          </p>
        </motion.div>
      </motion.section>

      {/* Four Pillars */}
      <section className="px-4 py-20 sm:px-6 sm:py-32" aria-labelledby="pillars-section">
        <h2 id="pillars-section" className="sr-only">
          Our Service Pillars
        </h2>
        <div className="mx-auto grid max-w-7xl gap-20 sm:gap-32 md:gap-48">
          {/* Turnkey */}
          <PillarSection
            title="Turnkey"
            subtitle="We handle everything."
            features={["Cleaning", "Restocking", "Furnishing", "Maintenance", "Bills", "Vendors"]}
            side="left"
          />

          {/* Protected */}
          <PillarSection
            title="Protected"
            subtitle="24/7 peace of mind."
            features={["Guest vetting", "Access control", "Party monitoring", "Damage protection", "Insurance claims"]}
            side="right"
            dark
          />

          {/* Profitable */}
          <PillarSection
            title="Profitable"
            subtitle="Revenue obsessed."
            features={["Dynamic pricing", "Profit optimization", "Monthly payouts", "KPI tracking", "Growth strategy"]}
            side="left"
          />

          {/* Premium */}
          <PillarSection
            title="Premium"
            subtitle="Stand out everywhere."
            features={[
              "Pro photography",
              "Listing optimization",
              "5-star experiences",
              "Review management",
              "Direct bookings",
            ]}
            side="right"
            dark
          />
        </div>
      </section>

      {/* What's Included - Compact Grid */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 sm:py-32" aria-labelledby="included-services">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center sm:mb-16"
          >
            <h2
              id="included-services"
              className="mb-3 text-4xl font-semibold tracking-tight text-black sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              What's included
            </h2>
            <p className="text-lg text-gray-600 sm:text-xl">Every service. Every detail.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            role="list"
            aria-label="Included property management services"
          >
            {servicesWithDetails.map((item, i) => (
              <ServiceCard key={item.title} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center sm:min-h-[70vh] sm:px-6 sm:py-32"
        aria-labelledby="cta-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="cta-heading"
            className="mb-6 text-4xl font-semibold tracking-tight text-black sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Ready to scale?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl px-4 text-lg text-gray-600 sm:mb-12 sm:text-xl">
            Start your Adelaide property management journey today.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-base font-medium text-white transition-all hover:bg-gray-900 sm:px-8 sm:py-4 sm:text-lg"
            aria-label="Schedule your property management consultation call"
          >
            Schedule your call
            <ArrowRight size={20} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
}
