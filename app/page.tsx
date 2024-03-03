import Link from 'next/link';
import React from 'react';
import Particles from './components/particles';

const navigation = [
  { name: 'Experience', href: '/experience' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
  { name: 'Buy Me a Book!', href: 'https://bmc.link/chaplindev' },
];

const trustees = [
  { name: 'SAM Systems', href: 'https://samsystems.io' },
  { name: 'Strictly', href: 'https://strictlyzero.com' },
  { name: 'Primavera', href: 'https://primavera.care/' },
  { name: 'agile dream team', href: 'https://agiledreamteam.com/' },
  { name: 'RefineAI', href: 'https://refineai.squarespace.com/' },
];

export default function Home() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
      <nav className='my-16 animate-fade-in'>
        <ul className='flex items-center justify-center gap-4'>
          {navigation.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm text-zinc-500 duration-500 hover:text-zinc-300'
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className='animate-glow hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block' />
      <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={100}
      />
      <h1 className='text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text font-display text-4xl text-transparent duration-500 sm:text-6xl md:text-9xl '>
        chaplindev
      </h1>

      <div className='animate-glow hidden h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block' />
      <div className='my-16 max-w-4xl animate-fade-in text-center'>
        <h2 className='px-6 text-sm text-zinc-500'>
          Hi, my name is Frank Corona, Father, Husband & Computer Science
          Engineer, experienced in Finance, Medical, and HR industries.
          Committed to propelling digital innovation, building solutions at{' '}
          <Link
            target='_blank'
            href='https://synersib.com'
            className='underline duration-500 hover:text-zinc-300'
          >
            SynerSib
          </Link>
          <br />
          and working on{' '}
          <Link
            target='_blank'
            href='https://strictlyzero.com'
            className='underline duration-500 hover:text-zinc-300'
          >
            Strictly
          </Link>{' '}
          <br />
          <br />
          CEO & Founder of{' '}
          <Link
            target='_blank'
            href='https://synersib.com'
            className='underline duration-500 hover:text-zinc-300'
          >
            SynerSib Consulting SAS
          </Link>{' '}
        </h2>
      </div>

      {/* ✅ Work on this feature */}
      {/* <div className="hover:rounded-xl py-3 px-4 mb-12 font-extrabold text-slate-800 bg-zinc-200 rounded hover:cursor-pointer duration-500 animate-fade-in">
        Download Resume
      </div> */}

      {/* Trustees */}
      <footer className='flex w-full animate-fade-in flex-col justify-center gap-1 px-6 text-center align-middle duration-500 md:flex-row md:gap-6'>
        <div className='text-sm  font-extrabold text-zinc-50 md:text-xl'>
          Trusted By
        </div>
        {trustees.map(item => (
          <Link key={item.name} href={item.href} target='_blank'>
            <span className='text-sm font-extrabold text-zinc-500 hover:text-zinc-300 hover:duration-500 md:text-xl'>
              {item.name}
            </span>
          </Link>
        ))}
      </footer>
    </div>
  );
}
