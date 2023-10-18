import { ShowType } from "../../state/services/showsApi";
import { PictureGrid } from "../Pictures/PictureGrid";

type ShowCardProps = {
  show: ShowType;
};

export const ShowCard = (props: ShowCardProps) => {
  const { show } = props;

  return (
    <div className="w-full p-4 m-5 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {show.name}
      </h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        {show.description}
      </p>
      <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        {show.pictures?.length
          ? <PictureGrid pictures={show.pictures} />
          : null}
      </div>
    </div>
  );
};
