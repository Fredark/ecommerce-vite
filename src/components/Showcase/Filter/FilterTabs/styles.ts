import { css, styled } from "styled-components"

interface TabProps {
  $isActive: boolean
}

export const List = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  user-select: none;
`

export const Tab = styled.li<TabProps>`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transition};

  ${(props) =>
    props.$isActive
      ? css`
          border-bottom: 0.25rem solid ${({ theme }) => theme.colors.orange};
          color: ${({ theme }) => theme.colors.gray[200]};
          font-weight: 600;
        `
      : css`
          border-bottom: 0.25rem solid transparent;
          color: ${({ theme }) => theme.colors.gray[400]};
          font-weight: 400;
        `};

  &:hover {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`
