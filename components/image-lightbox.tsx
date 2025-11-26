"use client"

import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect } from "react"

interface ImageLightboxProps {
  images: string[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function ImageLightbox({ images, currentIndex, onClose, onNext, onPrevious }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrevious()
      if (e.key === "ArrowRight") onNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, onNext, onPrevious])

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Image */}
      <div className="relative w-full h-full flex items-center justify-center p-16">
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Image ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
