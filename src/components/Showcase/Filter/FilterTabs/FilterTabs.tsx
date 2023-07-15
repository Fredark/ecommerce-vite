import { useState, type FC } from "react"
import { List } from "./List"
import { TabItem } from "./types"

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
  const [filtersList, setFiltersList] = useState<TabItem[]>(initialState)

  const handleTabChange = (tabId: string) => {
    const newList: TabItem[] = filtersList.map(({ id, ...rest }) => {
      return {
        ...rest,
        id,
        isActive: id === tabId ? true : false,
      }
    })

    setFiltersList(newList)
  }

  return <List tabsList={filtersList} handleTabChange={handleTabChange} />
}
