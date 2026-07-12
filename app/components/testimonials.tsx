import Image from 'next/image';

import store from '@/store.json';
import { Card } from './card';
import { SectionHeading } from './section-heading';

type Reference = {
  id: number;
  name: string;
  title: string;
  url: string;
  avatar: string;
  recommendation: string;
};

export function Testimonials() {
  const references = store.recommendations.data as Reference[];

  return (
    <section
      id='testimonials'
      aria-labelledby='testimonials-heading'
      className='mx-auto max-w-6xl px-6 py-24'
    >
      <SectionHeading
        id='testimonials-heading'
        eyebrow='Testimonials'
        title='What colleagues say'
      />

      <div className='mt-16 columns-1 gap-6 md:columns-2 xl:columns-3'>
        {references.map(reference => (
          <div key={reference.id} className='mb-6 break-inside-avoid'>
            <Card>
              <figure className='p-6'>
                <blockquote className='text-sm leading-relaxed text-zinc-300'>
                  “{reference.recommendation}”
                </blockquote>
                <figcaption className='mt-6 flex items-center gap-3'>
                  <Image
                    src={`/avatars/${reference.avatar}.jpeg`}
                    alt={reference.name}
                    width={48}
                    height={48}
                    className='h-12 w-12 rounded-full object-cover'
                  />
                  <div>
                    <a
                      href={reference.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm font-semibold text-zinc-100 underline-offset-4 duration-200 hover:text-white hover:underline'
                    >
                      {reference.name}
                    </a>
                    <p className='text-xs text-zinc-400'>{reference.title}</p>
                  </div>
                </figcaption>
              </figure>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
