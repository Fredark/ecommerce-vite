import { styled } from "styled-components"

export const Form = styled.form`
  align-items: stretch;
  display: flex;
  height: 2.625rem;
  position: relative;
  width: 22rem;
`

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 0.5rem;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.gray[200]};
  flex: 1 1 auto;
  font: 400 0.875rem/1 ${({ theme }) => theme.fonts.primary};
  outline: none;
  padding: 0 1rem;
  transition: ${({ theme }) => theme.transition};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.gray[400]};
  }
`

export const Button = styled.button`
  align-self: center;
  flex: 0 0 auto;
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`

export const Icon = styled.svg`
  fill: transparent;
  height: 1.5rem;
  width: 1.5rem;
`
