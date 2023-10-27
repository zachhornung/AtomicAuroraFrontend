import { useState } from "react";
import { Picture } from "../../state/services/picturesApi";
import { motion } from "framer-motion";
import { PictureModal } from "./PictureModal";

export type PictureGridProps = {
  pictures: Picture[];
};

export const PictureGrid = (props: PictureGridProps) => {
  const { pictures } = props;

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPicture, setSelectedPicture] = useState<Picture | undefined>()
  
  const handlePictureClick = (picture: Picture) => {
    setSelectedPicture(picture)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const pictureVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      }
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pictures.map((picture) => {
        return (
          <motion.div 
            className="relative group hover:cursor-pointer"
            whileHover="hover"
            variants={pictureVariants}
          >
            <img
              key={`picture-${picture.id}`}
              src={picture.picture}
              alt={picture.description}
              className="relative z-10 w-full h-full p-2 object-cover rounded-2xl"
              onClick={() => handlePictureClick(picture)}
            />
            <div className="absolute top-0 left-0 w-full h-full ring-nebulaPink ring-opacity-50 shadow-2xl" style={{overflow: "hidden"}} />
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
