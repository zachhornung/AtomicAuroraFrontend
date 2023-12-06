import { LoadingIcon } from "../../../shared/components/Loading"
import { useGetAllProductsQuery } from "../../../state/services/productsApi"

export const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined, { refetchOnMountOrArgChange: true })

  console.log("data: ", data)
  if (isLoading) {
    return <LoadingIcon />
  }
  return (
    <p>data: {JSON.stringify(data)}</p>
  )
}
