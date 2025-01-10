import { motion } from "motion/react";
import styles from "@/components/AnimatedSubtitles/AnimatedSubtitles.module.scss";

const animationVariants = {
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
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.75 }}
        className={styles.container}
      >
        <div style={{ overflow: "hidden" }}>
          <motion.p variants={animationVariants} className="subtitle">SOFTWARE DEVELOPER</motion.p>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.p variants={animationVariants} className="subtitle">PORTFOLIO 2025</motion.p>
        </div>  
      </motion.div>
  );
};