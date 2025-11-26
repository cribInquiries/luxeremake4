"use client"

import type React from "react"
import type { EmblaOptionsType } from "embla-carousel"
import Carousel, { Slider, SliderContainer, SliderDotButton } from "@/components/core/carousel"
import Image, { type StaticImageData } from "next/image"
import { Box, HStack } from "@chakra-ui/react"

interface BasicAutoCarouselProps {
  items?: Record<string, StaticImageData>
}

const BasicAutoCarousel: React.FC<BasicAutoCarouselProps> = ({ items }) => {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const imageDatas = items ? (Object.values(items) as StaticImageData[]) : []

  // If no items provided, show placeholder
  if (!items || imageDatas.length === 0) {
    return (
      <Box w="100%" p={4}>
        <p>No images available</p>
      </Box>
    )
  }

  return (
    <Carousel options={OPTIONS} isAutoPlay={true}>
      <SliderContainer className="w-full gap-4">
        {imageDatas.map((imgData, idx) => (
          <Slider key={idx} className="w-full">
            <HStack justify="center" align="center" w="100%" h="100%">
              <Box position="relative" w="100%" h="400px" borderRadius="12px" overflow="hidden">
                <Image
                  quality={70}
                  src={imgData || "/placeholder.svg"}
                  alt={`Slide ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={idx === 0}
                />
              </Box>
            </HStack>
          </Slider>
        ))}
      </SliderContainer>

      <div className="flex justify-center py-4">
        <SliderDotButton />
      </div>
    </Carousel>
  )
}

export default BasicAutoCarousel
