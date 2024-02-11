import { motion } from "framer-motion"; // Import motion from framer-motion
import { Picture } from "../../../state/services/picturesApi";
import { AnimatedModal, AnimatedModalProps } from "../AnimatedModal";

export interface PictureModalProps extends AnimatedModalProps {
  picture?: Picture;
}

export const PictureModal = (props: PictureModalProps) => {
  const { isOpen, onRequestClose, picture } = props;

  return (
    <AnimatedModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <motion.div className="">
        <img
          src={picture?.picture}
          alt={picture?.description}
          style={{
            maxWidth: "calc(2/3 * 100vw)",
            maxHeight: "calc(2/3 * 100vh)",
          }}
          className="rounded-lg"
        />
        <p className="mt-2 text-sm text-white">
          {picture?.description}
        </p>
      </motion.div>
    </AnimatedModal>
  );
};
