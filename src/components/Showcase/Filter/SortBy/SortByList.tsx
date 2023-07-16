import { FC } from "react"
import * as Styled from "./styles"
import { SortByItem } from "./types"
import { SortByIcon } from "./SortByIcon"

interface SortByListProps {
  sortByList: SortByItem[]
  isListOpen: boolean
  activeSortLabel: string
  handleSortByClick: () => void
  handleSortByItemClick: (sortItem: SortByItem) => void
}

export const SortByList: FC<SortByListProps> = ({
  sortByList,
  isListOpen,
  activeSortLabel,
  handleSortByClick,
  handleSortByItemClick,
}) => (
  <Styled.Container
    onClick={() => {
      handleSortByClick()
    }}
  >
    Sort by: <Styled.SelectedLabel>{activeSortLabel}</Styled.SelectedLabel>
    <SortByIcon />
    {sortByList.length > 0 ? (
      <Styled.List $isOpen={isListOpen}>
        {sortByList.map((item) => (
          <Styled.Item
            key={item.id}
            onClick={() => {
              handleSortByItemClick(item)
            }}
          >
            {item.name}
          </Styled.Item>
        ))}
      </Styled.List>
    ) : null}
  </Styled.Container>
)
