import { Card } from './card';
import { SectionHeading } from './section-heading';
import { TrackedLink } from './tracked-link';
import { caseStudies } from '../content/case-studies';

export function SelectedWork() {
  return (
    <section
      id='work'
      aria-labelledby='work-heading'
      className='mx-auto max-w-6xl px-6 py-24'
    >
      <SectionHeading
        id='work-heading'
        eyebrow='Selected work'
        title='How I reduce platform risk'
        subtitle='Redacted examples of architecture and delivery decisions in payment systems.'
      />

      <div className='mt-10 grid gap-6'>
        {caseStudies.map(caseStudy => (
          <Card key={caseStudy.slug}>
            <article className='relative z-20 flex h-full flex-col gap-4 p-6 sm:p-8'>
              <p className='text-accent font-mono text-xs font-semibold tracking-[0.2em] uppercase'>
                {caseStudy.eyebrow}
              </p>
              <h3 className='font-display text-2xl text-zinc-100 sm:text-3xl'>
                {caseStudy.title}
              </h3>
              <p className='max-w-3xl leading-relaxed text-zinc-400'>
                {caseStudy.summary}
              </p>
              <p className='text-sm leading-relaxed text-zinc-400'>
                <span className='font-semibold text-zinc-200'>My role:</span>{' '}
                {caseStudy.role}
              </p>
              <p className='text-sm text-zinc-500 italic'>
                {caseStudy.disclosureNote}
              </p>
              <TrackedLink
                href={`/work/${caseStudy.slug}`}
                eventName='Case Study CTA'
                eventProperties={{ slug: caseStudy.slug }}
                aria-label={`Read case study: ${caseStudy.title}`}
                className='text-accent hover:text-accent/80 mt-2 w-fit text-sm font-semibold underline underline-offset-4 duration-200'
              >
                Read case study
              </TrackedLink>
            </article>
          </Card>
        ))}
      </div>
    </section>
  );
}
