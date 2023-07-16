import { useState, type FC, useContext } from "react"
import { FilterTabsList } from "./FilterTabsList"
import { TabItem } from "./types"
import { ShowcaseContext } from "../../../../contexts/showcaseContext"
import { QueryAllProductsArgs } from "../../../../__generated__/graphql"

const initialState: TabItem[] = [
  {
    id: "all",
    name: "All Products",
    isActive: true,
  },
  {
    id: "t-shirts",
    name: "T-Shirts",
    isActive: false,
  },
  {
    id: "mugs",
    name: "Mugs",
    isActive: false,
  },
]

export const FilterTabs: FC = () => {
  const { setFilters } = useContext(ShowcaseContext)
  const [filtersList, setFiltersList] = useState<TabItem[]>(initialState)

  const handleTabChange = (tabId: string) => {
    const filter: QueryAllProductsArgs = {
      filter: {
        category: tabId === "all" ? undefined : tabId,
      },
    }
    const newList: TabItem[] = filtersList.map(({ id, ...rest }) => {
      return {
        ...rest,
        id,
        isActive: id === tabId ? true : false,
      }
    })

    setFiltersList(newList)
    setFilters(filter)
  }

  return (
    <FilterTabsList tabsList={filtersList} handleTabChange={handleTabChange} />
  )
}
