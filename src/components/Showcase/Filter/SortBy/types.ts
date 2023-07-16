type SortByItemId = "news" | "high-to-low" | "low-to-high" | "best-sellers"

export interface SortByItem {
  id: SortByItemId
  name: string
  isActive: boolean
  sortField: string
  sortOrder: string
}
