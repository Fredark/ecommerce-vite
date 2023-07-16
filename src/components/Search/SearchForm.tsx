import type { FC, FormEvent } from "react"
import * as Styled from "./styles"
import { Icon } from "./SearchIcon"

interface FormProps {
  inputValue: string
  handleChange: (term: string) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const Form: FC<FormProps> = ({
  inputValue,
  handleChange,
  handleSubmit,
}) => (
  <Styled.Form onSubmit={handleSubmit}>
    <Styled.Input
      type="text"
      placeholder="Looking for something?"
      value={inputValue}
      onChange={({ currentTarget }) => {
        handleChange(currentTarget.value)
      }}
    />
    <Styled.Button type="submit">
      <Icon />
    </Styled.Button>
  </Styled.Form>
)
