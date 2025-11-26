"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Bed, Bath, Square } from "lucide-react"
import type { Property } from "@/lib/properties"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface WestBeachTransformationViewProps {
  property: Property
}

export function WestBeachTransformationView({ property }: WestBeachTransformationViewProps) {
  if (!property.transformationStory) return null

  const story = property.transformationStory

  const monthlyRevenueData = [
    { month: 1, traditional: 1950, luxe: 7440 },
    { month: 2, traditional: 1950, luxe: 6960 },
    { month: 3, traditional: 1950, luxe: 7200 },
    { month: 4, traditional: 1950, luxe: 6720 },
    { month: 5, traditional: 1950, luxe: 6480 },
    { month: 6, traditional: 1950, luxe: 6240 },
    { month: 7, traditional: 1950, luxe: 6000 },
    { month: 8, traditional: 1950, luxe: 6240 },
    { month: 9, traditional: 1950, luxe: 6480 },
    { month: 10, traditional: 1950, luxe: 6720 },
    { month: 11, traditional: 1950, luxe: 7200 },
    { month: 12, traditional: 1950, luxe: 7440 },
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
        {/* Hero Section - Cover */}
        <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/westlivingnew.jpg"
              alt={property.title}
              fill
              className="object-cover opacity-60 scale-125 transition-transform duration-[20s] ease-out hover:scale-[1.35]"
              priority
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-sm font-semibold text-white uppercase tracking-wider [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">
                Success Story
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight text-balance leading-[0.95] [text-shadow:_0_4px_16px_rgb(0_0_0_/_100%)]">
              {property.title}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-light text-balance max-w-4xl mx-auto [text-shadow:_0_2px_12px_rgb(0_0_0_/_80%)]">
              {property.subheading}
            </p>
          </div>
        </section>

        {/* Property Details Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              <div className="flex items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-700 font-semibold">Location</div>
                  <div className="text-2xl font-bold text-black">West Beach</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Bed className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-700 font-semibold">Bedroom</div>
                  <div className="text-2xl font-bold text-black">2</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Bath className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-700 font-semibold">Bathroom</div>
                  <div className="text-2xl font-bold text-black">1</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Square className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-700 font-semibold">Land Size</div>
                  <div className="text-xl font-bold text-black whitespace-nowrap">40 m²</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shrink-0">
                  <div className="text-sm font-bold text-white">ADR</div>
                </div>
                <div>
                  <div className="text-sm text-gray-700 font-semibold">ADR</div>
                  <div className="text-2xl font-bold text-black">$240</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">2</div>
                <div className="text-gray-600">Bedrooms</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">1</div>
                <div className="text-gray-600">Bathrooms</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">40</div>
                <div className="text-gray-600">m²</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">$240</div>
                <div className="text-gray-600">ADR/Night</div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="inline-block px-8 py-4 bg-green-50 rounded-2xl">
                <div className="text-3xl font-bold text-green-600">$64,000/year</div>
                <div className="text-gray-600 mt-1">Annual Revenue</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Story */}
        <section className="py-28 md:py-40 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4">The Story</h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-pretty font-normal">
              This client was the very first homeowner to reach out to us through our website. He had just finished
              renovating a beautiful property only a minute from the beach and wanted to turn it into something more
              than a standard rental. After our initial consultation, we introduced him to Luxe's full-service Airbnb
              transformation. We implemented our latest bedding system, prepared a premium care package, and completed a
              full styling and setup tailored for high–occupancy coastal stays. Within days, the home was completely
              guest-ready. The result? The property quickly became one of our top-performing Airbnbs in West Beach,
              consistently achieving high occupancy, excellent guest reviews, and returns far beyond what a regular
              rental could offer. What began as a simple enquiry became a long-term partnership—and a standout success
              story for Luxe.
            </p>
          </div>
        </section>

        {/* Before & After Journey - Side by Side */}
        <section className="py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Transformation Journey</h2>
              <p className="text-xl text-gray-600">Side-by-side comparison of before and after working with Luxe</p>
            </div>

            <div className="space-y-16">
              {/* Bathroom Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/westbathroomold.jpg"
                      alt="Bathroom before Luxe transformation"
                      fill
                      className="object-cover grayscale-[30%] scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">Before</p>
                    <p className="text-gray-600">Basic, dated bathroom setup</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-green-500/20">
                    <Image
                      src="/images/westnewbathroom.jpg"
                      alt="Bathroom after Luxe transformation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">After Luxe</p>
                    <p className="text-gray-600">Modern coastal bathroom with hotel-quality finishes</p>
                  </div>
                </div>
              </div>

              {/* Kitchen Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/westkitchenold.jpg"
                      alt="Kitchen before Luxe transformation"
                      fill
                      className="object-cover grayscale-[30%] scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">Before</p>
                    <p className="text-gray-600">Functional but plain kitchen</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-green-500/20">
                    <Image
                      src="/images/westnewkitchen.jpg"
                      alt="Kitchen after Luxe transformation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">After Luxe</p>
                    <p className="text-gray-600">Contemporary kitchen with premium appliances</p>
                  </div>
                </div>
              </div>

              {/* Living Area Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/westoldliving.jpg"
                      alt="Lounge before Luxe transformation"
                      fill
                      className="object-cover grayscale-[30%] scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">Before</p>
                    <p className="text-gray-600">Living area lacking character and warmth</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-green-500/20">
                    <Image
                      src="/images/westlivingnew.jpg"
                      alt="Lounge after Luxe transformation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">After Luxe</p>
                    <p className="text-gray-600">Stunning open-plan living with designer touches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Comparison */}
        <section className="py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Revenue Performance</h2>
              <p className="text-xl text-gray-800 font-medium">
                Traditional renting vs. Working with Luxe Airbnb management
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg">
              <ChartContainer
                config={{
                  traditional: {
                    label: "Traditional Rent",
                    color: "#ef4444",
                  },
                  luxe: {
                    label: "Luxe Airbnb",
                    color: "#10b981",
                  },
                }}
                className="h-[550px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyRevenueData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                    <XAxis
                      type="number"
                      dataKey="month"
                      tick={{ fill: "#1f2937", fontSize: 15, fontWeight: 600 }}
                      tickLine={false}
                      label={{
                        value: "Months",
                        position: "insideBottom",
                        offset: -10,
                        fill: "#1f2937",
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    />
                    <YAxis
                      tick={{ fill: "#1f2937", fontSize: 15, fontWeight: 600 }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} cursor={{ stroke: "#9ca3af", strokeWidth: 2 }} />
                    <Line
                      type="monotone"
                      dataKey="traditional"
                      stroke="#ef4444"
                      strokeWidth={4}
                      name="Traditional Rent"
                      dot={{ fill: "#ef4444", r: 5 }}
                      activeDot={{ r: 7 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="luxe"
                      stroke="#10b981"
                      strokeWidth={4}
                      name="Luxe Airbnb"
                      dot={{ fill: "#10b981", r: 5 }}
                      activeDot={{ r: 7 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>

              <div className="mt-12 flex justify-center gap-8 text-base">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded" />
                  <span className="text-gray-900 font-semibold text-lg">Traditional Rent: $1,950/month</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded" />
                  <span className="text-gray-900 font-semibold text-lg">Luxe Airbnb: Average $5,333/month</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-block px-10 py-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">+$40,600</div>
                  <div className="text-gray-800 font-semibold text-lg">Additional Annual Revenue</div>
                  <div className="text-gray-600 mt-1">173% increase with Luxe Management</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guest Experience Section */}
        <section className="py-28 md:py-40 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4">Guest Experience</h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-pretty">
              Discover how our transformation services enhance your property&#39;s guest experience.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 md:py-48 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <div className="mb-8">
              <span className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                Stop Leaving Money on the Table
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight [text-shadow:_0_4px_16px_rgb(0_0_0_/_60%)]">
              Your Property Deserves the Luxe Treatment
            </h2>
            <p className="text-2xl md:text-3xl text-white/85 leading-relaxed mb-12 text-balance max-w-3xl mx-auto [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]">
              From purchase guidance to complete transformation and ongoing management—this is what we do. And we'd love
              to show you what's possible with your property.
            </p>

            <div className="mt-16">
              <button className="px-12 md:px-16 py-6 md:py-7 bg-white text-black text-xl md:text-2xl font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl">
                Book Your Free Consultation
              </button>
              <p className="text-white/70 mt-6 text-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]">
                Let's unlock your property's true potential together.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
