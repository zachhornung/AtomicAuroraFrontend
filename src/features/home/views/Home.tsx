import { toast } from "react-toastify"
import { BasePage } from "../../../shared/components/BasePage"

export const Home = () => {
  return (
    <BasePage>
      <button onClick={() => toast("hello")}>click me</button>
    </BasePage>
  )
}
