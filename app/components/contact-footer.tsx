import { Mail } from 'lucide-react';

import { TrackedLink } from './tracked-link';

import type { SVGProps } from 'react';

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
    label: 'LinkedIn',
    handle: 'chaplindev',
    network: 'linkedin',
  },
  {
    icon: <Mail size={20} aria-hidden='true' />,
    href: 'mailto:frank.corona@pm.me',
    label: 'Email',
    handle: 'frank.corona@pm.me',
    network: 'email',
  },
  {
    icon: <GitHubIcon />,
    href: 'https://github.com/frankdavidcorona',
    label: 'GitHub',
    handle: 'frankdavidcorona',
    network: 'github',
  },
  {
    icon: <XIcon />,
    href: 'https://twitter.com/chaplindev',
    label: 'X (Twitter)',
    handle: '@chaplindev',
    network: 'x',
  },
];

const contactIntents = [
  {
    label: 'Architecture & risk review',
    copy: 'Payment architecture, production hardening, certification, or security-risk work.',
    subject: 'Payment platform architecture inquiry',
    intent: 'architecture-review',
    primary: true,
  },
  {
    label: 'Engineering leadership',
    copy: 'Senior engineering leadership, architecture governance, or delivery ownership.',
    subject: 'Engineering leadership opportunity',
    intent: 'engineering-leadership',
    primary: false,
  },
  {
    label: 'Founder collaboration',
    copy: 'Fintech product, partnership, or founder-to-founder collaboration.',
    subject: 'Founder collaboration',
    intent: 'founder-collaboration',
    primary: false,
  },
];

export function ContactSection() {
  return (
    <section
      id='contact'
      aria-labelledby='contact-heading'
      className='mx-auto max-w-4xl px-6 py-24 text-center'
    >
      <p className='text-accent font-mono text-xs font-semibold tracking-[0.2em] uppercase'>
        Contact
      </p>
      <h2
        id='contact-heading'
        className='font-display mt-3 text-4xl text-zinc-100 sm:text-6xl'
      >
        Choose the right conversation
      </h2>
      <p className='mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base'>
        Select a starting point and your email client will open with the right
        context.
      </p>
      <div className='mt-10 grid gap-4 text-left md:grid-cols-3'>
        {contactIntents.map(contactIntent => (
          <TrackedLink
            key={contactIntent.intent}
            href={`mailto:frank.corona@pm.me?subject=${encodeURIComponent(contactIntent.subject)}`}
            eventName='Contact Intent'
            eventProperties={{ intent: contactIntent.intent }}
            className={`rounded-2xl border p-6 duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 ${
              contactIntent.primary
                ? 'border-accent bg-accent/10 hover:bg-accent/15 focus-visible:outline-accent'
                : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-900/70 focus-visible:outline-zinc-400'
            }`}
          >
            <span className='block text-base font-semibold text-zinc-100'>
              {contactIntent.label}
            </span>
            <span className='mt-3 block text-sm leading-relaxed text-zinc-400'>
              {contactIntent.copy}
            </span>
          </TrackedLink>
        ))}
      </div>
      <ul className='mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4'>
        {socials.map(social => (
          <li key={social.href}>
            <TrackedLink
              href={social.href}
              eventName='Outbound Profile'
              eventProperties={{ network: social.network }}
              target={social.network === 'email' ? undefined : '_blank'}
              rel={
                social.network === 'email' ? undefined : 'noopener noreferrer'
              }
              title={social.label}
              className='flex items-center gap-2 text-sm text-zinc-400 duration-200 hover:text-zinc-100'
            >
              {social.icon}
              <span className='font-mono'>{social.handle}</span>
            </TrackedLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className='border-t border-zinc-900 py-8'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-xs text-zinc-400 sm:flex-row'>
        <p>© {new Date().getFullYear()} Frank Corona · chaplindev</p>
        <p>
          Press{' '}
          <kbd className='rounded border border-zinc-800 px-1.5 py-0.5 font-mono'>
            d
          </kbd>{' '}
          to switch theme
        </p>
        <a
          href='https://bmc.link/chaplindev'
          target='_blank'
          rel='noopener noreferrer'
          className='duration-200 hover:text-zinc-100'
        >
          Buy Me a Book!
        </a>
      </div>
    </footer>
  );
}
