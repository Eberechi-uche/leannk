import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./Button";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    green: "#00DDB3",
    blue: "#00B6FE",
    yellow: "#FFBF01",
    purple: "#BA9BFC",
    gray: "#DBDBDE",
    darkgray: "#696969",
    lightgray: "#F8F8F8",
    dark: "#5F5B48",
    black: "#000",
  },
};

export const theme = extendTheme({
  colors,
  styles: {
    global: {
      "html, body": {
        fontSize: "16px",
        color: "#191919",
        lineHeight: "tall",
      },
    },
  },
  fonts: {
    heading: `"Zen Tokyo Zoo", sans-serif`,
    body: `'Inter Variable', sans-serif`,
  },
  components: {
    Button: buttonTheme,
  },
});
