"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Bed, Bath } from "lucide-react"
import type { Property } from "@/lib/data/properties"
import { useState } from "react"

interface SouthTerraceTransformationViewProps {
  property: Property
}

export function SouthTerraceTransformationView({ property }: SouthTerraceTransformationViewProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = property.carouselImages || []

  const beforeAfterImage = {
    before: "/images/stbeforeliving.png",
    after: "/images/stafterliving.jpg",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link
            href="/gallery"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Gallery</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0 animate-[zoom_30s_ease-in-out_infinite]">
            <Image
              src={property.mainImage || "/placeholder.svg"}
              alt={property.title}
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
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight text-balance leading-[0.95] animate-[fadeInUp_1s_ease-out_0.2s_both] drop-shadow-2xl">
              {property.title}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light text-balance max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out_0.4s_both] drop-shadow-lg">
              {property.subheading}
            </p>
          </div>
        </section>

        {/* Property Details Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Location</div>
                  <div className="text-lg font-bold text-black">{property.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Bed className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Bedrooms</div>
                  <div className="text-lg font-bold text-black">{property.beds}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Bath className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Bathrooms</div>
                  <div className="text-lg font-bold text-black">{property.baths}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-lg">%</span>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Occupancy</div>
                  <div className="text-lg font-bold text-black">
                    {property.transformationStory?.results.occupancyRate}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Living Room */}
        <section className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Before & After</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                See the dramatic transformation of this Adelaide CBD apartment
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="inline-block px-6 py-2 bg-gray-800 text-white text-sm font-semibold rounded-full">
                  Before Luxe
                </div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                  <Image
                    src={beforeAfterImage.before || "/placeholder.svg"}
                    alt="Before living room renovation"
                    fill
                    className="object-cover grayscale-[40%] group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <p className="text-gray-900 text-lg font-medium">Empty space with untapped potential</p>
              </div>
              <div className="space-y-4">
                <div className="inline-block px-6 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                  After Luxe
                </div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden group shadow-2xl">
                  <Image
                    src={beforeAfterImage.after || "/placeholder.svg"}
                    alt="After living room renovation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <p className="text-gray-900 text-lg font-semibold">
                  Fully furnished, styled, and guest-ready apartment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Property Gallery */}
        <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Property Gallery</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Explore the beautifully transformed spaces throughout this modern Adelaide apartment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[350px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">View Full Size</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance">Ready to Transform Your Property?</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 text-balance">
              Let us help you unlock the full potential of your investment property.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-2xl hover:shadow-white/20"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Full size gallery image"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  )
}
