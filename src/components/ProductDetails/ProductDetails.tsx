import { FC } from "react"
import type { Product } from "../../__generated__/graphql"
import * as Styled from "./styles"
import { formatCurrency } from "../../lib/utils/formatCurrency"
import { BackIcon } from "./BackIcon"
import { CartIcon } from "./CartIcon"

interface ProductDetailsProps {
  product: Product
}

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const { name, category, image_url, price_in_cents, description } = product
  return (
    <Styled.Container>
      <Styled.BackLink to="/">
        <BackIcon />
        Back
      </Styled.BackLink>
      <Styled.ProductDetails>
        <Styled.ProductImageEnv>
          <Styled.ProductImage src={image_url} alt={name} />
        </Styled.ProductImageEnv>
        <Styled.ProductInfo>
          <Styled.ProductCategory>{category}</Styled.ProductCategory>
          <Styled.ProductName>{name}</Styled.ProductName>
          <Styled.ProductPrice>
            {formatCurrency(price_in_cents)}
          </Styled.ProductPrice>
          <Styled.ProductShipping>
            *Shipping for $40.00 throughout the United States. Free for
            purchases over $900.00.
          </Styled.ProductShipping>
          <Styled.ProductDescriptionEnv>
            <Styled.ProductDescriptionTitle>
              Description
            </Styled.ProductDescriptionTitle>
            <Styled.ProductDescription>{description}</Styled.ProductDescription>
          </Styled.ProductDescriptionEnv>
          <Styled.BuyButton>
            <CartIcon />
            Add to Cart
          </Styled.BuyButton>
        </Styled.ProductInfo>
      </Styled.ProductDetails>
    </Styled.Container>
  )
}
