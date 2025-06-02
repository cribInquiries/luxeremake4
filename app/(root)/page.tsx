"use client";

import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import { Box, HStack } from "@chakra-ui/react";
import ReactLenis from "lenis/react";
import Testimonials from "@/components/testimonials";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import HowWeCanGetYouStarted from "@/components/luxeComponents/HowWeCanGetYouStarted";
import OurServices from "@/components/luxeComponents/OurServices";
import StickyGallery from "@/components/houseScrollDown/StickyGallery";
import FeaturedPlatforms from "@/components/luxeComponents/FeaturedPlatforms";
// import FollowingScrollButton from "@/components/luxeComponents/followingScrollButton";

// Lazy load the GalleryHeroSection component
const GalleryHeroSection = React.lazy(
  () => import("@/components/luxeComponents/GalleryHeroSection"),
);
export const metadata = {
  title: "Airbnb Management Adelaide | Luxe Managements",
  description:
    "Airbnb Property Management Adelaide by Luxe Managements. We provide styling, professional photography, cleaning, and guest care so your Adelaide property stands out and earns more.",
  keywords: [
    "Airbnb",
    "Adelaide",
    "Property Management",
    "Airbnb Property Management Adelaide",
    "Property Management Adelaide",
    "Airbnb Property Management",
  ],
  alternates: {
    canonical: "https://www.luxemanagements.com",
  },
  openGraph: {
    title: "Airbnb Management Adelaide | Luxe Managements",
    description:
      "Airbnb Property Management Adelaide by Luxe Managements. We provide styling, professional photography, cleaning, and guest care so your Adelaide property stands out and earns more.",
    url: "https://www.luxemanagements.com",
    siteName: "Luxe Managements",
    images: [
      {
        url: "https://www.luxemanagements.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxe Managements Airbnb property management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airbnb Management Adelaide | Luxe Managements",
    description:
      "Airbnb Property Management Adelaide by Luxe Managements. We provide styling, professional photography, cleaning, and guest care so your Adelaide property stands out and earns more.",
    images: ["https://www.luxemanagements.com/og-image.jpg"],
  },
};
const Home = () => {
  return (
    <>
      <ReactLenis
        root
        options={{
          duration: 1.2,
          touchMultiplier: 2,
        }}
      />

      {/* <FollowingScrollButton /> */}
      {/* Render Hero and other components normally */}
      <Hero />
      <FeaturedPlatforms />

      <OurServices />

      <HowWeCanGetYouStarted />

      <StickyGallery />

      {/* Use Suspense to lazy-load GalleryHeroSection */}
      <Suspense fallback={<div>Loading gallery...</div>}>
        <GalleryHeroSection />
      </Suspense>

      <Testimonials />

      {/* Horizontal dividers for spacing */}
      <HStack
        justify={"center"}
        align={"center"}
        w={"100%"}
        id="get-started-button"
        my={["50px", "50px", "100px", "100px", "100px", "100px"]}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>

      <ScheduleConsultation />

      {/* Horizontal dividers for spacing */}
      <HStack justify={"center"} align={"center"} w={"100%"}>
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>

      <FAQ type="general" />
    </>
  );
};

export default Home;
