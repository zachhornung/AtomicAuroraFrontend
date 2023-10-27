import { AnimatePresence, motion } from "framer-motion"; // Import motion from framer-motion
import { Picture } from "../../state/services/picturesApi";

export type PictureModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  picture?: Picture;
};

export const PictureModal = (props: PictureModalProps) => {
  const { isOpen, onRequestClose, picture } = props;
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
              <p className="text-white text-sm mt-2">
                {picture?.description}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
// return (
//   <AnimatePresence>
//     <motion.div
//       className="min-h-full min-w-full p-4 border-2 border-primary"
//       variants={modalVariants}
//       initial="hidden"
//       animate="visible"
//       exit="hidden"
//     >
//       <img
//         src={picture?.picture}
//         alt={picture?.description}
//         className="w-full h-full object-cover"
//       />
//       <p className="text-gray-600 text-sm mt-2">{picture?.description}</p>
//     </motion.div>
//   </AnimatePresence>
// );
// };
