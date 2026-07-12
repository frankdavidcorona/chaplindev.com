import Link from 'next/link';

import Particles from './particles';

export function Hero() {
  return (
    <header
      id='top'
      className='bg-grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'
    >
      <div
        aria-hidden='true'
        className='bg-accent/10 absolute top-1/3 left-1/2 h-[32rem] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl'
      />
      <Particles
        className='animate-fade-in absolute inset-0 text-zinc-100'
        quantity={80}
      />
      <div className='relative z-10 flex flex-col items-center px-6 text-center'>
        <p className='animate-fade-in text-accent font-mono text-xs font-semibold tracking-[0.3em] uppercase sm:text-sm'>
          Senior Engineering Leader · Founder
        </p>
        <div className='animate-fade-left my-8 hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block' />
        <h1 className='animate-title font-display cursor-default bg-gradient-to-b from-white via-white to-white/60 bg-clip-text py-2 text-4xl whitespace-nowrap text-transparent sm:text-6xl md:text-8xl'>
          Frank Corona
        </h1>
        <div className='animate-fade-right my-8 hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block' />
        <p className='animate-fade-in max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base'>
          Hi, my name is Frank Corona, Father, Husband & Computer Science
          Engineer, experienced in Finance, Medical, and HR industries.
          Committed to propelling digital innovation, building solutions at{' '}
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://synersib.com'
            className='text-zinc-300 underline underline-offset-4 duration-200 hover:text-white'
          >
            SynerSib
          </Link>{' '}
          and working on{' '}
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://strictlyzero.com'
            className='text-zinc-300 underline underline-offset-4 duration-200 hover:text-white'
          >
            Strictly
          </Link>
          . CEO & Founder of{' '}
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://synersib.com'
            className='text-zinc-300 underline underline-offset-4 duration-200 hover:text-white'
          >
            SynerSib Consulting SAS
          </Link>
          .
        </p>
        <div className='animate-fade-in mt-10 flex flex-wrap items-center justify-center gap-4'>
          <a
            href='#experience'
            className='bg-accent shadow-accent/40 hover:bg-accent/90 rounded-full px-6 py-2.5 text-sm font-semibold text-zinc-950 shadow-[0_0_24px] duration-200'
          >
            View experience
          </a>
          <a
            href='#contact'
            className='rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-semibold text-zinc-200 duration-200 hover:border-zinc-500 hover:text-white'
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
