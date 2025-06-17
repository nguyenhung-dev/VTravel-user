"use client";
import { motion, Variants } from 'framer-motion';

type TProps = {
  children?: React.ReactNode;
  className?: string;
  animation?: string
}

const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  },
  fadeInBottomToTop: {
    hidden: { opacity: 0, y: 70 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  },
  fadeInTopToBottom: {
    hidden: { opacity: 0, y: -70 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  },
  fadeInLeftToRight: {
    hidden: { opacity: 0, x: -70 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  },
  fadeInRightToLeft: {
    hidden: { opacity: 0, x: 70 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  },
};

export default function MotionFade({ children, className, animation = "fadeIn" }: TProps) {
  const variants = animationVariants[animation];

  if (!variants) {
    console.warn(`Animation "${animation}" not found.`);
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className={className ?? ""}
    >
      {children}
    </motion.div>
  )
}
