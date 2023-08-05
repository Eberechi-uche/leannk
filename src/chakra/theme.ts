import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `"Zen Tokyo Zoo", sans-serif`,
    body: `'Baloo Da 2 Variable', sans-serif`,
  },
});
