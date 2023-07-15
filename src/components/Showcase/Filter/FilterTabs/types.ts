export interface TabItem {
  id: TabId
  name: string
  isActive: boolean
}

type TabId = "all" | "t-shirts" | "mugs"
