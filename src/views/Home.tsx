import { BasePage } from "../components/BasePage"
import { Shows } from "../components/Shows/Shows"

export const Home = () => {
  return (
    <BasePage>
      <p>welcome to atomic aurora</p>
      <Shows />
    </BasePage>
  )
}
