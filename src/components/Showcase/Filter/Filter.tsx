import type { FC } from "react"
import { FilterTabs } from "./FilterTabs"
import { OrderBy } from "./OrderBy"
import * as Styled from "./styles"

export const Filter: FC = () => (
  <Styled.Container>
    <FilterTabs />
    <OrderBy />
  </Styled.Container>
)
