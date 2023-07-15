import type { FC } from "react"
import * as Styled from "./styles"
import { TabItem } from "./types"

interface FilterTabsProps {
  tabsList: TabItem[]
  handleTabChange: (tabId: string) => void
}

export const List: FC<FilterTabsProps> = ({ tabsList, handleTabChange }) => (
  <>
    {tabsList.length > 0 ? (
      <Styled.List role="tablist">
        {tabsList.map(({ id, name, isActive }) => (
          <Styled.Tab
            role="tab"
            aria-selected={isActive}
            aria-controls={id}
            key={id}
            $isActive={isActive}
            onClick={() => {
              handleTabChange(id)
            }}
          >
            {name}
          </Styled.Tab>
        ))}
      </Styled.List>
    ) : null}
  </>
)
