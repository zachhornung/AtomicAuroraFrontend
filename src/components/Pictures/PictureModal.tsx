import Modal from "react-modal";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Picture } from "../../state/services/picturesApi";

Modal.setAppElement("#root"); // This is required for accessibility.

export type ImageModalProps = {
  isOpen: boolean,
  onRequestClose: () => void,
  picture?: Picture,
};

export const PictureModal = (props: ImageModalProps) => {
  const { isOpen, onRequestClose, picture } = props
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          display: "flex",
          justifyContent: 'center',
          alignItems: "center",
          zIndex: 1000,
        },
        content: {
          position: 'relative',
          zIndex: 1002,
        }
      }}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <motion.div
        className="p-4"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <img src={picture?.picture} alt={picture?.description} className="w-full h-48 object-cover" />
        <p className="text-gray-600 text-sm mt-2">{picture?.description}</p>
      </motion.div>
    </Modal>
  );
};
