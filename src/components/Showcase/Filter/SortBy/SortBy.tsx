import { useState, type FC, useContext } from "react"
import { SortByItem } from "./types"
import { SortByList } from "./SortByList"
import { ShowcaseContext } from "../../../../contexts/showcaseContext"
import { QueryAllProductsArgs } from "../../../../__generated__/graphql"

const initialState: SortByItem[] = [
  {
    id: "news",
    name: "Newest Arrivals",
    sortField: "created_at",
    sortOrder: "desc",
    isActive: true,
  },
  {
    id: "high-to-low",
    name: "Price: High to Low",
    sortField: "price_in_cents",
    sortOrder: "desc",
    isActive: false,
  },
  {
    id: "low-to-high",
    name: "Price: Low to High",
    sortField: "price_in_cents",
    sortOrder: "asc",
    isActive: false,
  },
  {
    id: "best-sellers",
    name: "Best Sellers",
    sortField: "sales",
    sortOrder: "desc",
    isActive: false,
  },
]

export const SortBy: FC = () => {
  const { setFilters } = useContext(ShowcaseContext)
  const [sortByList, setSortByList] = useState<SortByItem[]>(initialState)
  const [activeSortLabel, setActiveSortLabel] = useState(initialState[0].name)
  const [isListOpen, setIsListOpen] = useState(false)

  const handleSortByClick = () => {
    setIsListOpen(!isListOpen)
  }

  const handleSortByItemClick = ({
    id: itemId,
    sortField,
    sortOrder,
  }: SortByItem) => {
    const filter: QueryAllProductsArgs = {
      sortField,
      sortOrder,
    }

    const newSortList: SortByItem[] = sortByList.map(
      ({ id, name, ...rest }) => {
        const isActiveItem = id === itemId

        if (isActiveItem) setActiveSortLabel(name)

        return {
          ...rest,
          id,
          name,
          isActive: isActiveItem,
        }
      }
    )

    setFilters(filter)
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
