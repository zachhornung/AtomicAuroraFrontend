import { ShowCard } from "../../../shared/components/Cards/Card";
import { ShowType } from "../../../state/services/showsApi";

type ShowProps = {
  show: ShowType;
};

export const Show = (props: ShowProps) => {
  const { show } = props;

  return <ShowCard show={show}/>
};
