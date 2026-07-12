import Link from 'next/link';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

import { TrackedLink } from '../../components/tracked-link';
import { caseStudies, getCaseStudy } from '../../content/case-studies';

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map(caseStudy => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {};
  }

  const url = `/work/${caseStudy.slug}`;

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    alternates: { canonical: url },
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.summary,
      url,
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
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: caseStudy.title,
      description: caseStudy.summary,
      images: ['/og.png'],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main
      id='main'
      className='mx-auto min-h-screen max-w-4xl px-6 py-24 sm:py-32'
    >
      <Link
        href='/#work'
        className='text-sm text-zinc-400 duration-200 hover:text-zinc-100'
      >
        ← Back to selected work
      </Link>

      <article className='mt-12'>
        <p className='text-accent font-mono text-xs font-semibold tracking-[0.2em] uppercase'>
          {caseStudy.eyebrow}
        </p>
        <h1 className='font-display mt-4 text-4xl text-zinc-100 sm:text-6xl'>
          {caseStudy.title}
        </h1>
        <p className='mt-5 text-sm font-semibold tracking-wide text-zinc-300'>
          {caseStudy.organization}
        </p>
        <p className='mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl'>
          {caseStudy.summary}
        </p>

        <div className='mt-16 space-y-14'>
          <section aria-labelledby='challenge-heading'>
            <h2
              id='challenge-heading'
              className='font-display text-2xl text-zinc-100'
            >
              Challenge
            </h2>
            <p className='mt-4 leading-relaxed text-zinc-400'>
              {caseStudy.challenge}
            </p>
          </section>

          <section aria-labelledby='constraints-heading'>
            <h2
              id='constraints-heading'
              className='font-display text-2xl text-zinc-100'
            >
              Constraints
            </h2>
            <ul className='mt-4 list-disc space-y-3 pl-5 text-zinc-400 marker:text-zinc-600'>
              {caseStudy.constraints.map(constraint => (
                <li key={constraint} className='pl-2 leading-relaxed'>
                  {constraint}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby='approach-heading'>
            <h2
              id='approach-heading'
              className='font-display text-2xl text-zinc-100'
            >
              Approach
            </h2>
            <ol className='mt-4 list-decimal space-y-3 pl-5 text-zinc-400 marker:text-zinc-600'>
              {caseStudy.approach.map(step => (
                <li key={step} className='pl-2 leading-relaxed'>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby='outcome-heading'>
            <h2
              id='outcome-heading'
              className='font-display text-2xl text-zinc-100'
            >
              Outcome
            </h2>
            <p className='mt-4 leading-relaxed text-zinc-400'>
              {caseStudy.outcome}
            </p>
          </section>

          <section aria-labelledby='role-heading'>
            <h2
              id='role-heading'
              className='font-display text-2xl text-zinc-100'
            >
              My role
            </h2>
            <p className='mt-4 leading-relaxed text-zinc-400'>
              {caseStudy.role}
            </p>
          </section>
        </div>

        <aside className='mt-16 border-l border-zinc-700 pl-5 text-sm text-zinc-500 italic'>
          {caseStudy.disclosureNote}
        </aside>

        <TrackedLink
          href='/#contact'
          eventName='Portfolio CTA'
          eventProperties={{
            location: 'case-study',
            intent: 'platform-inquiry',
          }}
          className='bg-accent shadow-accent/40 hover:bg-accent/90 mt-12 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold text-zinc-950 shadow-[0_0_24px] duration-200'
        >
          Discuss a platform challenge
        </TrackedLink>
      </article>
    </main>
  );
}
