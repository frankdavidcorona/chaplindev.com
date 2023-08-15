import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Experience", href: "/experience" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
  { name: "Buy Me a Book!", href: "https://bmc.link/chaplindev" },
];

const trusters = [
  { name: "SAM Systems", href: "https://samsystems.io" },
  { name: "Strictly", href: "https://strictlyzero.com" },
  { name: "Primavera", href: "https://primavera.care/" },
  { name: "agile dream team", href: "https://agiledreamteam.com/" },
  { name: "RefineAI", href: "https://refineai.squarespace.com/" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        chaplindev
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in max-w-4xl">
        <h2 className="text-sm text-zinc-500 px-6">
          Hi, my name is Frank Corona, I'm Software Engineer with 10+ yrs in
          software development. Experienced in Finance, Medical, and HR sectors.
          UI/UX connoisseur. Propelling digital innovation, building solutions
          at{" "}
          <Link
            target="_blank"
            href="https://samsystems.io"
            className="underline duration-500 hover:text-zinc-300"
          >
            SamSystems
          </Link>
          <br />
          and working on{" "}
          <Link
            target="_blank"
            href="https://strictlyzero.com"
            className="underline duration-500 hover:text-zinc-300"
          >
            Strictly.
          </Link>{" "}
        </h2>
      </div>

      {/* ✅ Work on this feature */}
      {/* <div className="hover:rounded-xl py-3 px-4 mb-12 font-extrabold text-slate-800 bg-zinc-200 rounded hover:cursor-pointer duration-1000 animate-fade-in">
        Download Resume
      </div> */}

      {/* Trusters */}
      <footer className="w-full px-6 flex flex-col gap-1 text-center justify-center md:flex-row md:gap-6 align-middle duration-1000 animate-fade-in">
        <div className="text-zinc-50  font-extrabold text-sm md:text-xl">
          Trusted By
        </div>
        {trusters.map((item) => (
          <Link key={item.name} href={item.href} target="_blank">
            <span className="text-zinc-500 hover:text-zinc-300 hover:duration-1000 font-extrabold text-sm md:text-xl">
              {item.name}
            </span>
          </Link>
        ))}
      </footer>
    </div>
  );
}
