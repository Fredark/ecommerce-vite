import { type FC, type ReactNode, createContext, useContext } from "react"
import type { QueryAllProductsArgs } from "../__generated__/graphql"
import { type ShowcaseHook, useShowcase } from "../hooks/useShowcase"

interface ShowcaseContextProviderProps {
  children: ReactNode
}

const initialState: QueryAllProductsArgs = {
  perPage: 12,
  page: 0,
  sortField: "created_at",
  sortOrder: "DESC",
}

export const ShowcaseContext = createContext<ShowcaseHook>({
  productsList: [],
  productsLength: 0,
  filters: initialState,
  activePage: initialState.page || 0,
  setFilters: () => {
    return
  },
  setActivePage: () => {
    return
  },
})

export const ShowcaseProvider: FC<ShowcaseContextProviderProps> = ({
  children,
}) => {
  const showcase = useShowcase(initialState)

  return (
    <ShowcaseContext.Provider value={showcase}>
      {children}
    </ShowcaseContext.Provider>
  )
}
