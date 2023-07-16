import type { FC } from "react"
import { Filter } from "../../components/Showcase/Filter/Filter"
import { Pagination } from "../../components/Showcase/Pagination"
import { Helmet } from "react-helmet-async"
import { Products } from "../../components/Showcase/Products"
import { ShowcaseProvider } from "../../contexts/showcaseContext"

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
      <ShowcaseProvider>
        <Filter />
        <Pagination />
        <Products />
        <Pagination />
      </ShowcaseProvider>
    </>
  )
}
