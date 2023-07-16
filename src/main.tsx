import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { theme } from "./styles/theme"
import router from "./router"
import { GlobalStyles } from "./styles/global"
import { HelmetProvider } from "react-helmet-async"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_API_URI,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ApolloProvider>
    </HelmetProvider>
  </React.StrictMode>
)
