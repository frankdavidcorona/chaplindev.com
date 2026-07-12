'use client';
import { motion, useMotionTemplate, useSpring } from 'motion/react';

import type { MouseEvent, PropsWithChildren } from 'react';

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className='group hover:border-accent/40 relative overflow-hidden rounded-xl border border-zinc-600 duration-700 hover:bg-zinc-800/10 md:gap-8'
    >
      <div className='pointer-events-none'>
        <div className='absolute inset-0 z-0 [mask-image:linear-gradient(black,transparent)] transition duration-1000' />
        <motion.div
          className='absolute inset-0 z-10 bg-gradient-to-br via-zinc-100/10 opacity-100 transition duration-1000 group-hover:opacity-50'
          style={style}
        />
        <motion.div
          className='absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100'
          style={style}
        />
      </div>

      {children}
    </div>
  );
};
