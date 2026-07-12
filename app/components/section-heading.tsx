type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className='max-w-2xl'>
      <p className='text-accent font-mono text-xs font-semibold tracking-[0.2em] uppercase'>
        {eyebrow}
      </p>
      <h2
        id={id}
        className='font-display mt-3 text-3xl text-zinc-100 sm:text-5xl'
      >
        {title}
      </h2>
      <div
        aria-hidden='true'
        className='from-accent/60 via-accent/20 mt-4 h-px w-24 bg-gradient-to-r to-transparent'
      />
      {subtitle && <p className='mt-4 text-zinc-400'>{subtitle}</p>}
    </div>
  );
}
