import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string
      blue: string
      white: string
      red: string
      orange: string
      gray: {
        100: string
        200: string
        300: string
        350: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
    }
    shadows: {
      100: string
    }
    fonts: {
      primary: string
      secondary: string
    }
    transition: string
  }
}
