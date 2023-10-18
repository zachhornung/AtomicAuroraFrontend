import { ShowType } from "../../state/services/showsApi";
import { ShowCard } from "../Cards/Card";

type ShowProps = {
  show: ShowType;
};

export const Show = (props: ShowProps) => {
  const { show } = props;

  return <ShowCard show={show}/>
};
