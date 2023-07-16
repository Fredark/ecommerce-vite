import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.gray[700]};
    font: 400 1rem/1.5 ${({ theme }) => theme.fonts.primary};
    margin: 0;
    padding: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  button {
    all: unset;
  }
`
