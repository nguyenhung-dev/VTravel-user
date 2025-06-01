'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollBannerEffect({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, window.innerHeight], [1, 0]);
  const translateY = useTransform(scrollY, [0, window.innerHeight], [0, -100]);

  return (
    <motion.div
      style={{
        opacity,
        translateY,
        position: 'fixed',
        width: '100%',
        height: '100vh',
        zIndex: 9
      }}
    >
      {children}
    </motion.div>
  );
}
