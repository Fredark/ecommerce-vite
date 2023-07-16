import { Link } from "react-router-dom"
import { styled } from "styled-components"

export const Showcase = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  list-style: none;
  gap: 2rem;
  margin: 0 0 4.62rem;
  padding: 0;
`

export const ProductImageEnv = styled.div`
  align-items: center;
  display: flex;
  height: 18.75rem;
  justify-content: center;
  overflow: hidden;
`

export const ProductImage = styled.img`
  height: 105%;
  object-fit: cover;
  transition: ${({ theme }) => theme.transition};
  width: auto;
`

export const Product = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[100]};
    transform: scale(1.05);

    ${ProductImage} {
      transform: scale(0.956);
    }
  }
`

export const ProductLink = styled(Link)`
  text-decoration: none;
`

export const ProductDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 0.75rem;
`

export const ProductName = styled.strong`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
  color: ${({ theme }) => theme.colors.gray[200]};
  display: block;
  font-size: 1rem;
  font-weight: 300;
  flex: 0 0 auto;
  line-height: 1.5rem;
  padding: 0.5rem 0;
`

export const ProductPrice = styled.span`
  color: ${({ theme }) => theme.colors.gray[100]};
  flex: 0 0 auto;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  padding: 0.5rem 0;
`
