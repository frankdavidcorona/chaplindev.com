import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';

// https://vercel.com/docs/concepts/analytics/quickstart
import { Analytics } from '@vercel/analytics/react';

import '../global.css';
import { ThemeToggle } from './components/theme-toggle';

const description =
  'Payment-platform engineering leader helping teams harden production systems, untangle high-risk architecture, and deliver certification-critical work. Founder of SynerSib Consulting SAS.';

export const metadata: Metadata = {
  metadataBase: new URL('https://chaplindev.com'),
  title: {
    default: 'Frank Corona — Payment Platform Engineering Leader',
    template: '%s | chaplindev.com',
  },
  description,
  openGraph: {
    title: 'Frank Corona — Payment Platform Engineering Leader',
    description,
    url: 'https://chaplindev.com',
    siteName: 'chaplindev.com',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Frank Corona — Payment Platform Engineering Leader',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Frank Corona — Payment Platform Engineering Leader',
    description,
    card: 'summary_large_image',
    images: ['/og.png'],
  },
  icons: {
    shortcut: '/favicon.png',
  },
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

// runs before first paint: stored theme wins, otherwise follow the device
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={[inter.variable, calSans.variable].join(' ')}
      // the theme init script sets data-theme before hydration
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`bg-zinc-950 antialiased ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
        }`}
      >
        <noscript>
          {/* scroll-reveal wrappers server-render hidden; show them without JS */}
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a
          href='#main'
          className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-zinc-100 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950'
        >
          Skip to content
        </a>
        {children}
        <ThemeToggle />
        <Analytics />
      </body>
    </html>
  );
}
