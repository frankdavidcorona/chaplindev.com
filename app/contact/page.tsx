'use client';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import type { SVGProps } from 'react';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';

function BrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden='true'
      fill='currentColor'
      viewBox='0 0 24 24'
      {...props}
    />
  );
}

function LinkedInIcon() {
  return (
    <BrandIcon className='h-5 w-5'>
      <path d='M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47Z' />
    </BrandIcon>
  );
}

function GitHubIcon() {
  return (
    <BrandIcon className='h-5 w-5'>
      <path d='M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0C17.03 4.99 18 5.3 18 5.3c.63 1.59.23 2.76.12 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z' />
    </BrandIcon>
  );
}

function XIcon() {
  return (
    <BrandIcon className='h-5 w-5'>
      <path d='M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.25-8.29L2.97 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.73L8.43 4.05H6.58L17.8 19.84Z' />
    </BrandIcon>
  );
}

const socials = [
  {
    icon: <LinkedInIcon />,
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
    icon: <GitHubIcon />,
    href: 'https://github.com/frankdavidcorona',
    label: 'Github',
    handle: 'frankdavidcorona',
  },
  {
    icon: <XIcon />,
    href: 'https://twitter.com/chaplindev',
    label: 'Twitter',
    handle: '@chaplindev',
  },
];

export default function Example() {
  return (
    <div className='bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0'>
      <Navigation />
      <div className='container mx-auto flex min-h-screen items-center justify-center px-4'>
        <div className='mx-auto mt-32 grid w-full grid-cols-1 gap-8 sm:mt-0 sm:grid-cols-4 lg:gap-8'>
          {socials.map(s => (
            <Card key={s.href}>
              <Link
                href={s.href}
                target='_blank'
                className='group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-16 md:py-24 lg:pb-48'
              >
                <span
                  className='absolute h-2/3 w-px bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent'
                  aria-hidden='true'
                />
                <span className='relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-500 bg-zinc-900 text-sm text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white'>
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
