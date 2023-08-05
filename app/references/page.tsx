import Link from "next/link";
import React from "react";

import { get } from "@vercel/edge-config";

import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import Image from "next/image";

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
export default async function ReferencesPage() {
  const { data: recommendations } = (await get("recommendations")) as Response;

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Recommendations
          </h2>
          <p className="mt-4 text-zinc-400">
            Valued Voices: Professional Endorsements and Colleague Testimonials.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {recommendations.map((project) => (
            <Card key={project.id}>
              <Link href={project.url} target="_blank" as={project.url}>
                <article className="flex flex-col w-full h-full p-4 md:p-8 justify-between">
                  {/* Container */}
                  <div className="w-full">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        <div className="flex flex-row gap-2 uppercase font-semibold">
                          {project.title}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-row gap-3 align-middle mt-4">
                      <Image
                        className="rounded-full w-12 h-12 bg-zinc-400 hidden sm:block"
                        alt="avatar"
                        src={`/avatars/${project.avatar}.jpeg`}
                        width={12}
                        height={12}
                        priority
                        unoptimized
                      />
                      {/* Name */}
                      <h2
                        id="featured-post"
                        className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                      >
                        {project.name}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      {project.recommendation}
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
          ))}
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}
