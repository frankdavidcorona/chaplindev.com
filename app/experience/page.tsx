import Link from "next/link";
import React from "react";

import { get } from "@vercel/edge-config";
import { MapPin, User, Clock } from "lucide-react";
import Flag from "react-flagkit";

import { calculateDateDiff } from "@/util/dates";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

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
  const { data: projects } = (await get("projects")) as Response;

  const getDuration = (project: Project): string => {
    const enddate = project.active ? new Date() : project.enddate;
    const { years, months } = calculateDateDiff(project.startdate, enddate);

    const result = [];
    years !== 0 && result.push(`${years} years`);
    months !== 0 && result.push(`${months} months`);
    return result.join(" and ");
  };

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-zinc-400">
            Demonstrating a Track Record of Excellence in Software Engineering
            and Agile Project Management
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {projects.map((project) => (
            <Card key={project.id}>
              <Link href={project.url} target="_blank" as={project.url}>
                <article className="flex flex-col w-full h-full p-4 md:p-8 justify-between">
                  {/* Container */}
                  <div className="">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        <div className="flex flex-row gap-2 uppercase">
                          Company from{" "}
                          <Flag
                            country={project.companyCountry}
                            className="w-4"
                          />
                        </div>
                      </div>
                      {project.active ? (
                        <div className="px-2 bg-lime-400 rounded-sm text-slate-800 uppercase text-xs font-bold">
                          <div>active</div>
                        </div>
                      ) : (
                        <div className="px-2 bg-gray-700 rounded-sm text-zinc-400 uppercase text-xs font-bold">
                          inactive
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <h2
                      id="featured-post"
                      className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                    >
                      {project.company}
                    </h2>

                    {/* Description */}
                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col md:flex-row md:gap-6 text-zinc-300 font-semibold">
                    {/* Role */}
                    <div className="flex flex-row gap-2 align-end  mt-6">
                      <User className="w-4" />
                      <div>{project.role}</div>
                    </div>
                    {/* Type */}
                    <div className="flex flex-row gap-2 align-end mt-6">
                      <Clock className="w-4" />
                      <div>{project.type}</div>
                    </div>
                    {/* Location */}
                    <div className="flex flex-row gap-2 align-end mt-6">
                      <MapPin className="w-4" />
                      <Flag country={project.country} className="w-4" />
                      <div>{project.location}</div>
                    </div>
                    <div className="flex flex-row gap-2 align-end mt-6">
                      <span className="">{getDuration(project)}</span>
                    </div>
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
