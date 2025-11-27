"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Sparkles, X, Check } from "lucide-react"
import type { Property } from "@/lib/properties"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartTooltip, ChartTooltipContent, ChartContainer } from "@/components/ui/chart"
import { ImageLightbox } from "@/components/image-lightbox"
import { useState } from "react"

interface EnfieldTransformationViewProps {
  property: Property
}

export function EnfieldTransformationView({ property }: EnfieldTransformationViewProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % showcaseImages.length)
  }

  const previousImage = () => {
    setLightboxIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length)
  }

  const monthlyRevenueData = [
    { month: 1, traditional: 2800, luxe: 3200 },
    { month: 2, traditional: 2800, luxe: 3800 },
    { month: 3, traditional: 2800, luxe: 4100 },
    { month: 4, traditional: 2800, luxe: 4400 },
    { month: 5, traditional: 2800, luxe: 4700 },
    { month: 6, traditional: 2800, luxe: 4500 },
    { month: 7, traditional: 2800, luxe: 4200 },
    { month: 8, traditional: 2800, luxe: 4300 },
    { month: 9, traditional: 2800, luxe: 4600 },
    { month: 10, traditional: 2800, luxe: 4900 },
    { month: 11, traditional: 2800, luxe: 5200 },
    { month: 12, traditional: 2800, luxe: 5500 },
  ]

  const showcaseImages = [
    {
      url: "/images/enfield-kitchen.png",
      title: "Gourmet Kitchen",
      description: "Open-concept kitchen & living space",
    },
    {
      url: "/images/enfield-dining-living-photonew.png",
      title: "Open-Plan Living",
      description: "Seamless kitchen-dining-lounge flow",
    },
    {
      url: "/images/enfield-patio.png",
      title: "Entertainment Zone",
      description: "Covered outdoor patio & dining",
    },
    {
      url: "/images/enfield-game-room.png",
      title: "Games Room",
      description: "Pool table & mezzanine lounge",
    },
    {
      url: "/images/enfield-bathroom1.png",
      title: "Bathroom 1",
      description: "Dual sinks, timber vanity & walk-in shower",
    },
    {
      url: "/images/enfield-bathroom2.png",
      title: "Bathroom 2",
      description: "Compact, contemporary styling",
    },
  ]

  if (!property.transformationStory) return null

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

      {/* Hero Section */}
      <section
        className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden animate-[fadeIn_0.8s_ease-out]"
        aria-label="Hero Section"
      >
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/enfield-game-room.png"
            alt={property.title}
            fill
            className="object-cover scale-125 transition-transform duration-[20s] hover:scale-[1.35]"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <Sparkles size={16} className="text-gray-300" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">
              Origin Story · Property #1
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight text-balance leading-[0.95] [text-shadow:_0_4px_16px_rgb(0_0_0_/_100%)]">
            {property.title}
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-light text-balance max-w-4xl mx-auto mb-6 [text-shadow:_0_2px_12px_rgb(0_0_0_/_80%)]">
            The First. The Breakthrough. The Blueprint.
          </p>
          <p className="text-lg md:text-xl text-white/80 italic max-w-2xl mx-auto [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">
            Every company has a defining moment. For Luxe, it was a $5,000 miracle.
          </p>
        </div>
      </section>

      {/* Property Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">{property.beds}</div>
              <div className="text-gray-700 font-medium">Bedrooms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">{property.baths}</div>
              <div className="text-gray-700 font-medium">Bathrooms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">$2,000</div>
              <div className="text-gray-700 font-medium">Peak Week</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">92%</div>
              <div className="text-gray-700 font-medium">Occupancy</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-cyan-100 rounded-2xl border-2 border-cyan-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-bold mb-2">
                <span className="text-cyan-700">$5,000</span> <span className="text-gray-900">Budget</span>
              </div>
              <div className="text-gray-700 font-medium">Full Furnishing</div>
            </div>
            <div className="text-center p-8 bg-emerald-100 rounded-2xl border-2 border-emerald-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-bold mb-2">
                <span className="text-emerald-700">5</span> <span className="text-gray-900">Bedrooms</span>
              </div>
              <div className="text-gray-700 font-medium">Group Accommodation</div>
            </div>
            <div className="text-center p-8 bg-purple-100 rounded-2xl border-2 border-purple-300 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-bold mb-2">
                <span className="text-purple-700">Property</span> <span className="text-gray-900">#1</span>
              </div>
              <div className="text-gray-700 font-medium">First Ever</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Impossible Challenge Banner */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">The Impossible Challenge</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl text-gray-800 leading-relaxed font-normal">
            <p className="text-pretty">
              A brand-new, five-bedroom modern home in Adelaide. Bold. Bright. Architecturally pristine.
            </p>
            <p className="text-pretty">Our first ever property. Our first real test.</p>
            <p className="text-pretty">It arrived with a challenge most operators would decline immediately:</p>
            <div className="my-12 text-center p-12 bg-gradient-to-br from-gray-800 to-black rounded-3xl shadow-2xl">
              <p className="text-white/80 text-lg font-medium mb-4">Total Furnishing Budget</p>
              <p className="text-8xl md:text-9xl font-black text-white mb-4">$5K</p>
              <div className="h-1 w-32 bg-white/30 mx-auto mb-6" />
              <p className="text-xl text-white/95 font-medium">For a 5-bedroom home</p>
              <p className="text-white/70 mt-2">Brand new. Completely empty.</p>
            </div>
            <p className="text-pretty font-semibold text-black">
              Even we hesitated. But this was the opportunity that would shape who we became.
            </p>
          </div>
        </div>
      </section>

      {/* The $5,000 Miracle */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 text-balance">The $5,000 Miracle</h2>

          <div className="space-y-6 text-xl md:text-2xl text-white/90 leading-relaxed mb-12">
            <p>For the first and only time, Luxe pushed itself to the absolute edge.</p>
            <p>We worked late. We strategised every dollar. We designed with intention, not expense.</p>
            <p>Room by room, we transformed the blank canvas into a fully realised luxury stay.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-semibold">Pool Table</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-semibold">Table Tennis</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-semibold">Premium Kitchen</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-semibold">Multiple Living Zones</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-semibold">Cohesive Styling</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white mb-16 font-medium text-center">
            The kind of setup that shouldn't have been possible for a home of this size. But possible is what we do.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* The Challenge */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">The Challenge</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-lg mt-1"
                    style={{
                      backgroundColor: "#ff0000",
                      borderColor: "#cc0000",
                      boxShadow: "0 0 20px rgba(255, 0, 0, 0.6)",
                    }}
                  >
                    <X className="w-4 h-4 stroke-[5]" style={{ color: "#ffffff" }} />
                  </div>
                  <span className="text-white/90 text-lg">Only $5,000 budget</span>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-lg mt-1"
                    style={{
                      backgroundColor: "#ff0000",
                      borderColor: "#cc0000",
                      boxShadow: "0 0 20px rgba(255, 0, 0, 0.6)",
                    }}
                  >
                    <X className="w-4 h-4 stroke-[5]" style={{ color: "#ffffff" }} />
                  </div>
                  <span className="text-white/90 text-lg">Five bedrooms to furnish</span>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-lg mt-1"
                    style={{
                      backgroundColor: "#ff0000",
                      borderColor: "#cc0000",
                      boxShadow: "0 0 20px rgba(255, 0, 0, 0.6)",
                    }}
                  >
                    <X className="w-4 h-4 stroke-[5]" style={{ color: "#ffffff" }} />
                  </div>
                  <span className="text-white/90 text-lg">High-end property expectations</span>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-lg mt-1"
                    style={{
                      backgroundColor: "#ff0000",
                      borderColor: "#cc0000",
                      boxShadow: "0 0 20px rgba(255, 0, 0, 0.6)",
                    }}
                  >
                    <X className="w-4 h-4 stroke-[5]" style={{ color: "#ffffff" }} />
                  </div>
                  <span className="text-white/90 text-lg">First property launch</span>
                </div>
              </div>
            </div>

            {/* Luxe Solution */}
            <div className="bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 rounded-3xl p-8 border border-green-700/50 shadow-2xl">
              <h3 className="text-3xl font-bold text-emerald-300 mb-8">Luxe Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-emerald-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                  <span className="text-white/90 text-lg">Strategic furniture sourcing</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-emerald-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                  <span className="text-white/90 text-lg">Entertainment features added</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-emerald-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                  <span className="text-white/90 text-lg">Cohesive luxury aesthetic</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-emerald-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                  <span className="text-white/90 text-lg">Premium guest experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Finished Property</h2>
            <p className="text-xl text-gray-700 font-medium">Every space designed to create an unforgettable stay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showcaseImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-white/80">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Performance That Changed Everything</h2>
            <p className="text-xl text-gray-700 font-medium">Revenue comparison: traditional rent vs Luxe management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Traditional Rent Card */}
            <div
              className="text-center p-8 rounded-2xl border-4 shadow-xl"
              style={{
                backgroundColor: "rgba(254, 226, 226, 0.9)",
                borderColor: "#fca5a5",
              }}
            >
              <div className="text-5xl font-bold mb-3" style={{ color: "#dc2626" }}>
                $900
              </div>
              <div className="font-semibold mb-2" style={{ color: "#991b1b" }}>
                Traditional Rent
              </div>
              <div className="text-base font-medium" style={{ color: "#7f1d1d" }}>
                Per week, year-round
              </div>
            </div>

            {/* Occupancy Rate Card */}
            <div
              className="text-center p-8 rounded-2xl border-4 shadow-xl"
              style={{
                backgroundColor: "rgba(224, 242, 254, 0.9)",
                borderColor: "#7dd3fc",
              }}
            >
              <div className="text-5xl font-bold mb-3" style={{ color: "#0284c7" }}>
                92%
              </div>
              <div className="font-semibold mb-2" style={{ color: "#075985" }}>
                Occupancy Rate
              </div>
              <div
                className="text-base font-medium inline-flex items-center gap-2 justify-center"
                style={{ color: "#0c4a6e" }}
              >
                Consistently high
                <span className="inline-block w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* With Luxe Management Card */}
            <div
              className="text-center p-8 rounded-2xl border-4 shadow-xl"
              style={{
                backgroundColor: "rgba(220, 252, 231, 0.9)",
                borderColor: "#86efac",
              }}
            >
              <div className="text-5xl font-bold mb-3" style={{ color: "#16a34a" }}>
                $2,000
              </div>
              <div className="font-semibold mb-2" style={{ color: "#15803d" }}>
                With Luxe Management
              </div>
              <div className="text-base font-medium" style={{ color: "#14532d" }}>
                Per week average
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-black mb-8 text-center">Monthly Revenue Comparison</h3>
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
            className="h-[500px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyRevenueData} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#374151", fontSize: 15, fontWeight: 600 }}
                  tickLine={false}
                  domain={[1, 12]}
                  label={{
                    value: "Month",
                    position: "insideBottom",
                    offset: -10,
                    style: { fontSize: 16, fontWeight: 700, fill: "#111827" },
                  }}
                />
                <YAxis
                  tick={{ fill: "#374151", fontSize: 15, fontWeight: 600 }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value / 1000}k`}
                  label={{
                    value: "Monthly Revenue",
                    angle: -90,
                    position: "insideLeft",
                    style: { fontSize: 16, fontWeight: 700, fill: "#111827" },
                  }}
                />
                <ChartTooltip content={<ChartTooltipContent />} cursor={{ stroke: "#e5e7eb", strokeWidth: 2 }} />
                <Line
                  type="monotone"
                  dataKey="traditional"
                  stroke="#ef4444"
                  strokeWidth={4}
                  name="Traditional Rent"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="luxe"
                  stroke="#10b981"
                  strokeWidth={4}
                  name="Luxe Airbnb"
                  dot={{ fill: "#10b981", r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </section>

      {/* The Hidden Challenge */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">The Hidden Challenge</h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed">
            But the home had a hidden challenge that threatened profitability:
          </p>

          <ul className="space-y-4 mb-12 text-xl md:text-2xl text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-white/50 mt-1">•</span>
              <span className="text-white/80">High-Gloss Flooring</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/50 mt-1">•</span>
              <span className="text-white/80">Ultra-white interior palette</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/50 mt-1">•</span>
              <span className="text-white/80">Massive feature carpet</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/50 mt-1">•</span>
              <span className="text-white/80">High-Gloss fingerprint prone surfaces</span>
            </li>
          </ul>

          <p className="text-2xl md:text-3xl text-white font-semibold mb-16 leading-relaxed">
            External cleaners quoted $400+ per stay. Making the operation unsustainable.
          </p>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-10 md:p-12 mb-12 shadow-2xl">
            <p className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              So we made a decision that changed Luxe forever:
            </p>
            <p className="text-2xl md:text-3xl text-white font-medium">We created our own in-house cleaning team.</p>
          </div>

          <p className="text-2xl md:text-3xl text-white/90 font-medium mb-6">
            Trained in-house. Quality-controlled. Detail-obsessed.
          </p>

          <p className="text-xl md:text-2xl text-white/70 italic leading-relaxed">
            This wasn't just cost-saving — it became the foundation of the Luxe standard that every property benefits
            from today.
          </p>
        </div>
      </section>

      {/* What Enfield Represents */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 text-center">What Enfield Represents</h2>
          <p className="text-2xl md:text-3xl text-gray-700 text-center mb-16 leading-relaxed max-w-3xl mx-auto">
            Enfield wasn't just a property we managed. It was the project that taught us everything.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-sky-50 rounded-2xl p-10 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-sky-600">Budget mastery</h3>
            </div>
            <div className="bg-emerald-100 rounded-2xl p-10 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-emerald-700">Design at scale</h3>
            </div>
            <div className="bg-purple-50 rounded-2xl p-10 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-purple-600">Problem solving</h3>
            </div>
            <div className="bg-gray-100 rounded-2xl p-10 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-gray-800">System building</h3>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-2xl md:text-3xl text-black font-medium leading-relaxed">
              This home didn't just teach us how to manage properties.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-cyan-500 leading-relaxed">
              It taught us how to build excellence from constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Enfield Set Our Standard */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-sm md:text-base text-gray-400 uppercase tracking-wider font-semibold mb-6">
            The Foundation of Excellence
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Enfield set our standard.</h2>
          <p className="text-3xl md:text-4xl text-white mb-12">Now let us set yours.</p>

          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-400 to-emerald-500 hover:from-cyan-500 hover:to-emerald-600 text-white font-bold text-xl px-12 py-5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105"
          >
            Enquire Now
          </Link>

          <p className="text-lg text-gray-400 mt-8">The first property that defined everything we do.</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </section>

      {/* Image Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={showcaseImages.map((img) => img.url)}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  )
}
