import type { FC } from "react"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import { useProduct } from "../../hooks/useProduct"
import { ProductDetails } from "../../components/ProductDetails"

export const ProductPage: FC = () => {
  const { productId } = useParams()
  const { productData } = useProduct({ productId: productId })

  if (productData === undefined) return

  return (
    <>
      <Helmet>
        <title>{`${productData.name}`} - Capputeeno</title>
        <meta name="description" content={productData.description} />
      </Helmet>
      <ProductDetails product={productData} />
    </>
  )
}
