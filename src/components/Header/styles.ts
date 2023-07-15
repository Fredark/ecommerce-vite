import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { Center } from "../../styles/utils"

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.19rem 0;
`

export const Content = styled(Center)`
  justify-content: space-between;
`

export const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.gray[300]};
  font: 400 2.5rem/1 ${({ theme }) => theme.fonts.secondary};
  flex: 0 0 auto;
  text-decoration: none;
  text-transform: lowercase;
`

export const Right = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 1.5rem;
`
