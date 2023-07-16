import { css, styled } from "styled-components"

type ButtonProps = {
  $isActive?: boolean
}

export const Container = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const PagesList = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 0.12rem;
`

export const Button = styled.button<ButtonProps>`
  align-items: center;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.gray[400]};
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  height: 2rem;
  justify-content: center;
  transition: ${({ theme }) => theme.transition};
  width: 2rem;

  ${(props) =>
    props.$isActive
      ? css`
          background-color: ${({ theme }) => theme.colors.gray[900]};
          border: 1px solid ${({ theme }) => theme.colors.orange};
          font-weight: 600;
          color: ${({ theme }) => theme.colors.orange};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.gray[600]};
          border: 1px solid transparent;
        `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[900]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[600]};
    cursor: default;
    opacity: 0.5;
  }
`

export const PaginationButtons = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 0.12rem;
`

export const Icon = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`
