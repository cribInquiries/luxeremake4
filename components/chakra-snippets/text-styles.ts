// text-styles.ts
import { defineTextStyles } from "@chakra-ui/react"

export const textStyles = defineTextStyles({
  smallText: {
    value: {
      fontSize: {
        base: "12px",
        sm:   "13px",
        md:   "14px",
        lg:   "15px",
        xl:   "16px",
        "2xl":"17px",
      },
   
    },
  },
  //  textStyle={"smallText"}
  basicText: {
    value: {
      fontSize: {
        base: "16px",
        sm:   "18px",
        md:   "20px",
        lg:   "22px",
        xl:   "24px",
        "2xl":"26px",
      },
     
    },
  },
  // textStyle={"basicText"}
  subheading: {
    value: {
      fontSize: {
        base: "20px",
        sm:   "22px",
        md:   "24px",
        lg:   "26px",
        xl:   "28px",
        "2xl":"30px",
      },
   
    },
  },
  // textStyle={"subheading"}
  heading: {
    value: {
      fontSize: {
        base: "24px",
        sm:   "28px",
        md:   "32px",
        lg:   "36px",
        xl:   "40px",
        "2xl":"44px",
      },
   
    },
  },
  // textStyle={"heading"}
  title: {
    value: {
      fontSize: {
        base: "32px",
        sm:   "40px",
        md:   "50px",
        lg:   "60px",
        xl:   "80px",
        "2xl":"90px",
      },
     
    },
  },
  // textStyle={"title"}
  display: {
    value: {
      fontSize: {
        base: "48px",
        sm:   "60px",
        md:   "70px",
        lg:   "80px",
        xl:   "100px",
        "2xl":"110px",
      },
     
    },
  },
})

// textStyle={"display"}