"use client";

import dynamic from "next/dynamic";
import type { Variants } from "framer-motion";

// Lazy load motion components
const MotionDiv = dynamic(() => import("framer-motion").then(mod => ({ default: mod.motion.div })), {
  loading: () => <div />,
  ssr: false
});

const MotionSection = dynamic(() => import("framer-motion").then(mod => ({ default: mod.motion.section })), {
  loading: () => <section />,
  ssr: false
});

const MotionSpan = dynamic(() => import("framer-motion").then(mod => ({ default: mod.motion.span })), {
  loading: () => <span />,
  ssr: false
});

const MotionH1 = dynamic(() => import("framer-motion").then(mod => ({ default: mod.motion.h1 })), {
  loading: () => <h1 />,
  ssr: false
});

const MotionP = dynamic(() => import("framer-motion").then(mod => ({ default: mod.motion.p })), {
  loading: () => <p />,
  ssr: false
});

// Export optimized motion components
export { MotionDiv, MotionSection, MotionSpan, MotionH1, MotionP };

// Common animation variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleOnHover: Variants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};