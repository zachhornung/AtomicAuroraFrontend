import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Picture } from "../../../state/services/picturesApi";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { PictureModal } from "./PictureModal";

export interface PictureCarouselProps {
  pictures: Picture[];
}

export const PictureCarousel = (props: PictureCarouselProps) => {
  const { pictures } = props;
  const [currentPicture, setCurrentPicture] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePreviousPicture = () => {
    if (currentPicture > 0) {
      setCurrentPicture(currentPicture - 1);
    }
  };

  const handleNextPicture = () => {
    const nextPicture = currentPicture + 1;
    if (nextPicture <= pictures.length - 1) {
      setCurrentPicture(nextPicture);
    }
  };

  const handlePictureClick = () => {
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
    currentPictureHover: {
      scale: 1.025,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap flex-shrink-0 justify-center items-center">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={handlePreviousPicture}
          className="hover:cursor-pointer"
        />
        <motion.img
          className="object-cover flex-shrink-0 p-2 w-5/6 h-full rounded-2xl"
          src={pictures[currentPicture].picture}
          alt={pictures[currentPicture].description}
          onClick={handlePictureClick}
          variants={pictureVariants}
          whileHover="currentPictureHover"
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={handleNextPicture}
          className="hover:cursor-pointer"
        />
      </div>

      <div className="flex gap-4 justify-center w-full h-20">
        {pictures.map((picture, i) => (
          <motion.img
            src={picture.picture}
            className="object-scale-down w-16 h-16 hover:cursor-pointer"
            onClick={() => setCurrentPicture(i)}
            variants={pictureVariants}
            whileHover="hover"
          />
        ))}
      </div>
      <PictureModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        picture={pictures[currentPicture]}
      />
    </div>
  );
};
