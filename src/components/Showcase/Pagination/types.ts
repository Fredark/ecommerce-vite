import { ReactNode } from "react"

export type PaginationButtonProps = {
  children: ReactNode
  handlePaginationButtonClick: (target: number) => void
  target: number
  isActive?: boolean
  isDisabled?: boolean
}
