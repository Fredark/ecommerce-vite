import { DefaultTheme } from "styled-components"

export const theme: DefaultTheme = {
  colors: {
    black: "#000",
    blue: "#115D8C",
    white: "#FFF",
    red: "#DE3838",
    orange: "#FFA585",
    gray: {
      100: "#09090A",
      200: "#41414D",
      300: "#5D5D6D",
      350: "#617480",
      400: "#737380",
      500: "#DCE2E5",
      600: "#E9E9F0",
      700: "#F0F0F5",
      800: "#F3F3F6",
      900: "#F5F5FA",
    },
  },
  shadows: {
    100: "0px 4px 12px 0px rgba(0, 0, 0, 0.10)",
  },
  transition: "all 150ms ease-in-out",
  fonts: {
    primary: "Saira, sans-serif",
    secondary: "'Saira Stencil One', cursive",
  },
}
