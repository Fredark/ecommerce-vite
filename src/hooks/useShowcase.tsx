import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { gql } from "../__generated__"
import {
  GetProductsCountQuery,
  GetProductsQuery,
  Product,
  QueryAllProductsArgs,
} from "../__generated__/graphql"

export type ShowcaseHook = {
  productsList: Product[] | undefined
  productsLength: number
  filters: QueryAllProductsArgs
  activePage: number
  setFilters: (filters: QueryAllProductsArgs) => void
  setActivePage: (page: number) => void
}

const GET_PRODUCTS = gql(`
  query getProducts($page: Int, $perPage: Int, $sortField: String, $sortOrder: String, $filter: ProductFilter) {
    allProducts(page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder, filter: $filter) {
      id,
      name,
      image_url,
      price_in_cents,
    }
  }
`)

const GET_PRODUCTS_COUNT = gql(`
  query getProductsCount($filter: ProductFilter) {
    _allProductsMeta(filter: $filter) {
      count
    }
  }
`)

export const useShowcase = (
  initialState: QueryAllProductsArgs
): ShowcaseHook => {
  const [productsParams, setProductsParams] =
    useState<QueryAllProductsArgs>(initialState)

  const [productsList, setProductsList] = useState<Product[]>()
  const [productsLength, setProductsLength] = useState(0)
  const [activePage, setActivePage] = useState(initialState.page || 0)

  const { data: productsData } = useQuery<GetProductsQuery>(GET_PRODUCTS, {
    variables: productsParams,
  })

  const { data: productsCountData } = useQuery<GetProductsCountQuery>(
    GET_PRODUCTS_COUNT,
    {
      variables: { filter: productsParams.filter },
    }
  )

  const setFilters = (filters: QueryAllProductsArgs) => {
    const newFilter: QueryAllProductsArgs = {
      ...filters,
      page: filters.page === undefined ? 0 : filters.page,
    }

    setActivePage(newFilter.page as number)

    setProductsParams((currentParams) => {
      return {
        ...currentParams,
        ...newFilter,
      }
    })
  }

  useEffect(() => {
    if (
      productsData?.allProducts === undefined ||
      productsData?.allProducts === null
    )
      return

    setProductsList(productsData.allProducts as Product[])
  }, [productsData])

  useEffect(() => {
    if (productsCountData === undefined || productsCountData === null) return

    setProductsLength(productsCountData._allProductsMeta?.count as number)
  }, [productsCountData])

  useEffect(() => {
    const filter = {
      page: activePage,
    }

    setFilters(filter)
  }, [activePage])

  return {
    productsList,
    productsLength,
    filters: productsParams,
    activePage,
    setFilters,
    setActivePage,
  }
}
