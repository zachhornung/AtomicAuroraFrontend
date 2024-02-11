import { AnimatePresence, motion } from "framer-motion"; // Import motion from framer-motion
import { ReactNode } from "react";

export interface AnimatedModalProps {
  isOpen: boolean
  onRequestClose: () => void
  children?: ReactNode | ReactNode[]
}

export const AnimatedModal = (props: AnimatedModalProps) => {
  const { isOpen, onRequestClose, children } = props;
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
          <div
            className="bg-black bg-opacity-75 w-full h-full absolute top-0 left-0"
            onClick={onRequestClose}
          />
          <motion.div
            className="flex justify-center items-center p-4 bg-black shadow-lg rounded-lg z-10 max-h-full"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
