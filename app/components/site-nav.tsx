'use client';
import { useEffect, useRef, useState } from 'react';

import { TrackedLink } from './tracked-link';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Testimonials', href: '#testimonials' },
];

export function SiteNav() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setAtTop(entry.isIntersecting)
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden='true'
        className='absolute inset-x-0 top-0 h-16'
      />
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b duration-200 ${
          atTop
            ? 'border-transparent bg-transparent'
            : 'border-zinc-800 bg-zinc-950/70 backdrop-blur'
        }`}
      >
        <nav
          aria-label='Primary'
          className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'
        >
          <a
            href='#top'
            className='font-display text-lg text-zinc-100 duration-200 hover:text-white'
          >
            Frank Corona
          </a>
          <div className='flex items-center gap-6'>
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className='hidden text-sm text-zinc-400 duration-200 hover:text-zinc-100 sm:block'
              >
                {link.name}
              </a>
            ))}
            <TrackedLink
              href='#contact'
              eventName='Portfolio CTA'
              eventProperties={{
                location: 'navigation',
                intent: 'platform-inquiry',
              }}
              className='border-accent-muted text-accent hover:border-accent rounded-full border px-4 py-1.5 text-sm font-semibold duration-200'
            >
              Discuss a platform challenge
            </TrackedLink>
          </div>
        </nav>
      </div>
    </>
  );
}
