"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, TrendingUp, DollarSign } from "lucide-react"
import type { Property } from "@/lib/properties"
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface ClearviewTransformationViewProps {
  property: Property
}

export function ClearviewTransformationView({ property }: ClearviewTransformationViewProps) {
  if (!property.transformationStory) return null

  const story = property.transformationStory

  const propertyValueData = [
    { period: "Before Luxe", value: 603000, fill: "#94a3b8" },
    { period: "After Luxe", value: 700000, fill: "#10b981" },
  ]

  const incomeComparisonData = [
    { period: "Traditional Rental", annual: 36400, fill: "#ef4444" },
    { period: "With Luxe (Airbnb)", annual: 105000, fill: "#10b981" },
  ]

  const revenueTimelineData = [
    { month: "Jan", traditional: 3033, airbnb: 7200 },
    { month: "Feb", traditional: 3033, airbnb: 7800 },
    { month: "Mar", traditional: 3033, airbnb: 8400 },
    { month: "Apr", traditional: 3033, airbnb: 8900 },
    { month: "May", traditional: 3033, airbnb: 9200 },
    { month: "Jun", traditional: 3033, airbnb: 8800 },
    { month: "Jul", traditional: 3033, airbnb: 8500 },
    { month: "Aug", traditional: 3033, airbnb: 8700 },
    { month: "Sep", traditional: 3033, airbnb: 9100 },
    { month: "Oct", traditional: 3033, airbnb: 9400 },
    { month: "Nov", traditional: 3033, airbnb: 9600 },
    { month: "Dec", traditional: 3033, airbnb: 9800 },
  ]

  const bedroomComparisons = [
    {
      before: "/images/cbedframeold1.jpg",
      after: "/images/cbedroom1.jpg",
      beforeDesc: "Ornate vintage bed with mismatched dated decor",
      afterDesc: "Luxurious master bedroom with modern grey headboard and elegant white bedding",
    },
    {
      before: "/images/cbedframeold1.jpg",
      after: "/images/cbedroom1.jpg",
      beforeDesc: "Ornate vintage bed with mismatched dated decor",
      afterDesc: "Luxurious master bedroom with modern grey headboard and elegant white bedding",
    },
    {
      before: "/images/cbedframeold1.jpg",
      after: "/images/cbedroom1.jpg",
      beforeDesc: "Ornate vintage bed with mismatched dated decor",
      afterDesc: "Luxurious master bedroom with modern grey headboard and elegant white bedding",
    },
    {
      before: "/images/cbedframeold1.jpg",
      after: "/images/cbedroom1.jpg",
      beforeDesc: "Ornate vintage bed with mismatched dated decor",
      afterDesc: "Luxurious master bedroom with modern grey headboard and elegant white bedding",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <Link
        href="/gallery"
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md flex justify-center items-center hover:bg-black transition-all duration-300 group"
        aria-label="Back to gallery"
      >
        <ArrowLeft size={24} className="text-white group-hover:-translate-x-1 transition-transform duration-300" />
      </Link>

      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto scroll-smooth">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0 animate-[zoom_30s_ease-in-out_infinite]">
            <Image
              src="/images/cbedroom1.jpg"
              alt="Serene Family Home in Clearview"
              fill
              className="object-cover opacity-50"
              priority
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-[fadeInUp_1s_ease-out]">
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                Transformation Success Story
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight text-balance leading-[0.95] animate-[fadeInUp_1s_ease-out_0.2s_both]">
              Serene Family Home in Clearview
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light text-balance max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out_0.4s_both]">
              {property.subheading}
            </p>
          </div>
        </section>

        {/* Property Details Section */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-black">$300</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">ADR</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-black">6</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Bedrooms</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-black">4</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Bathrooms</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-black">346m²</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Land Size</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Story */}
        <section className="py-28 md:py-40 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">The Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 text-balance leading-tight">
              Fast-Tracked Transformation Under Tight Deadline
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-pretty mb-8">{property.description}</p>
          </div>
        </section>

        {/* Before & After Comparison */}
        <section className="bg-gray-50 py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                The Bedding System Transformation Journey
              </h2>
              <p className="text-xl text-gray-600">
                Our first major bedding system showcase—transforming outdated bedrooms into luxurious guest spaces
              </p>
            </div>

            {/* Side by Side Bedroom Comparisons */}
            <div className="space-y-16">
              {bedroomComparisons.map((comparison, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="inline-block px-6 py-2 bg-gray-800 text-white text-sm font-semibold rounded-full">
                      Before Luxe
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                      <Image
                        src={comparison.before || "/placeholder.svg"}
                        alt={`Bedroom ${index + 1} before Luxe transformation`}
                        fill
                        className="object-cover grayscale-[40%] group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <p className="text-gray-600 text-lg">{comparison.beforeDesc}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="inline-block px-6 py-2 bg-green-600 text-white text-sm font-semibold rounded-full">
                      After Luxe
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden group shadow-2xl">
                      <Image
                        src={comparison.after || "/placeholder.svg"}
                        alt={`Bedroom ${index + 1} after Luxe transformation`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <p className="text-gray-900 text-lg font-semibold">{comparison.afterDesc}</p>
                  </div>
                </div>
              ))}

              {/* Fifth Bedroom */}
              <div className="mt-12">
                <div className="text-center mb-6">
                  <div className="inline-block px-6 py-2 bg-green-600 text-white text-sm font-semibold rounded-full mb-4">
                    After Luxe - Fifth Bedroom
                  </div>
                </div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/cbedroom5new.jpeg"
                    alt="Fifth bedroom with modern styling"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <div className="text-center mt-6">
                  <p className="text-2xl font-semibold text-green-600">Fifth Bedroom</p>
                  <p className="text-gray-600 text-lg">Additional guest room with premium finishes</p>
                </div>
              </div>

              {/* Games Room */}
              <div className="mt-20">
                <div className="text-center mb-6">
                  <div className="inline-block px-6 py-2 bg-green-600 text-white text-sm font-semibold rounded-full mb-4">
                    After Luxe - Entertainment Zone
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/cgameroom1new.jpeg"
                      alt="Entertainment room with pool table and kitchen view"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/cgameroom2new.jpeg"
                      alt="Games room with ping pong and pool tables"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-2xl font-semibold text-green-600">Bonus: Entertainment Zone</p>
                  <p className="text-gray-600 text-lg">Pool table and table tennis for guest enjoyment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Value Impact */}
        <section className="py-28 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Property Value Growth</h2>
              <p className="text-xl text-white/70">Strategic improvements increased the property's market value</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-12">
              <ChartContainer
                config={{
                  value: {
                    label: "Property Value (AUD)",
                    color: "#10b981",
                  },
                }}
                className="h-[450px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={propertyValueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="period" tick={{ fill: "#fff", fontSize: 14 }} tickLine={false} />
                    <YAxis
                      tick={{ fill: "#fff", fontSize: 14 }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      cursor={{ fill: "rgba(255,255,255,0.1)" }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, "Value"]}
                    />
                    <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                      {propertyValueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-8 flex justify-center gap-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-400 mb-2">$603,000</div>
                  <div className="text-sm text-gray-500">Before Luxe</div>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">$700,000</div>
                  <div className="text-sm text-white">After Luxe</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-green-500">+$97,000 equity growth</p>
                <p className="text-white/70 mt-2">16% value increase through strategic improvements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Comparison */}
        <section className="py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Revenue Transformation</h2>
              <p className="text-xl text-gray-600">Traditional rental vs. Luxe-managed Airbnb performance</p>
            </div>

            {/* Annual Comparison */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-black mb-8">Annual Revenue Comparison</h3>
              <ChartContainer
                config={{
                  annual: {
                    label: "Annual Revenue (AUD)",
                    color: "#10b981",
                  },
                }}
                className="h-[450px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={incomeComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="period" tick={{ fill: "#666", fontSize: 14 }} tickLine={false} />
                    <YAxis
                      tick={{ fill: "#666", fontSize: 14 }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      cursor={{ fill: "rgba(0,0,0,0.05)" }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, "Annual Revenue"]}
                    />
                    <Bar dataKey="annual" radius={[12, 12, 0, 0]}>
                      {incomeComparisonData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">$36,400</div>
                  <div className="text-sm text-gray-600">Traditional Rental ($700/week)</div>
                </div>
                <div className="flex items-center justify-center">
                  <DollarSign className="w-12 h-12 text-green-500" />
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">$105,000</div>
                  <div className="text-sm text-gray-600">Luxe Airbnb ($900/week avg)</div>
                </div>
              </div>
              <div className="mt-6 text-center p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <p className="text-3xl font-bold text-white">+$68,600 additional annual revenue</p>
                <p className="text-white/90 mt-2">188% revenue increase with Luxe Management</p>
              </div>
            </div>

            {/* Monthly Timeline */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-8">Monthly Revenue Performance</h3>
              <ChartContainer
                config={{
                  traditional: {
                    label: "Traditional Rental",
                    color: "#ef4444",
                  },
                  airbnb: {
                    label: "Luxe Airbnb",
                    color: "#10b981",
                  },
                }}
                className="h-[450px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueTimelineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fill: "#666", fontSize: 14 }} tickLine={false} />
                    <YAxis
                      tick={{ fill: "#666", fontSize: 14 }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} cursor={{ stroke: "#e5e7eb", strokeWidth: 2 }} />
                    <Line
                      type="monotone"
                      dataKey="traditional"
                      stroke="#ef4444"
                      strokeWidth={3}
                      dot={{ fill: "#ef4444", r: 6 }}
                      name="Traditional Rental"
                    />
                    <Line
                      type="monotone"
                      dataKey="airbnb"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{ fill: "#10b981", r: 6 }}
                      name="Luxe Airbnb"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-8 flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500" />
                  <span className="text-gray-600">Traditional: $3,033/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                  <span className="text-gray-600">Luxe: $8,750/month avg</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 md:py-48 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <div className="mb-12">
              <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
                Ready to Transform Your Property?
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
              Your Property Could Be Next
            </h2>
            <p className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-12 text-balance max-w-3xl mx-auto">
              This owner trusted Luxe with a tight deadline and watched their property transform into a $105,000/year
              revenue generator. What could we do for yours?
            </p>

            <div className="mt-16">
              <button className="px-12 md:px-16 py-6 md:py-7 bg-white text-black text-xl md:text-2xl font-bold rounded-full hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-2xl">
                Book a Consultation Now
              </button>
              <p className="text-white/60 mt-6 italic text-xl">
                "Fast turnarounds. Exceptional results. That's the Luxe difference."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
