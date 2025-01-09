import { motion } from "motion/react";

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
          <h1 className="name">{letter}</h1>
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
        style={{ overflow: "hidden" }}
        className="container-temp"
      >
          <SplitName name="OWEN"/>
          <h1 className="name space-temp">&nbsp;</h1>
          <SplitName name="SELLNER"/>
      </motion.div>
  );
};