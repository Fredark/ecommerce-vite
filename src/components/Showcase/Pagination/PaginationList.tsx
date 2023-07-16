import type { FC } from "react"

import { PaginationButton } from "./PaginationButton"
import { PaginationPreviousIcon } from "./PaginationPreviousIcon"
import { PaginationNextIcon } from "./PaginationNextIcon"
import * as Styled from "./styles"

interface PaginationListProps {
  pagesList: number[]
  activePage: number
  handlePaginationButtonClick: (target: number) => void
}

export const PaginationList: FC<PaginationListProps> = ({
  pagesList,
  activePage,
  handlePaginationButtonClick,
}) => (
  <Styled.Container>
    <Styled.PagesList>
      {pagesList.map((item) => (
        <PaginationButton
          key={item}
          target={item}
          isActive={item === activePage}
          handlePaginationButtonClick={handlePaginationButtonClick}
        >
          {item + 1}
        </PaginationButton>
      ))}
    </Styled.PagesList>
    <Styled.PaginationButtons>
      <PaginationButton
        key="previous"
        target={activePage - 1}
        handlePaginationButtonClick={handlePaginationButtonClick}
        isDisabled={activePage === 0}
      >
        <PaginationPreviousIcon />
      </PaginationButton>
      <PaginationButton
        key="next"
        target={activePage + 1}
        handlePaginationButtonClick={handlePaginationButtonClick}
        isDisabled={activePage >= pagesList.length - 1}
      >
        <PaginationNextIcon />
      </PaginationButton>
    </Styled.PaginationButtons>
  </Styled.Container>
)
