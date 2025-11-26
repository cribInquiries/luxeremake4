import type { StaticImageData } from "next/image"

// import houseOneImg1 from "@/public/images/dalts/houseOne/WEB/1.jpg"
// ... all other imports removed as images don't exist

import stGallery1 from "@/public/images/stgallery1.jpg"
import glenelgLead from "@/public/images/glenelg_lead.jpeg"

export interface Property {
  slug: string
  labelName: string
  title: string
  category: string
  tags: string[]
  description: string
  beds: number | string
  baths: number | string
  status: "active" | "coming-soon"
  img: StaticImageData | string
  subheading: string
  location: string
  mainImage?: string
  carouselImages?: string[]
  transformationStory?: {
    results: {
      occupancyRate: number
    }
  }
  carasoleImg?: {
    img1: StaticImageData | string
    img2: StaticImageData | string
    img3: StaticImageData | string
    img4: StaticImageData | string
    img5: StaticImageData | string
    img6: StaticImageData | string
    img7: StaticImageData | string
    img8: StaticImageData | string
    img9: StaticImageData | string
    img10: StaticImageData | string
  }[]
}

const placeholderImg = "/placeholder.svg?height=400&width=600"

export const properties: Property[] = [
  {
    slug: "cosy-glenelg-getaway",
    labelName: "Glenelg",
    title: "Cosy Glenelg Getaway",
    category: "Property Management",
    tags: ["Styling", "Renovation"],
    description: "Beachside transformation",
    beds: 2,
    baths: 1,
    status: "active",
    img: glenelgLead as StaticImageData,
    subheading: "Complete transformation near Glenelg Beach",
    location: "Glenelg",
    mainImage: "/images/glenelg_lead.jpeg",
    transformationStory: {
      results: {
        occupancyRate: 95,
      },
    },
    carasoleImg: [
      {
        img1: placeholderImg,
        img2: placeholderImg,
        img3: placeholderImg,
        img4: placeholderImg,
        img5: placeholderImg,
        img6: placeholderImg,
        img7: placeholderImg,
        img8: placeholderImg,
        img9: placeholderImg,
        img10: placeholderImg,
      },
    ],
  },
  {
    slug: "clearview-serene-family-home",
    labelName: "Clearview",
    title: "Serene Family Home – Pool & Games Close to Adel CBD",
    category: "Property Management",
    tags: ["Styling"],
    description: "Family-friendly Clearview",
    beds: 6,
    baths: 4,
    status: "active",
    img: "/images/cmainshot.jpg",
    subheading:
      "From dated décor to dream stay—this Clearview family home earned $102k annually through strategic styling",
    location: "Clearview",
    mainImage: "/images/cmainshot.jpg",
    carouselImages: [
      "/images/cmainshot.jpg",
      "/images/cbedroom5new.jpeg",
      "/images/cbedroom2new.jpeg",
      "/images/cgameroom1new.jpeg",
      "/images/cgameroom2new.jpeg",
      "/images/cbathroom1-edited.jpg",
    ],
    transformationStory: {
      results: {
        occupancyRate: 88,
      },
    },
    carasoleImg: [
      {
        img1: placeholderImg,
        img2: placeholderImg,
        img3: placeholderImg,
        img4: placeholderImg,
        img5: placeholderImg,
        img6: placeholderImg,
        img7: placeholderImg,
        img8: placeholderImg,
        img9: placeholderImg,
        img10: placeholderImg,
      },
    ],
  },
  {
    slug: "west-beach-getaway",
    labelName: "West Beach",
    title: "2-Bedroom West Beach Getaway",
    category: "Property Management",
    tags: ["Styling"],
    description: "Steps from the shoreline",
    beds: 2,
    baths: 1,
    status: "active",
    img: "/images/west-beach-main.jpeg",
    subheading: "Steps from the shoreline in beautiful West Beach",
    location: "West Beach",
    mainImage: "/images/west-beach-main.jpeg",
    transformationStory: {
      results: {
        occupancyRate: 91,
      },
    },
    carasoleImg: [
      {
        img1: placeholderImg,
        img2: placeholderImg,
        img3: placeholderImg,
        img4: placeholderImg,
        img5: placeholderImg,
        img6: placeholderImg,
        img7: placeholderImg,
        img8: placeholderImg,
        img9: placeholderImg,
        img10: placeholderImg,
      },
    ],
  },
  {
    slug: "parkland-vista",
    labelName: "Parkland Vista",
    title: "Parkland Vista Luxury Retreat",
    category: "Property Management",
    tags: ["Styling"],
    description: "Heart of Adelaide CBD",
    beds: 2,
    baths: 1,
    status: "active",
    img: stGallery1,
    subheading: "Heart of Adelaide CBD with stunning parkland views",
    location: "Adelaide CBD",
    mainImage: "/images/stgallery1.jpg",
    carouselImages: [
      "/images/stgallery1.jpg",
      "/images/stgallery2.jpg",
      "/images/stgallery3.jpg",
      "/images/stgallery4.jpg",
      "/images/stgallery5.jpg",
      "/images/stgallery6.jpg",
    ],
    transformationStory: {
      results: {
        occupancyRate: 93,
      },
    },
    carasoleImg: [
      {
        img1: placeholderImg,
        img2: placeholderImg,
        img3: placeholderImg,
        img4: placeholderImg,
        img5: placeholderImg,
        img6: placeholderImg,
        img7: placeholderImg,
        img8: placeholderImg,
        img9: placeholderImg,
        img10: placeholderImg,
      },
    ],
  },
  {
    slug: "seaford-coastal-residence",
    labelName: "Seaford",
    title: "Seaford Coastal Residence",
    category: "Property Management",
    tags: ["Styling"],
    description: "5 mins from Seaford Beach",
    beds: 3,
    baths: 2,
    status: "active",
    img: "/images/seaford-main.jpeg",
    subheading: "5 minutes from Seaford Beach with coastal charm",
    location: "Seaford",
    mainImage: "/images/seaford-main.jpeg",
    transformationStory: {
      results: {
        occupancyRate: 89,
      },
    },
    carasoleImg: [
      {
        img1: placeholderImg,
        img2: placeholderImg,
        img3: placeholderImg,
        img4: placeholderImg,
        img5: placeholderImg,
        img6: placeholderImg,
        img7: placeholderImg,
        img8: placeholderImg,
        img9: placeholderImg,
        img10: placeholderImg,
      },
    ],
  },
  {
    slug: "enfield-grand-residence",
    labelName: "Enfield",
    title: "Enfield Grand Residence",
    category: "Property Management",
    tags: ["Styling"],
    description: "Family-friendly Enfield",
    beds: 5,
    baths: 3,
    status: "active",
    img: "/images/enfield-game-room.png",
    subheading: "Family-friendly Enfield property with spacious living",
    location: "Enfield",
    mainImage: "/images/enfield-game-room.png",
    carouselImages: [
      "/images/enfield-kitchen.png",
      "/images/enfield-dining-living-photonew.png",
      "/images/enfield-patio.png",
      "/images/enfield-game-room.png",
      "/images/enfield-bathroom1.png",
      "/images/enfield-bathroom2.png",
    ],
    transformationStory: {
      results: {
        occupancyRate: 90,
      },
    },
    carasoleImg: [
      {
        img1: placeholderImg,
        img2: placeholderImg,
        img3: placeholderImg,
        img4: placeholderImg,
        img5: placeholderImg,
        img6: placeholderImg,
        img7: placeholderImg,
        img8: placeholderImg,
        img9: placeholderImg,
        img10: placeholderImg,
      },
    ],
  },
  {
    slug: "melbourne-street-hideaway",
    labelName: "Melbourne Street",
    title: "Cosy Melbourne Street Hideaway",
    category: "Property Management",
    tags: ["Styling"],
    description: "Historic North Adelaide",
    beds: 1,
    baths: 1,
    status: "active",
    img: "/images/mexterior.jpeg",
    subheading: "Historic North Adelaide location with cosy charm",
    location: "North Adelaide",
    mainImage: "/images/mexterior.jpeg",
    carouselImages: [
      "/images/mkitchen.jpeg",
      "/images/mdining.jpeg",
      "/images/mtv.jpeg",
      "/images/mpatio.jpeg",
      "/images/mbathroom.jpeg",
      "/images/mlookingout.jpeg",
    ],
    transformationStory: {
      results: {
        occupancyRate: 92,
      },
    },
    carasoleImg: [
      {
        img1: placeholderImg,
        img2: placeholderImg,
        img3: placeholderImg,
        img4: placeholderImg,
        img5: placeholderImg,
        img6: placeholderImg,
        img7: placeholderImg,
        img8: placeholderImg,
        img9: placeholderImg,
        img10: placeholderImg,
      },
    ],
  },
  {
    slug: "coming-soon-1",
    labelName: "Coming Soon",
    title: "Coming Soon Property #1",
    category: "Property Management",
    tags: ["Styling"],
    description: "Coming Soon",
    beds: "Coming Soon",
    baths: "Coming Soon",
    status: "coming-soon",
    img: placeholderImg,
    subheading: "Exciting new property coming soon",
    location: "Coming Soon",
    carasoleImg: [
      {
        img1: placeholderImg,
        img2: placeholderImg,
        img3: placeholderImg,
        img4: placeholderImg,
        img5: placeholderImg,
        img6: placeholderImg,
        img7: placeholderImg,
        img8: placeholderImg,
        img9: placeholderImg,
        img10: placeholderImg,
      },
    ],
  },
  {
    slug: "coming-soon-2",
    labelName: "Coming Soon",
    title: "Coming Soon Property #2",
    category: "Property Management",
    tags: ["Styling"],
    description: "Coming Soon",
    beds: "Coming Soon",
    baths: "Coming Soon",
    status: "coming-soon",
    img: placeholderImg,
    subheading: "Another exciting property coming soon",
    location: "Coming Soon",
    carasoleImg: [
      {
        img1: placeholderImg,
        img2: placeholderImg,
        img3: placeholderImg,
        img4: placeholderImg,
        img5: placeholderImg,
        img6: placeholderImg,
        img7: placeholderImg,
        img8: placeholderImg,
        img9: placeholderImg,
        img10: placeholderImg,
      },
    ],
  },
]
