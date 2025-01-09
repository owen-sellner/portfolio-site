import { motion } from "motion/react";

const defaultAnimations = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.4,
    },
  }
}

export default function AnimatedSubtitles() {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.75 }}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <motion.p variants={defaultAnimations} className='text-temp'>SOFTWARE DEVELOPER</motion.p>
        <motion.p variants={defaultAnimations} className='text-temp'>PORTFOLIO 2025</motion.p>
      </motion.div>
    </div>
  );
};