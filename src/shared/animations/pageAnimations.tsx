import { motion } from "framer-motion";
import { ReactNode } from "react";

type BasePageAnimationProps = {
  children: ReactNode | ReactNode[];
};

export const BasePageAnimation = (props: BasePageAnimationProps) => {
  const { children } = props;
  return (
    <motion.div
      initial={{ opacity: 0, backgroundColor: "#0af" }}
      animate={{ opacity: 1, backgroundColor: "#fa0", transition: { duration: 1 } }}
      exit={{ opacity: 0, backgroundColor: "#0af" }}
      className="h-screen w-screen bg-red-50"
      style={{backgroundColor: "#0af"}}
    >
      {children}
    </motion.div>
  );
};
