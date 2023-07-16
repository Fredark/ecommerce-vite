import { type FC, useState, useEffect, useContext } from "react"
import { PaginationList } from "./PaginationList"
import { ShowcaseContext } from "../../../contexts/showcaseContext"

const getPaginationArray = (productsLength = 1, productsPerPage = 12) => {
  const paginationArray: number[] = []
  const pagesLength = Math.ceil(productsLength / productsPerPage)

  for (let i = 0; i < pagesLength; i++) {
    paginationArray.push(i)
  }

  return paginationArray
}

export const Pagination: FC = () => {
  const [pagesList, setPagesList] = useState<number[]>([])
  const { productsLength, setFilters, activePage, setActivePage } =
    useContext(ShowcaseContext)

  const handlePaginationButtonClick = (target: number) => {
    setActivePage(target)
    setFilters({ page: target })
  }

  useEffect(() => {
    if (productsLength === undefined) return

    setPagesList(getPaginationArray(productsLength))
  }, [productsLength])

  if (pagesList.length === 0) return null

  return (
    <PaginationList
      pagesList={pagesList}
      activePage={activePage}
      handlePaginationButtonClick={handlePaginationButtonClick}
    />
  )
}
