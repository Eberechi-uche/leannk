import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
  // change the appearance of the border
  borderRadius: "full", // remove the border radius
  fontWeight: "400", // change the font weight
  backgroundColor: "#A36A00",
  color: "#fff",
  _hover: {
    backgroundColor: "#C67600",
  },
});

const outline = defineStyle({
  // change the appearance of the border
  borderRadius: "full", // remove the border radius
  fontWeight: "400", // change the font weight
  borderColor: "#A36A00",
  border: "2px solid",

  color: "#A36A00",
  _hover: {
    backgroundColor: "#A36A00",
    color: "#fff",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { solid, outline },
});
