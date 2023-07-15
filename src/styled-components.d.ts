import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string
      white: string
      red: string
      orange: string
      gray: {
        200: string
        300: string
        400: string
        700: string
        800: string
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
