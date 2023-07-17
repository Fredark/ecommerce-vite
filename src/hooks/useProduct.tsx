import { useQuery } from "@apollo/client"
import { gql } from "../__generated__"
import { GetProductQuery, Product } from "../__generated__/graphql"
import { useEffect, useState } from "react"

interface UseProductProps {
  productId: string | undefined
}

export interface UseProductHook {
  productData: Product | undefined
}

const GET_PRODUCT = gql(`
  query GetProduct($productId: ID!) {
    Product(id: $productId) {
      id,
      name,
      image_url,
      price_in_cents,
      description,
      category
    }
  }
`)

export const useProduct = ({ productId }: UseProductProps): UseProductHook => {
  const [product, setProduct] = useState<Product>()
  const { data } = useQuery<GetProductQuery>(GET_PRODUCT, {
    variables: { productId },
    skip: productId === "",
  })

  useEffect(() => {
    if (data === undefined || data === null) return

    setProduct(data.Product as Product)
  }, [data])
  return {
    productData: product,
  }
}
