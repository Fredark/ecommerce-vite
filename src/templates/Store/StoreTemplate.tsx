import { FC } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { Search } from "../../components/Search"
import { Cart } from "../../components/Cart"

export const StoreTemplate: FC = () => (
  <>
    <Header>
      <Search />
      <Cart />
    </Header>
    <main>
      <Outlet />
    </main>
  </>
)
