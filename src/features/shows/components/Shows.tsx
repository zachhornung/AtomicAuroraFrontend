import { LoadingIcon } from "../../../shared/components/Loading"
import { useGetAllShowsQuery } from "../../../state/services/showsApi"
import { Show } from "./Show"



export const Shows = () => {

  const { data, isLoading } = useGetAllShowsQuery(undefined, { refetchOnMountOrArgChange: true })

  console.log("data: ", data)
  if (isLoading) {
    return <LoadingIcon/>
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full flex-grow">
      {data?.map((show) => {
          return (
            <Show show={show}/>
          )
        })
      }
    </div>
  )
}
