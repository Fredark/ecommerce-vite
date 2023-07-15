import { FC, ReactNode } from "react"
import * as Styled from "./styles"

interface HeaderProps {
  children?: ReactNode
}

export const Header: FC<HeaderProps> = ({ children }) => (
  <Styled.Header>
    <Styled.Content>
      <Styled.Logo to="/">Capputeeno</Styled.Logo>
      <Styled.Right>{children}</Styled.Right>
    </Styled.Content>
  </Styled.Header>
)
