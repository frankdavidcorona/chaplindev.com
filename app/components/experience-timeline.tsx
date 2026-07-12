import Flag from 'react-flagkit';

import store from '@/store.json';
import { calculateDateDiff } from '@/util/dates';
import { SectionHeading } from './section-heading';

type Project = {
  id: number;
  company: string;
  description: string;
  url: string;
  role: string;
  startdate: string;
  enddate: string;
  companyCountry: string;
  active: boolean;
};

const countryNames: Record<string, string> = {
  US: 'United States',
  UY: 'Uruguay',
  CU: 'Cuba',
};

const formatMonth = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });

const pluralize = (count: number, unit: string): string =>
  `${count} ${unit}${count === 1 ? '' : 's'}`;

const getDuration = (project: Project): string => {
  const enddate = project.active ? new Date() : project.enddate;
  const { years, months } = calculateDateDiff(project.startdate, enddate);

  const result = [];
  years !== 0 && result.push(pluralize(years, 'year'));
  months !== 0 && result.push(pluralize(months, 'month'));
  return result.join(' and ');
};

export function ExperienceTimeline() {
  const projects = (store.projects.data as Project[])
    .slice()
    .sort((a, b) => b.startdate.localeCompare(a.startdate) || a.id - b.id);

  return (
    <section
      id='experience'
      aria-labelledby='experience-heading'
      className='mx-auto max-w-4xl px-6 py-24'
    >
      <SectionHeading
        id='experience-heading'
        eyebrow='Experience'
        title='Career timeline'
      />

      <ol className="before:from-accent/60 relative mt-16 before:absolute before:top-1 before:left-0 before:h-full before:w-px before:bg-gradient-to-b before:via-zinc-800 before:to-transparent before:content-['']">
        {projects.map(project => (
          <li
            key={project.id}
            className='relative pb-16 pl-8 last:pb-0 sm:pl-12'
          >
            <span
              aria-hidden='true'
              className='absolute top-1.5 -left-[5px] flex h-2.5 w-2.5'
            >
              {project.active && (
                <span className='animate-pulse-dot bg-accent absolute inline-flex h-full w-full rounded-full' />
              )}
              <span
                className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                  project.active
                    ? 'bg-accent shadow-accent/60 shadow-[0_0_12px]'
                    : 'bg-zinc-700'
                }`}
              />
            </span>

            <div className='flex flex-wrap items-center gap-x-3 gap-y-2'>
              <h3 className='font-display text-xl text-zinc-100 sm:text-2xl'>
                {project.role}
              </h3>
              {project.active && (
                <span className='border-accent-muted bg-accent/10 text-accent rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-widest uppercase'>
                  Active
                </span>
              )}
            </div>

            <div className='mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm'>
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-zinc-200 underline-offset-4 duration-200 hover:text-white hover:underline'
              >
                {project.company}
              </a>
              <span className='flex items-center gap-1.5 text-zinc-400'>
                <span aria-hidden='true' className='flex'>
                  <Flag country={project.companyCountry} size={14} />
                </span>
                {countryNames[project.companyCountry] ?? project.companyCountry}
              </span>
            </div>

            <p className='mt-2 font-mono text-xs text-zinc-400'>
              {formatMonth(project.startdate)} —{' '}
              {project.active ? 'Present' : formatMonth(project.enddate)} ·{' '}
              {getDuration(project)}
            </p>

            <p className='mt-4 text-sm leading-relaxed text-zinc-400'>
              {project.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
