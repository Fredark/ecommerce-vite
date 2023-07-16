import { useState, type FC, type FormEvent } from "react"
import { Form } from "./SearchForm"

export const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (term: string) => {
    setSearchTerm(term)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <Form
      inputValue={searchTerm}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}
