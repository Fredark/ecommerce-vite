import { FC } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { Search } from "../../components/Search"
import { Cart } from "../../components/Cart"
import styled from "styled-components"
import { Center } from "../../styles/utils"

const Main = styled(Center).attrs({
  as: "main",
})`
  flex-flow: column nowrap;
  padding-bottom: 1.56rem;
  padding-top: 1.56rem;
`

export const StoreTemplate: FC = () => (
  <>
    <Header>
      <Search />
      <Cart />
    </Header>
    <Main>
      <Outlet />
    </Main>
  </>
)
