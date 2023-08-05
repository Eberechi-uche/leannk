import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
  // change the appearance of the border
  borderRadius: "full", // remove the border radius
  fontWeight: "400", // change the font weight
  backgroundColor: "#FAF089",
  _hover: {
    backgroundColor: "#ECC94B",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { solid },
});
