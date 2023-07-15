type TabId = "all" | "t-shirts" | "mugs"
export interface TabItem {
  id: TabId
  name: string
  isActive: boolean
}
