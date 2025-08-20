'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';


interface FadeInProps {
  children: ReactNode; // Accept any children
  duration?: number; // Optional custom duration
  yOffset?: number; // Optional custom vertical offset
  ease?: string; // Optional custom easing
  className?: string; // Optional className to pass custom styles
  [key: string]: any; // This allows any additional props
}

function FadeIn ({ children, duration = 1, yOffset = 50, ease = 'easeOut', className = '', ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}  // Start off-screen, invisible and moved down
      whileInView={{ opacity: 1, y: 0 }}  // Animate to visible and original position
      viewport={{ once: true, amount: 0.1 }}  // Trigger animation when 10% of the element is in view
      transition={{ duration: duration, ease: 'easeOut' }}  // Control the speed and easing
      className="tracking-tight"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
