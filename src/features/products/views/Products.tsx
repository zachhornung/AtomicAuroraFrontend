import { BasePage } from "../../../shared/components/BasePage"
import { Products } from "../components/Products"

export const ProductsView = () => {
  return (
    <BasePage>
      <p>Products Page</p>
      <Products />
    </BasePage>
  )
}
