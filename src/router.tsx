import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "./pages/Home/index"
import { ProductPage } from "./pages/Product"
import { ErrorPage } from "./pages/error"
import { StoreTemplate } from "./templates/Store/StoreTemplate"

const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreTemplate />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
    ],
  },
])

export default router
