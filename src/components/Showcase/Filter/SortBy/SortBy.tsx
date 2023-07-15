import { useState, type FC } from "react"
import { SortByItem } from "./types"
import { SortByList } from "./SortByList"

const initialState: SortByItem[] = [
  {
    id: "news",
    name: "Newest Arrivals",
    isActive: true,
  },
  {
    id: "high-to-low",
    name: "Price: High to Low",
    isActive: false,
  },
  {
    id: "low-to-high",
    name: "Price: Low to High",
    isActive: false,
  },
  {
    id: "best-sellers",
    name: "Best Sellers",
    isActive: false,
  },
]

export const SortBy: FC = () => {
  const [sortByList, setSortByList] = useState<SortByItem[]>(initialState)
  const [activeSortLabel, setActiveSortLabel] = useState(initialState[0].name)
  const [isListOpen, setIsListOpen] = useState(false)

  const handleSortByClick = () => {
    setIsListOpen(!isListOpen)
  }

  const handleSortByItemClick = (sortItemId: string) => {
    const newSortList: SortByItem[] = sortByList.map(
      ({ id, name, ...rest }) => {
        const isActiveItem = id === sortItemId

        if (isActiveItem) setActiveSortLabel(name)

        return {
          ...rest,
          id,
          name,
          isActive: isActiveItem,
        }
      }
    )

    setSortByList(newSortList)
  }

  return (
    <SortByList
      sortByList={sortByList}
      isListOpen={isListOpen}
      activeSortLabel={activeSortLabel}
      handleSortByClick={handleSortByClick}
      handleSortByItemClick={handleSortByItemClick}
    />
  )
}
