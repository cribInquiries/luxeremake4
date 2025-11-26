import { Box } from "@chakra-ui/react"
import HeroClientWrapper from "./HeroClientWrapper"

const Hero = () => {
  // const words = [
  //   "Effortless ",
  //   "Stress-free",
  //   "Efficient",
  //   "Simple",
  //   "Effective",
  //   "Easy",
  // ];
  // redce font size for moible

  return (
    <>
      <Box
        overflowX={"hidden"}
        mt={{
          base: "50px",
          sm: "50px",
          md: "180px",
          lg: "180px",
          xl: "180px",
        }}
      >
        <Box px={["4%", "4%", "6%", "6%", "6%", "10%"]} pb={"50px"}></Box>

        <HeroClientWrapper />
      </Box>

      {/* Add New Pack Button */}

      {/* New Dialog Component */}
    </>
  )
}

export default Hero
