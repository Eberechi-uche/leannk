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

const white = defineStyle({
  borderRadius: "4px", // remove the border radius
  fontWeight: "400", // change the font weight
  backgroundColor: "#F5F5F5",
  border: "2px solid",

  borderColor: "#F5F5F5",
  color: "#000",
  _hover: {
    // backgroundColor: "#fff",
    border: "2px solid",
    borderColor: "#fff",
    color: "#fff",
    backgroundColor: "#000",
  },
});
const whiteOutline = defineStyle({
  borderRadius: "4px", // remove the border radius
  fontWeight: "400", // change the font weight
  // backgroundColor: "#fff",
  border: "2px solid",

  borderColor: "#fff",
  color: "#fff",
  _hover: {
    backgroundColor: "#fff",
    color: "#000",
    border: "2px solid",
    borderColor: "#fff",
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
  variants: { solid, outline, white, whiteOutline },
});
