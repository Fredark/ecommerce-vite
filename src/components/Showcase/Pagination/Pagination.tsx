import { type FC, useState } from "react"
import { PaginationList } from "./PaginationList"

const getPaginationArray = () => {
  const pagesLength = 5
  const paginationArray: number[] = []

  for (let i = 1; i < pagesLength + 1; i++) {
    paginationArray.push(i)
  }

  return paginationArray
}

export const Pagination: FC = () => {
  const [pagesList, setPagesList] = useState<number[]>(getPaginationArray())
  const [activePage, setActivePage] = useState(1)

  const handlePaginationButtonClick = (target: number) => {
    console.info("page ->", target)
    setActivePage(target)
  }

  return (
    <PaginationList
      pagesList={pagesList}
      activePage={activePage}
      handlePaginationButtonClick={handlePaginationButtonClick}
    />
  )
}
