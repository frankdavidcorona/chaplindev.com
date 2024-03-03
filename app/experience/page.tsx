import Link from 'next/link';
import React from 'react';

import { get } from '@vercel/edge-config';
import { MapPin, User, Clock, Calendar } from 'lucide-react';
import Flag from 'react-flagkit';

import { calculateDateDiff } from '@/util/dates';
import { Card } from '../components/card';
import { Navigation } from '../components/nav';

type Project = {
  id: number;
  company: string;
  description: string;
  url: string;
  location: string;
  type: string;
  role: string;
  startdate: string;
  enddate: string;
  country: string;
  companyCountry: string;
  active: boolean;
};

type Response = {
  data: Project[];
};

export const revalidate = 60;
export default async function ExperiencePage() {
  const { data: projects } = (await get('projects')) as Response;

  const getDuration = (project: Project): string => {
    const enddate = project.active ? new Date() : project.enddate;
    const { years, months } = calculateDateDiff(project.startdate, enddate);

    const result = [];
    years !== 0 && result.push(`${years} years`);
    months !== 0 && result.push(`${Math.abs(months)} months`);
    return result.join(' and ');
  };

  return (
    <div className='relative pb-16'>
      <Navigation />
      <div className='mx-auto max-w-7xl px-6 pt-16 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>
            Professional Summary
          </h2>
          <p className='mt-4 text-zinc-400'>
            Demonstrating a Track Record of Excellence in Software Engineering
            and Agile Project Management
          </p>
        </div>

        <article className='mx-auto my-6 flex max-w-7xl flex-col gap-3 text-sm leading-relaxed text-zinc-400 md:my-0'>
          <p>
            With over a decade of experience spearheading innovative software
            development projects, I am a forward-thinking Senior Software
            Engineer known for my ability to bridge the gap between complex
            technical requirements and non-technical stakeholders. Specializing
            in full-stack web development with proficiency in TypeScript,
            NodeJS, MongoDB, SQL, Angular and React, I bring a meticulous and
            results- driven approach to every project. My leadership extends to
            forming and guiding high-performing development teams, ensuring
            project delivery within stringent timelines without compromising
            quality.
          </p>
          <h1 className='font-medium underline underline-offset-4'>
            Core Competencies:
          </h1>
          <ul className='mx-4 mt-2 list-disc'>
            <li>
              <b>Technical Leadership:</b> Proven track record in leading and
              mentoring cohesive teams for enterprise-wide development projects,
              ensuring a collaborative and productive work environment.
            </li>
            <li>
              <b>Full-Stack Development:</b> Expertise in leveraging a
              comprehensive stack including TypeScript, NodeJS, MongoDB, SQL,
              Angular and React to deliver robust and scalable web solutions.
            </li>
            <li>
              <b>Strategic Problem-Solving:</b> Ability to analyze development
              requirements, crafting innovative solutions that enhance
              operational efficiency and user experience.
            </li>
            <li>
              <b>Quality Assurance & Detail Orientation:</b>
              Commitment to excellence with a meticulous approach to testing and
              optimization, ensuring software reliability and performance.
            </li>
            <li>
              <b>Time Management & Efficiency:</b> Dynamic and adaptable,
              consistently meeting tight deadlines in fast-paced environments
              through strategic planning and priority management.
            </li>
          </ul>

          <p>
            I am eager to bring my blend of technical expertise, leadership
            acumen, and strategic problem-solving to a forward-looking company
            where collaboration and innovation drive success.
          </p>
        </article>

        <div className='mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {projects.map(project => (
            <Card key={project.id}>
              <Link href={project.url} target='_blank' as={project.url}>
                <article className='flex h-full w-full flex-col justify-between p-4 md:p-8'>
                  {/* Container */}
                  <div className=''>
                    {/* Header */}
                    <div className='flex items-center justify-between gap-2'>
                      <div className='text-xs text-zinc-100'>
                        <div className='flex flex-row gap-2 uppercase'>
                          Company from{' '}
                          <Flag
                            country={project.companyCountry}
                            className='w-4'
                          />
                        </div>
                      </div>
                      {project.active ? (
                        <div className='rounded-sm bg-lime-400 px-2 text-xs font-bold uppercase text-slate-800'>
                          <div>active</div>
                        </div>
                      ) : (
                        <div className='rounded-sm bg-gray-700 px-2 text-xs font-bold uppercase text-zinc-400'>
                          inactive
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <h2
                      id='featured-post'
                      className='mt-4 font-display text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl'
                    >
                      {project.company}
                    </h2>

                    {/* Description */}
                    <p className='mt-4 text-sm leading-relaxed text-zinc-400 duration-150 group-hover:text-zinc-300'>
                      {project.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className='mt-3 flex flex-col justify-between gap-2 text-xs font-semibold text-zinc-300 lg:flex-row lg:gap-5'>
                    {/* Role */}
                    <div className='flex gap-2 align-middle'>
                      <User className='w-4' />
                      <div className='mt-1'>{project.role}</div>
                    </div>
                    <div className='align-end flex flex-row gap-2'>
                      <Calendar className='w-4' />
                      <span className='mt-1'>{getDuration(project)}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </Card>
          ))}
        </div>
        <div className='hidden h-px w-full bg-zinc-800 md:block' />
      </div>
    </div>
  );
}
