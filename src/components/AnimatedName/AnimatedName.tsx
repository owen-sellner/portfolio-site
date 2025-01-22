import { motion } from "motion/react";
import styles from "@/components/AnimatedName/AnimatedName.module.scss";

const animationVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.4,
    },
  }
}

function SplitName({ name } : { name : string}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {name.split("").map((letter, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block" }}
          variants={animationVariants}
        >
          <h1 className={styles.text}>{letter}</h1>
        </motion.span>
      ))}
    </div>
  )
}

export default function AnimatedName() {
  return (
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.06 }}
        style={{ overflow: "hidden", padding: "4px" }}
        className={styles.container}
      >
          <SplitName name="OWEN"/>
          <h1 className={`${styles.text} ${styles.space}`}>&nbsp;</h1>
          <SplitName name="SELLNER"/>
      </motion.div>
  );
};