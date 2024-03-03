import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { get } from '@vercel/edge-config';

import { Card } from '../components/card';
import { Navigation } from '../components/nav';

type Reference = {
  id: number;
  name: string;
  title: string;
  recommendation: string;
  url: string;
  avatar: string;
};

type Response = {
  data: Reference[];
};

export const revalidate = 60;
export default async function TestimonialsPage() {
  const { data: testimonials } = (await get('recommendations')) as Response;

  return (
    <div className='relative pb-16'>
      <Navigation />
      <div className='mx-auto max-w-7xl space-y-8 px-6 pt-16 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>
            Testimonials
          </h2>
          <p className='mt-4 text-zinc-400'>
            Valued Voices: Professional Endorsements and Colleague Testimonials.
          </p>
        </div>

        <div className='mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {testimonials.map(testomonial => (
            <Card key={testomonial.id}>
              <Link href={testomonial.url} target='_blank' as={testomonial.url}>
                <article className='flex h-full w-full flex-col justify-between p-4 md:p-8'>
                  {/* Container */}
                  <div className='w-full'>
                    {/* Header */}
                    <div className='flex items-center justify-between gap-2'>
                      <div className='text-xs text-zinc-100'>
                        <div className='flex flex-row gap-2 font-semibold uppercase'>
                          {testomonial.title}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className='mt-4 flex flex-row gap-3 align-middle'>
                      <Image
                        className='hidden h-12 w-12 rounded-full bg-zinc-400 sm:block'
                        alt='avatar'
                        src={`/avatars/${testomonial.avatar}.jpeg`}
                        width={12}
                        height={12}
                        priority
                        unoptimized
                      />
                      {/* Name */}
                      <h2
                        id='featured-post'
                        className='font-display text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl'
                      >
                        {testomonial.name}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className='mt-4 leading-relaxed text-sm text-zinc-400 duration-150 group-hover:text-zinc-300'>
                      {testomonial.recommendation}
                    </p>
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
