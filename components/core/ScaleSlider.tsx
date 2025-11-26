"use client"

import type React from "react"
import type { EmblaOptionsType } from "embla-carousel"
import Carousel, { Slider, SliderContainer, SliderDotButton } from "@/components/core/carousel"
import Image, { type StaticImageData } from "next/image"
import { Box } from "@chakra-ui/react"

interface ScaleSliderProps {
  items?: Record<string, StaticImageData>
}

const ScaleSlider: React.FC<ScaleSliderProps> = ({ items }) => {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const imageDatas = items ? (Object.values(items) as StaticImageData[]) : []

  if (!items || imageDatas.length === 0) {
    return (
      <Box w="100%" p={4}>
        <p>No images available</p>
      </Box>
    )
  }

  return (
    <Box w="100%" bg="white" borderRadius="md" p={["20px", "30px"]}>
      <Carousel options={OPTIONS} isAutoPlay={true} className="w-4/5 mx-auto">
        <SliderContainer className="gap-2">
          {imageDatas.map((imgData, idx) => (
            <Slider key={idx} className="w-full">
              <Box className="rounded-xl" position="relative" h="500px" w="100%" overflow="hidden">
                <Image
                  src={imgData || "/placeholder.svg"}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={idx === 0}
                />
              </Box>
            </Slider>
          ))}
        </SliderContainer>
        <div className="flex justify-center py-4">
          <SliderDotButton />
        </div>
      </Carousel>
    </Box>
  )
}

export default ScaleSlider
