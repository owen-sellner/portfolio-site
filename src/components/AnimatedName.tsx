import { motion } from "motion/react";

interface AnimatedNameProps {
  name: String
}

const defaultAnimations = {
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

export default function AnimatedName({ name } : AnimatedNameProps) {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.04 }}
      >
        {name.split("").map((value, index) =>
          <motion.span key={index} style={{ display: "inline-block" }} variants={defaultAnimations}>
            <h1 style={{ fontSize: "140px", letterSpacing: "-3.36px" }}>
              {value != " " ? value : "\u00A0"}
            </h1>
          </motion.span>
        )}
      </motion.span>
    </div>
  );
};