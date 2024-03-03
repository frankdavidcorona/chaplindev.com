'use client';
import { Github, Mail, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: 'https://www.linkedin.com/in/chaplindev/',
    label: 'Linkedin',
    handle: 'chaplindev',
  },
  {
    icon: <Mail size={20} />,
    href: 'mailto:chaplindev@pm.me',
    label: 'Email',
    handle: 'chaplindev@pm.me',
  },
  {
    icon: <Github size={20} />,
    href: 'https://github.com/frankdavidcorona',
    label: 'Github',
    handle: 'frankdavidcorona',
  },
  {
    icon: <Twitter size={20} />,
    href: 'https://twitter.com/chaplindev',
    label: 'Twitter',
    handle: '@chaplindev',
  },
];

export default function Example() {
  return (
    <div className=' bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0'>
      <Navigation />
      <div className='container mx-auto flex min-h-screen items-center justify-center px-4'>
        <div className='mx-auto mt-32 grid w-full grid-cols-1 gap-8 sm:mt-0 sm:grid-cols-4 lg:gap-8'>
          {socials.map(s => (
            <Card key={s.href}>
              <Link
                href={s.href}
                target='_blank'
                className='group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-16  md:py-24  lg:pb-48'
              >
                <span
                  className='absolute h-2/3 w-px bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent'
                  aria-hidden='true'
                />
                <span className='drop-shadow-orange relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-500 bg-zinc-900 text-sm text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white'>
                  {s.icon}
                </span>{' '}
                <div className='z-10 flex flex-col items-center'>
                  <span className='font-display text-xl font-medium text-zinc-200 duration-150 group-hover:text-white lg:text-2xl'>
                    {s.handle}
                  </span>
                  <span className='mt-4 text-center text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200'>
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
