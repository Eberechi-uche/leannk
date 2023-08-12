import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
  // change the appearance of the border
  borderRadius: "4px", // remove the border radius
  fontWeight: "400", // change the font weight
  backgroundColor: "#000",
  border: "2px solid",

  borderColor: "#000",
  color: "#fff",
  _hover: {
    backgroundColor: "#fff",
    color: "#000",
    border: "2px solid",
  },
});

const outline = defineStyle({
  // change the appearance of the border
  borderRadius: "4px", // remove the border radius
  fontWeight: "400", // change the font weight
  borderColor: "#000",
  border: "2px solid",

  color: "#000",
  _hover: {
    backgroundColor: "#000",
    color: "#fff",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { solid, outline },
});
