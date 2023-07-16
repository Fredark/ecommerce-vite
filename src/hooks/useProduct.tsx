import { useQuery } from "@apollo/client"
import { gql } from "../__generated__"
import { GetProductQuery, Product } from "../__generated__/graphql"

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
  const { data } = useQuery<GetProductQuery>(GET_PRODUCT, {
    variables: { productId },
    skip: productId === "",
  })
  return {
    productData: data?.Product,
  }
}
