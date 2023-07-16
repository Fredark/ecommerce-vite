import { FC } from "react"
import * as Styled from "./styles"
import { SortByItem } from "./types"
import { SortByIcon } from "./SortByIcon"

interface SortByListProps {
  sortByList: SortByItem[]
  isListOpen: boolean
  activeSortLabel: string
  handleSortByClick: () => void
  handleSortByItemClick: (sortId: string) => void
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
        {sortByList.map(({ id, name }) => (
          <Styled.Item
            key={id}
            onClick={() => {
              handleSortByItemClick(id)
            }}
          >
            {name}
          </Styled.Item>
        ))}
      </Styled.List>
    ) : null}
  </Styled.Container>
)
