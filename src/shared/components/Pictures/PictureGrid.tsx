import { useState } from "react";
import { Picture } from "../../state/services/picturesApi";
import { motion } from "framer-motion";
import { PictureModal } from "./PictureModal";

export type PictureGridProps = {
  pictures: Picture[];
};

export const PictureGrid = (props: PictureGridProps) => {
  const { pictures } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState<Picture | undefined>();

  const handlePictureClick = (picture: Picture) => {
    setSelectedPicture(picture);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const pictureVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };
// grid grid-cols-2 gap-4 border-2 border-blue-500 md:grid-cols-3 lg:grid-cols-4
  return (
    <div className="flex flex-wrap justify-center items-center">
      {pictures.map((picture) => {
        return (
          <motion.div
            className="relative w-1/2 hover:cursor-pointer group"
            whileHover="hover"
            variants={pictureVariants}
          >
            <img
              key={`picture-${picture.id}`}
              src={picture.picture}
              alt={picture.description}
              className="object-cover relative z-10 p-2 w-full h-full rounded-2xl max-h-64"
              onClick={() => handlePictureClick(picture)}
            />
            <div
              className="absolute top-0 left-0 w-full h-full ring-opacity-50 shadow-2xl ring-nebulaPink"
              // style={{ overflow: "hidden" }}
            />
          </motion.div>
        );
      })}
      <PictureModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        picture={selectedPicture}
      />
    </div>
  );
};
