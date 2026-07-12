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
            With over a decade of experience building and hardening
            production software, I&apos;m a technical leader concentrated in
            payment technology for the last several years. I&apos;m the
            Founder &amp; CEO of SynerSib Consulting SAS, the consulting
            practice through which I lead engineering work for Strictly, a US
            payment-technology company, and now incubate a new fintech
            payment-recovery initiative of my own.
          </p>
          <p>
            At Strictly, I drive architecture and delivery as Senior Software
            Engineering Manager across the company&apos;s payment gateway,
            POS terminal, and Practice Manager Enhancer (PME) healthcare
            platforms. Recent work includes decomposing an oversized,
            tightly-coupled payment-processor service into focused,
            independently testable modules; removing circular dependencies
            from the core terminal service; adding distributed locking and
            automated monitoring to prevent duplicate transaction settlement;
            delivering Elavon/ViaConex payment-processor certification
            requirements; and building FHIR R5-compliant patient-search
            functionality for the healthcare platform. I also coordinate rapid
            security-vulnerability remediation across the company&apos;s
            production services and carry ongoing delivery and
            production-support ownership across its two largest engineering
            workstreams.
          </p>
          <h1 className='font-medium underline underline-offset-4'>
            Core Competencies:
          </h1>
          <ul className='mx-4 mt-2 list-disc'>
            <li>
              <b>Payment Systems Architecture &amp; Certification:</b> Designs
              and refactors payment-gateway and POS terminal services
              (processor integrations, settlement and refund/void
              correctness, certification cycles) with an emphasis on reducing
              financial and correctness risk.
            </li>
            <li>
              <b>Security &amp; Compliance:</b> Coordinates rapid,
              cross-team vulnerability remediation across production services
              and drives PCI-compliance-adjacent hardening and documentation.
            </li>
            <li>
              <b>Healthcare Interoperability:</b> Builds FHIR R5-compliant
              APIs and data-sync pipelines for a practice-management
              healthcare platform.
            </li>
            <li>
              <b>Full-Stack Development:</b> Ships complete products end to
              end using TypeScript, NodeJS, Next.js/React, MongoDB, SQL, and
              Angular, from greenfield internal tools to production platforms.
            </li>
            <li>
              <b>Technical Leadership &amp; Architecture Governance:</b> Leads
              plan-driven, zero-behavior-change architecture and
              technical-debt initiatives across core services, untangling
              module coupling without disrupting production.
            </li>
            <li>
              <b>Founder &amp; Entrepreneurial Leadership:</b> Founded and
              runs SynerSib Consulting SAS, and is currently incubating a new
              fintech payment-recovery initiative in its early architecture
              phase.
            </li>
          </ul>

          <p>
            Earlier in my career I worked as a full-stack engineer and
            developer at SAM Systems, RefineAI, and XETID, building the
            TypeScript/Node.js, MongoDB, SQL, and React/Angular foundation
            that underlies my current architecture and platform work. I&apos;m
            eager to keep bringing that blend of technical depth, leadership,
            and strategic problem-solving to ambitious, forward-looking teams.
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
