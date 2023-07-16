import type { FC } from "react"
import * as Styled from "./styles"
import { PaginationButtonProps } from "./types"

export const PaginationButton: FC<PaginationButtonProps> = ({
  isActive,
  isDisabled,
  target,
  handlePaginationButtonClick,
  children,
}) => {
  return (
    <Styled.Button
      $isActive={isActive}
      onClick={() => {
        handlePaginationButtonClick(target)
      }}
      disabled={isDisabled}
    >
      {children}
    </Styled.Button>
  )
}
