import type { StaticImageData } from "next/image"

// Import house images
import houseOneImg1 from "@/public/images/dalts/houseOne/WEB/1.jpg"
import houseOneImg2 from "@/public/images/dalts/houseOne/WEB/2.jpg"
import houseOneImg3 from "@/public/images/dalts/houseOne/WEB/3.jpg"
import houseOneImg4 from "@/public/images/dalts/houseOne/WEB/4.jpg"
import houseOneImg5 from "@/public/images/dalts/houseOne/WEB/5.jpg"
import houseOneImg6 from "@/public/images/dalts/houseOne/WEB/6.jpg"
import houseOneImg7 from "@/public/images/dalts/houseOne/WEB/7.jpg"
import houseOneImg8 from "@/public/images/dalts/houseOne/WEB/8.jpg"
import houseOneImg9 from "@/public/images/dalts/houseOne/WEB/9.jpg"
import houseOneImg10 from "@/public/images/dalts/houseOne/WEB/10.jpg"

import houseTwoImg1 from "@/public/images/dalts/houseTwo/WEB/1.jpg"
import houseTwoImg2 from "@/public/images/dalts/houseTwo/WEB/2.jpg"
import houseTwoImg3 from "@/public/images/dalts/houseTwo/WEB/3.jpg"
import houseTwoImg4 from "@/public/images/dalts/houseTwo/WEB/4.jpg"
import houseTwoImg5 from "@/public/images/dalts/houseTwo/WEB/5.jpg"
import houseTwoImg6 from "@/public/images/dalts/houseTwo/WEB/6.jpg"
import houseTwoImg7 from "@/public/images/dalts/houseTwo/WEB/7.jpg"
import houseTwoImg8 from "@/public/images/dalts/houseTwo/WEB/8.jpg"
import houseTwoImg9 from "@/public/images/dalts/houseTwo/WEB/9.jpg"
import houseTwoImg10 from "@/public/images/dalts/houseTwo/WEB/10.jpg"

import houseThreeImg1 from "@/public/images/dalts/houseThree/WEB/1.jpg"
import houseThreeImg2 from "@/public/images/dalts/houseThree/WEB/2.jpg"
import houseThreeImg3 from "@/public/images/dalts/houseThree/WEB/3.jpg"
import houseThreeImg4 from "@/public/images/dalts/houseThree/WEB/4.jpg"
import houseThreeImg5 from "@/public/images/dalts/houseThree/WEB/5.jpg"
import houseThreeImg6 from "@/public/images/dalts/houseThree/WEB/6.jpg"
import houseThreeImg7 from "@/public/images/dalts/houseThree/WEB/7.jpg"
import houseThreeImg8 from "@/public/images/dalts/houseThree/WEB/8.jpg"
import houseThreeImg9 from "@/public/images/dalts/houseThree/WEB/9.jpg"
import houseThreeImg10 from "@/public/images/dalts/houseThree/WEB/10.jpg"

import houseFourImg1 from "@/public/images/dalts/houseFour/WEB/1.jpg"
import houseFourImg2 from "@/public/images/dalts/houseFour/WEB/2.jpg"
import houseFourImg3 from "@/public/images/dalts/houseFour/WEB/3.jpg"
import houseFourImg4 from "@/public/images/dalts/houseFour/WEB/4.jpg"
import houseFourImg5 from "@/public/images/dalts/houseFour/WEB/5.jpg"
import houseFourImg6 from "@/public/images/dalts/houseFour/WEB/6.jpg"
import houseFourImg7 from "@/public/images/dalts/houseFour/WEB/7.jpg"
import houseFourImg8 from "@/public/images/dalts/houseFour/WEB/8.jpg"
import houseFourImg9 from "@/public/images/dalts/houseFour/WEB/9.jpg"
import houseFourImg10 from "@/public/images/dalts/houseFour/WEB/10.jpg"

import houseFiveImg1 from "@/public/images/dalts/houseFive/WEB/1.jpg"
import houseFiveImg2 from "@/public/images/dalts/houseFive/WEB/2.jpg"
import houseFiveImg3 from "@/public/images/dalts/houseFive/WEB/3.jpg"
import houseFiveImg4 from "@/public/images/dalts/houseFive/WEB/4.jpg"
import houseFiveImg5 from "@/public/images/dalts/houseFive/WEB/5.jpg"
import houseFiveImg6 from "@/public/images/dalts/houseFive/WEB/6.jpg"
import houseFiveImg7 from "@/public/images/dalts/houseFive/WEB/7.jpg"
import houseFiveImg8 from "@/public/images/dalts/houseFive/WEB/8.jpg"
import houseFiveImg9 from "@/public/images/dalts/houseFive/WEB/9.jpg"
import houseFiveImg10 from "@/public/images/dalts/houseFive/WEB/10.jpg"

import houseSixImg1 from "@/public/images/dalts/houseSix/WEB/1.jpg"
import houseSixImg2 from "@/public/images/dalts/houseSix/WEB/2.jpg"
import houseSixImg3 from "@/public/images/dalts/houseSix/WEB/3.jpg"
import houseSixImg4 from "@/public/images/dalts/houseSix/WEB/4.jpg"
import houseSixImg5 from "@/public/images/dalts/houseSix/WEB/5.jpg"
import houseSixImg6 from "@/public/images/dalts/houseSix/WEB/6.jpg"
import houseSixImg7 from "@/public/images/dalts/houseSix/WEB/7.jpg"
import houseSixImg8 from "@/public/images/dalts/houseSix/WEB/8.jpg"
import houseSixImg9 from "@/public/images/dalts/houseSix/WEB/9.jpg"

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
  img: StaticImageData
  subheading: string
  location: string
  mainImage?: string
  carouselImages?: string[]
  transformationStory?: {
    results: {
      occupancyRate: number
    }
  }
  carasoleImg: {
    img1: StaticImageData
    img2: StaticImageData
    img3: StaticImageData
    img4: StaticImageData
    img5: StaticImageData
    img6: StaticImageData
    img7: StaticImageData
    img8: StaticImageData
    img9: StaticImageData
    img10: StaticImageData
  }[]
}

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
    img: houseOneImg10 as StaticImageData,
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
        img1: houseOneImg1,
        img2: houseOneImg2,
        img3: houseOneImg3,
        img4: houseOneImg4,
        img5: houseOneImg5,
        img6: houseOneImg6,
        img7: houseOneImg7,
        img8: houseOneImg8,
        img9: houseOneImg9,
        img10: houseOneImg10,
      },
    ],
  },
  {
    slug: "clearview-serene-family-home",
    labelName: "Clearview",
    title: "Serene Family Home – Pool & Games Close to Adel CBD",
    category: "Property Management",
    tags: ["Styling"],
    description: "Peaceful Family Stay",
    beds: 6,
    baths: 4,
    status: "active",
    img: houseOneImg10,
    subheading: "Peaceful Family Stay with pool and games close to Adelaide CBD",
    location: "Clearview",
    carasoleImg: [
      {
        img1: houseOneImg10,
        img2: houseOneImg2,
        img3: houseOneImg3,
        img4: houseOneImg4,
        img5: houseOneImg5,
        img6: houseOneImg6,
        img7: houseOneImg7,
        img8: houseOneImg8,
        img9: houseOneImg9,
        img10: houseOneImg1,
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
    img: houseTwoImg10,
    subheading: "Steps from the shoreline in beautiful West Beach",
    location: "West Beach",
    carasoleImg: [
      {
        img1: houseTwoImg10,
        img2: houseTwoImg2,
        img3: houseTwoImg3,
        img4: houseTwoImg4,
        img5: houseTwoImg5,
        img6: houseTwoImg6,
        img7: houseTwoImg7,
        img8: houseTwoImg8,
        img9: houseTwoImg9,
        img10: houseTwoImg1,
      },
    ],
  },
  {
    slug: "parkland-vista",
    labelName: "Parkland Vista",
    title: "The Adelaide Parklands Complex (Parkland Vista)",
    category: "Property Management",
    tags: ["Styling"],
    description: "Heart of Adelaide CBD",
    beds: 2,
    baths: 1,
    status: "active",
    img: houseThreeImg10,
    subheading: "Heart of Adelaide CBD with stunning parkland views",
    location: "Adelaide CBD",
    carasoleImg: [
      {
        img1: houseThreeImg10,
        img2: houseThreeImg2,
        img3: houseThreeImg3,
        img4: houseThreeImg4,
        img5: houseThreeImg5,
        img6: houseThreeImg6,
        img7: houseThreeImg7,
        img8: houseThreeImg8,
        img9: houseThreeImg9,
        img10: houseThreeImg1,
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
    img: houseFourImg10,
    subheading: "5 minutes from Seaford Beach with coastal charm",
    location: "Seaford",
    carasoleImg: [
      {
        img1: houseFourImg10,
        img2: houseFourImg2,
        img3: houseFourImg3,
        img4: houseFourImg4,
        img5: houseFourImg5,
        img6: houseFourImg6,
        img7: houseFourImg7,
        img8: houseFourImg8,
        img9: houseFourImg9,
        img10: houseFourImg1,
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
    img: houseFiveImg1,
    subheading: "Family-friendly Enfield property with spacious living",
    location: "Enfield",
    carasoleImg: [
      {
        img1: houseFiveImg1,
        img2: houseFiveImg2,
        img3: houseFiveImg3,
        img4: houseFiveImg4,
        img5: houseFiveImg5,
        img6: houseFiveImg6,
        img7: houseFiveImg7,
        img8: houseFiveImg8,
        img9: houseFiveImg9,
        img10: houseFiveImg10,
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
    img: houseSixImg1,
    subheading: "Historic North Adelaide location with cosy charm",
    location: "North Adelaide",
    mainImage: "/images/design-mode/mlounge1.avif",
    carouselImages: [
      "/images/design-mode/mlounge1.avif",
      "/images/design-mode/mkitchen.jpeg",
      "/images/design-mode/mbathroom.jpeg",
      "/images/mexterior.jpeg",
      "/images/mdining.jpeg",
      "/images/mpatio.jpeg",
    ],
    transformationStory: {
      results: {
        occupancyRate: 92,
      },
    },
    carasoleImg: [
      {
        img1: houseSixImg1,
        img2: houseSixImg2,
        img3: houseSixImg3,
        img4: houseSixImg4,
        img5: houseSixImg5,
        img6: houseSixImg6,
        img7: houseSixImg7,
        img8: houseSixImg8,
        img9: houseSixImg9,
        img10: houseSixImg9,
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
    img: houseTwoImg1,
    subheading: "Exciting new property coming soon",
    location: "Coming Soon",
    carasoleImg: [
      {
        img1: houseTwoImg1,
        img2: houseTwoImg2,
        img3: houseTwoImg3,
        img4: houseTwoImg4,
        img5: houseTwoImg5,
        img6: houseTwoImg6,
        img7: houseTwoImg7,
        img8: houseTwoImg8,
        img9: houseTwoImg9,
        img10: houseTwoImg10,
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
    img: houseThreeImg1,
    subheading: "Another exciting property coming soon",
    location: "Coming Soon",
    carasoleImg: [
      {
        img1: houseThreeImg1,
        img2: houseThreeImg2,
        img3: houseThreeImg3,
        img4: houseThreeImg4,
        img5: houseThreeImg5,
        img6: houseThreeImg6,
        img7: houseThreeImg7,
        img8: houseThreeImg8,
        img9: houseThreeImg9,
        img10: houseThreeImg10,
      },
    ],
  },
]
