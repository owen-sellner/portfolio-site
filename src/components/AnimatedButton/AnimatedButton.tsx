import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/components/AnimatedButton/AnimatedButton.module.scss"

interface AnimatedButtonProps {
    text: string;
    href: string;
    target?: string;
}

const topAnimationVariants = {
    initial: { y: 0 },
    hover: { y: "-100%" },
};

const bottomAnimationVariants = {
    initial: { y: "100%" },
    hover: { y: 0 },
};

export default function AnimatedButton({ text, href, target }: AnimatedButtonProps) {
    return (
        <motion.div
            style={{ position: "relative" }} 
            initial="initial"
            whileHover="hover"
        >
            <Link href={href} target={target} style={{ position: "relative", display: "block", width: text.length * 8 + 12, height: "1.5rem", overflow: "hidden" }}>
                <motion.span
                    className={styles.wrapper}
                    transition={{ y: { type: "linear", bounce: 0 }}}
                    variants={topAnimationVariants}
                >
                    {text}
                </motion.span>
                <motion.span
                    className={styles.wrapper}
                    style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}     
                    transition={{ y: { type: "linear", bounce: 0 }}}              
                    variants={bottomAnimationVariants}
                >
                    {text}
                </motion.span>
            </Link>
        </motion.div>
    );
}
