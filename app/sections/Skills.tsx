"use client";

import Image from "next/image";
import { translations } from "../translations";
import htmlIcon from "@/public/images/icons8-html-logo.svg";
import cssIcon from "@/public/images/icons8-css3.svg";
import tailwindIcon from "@/public/images/tailwind-css.svg";
import jsIcon from "@/public/images/javascript.svg";
import tsIcon from "@/public/images/typescript.svg";
import nextIcon from "@/public/images/nextjs.svg";
import framerIcon from "@/public/images/framer.svg";
import figmaIcon from "@/public/images/figma.svg";
import githubIcon from "@/public/images/github.svg";
import reactIcon from "@/public/images/react js_logo.svg";
import { RocketIcon } from "lucide-react";

const logos = [
  { name: "HTML", image: htmlIcon },
  { name: "CSS", image: cssIcon },
  { name: "Tailwind", image: tailwindIcon },
  { name: "JavaScript", image: jsIcon },
  { name: "TypeScript", image: tsIcon },
  { name: "Next.js", image: nextIcon },
  { name: "Framer Motion", image: framerIcon },
  { name: "Figma", image: figmaIcon },
  { name: "GitHub", image: githubIcon },
  { name: "React", image: reactIcon },
];

type TranslationType = (typeof translations)[keyof typeof translations];

interface SkillsProps {
  t: TranslationType;
  theme: string | undefined;
}

export default function Skills({ t, theme }: SkillsProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 xl:py-24">
      <div className="flex flex-col items-center mb-12">
        <h3 className="font-bold text-2xl md:text-4xl xl:text-6xl flex items-center gap-2">
          {t.skills} <RocketIcon className="size-8 xl:size-12" />
        </h3>
        <hr
          className={`w-20 xl:w-32 border-t-4 xl:border-t-8 mt-2 xl:mt-3 border-foreground`}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className={`flex flex-col items-center gap-3 group p-4 rounded-lg transition-all duration-300 ${
              theme === "dark" ? "hover:backdrop-brightness-125" : "hover:backdrop-brightness-90"
            }`}
          >
            <div className="relative w-20 h-20 md:w-20 md:h-20">
              <Image
                src={logo.image}
                alt={`${logo.name} logo`}
                className="transition-transform duration-300 group-hover:scale-110"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-lg md:font-semibold max-w-2xl mx-auto">
        {t.skillsNote}
      </p>
    </section>
  );
}