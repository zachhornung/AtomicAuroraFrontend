import { ShowType } from "../../state/services/showsApi";
import { PictureGrid } from "../Pictures/PictureGrid";

type ShowProps = {
  show: ShowType;
};

export const Show = (props: ShowProps) => {
  const { show } = props;

  return (
    <div className="shadow-inner rounded-lg overflow-x-clip">
      
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{show.name}</h2>
        <p className="text-sm mb-2">{show.description}</p>
        <p className="text-sm">{show.show_date}</p>
        {show.pictures?.length
          ? <PictureGrid pictures={show.pictures} />
          : null}
      </div>
    </div>
  );
};
