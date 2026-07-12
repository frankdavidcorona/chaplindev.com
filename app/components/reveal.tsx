'use client';
import { motion, useReducedMotion } from 'motion/react';

import type { PropsWithChildren } from 'react';

type RevealProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      data-reveal=''
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
