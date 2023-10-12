import { ShowType } from "../../state/services/showsApi"

type ShowProps = {
  show: ShowType
}

export const Show = (props: ShowProps) => {

  const { show } = props

  return (
    <div className="container">
      <div>{show.name}</div>
      <div>{show.description}</div>
      <div>{show.show_date}</div>
    </div>
  )
}
