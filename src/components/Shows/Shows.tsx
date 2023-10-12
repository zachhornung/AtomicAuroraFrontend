import { useGetAllShowsQuery } from "../../state/services/showsApi"
import { LoadingIcon } from "../Loading"
import { Show } from "./Show"



export const Shows = () => {

  const { data, isLoading } = useGetAllShowsQuery(undefined, { refetchOnMountOrArgChange: true })

  if (isLoading || true) {
    return <LoadingIcon/>
  }

  return (
    <>
      {data?.map((show) => {
          return (
            <Show show={show}/>
          )
        })
      }
    </>
  )
}
