import type { FC } from "react"
import { useRouteError } from "react-router-dom"

interface ErrorStatus {
  statusText: string
  status: number
}

export const ErrorPage: FC = () => {
  const error: unknown = useRouteError()
  console.error(error)

  return (
    <div>
      <h1>Opps!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as ErrorStatus).status} -{" "}
          {(error as ErrorStatus).statusText || (error as Error).message}
        </i>
      </p>
    </div>
  )
}
