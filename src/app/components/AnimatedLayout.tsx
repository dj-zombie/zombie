'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

const glitchVariants: Variants = {
  initial: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
  },
  enter: {
    clipPath: [
      'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      'polygon(13% 0, 100% 0, 87% 100%, 0% 100%)',
      'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    ],
    transition: {
      duration: 1,
      times: [0, 0.5, 1],
      ease: "easeInOut",
    },
  },
};

interface AnimatedLayoutProps {
  children: ReactNode;
}

export const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        className="relative"
      >
        {/* Glitch overlay */}
        <motion.div
          variants={glitchVariants}
          initial="initial"
          animate="enter"
          className="absolute inset-0 bg-black/20 pointer-events-none z-50"
        />
        
        {/* Content */}
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Animation presets for reuse across components
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const staggerChildren: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const glitchText: Variants = {
  initial: {
    textShadow: "0 0 0 rgba(255,0,0,0)",
  },
  animate: {
    textShadow: [
      "2px 2px 0 rgba(255,0,0,0.5), -2px -2px 0 rgba(0,255,0,0.5)",
      "-2px 2px 0 rgba(255,0,0,0.5), 2px -2px 0 rgba(0,255,0,0.5)",
      "2px -2px 0 rgba(255,0,0,0.5), -2px 2px 0 rgba(0,255,0,0.5)",
      "-2px -2px 0 rgba(255,0,0,0.5), 2px 2px 0 rgba(0,255,0,0.5)",
    ],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export const hoverScale: Variants = {
  initial: { scale: 1 },
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  whileTap: { scale: 0.95 }
};
