import { motion } from "framer-motion";

export const LoadingIcon = () => {
  return (
    <div className="aurora">
      <motion.circle/>
      <div className="beam beam1"></div>
      <div className="beam beam2"></div>
      <div className="beam beam3"></div>
      <div className="beam beam4"></div>
    </div>
  );
};
