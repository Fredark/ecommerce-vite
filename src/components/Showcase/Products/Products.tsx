import { type FC, useContext } from "react"
import { formatCurrency } from "../../../lib/utils/formatCurrency"

import * as Styled from "./styles"
import { ShowcaseContext } from "../../../contexts/showcaseContext"

export const Products: FC = () => {
  const { productsList } = useContext(ShowcaseContext)

  if (productsList === undefined) return

  return (
    <Styled.Showcase>
      {productsList.map(({ id, name, image_url, price_in_cents }, index) => (
        <Styled.Product key={index}>
          <Styled.ProductLink to={`/product/${id}`}>
            <Styled.ProductImageEnv>
              <Styled.ProductImage src={image_url} alt={name} loading="lazy" />
            </Styled.ProductImageEnv>
            <Styled.ProductDetails>
              <Styled.ProductName>{name}</Styled.ProductName>
              <Styled.ProductPrice>
                {formatCurrency(price_in_cents)}
              </Styled.ProductPrice>
            </Styled.ProductDetails>
          </Styled.ProductLink>
        </Styled.Product>
      ))}
    </Styled.Showcase>
  )
}
