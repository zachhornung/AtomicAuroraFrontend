
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const SparkleEffect = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Animation sequence for the sparkle effect
    controls.start({
      opacity: [0, 1, 0], // Sparkle fades in, stays visible, and fades out
      scale: [0, 1.2, 1], // Sparkle starts small, grows bigger, and returns to normal size
      rotate: [0, 180, 360], // Sparkle rotates during the animation
      transition: { duration: 0.8, ease: 'easeInOut' },
    });
  }, [controls]);

  return (
    <motion.div
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'white', // Set your sparkle color
        position: 'absolute',
        zIndex: 1,
      }}
      animate={controls}
    />
  );
};
