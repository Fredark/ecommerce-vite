import type { FC } from "react"
import { Helmet } from "react-helmet-async"

export const ProductPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Capputeeno - Product Page</title>
        <meta name="description" content="This is a Product example page" />
      </Helmet>
      Hi, I'm a product!
    </>
  )
}
