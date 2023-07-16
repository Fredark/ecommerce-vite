import type { FC } from "react"
import { Filter } from "../../components/Showcase/Filter/Filter"
import { Pagination } from "../../components/Showcase/Pagination"
import { Helmet } from "react-helmet-async"

export const HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Capputeeno - E-commerce example</title>
        <meta
          name="description"
          content="This is an e-commerce example project"
        />
      </Helmet>
      <Filter />
      <Pagination />
    </>
  )
}
