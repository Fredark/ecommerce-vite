import type { FC } from "react"
import * as Styled from "./styles"
import { Icon } from "./Icon"

export const Cart: FC = () => {
  return (
    <Styled.Container>
      <Icon />
      <Styled.Qty>2</Styled.Qty>
    </Styled.Container>
  )
}
