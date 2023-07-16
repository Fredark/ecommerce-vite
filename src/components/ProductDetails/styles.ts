import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div``

export const BackLink = styled(Link)`
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[350]};
  display: inline-flex;
  margin-bottom: 1.38rem;
  text-decoration: none;
`

export const BackIcon = styled.svg`
  flex: 0 0 auto;
  font-size: 0.875rem;
  font-weight: 500;
  height: 1.5rem;
  line-height: 1.5;
  margin-right: 0.5rem;
  width: 1.5rem;
`

export const ProductDetails = styled.div`
  align-items: stretch;
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
`

export const ProductImageEnv = styled.div`
  border-radius: 0.25rem;
  flex: 1 1 40rem;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
`

export const ProductImage = styled.img`
  width: 100%;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 28rem;
`

export const ProductCategory = styled.h2`
  color: ${({ theme }) => theme.colors.gray[200]};
  display: block;
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 0.75rem;
  text-transform: capitalize;
`

export const ProductName = styled.h1`
  color: ${({ theme }) => theme.colors.gray[200]};
  display: block;
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 0.25rem;
`

export const ProductPrice = styled.strong`
  color: ${({ theme }) => theme.colors.gray[100]};
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

export const ProductShipping = styled.p`
  color: ${({ theme }) => theme.colors.gray[200]};
  display: block;
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0 0 3.62rem;
`

export const ProductDescriptionEnv = styled.div`
  flex: 1 1 auto;
  margin-bottom: 1rem;
`

export const ProductDescriptionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 1rem;
  font-weight: 500;
  display: block;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
`

export const ProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0;
`

export const BuyButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.gray[900]};
  cursor: pointer;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 1rem;
  font-weight: 500;
  justify-content: center;
  padding: 0.62rem 1rem;
  text-transform: uppercase;
`

export const CartIcon = styled.svg`
  flex: 0 0 auto;
  height: 1.5rem;
  margin-right: 0.62rem;
  width: 1.5rem;
`
