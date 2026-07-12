'use client';
import { SunMoon } from 'lucide-react';
import { useEffect } from 'react';

const toggleTheme = () => {
  const root = document.documentElement;
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch {
    // private mode; the toggle still works for this visit
  }
};

export function ThemeToggle() {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'd' && event.key !== 'D') return;
      if (event.metaKey || event.ctrlKey || event.altKey || event.repeat)
        return;
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.isContentEditable ||
          ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
      ) {
        return;
      }

      toggleTheme();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-label='Toggle color theme'
      aria-keyshortcuts='D'
      title='Toggle color theme (D)'
      className='fixed right-4 bottom-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/80 text-zinc-300 shadow-lg backdrop-blur duration-200 hover:border-zinc-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-100'
    >
      <SunMoon aria-hidden='true' className='h-4 w-4' />
    </button>
  );
}
