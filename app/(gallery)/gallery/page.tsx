"use client"
import { useState } from "react"
import { Box, Text } from "@chakra-ui/react"

import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation"
import { DialogContent, DialogCloseTrigger, DialogRoot } from "@/components/chakra-snippets/dialog"
import DefaultSlider from "@/components/carousel/DefaultSlider"
import { X } from "lucide-react"
import Image from "next/image"
import { properties } from "@/lib/data/properties"

// app/gallery/page.tsx

// eslint-disable-next-line import/no-unused-modules

const Gallery = () => {
  // STATES FOR THE GALLERY & MODAL
  const [clickedImage, setClickedImage] = useState<{
    img: string
    title: string
    subheading: string
    categories: string[]
    brand: string
    location?: string
    bedrooms?: number
    bathrooms?: number
    carasoleImg?: any
  } | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState("All")

  // STATES FOR FILTER & SEARCH
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isExpanded, setIsExpanded] = useState(true)

  // Category list
  const categories = ["All", "Property Management", "Interior Design", "Styling", "Renovation"]

  // Toggle a category
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    if (category === "All") {
      setSelectedCategories([])
    } else {
      setSelectedCategories([category])
    }
  }

  // Enhanced gallery items with more details
  const galleryItems = properties.map((property) => ({
    img: property.img,
    title: property.title,
    subheading: property.subheading,
    categories: [property.category],
    brand: property.labelName,
    location: property.location,
    bedrooms: property.beds,
    bathrooms: property.baths,
    carasoleImg: property.carasoleImg,
  }))

  // Filtering logic based on search term and selected categories
  const filteredGalleryItems = galleryItems.filter((item) => {
    const lowerSearch = searchTerm.toLowerCase()
    const matchesSearch =
      item.title.toLowerCase().includes(lowerSearch) ||
      item.subheading.toLowerCase().includes(lowerSearch) ||
      (item.location && item.location.toLowerCase().includes(lowerSearch))

    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.some((cat) => item.categories.includes(cat))

    return matchesSearch && matchesCategory
  })

  // Items per page
  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredGalleryItems.length / itemsPerPage)

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredGalleryItems.slice(indexOfFirstItem, indexOfLastItem)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      {/* Enhanced Header Section with Decorative Elements */}
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="100%"
        paddingY={["60px", "70px", "80px"]}
        overflow="hidden"
      >
        {/* Decorative elements */}
        <Box
          position="absolute"
          top="20px"
          left="10%"
          width="40px"
          height="40px"
          borderTop="2px solid #e0e0e0"
          borderLeft="2px solid #e0e0e0"
          opacity="0.6"
        />
        <Box
          position="absolute"
          bottom="20px"
          right="10%"
          width="40px"
          height="40px"
          borderBottom="2px solid #e0e0e0"
          borderRight="2px solid #e0e0e0"
          opacity="0.6"
        />

        {/* Main heading with enhanced typography */}
        <Box position="relative">
          <Text
            as="h1"
            fontSize={["42px", "48px", "56px"]}
            fontWeight="700"
            fontFamily="arial"
            letterSpacing="-0.02em"
            marginBottom="6px"
            color="#000"
          >
            Gallery
          </Text>
          <Box width="40px" height="3px" backgroundColor="#000" margin="0 auto" marginBottom="20px" />
          <Text
            fontSize={["16px", "18px", "20px"]}
            fontWeight="400"
            fontFamily="arial"
            color="#666"
            maxWidth="600px"
            lineHeight="1.6"
          >
            Check out our latest work showcasing premium properties and exceptional interior design.
          </Text>
        </Box>
      </Box>

      {/* Category Filter Tabs */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginBottom="40px"
        paddingX={["20px", "30px"]}
      >
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={["10px", "15px", "20px"]}>
          {categories.map((category) => (
            <Box
              key={category}
              onClick={() => handleCategoryChange(category)}
              cursor="pointer"
              paddingX={["12px", "16px", "20px"]}
              paddingY={["8px", "10px", "12px"]}
              borderRadius="30px"
              backgroundColor={activeCategory === category ? "#000" : "transparent"}
              border="1px solid"
              borderColor={activeCategory === category ? "#000" : "#e0e0e0"}
              transition="all 0.3s ease"
              _hover={{
                backgroundColor: activeCategory === category ? "#000" : "#f5f5f5",
              }}
            >
              <Text
                fontSize={["14px", "15px", "16px"]}
                fontWeight={activeCategory === category ? "600" : "400"}
                color={activeCategory === category ? "#fff" : "#333"}
                fontFamily="arial"
              >
                {category}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Main Gallery Container with Enhanced Layout */}
      <Box
        width="100%"
        maxWidth="1400px"
        margin="0 auto"
        paddingX={["20px", "30px", "40px", "60px"]}
        paddingBottom="80px"
      >
        {/* Gallery Grid with Improved Visual Appeal */}
        <Box
          display="grid"
          gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={["24px", "30px", "40px"]}
          width="100%"
        >
          {currentItems.map((item, index) => (
            <Box key={index} position="relative">
              {/* Property Image with Enhanced Hover Effects */}
              <Box
                position="relative"
                onClick={() => {
                  setClickedImage(item)
                  setModalOpen(true)
                }}
                cursor="pointer"
                overflow="hidden"
                borderRadius="16px"
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                height={["280px", "300px", "320px"]}
                width="100%"
              >
                {/* Main Image */}
                <Box
                  position="relative" // establish containing block for the Image
                  overflow="hidden" // crop image when scaling
                  height="100%"
                  width="100%"
                  transition="transform 0.5s ease"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <Image
                    quality={70}
                    loading="lazy"
                    src={item.img.src || "/placeholder.svg"}
                    alt={item.title}
                    fill // makes the image cover the Box entirely
                    style={{
                      objectFit: "cover", // replicate background-size: cover
                      objectPosition: "center", // replicate background-position: center
                    }}
                    sizes="(max-width: 768px) 100vw, 100vw" // adjust as needed for responsiveness
                  />
                </Box>

                {/* Hover Overlay with Property Details */}
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  padding="20px"
                  background="linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)"
                  color="white"
                  opacity="0"
                  transition="opacity 0.3s ease"
                  _groupHover={{
                    opacity: 1,
                  }}
                  borderBottomRadius="16px"
                  height="70%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  pointerEvents="none"
                />

                {/* Category Tag */}
                <Box
                  position="absolute"
                  top="16px"
                  left="16px"
                  paddingX="12px"
                  paddingY="6px"
                  backgroundColor="rgba(0,0,0,0.7)"
                  borderRadius="20px"
                  zIndex="1"
                >
                  <Text fontSize="12px" fontWeight="600" color="white" textTransform="uppercase" letterSpacing="0.5px">
                    {item.categories[0]}
                  </Text>
                </Box>
              </Box>

              {/* Property Information Below Image */}
              <Box paddingTop="16px" paddingX="4px">
                <Text fontSize={["18px", "20px"]} fontWeight="600" color="#000" marginBottom="4px" fontFamily="arial">
                  {item.title}
                </Text>

                <Box display="flex" alignItems="center" marginBottom="8px">
                  <Text fontSize="14px" color="#666" fontFamily="arial">
                    {item.location}
                  </Text>
                </Box>

                <Box display="flex" alignItems="center" gap="16px">
                  <Box display="flex" alignItems="center">
                    <Text fontSize="14px" fontWeight="500" color="#333">
                      {item.bedrooms} Beds
                    </Text>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <Text fontSize="14px" fontWeight="500" color="#333">
                      {item.bathrooms} Baths
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <Box display="flex" justifyContent="center" alignItems="center" marginTop="60px" gap="8px">
            {Array.from({ length: totalPages }).map((_, index) => (
              <Box
                key={index}
                onClick={() => paginate(index + 1)}
                cursor="pointer"
                width="10px"
                height="10px"
                borderRadius="50%"
                backgroundColor={currentPage === index + 1 ? "#000" : "#e0e0e0"}
                transition="all 0.3s ease"
                _hover={{
                  backgroundColor: currentPage === index + 1 ? "#000" : "#aaa",
                }}
              />
            ))}
          </Box>
        )}
      </Box>

      {/* Enhanced Modal Dialog for Clicked Image */}
      <DialogRoot size="full" open={modalOpen} onOpenChange={(details) => setModalOpen(details.open)}>
        <DialogContent
          bg="white"
          color="white"
          rounded="10px"
          w={["100%", "100%", "100%", "100%", "100%", "100%"]}
          h={["100%", "100%", "100%", "100%", "100%", "100%"]}
          borderRadius="10px"
        >
          {clickedImage && (
            <Box position="relative" width="100%" height="100%" display="flex" flexDirection="column">
              {/* Property Details Header */}
              <Box
                padding="20px"
                borderBottom="1px solid #eee"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="white"
                color="black"
              >
                <Box>
                  <Text fontSize={["20px", "24px"]} fontWeight="700" fontFamily="arial">
                    {clickedImage.title}
                  </Text>
                  <Text fontSize="16px" color="#666" fontFamily="arial">
                    {clickedImage.location}
                  </Text>
                </Box>

                <Box display="flex" alignItems="center" gap="16px">
                  <Box display="flex" alignItems="center" gap="4px">
                    <Text fontSize="14px" fontWeight="500" color="#333">
                      {clickedImage.bedrooms} Beds
                    </Text>
                  </Box>

                  <Box display="flex" alignItems="center" gap="4px">
                    <Text fontSize="14px" fontWeight="500" color="#333">
                      {clickedImage.bathrooms} Baths
                    </Text>
                  </Box>
                </Box>
              </Box>

              {/* Slider Container */}
              <Box
                flex="1"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                position="relative"
                backgroundColor="#f5f5f5"
              >
                <Box width={["95%", "95%", "95%", "90%", "85%", "80%"]}>
                  <DefaultSlider items={clickedImage.carasoleImg?.[0]} />
                </Box>

                {/* Navigation Arrows */}
              </Box>

              {/* Property Description Footer */}
              <Box padding="20px" borderTop="1px solid #eee" backgroundColor="white" color="black">
                <Text fontSize="16px" lineHeight="1.6" color="#333" fontFamily="arial">
                  {clickedImage.subheading}
                </Text>
              </Box>
            </Box>
          )}

          {/* Enhanced Close Button */}
          <DialogCloseTrigger
            as={Box}
            position="absolute"
            top="100px"
            right="16px"
            width="40px"
            height="40px"
            borderRadius="50%"
            backgroundColor="rgba(255,255,255,0.9)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            boxShadow="0 2px 10px rgba(0,0,0,0.1)"
            zIndex="10"
            onClick={() => setModalOpen(false)}
            _hover={{
              backgroundColor: "white",
            }}
            _focus={{ outline: "none" }}
          >
            <X size={20} color="#000" />
          </DialogCloseTrigger>
        </DialogContent>
      </DialogRoot>

      {/* Enhanced Separator with Design Element */}
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginY={["60px", "80px", "100px"]}
        paddingX="20px"
      >
        <Box width="100%" height="1px" backgroundColor="#e0e0e0" />
        <Box position="absolute" backgroundColor="white" paddingX="20px">
          <Box
            width="40px"
            height="40px"
            borderRadius="50%"
            border="1px solid #e0e0e0"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="20px" height="20px" borderRadius="50%" backgroundColor="#000" />
          </Box>
        </Box>
      </Box>

      <ScheduleConsultation />
    </>
  )
}

export default Gallery
