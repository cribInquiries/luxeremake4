import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import TitleSubheading from "./Text/titleSubheading";
import Image from "next/image";
import airbnbLogo from "@/public/images/AirbnbLogo.svg";
import bookingComLogo from "@/public/images/Booking.svg";
import realestateLogo from "@/public/images/realestateLogo.svg";
import stayzLogo from "@/public/images/stayzLogo.svg";
import vrboLogo from "@/public/images/VrboLogo.svg";

const FeaturedPlatforms = () => {
  return (
    <Box>
      <TitleSubheading
        title="Featured Platforms"
        subheading="We proudly feature our properties on the most trusted platforms in the industry."
      />

      <HStack
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        wrap={["wrap", "wrap", "wrap", "wrap", "nowrap", "nowrap"]}
        justify="center"
        align="center"
        w="100%"
        h="100%"
        py={6}
        gap={["30px", "30px", "30px", "30px", "80px"]}
        pt={"80px"}
      >
        <HStack
          justify={["center", "center", "center", "center", "center"]}
          align={["center", "center", "center", "center", "center"]}
          w={["30%", "30%", "30%", "30%", "100%"]}
          h={["30%", "30%", "30%", "30%", "100%"]}
        >
          <a href="https://www.airbnb.com">
            <Image src={airbnbLogo} width={250} height={250} alt="Airbnb" />
          </a>
        </HStack>

        <HStack
          justify={["center", "center", "center", "center", "center"]}
          align={["center", "center", "center", "center", "center"]}
          w={["30%", "30%", "30%", "30%", "100%"]}
          h={["30%", "30%", "30%", "30%", "100%"]}
        >
          <a href="www.booking.com">
            <Image
              src={bookingComLogo}
              width={250}
              height={250}
              alt="Booking.com"
            />
          </a>
        </HStack>

        <HStack
          justify={["center", "center", "center", "center", "center"]}
          align={["center", "center", "center", "center", "center"]}
          w={["30%", "30%", "30%", "30%", "100%"]}
          h={["30%", "30%", "30%", "30%", "100%"]}
        >
          <a href="www.vrbo.com">
            <Image src={vrboLogo} width={200} height={200} alt="Vrbo" />
          </a>
        </HStack>

        <HStack
          justify={["center", "center", "center", "center", "center"]}
          align={["center", "center", "center", "center", "center"]}
          w={["30%", "30%", "30%", "30%", "100%"]}
          h={["30%", "30%", "30%", "30%", "100%"]}
        >
          <a href="www.stayz.com.au">
            <Image src={stayzLogo} width={200} height={200} alt="Stayz" />
          </a>
        </HStack>

        <HStack
          justify={["center", "center", "center", "center", "center"]}
          align={["center", "center", "center", "center", "center"]}
          w={["30%", "30%", "30%", "30%", "100%"]}
          h={["30%", "30%", "30%", "30%", "100%"]}
        >
          <a href="www.realestate.com.au">
            <Image
              src={realestateLogo}
              width={250}
              height={250}
              alt="Realestate"
            />
          </a>
        </HStack>
      </HStack>
    </Box>
  );
};

export default FeaturedPlatforms;

