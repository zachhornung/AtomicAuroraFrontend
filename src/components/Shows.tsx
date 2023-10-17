import { useGetAllShowsQuery } from "../state/store"


export const Shows = () => {

  const { data, isLoading } = useGetAllShowsQuery()
  console.log("data: ", data)
  return (
    
  )
}
