import {
  CreditCard,
  GitBranch,
  HeartPulse,
  Layers,
  Rocket,
  ShieldCheck,
} from 'lucide-react';

import { Card } from './card';
import { SectionHeading } from './section-heading';

const competencies = [
  {
    icon: CreditCard,
    title: 'Payment Systems Architecture & Certification',
    body: 'Designs and refactors payment-gateway and POS terminal services (processor integrations, settlement and refund/void correctness, certification cycles) with an emphasis on reducing financial and correctness risk.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    body: 'Coordinates rapid, cross-team vulnerability remediation across production services and drives PCI-compliance-adjacent hardening and documentation.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Interoperability',
    body: 'Builds FHIR R5-compliant APIs and data-sync pipelines for a practice-management healthcare platform.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Development',
    body: 'Ships complete products end to end using TypeScript, NodeJS, Next.js/React, MongoDB, SQL, and Angular, from greenfield internal tools to production platforms.',
  },
  {
    icon: GitBranch,
    title: 'Technical Leadership & Architecture Governance',
    body: 'Leads plan-driven, zero-behavior-change architecture and technical-debt initiatives across core services, untangling module coupling without disrupting production.',
  },
  {
    icon: Rocket,
    title: 'Founder & Entrepreneurial Leadership',
    body: 'Founded and runs SynerSib Consulting SAS, and is currently incubating a new fintech payment-recovery initiative in its early architecture phase.',
  },
];

export function About() {
  return (
    <section
      id='about'
      aria-labelledby='about-heading'
      className='mx-auto max-w-6xl px-6 py-24'
    >
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16'>
        <div className='self-start lg:sticky lg:top-24'>
          <SectionHeading
            id='about-heading'
            eyebrow='About'
            title='Professional Summary'
            subtitle='Demonstrating a Track Record of Excellence in Software Engineering and Agile Project Management'
          />
        </div>

        <div className='flex flex-col gap-4 text-sm leading-relaxed text-zinc-400 sm:text-base'>
          <p>
            With over a decade of experience building and hardening production
            software, I&apos;m a technical leader concentrated in payment
            technology for the last several years. I&apos;m the Founder &amp;
            CEO of SynerSib Consulting SAS, the consulting practice through
            which I lead engineering work for Strictly, a US payment-technology
            company, and now incubate a new fintech payment-recovery initiative
            of my own.
          </p>
          <p>
            At Strictly, I drive architecture and delivery as Senior Software
            Engineering Manager across the company&apos;s payment gateway, POS
            terminal, and Practice Manager Enhancer (PME) healthcare platforms.
            Recent work includes decomposing an oversized, tightly-coupled
            payment-processor service into focused, independently testable
            modules; removing circular dependencies from the core terminal
            service; adding distributed locking and automated monitoring to
            prevent duplicate transaction settlement; delivering Elavon/ViaConex
            payment-processor certification requirements; and building FHIR
            R5-compliant patient-search functionality for the healthcare
            platform. I also coordinate rapid security-vulnerability remediation
            across the company&apos;s production services and carry ongoing
            delivery and production-support ownership across its two largest
            engineering workstreams.
          </p>
        </div>
      </div>

      <h3 className='font-display mt-14 text-xl text-zinc-100 sm:text-2xl'>
        Core Competencies
      </h3>
      <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {competencies.map((competency, index) => (
          <Card key={competency.title}>
            <div className='flex h-full flex-col gap-3 p-6'>
              <span
                aria-hidden='true'
                className='font-display text-accent/25 group-hover:text-accent/50 absolute top-5 right-6 text-3xl duration-300'
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <competency.icon
                className='text-accent h-5 w-5 duration-300 group-hover:scale-110 group-hover:rotate-6'
                aria-hidden='true'
              />
              <h4 className='font-display group-hover:text-accent text-lg text-zinc-100 duration-300'>
                {competency.title}
              </h4>
              <p className='text-sm leading-relaxed text-zinc-400'>
                {competency.body}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <p className='mt-10 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base'>
        Earlier in my career I worked as a full-stack engineer and developer at
        SAM Systems, RefineAI, and XETID, building the TypeScript/Node.js,
        MongoDB, SQL, and React/Angular foundation that underlies my current
        architecture and platform work. I&apos;m eager to keep bringing that
        blend of technical depth, leadership, and strategic problem-solving to
        ambitious, forward-looking teams.
      </p>
    </section>
  );
}
