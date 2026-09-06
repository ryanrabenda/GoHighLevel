"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Reduced-motion handling lives at the root via <MotionConfig
// reducedMotion="user"> in layout.tsx, not here — branching initial/
// whileInView on useReducedMotion() would cause a hydration mismatch,
// since the server can never know the client's OS media-query
// preference during the first render.
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
