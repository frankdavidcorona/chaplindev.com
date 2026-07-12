const trustees = [
  { name: 'SAM Systems', href: 'https://samsystems.io' },
  { name: 'Strictly', href: 'https://strictlyzero.com' },
  { name: 'Primavera', href: 'https://primavera.care/' },
  { name: 'agile dream team', href: 'https://agiledreamteam.com/' },
  { name: 'RefineAI', href: 'https://refineai.squarespace.com/' },
];

export function TrustedBy() {
  return (
    <section aria-label='Trusted by' className='mx-auto max-w-6xl px-6 py-16'>
      <p className='text-center font-mono text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase'>
        Trusted by
      </p>
      <ul className='mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
        {trustees.map(trustee => (
          <li key={trustee.name}>
            <a
              href={trustee.href}
              target='_blank'
              rel='noopener noreferrer'
              className='font-display text-lg text-zinc-500 duration-200 hover:text-zinc-200 sm:text-xl'
            >
              {trustee.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
