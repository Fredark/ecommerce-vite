import type { FC } from "react"
import { FilterTabs } from "./FilterTabs"
import { SortBy } from "./SortBy"
import * as Styled from "./styles"

export const Filter: FC = () => (
  <Styled.Container>
    <FilterTabs />
    <SortBy />
  </Styled.Container>
)
