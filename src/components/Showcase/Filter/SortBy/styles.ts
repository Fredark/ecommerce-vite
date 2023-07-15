import styled, { css } from "styled-components"

interface ListProps {
  $isOpen: boolean
}

export const Container = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[400]};
  cursor: pointer;
  display: inline-flex;
  font-size: 0.875rem;
  line-height: 1.375rem;
  padding-bottom: 0.25rem;
  position: relative;
  user-select: none;
  white-space: nowrap;
`

export const SelectedLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-weight: 500;
  margin-left: 0.25rem;
`

export const Icon = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`

export const List = styled.ul<ListProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => theme.shadows[100]};
  display: block;
  list-style: none;
  margin: 0;
  min-width: 11rem;
  padding: 0.25rem 0;
  position: absolute;
  transition: ${({ theme }) => theme.transition};
  right: 0;

  ${(props) =>
    props.$isOpen
      ? css`
          opacity: 1;
          visibility: visible;
          top: 100%;
          z-index: 10;
        `
      : css`
          opacity: 0;
          top: 70%;
          visibility: hidden;
          z-index: -1;
        `}
`

export const Item = styled.li`
  background-color: transparent;
  display: block;
  padding: 0.25rem 1rem;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[700]};
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`
