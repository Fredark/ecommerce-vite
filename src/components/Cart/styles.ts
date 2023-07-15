import { styled } from "styled-components"

export const Container = styled.div`
  cursor: pointer;
  font-size: 0;
  flex: 0 0 auto;
  line-height: 0;
  padding: 0 0.56rem 0 0;
  position: relative;
`

export const Icon = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`

export const Qty = styled.span`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 50%;
  bottom: -0.5rem;
  color: ${({ theme }) => theme.colors.white};
  display: inline-flex;
  font-size: 0.625rem;
  font-weight: 500;
  height: 1.0625rem;
  justify-content: center;
  line-height: 1.0625rem;
  position: absolute;
  width: 1.0625rem;
  right: 0;
`
