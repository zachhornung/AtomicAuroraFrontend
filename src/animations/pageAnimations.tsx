import { motion } from "framer-motion";
import { ReactNode } from "react";


type BasePageAnimationProps = {
  children: ReactNode | ReactNode[];
}

export const BasePageAnimation = (props: BasePageAnimationProps) => {
  const { children } = props
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
