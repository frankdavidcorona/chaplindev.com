import { About } from './components/about';
import { ContactSection, SiteFooter } from './components/contact-footer';
import { ExperienceTimeline } from './components/experience-timeline';
import { Hero } from './components/hero';
import { Reveal } from './components/reveal';
import { SelectedWork } from './components/selected-work';
import { SiteNav } from './components/site-nav';
import { Testimonials } from './components/testimonials';
import { TrustedBy } from './components/trusted-by';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Frank Corona',
  alternateName: 'chaplindev',
  jobTitle: 'Senior Software Engineering Manager',
  url: 'https://chaplindev.com',
  email: 'mailto:frank.corona@pm.me',
  worksFor: {
    '@type': 'Organization',
    name: 'SynerSib Consulting SAS',
    url: 'https://synersib.com',
  },
  sameAs: [
    'https://www.linkedin.com/in/chaplindev/',
    'https://github.com/frankdavidcorona',
    'https://twitter.com/chaplindev',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <SiteNav />
      <main id='main'>
        <Hero />
        <Reveal>
          <TrustedBy />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <SelectedWork />
        </Reveal>
        <Reveal>
          <ExperienceTimeline />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
