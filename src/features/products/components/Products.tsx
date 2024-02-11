import { LoadingIcon } from "../../../shared/components/Loading"
import { useGetAllProductsQuery } from "../state/services/productsApi"
import { Product } from "./Product"

export const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined, { refetchOnMountOrArgChange: true })

  console.log("data: ", data)
  if (isLoading) {
    return <LoadingIcon />
  }
  return (
    <div className="flex flex-row flex-wrap flex-grow items-center justify-center w-full h-full border-2 border-blue-500">
      {data?.map((product) => {
          return (
            <Product product={product}/>
          )
        })
      }
    </div>
  )
}
