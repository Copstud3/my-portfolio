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
import { Fragment } from "react";
import { motion } from "framer-motion";
import { RocketIcon } from "lucide-react";

const logos = [
  { name: "html", image: htmlIcon },
  { name: "css", image: cssIcon },
  { name: "tailwind", image: tailwindIcon },
  { name: "js", image: jsIcon },
  { name: "ts", image: tsIcon },
  { name: "next", image: nextIcon },
  { name: "framer", image: framerIcon },
  { name: "figma", image: figmaIcon },
  { name: "github", image: githubIcon },
  { name: "react", image: reactIcon },
];

// Define the type for our translations
type TranslationType = (typeof translations)[keyof typeof translations];

// Add type to the props
interface SkillsProps {
  t: TranslationType;
  theme: string | undefined;
}

export default function Skills({ t, theme }: SkillsProps) {
  return (
    <section className="xl:mt-64 mb-32">
      <div className="flex flex-col justify-center items-center mb-6">
        <h3 className="font-bold text-2xl md:text-4xl xl:text-6xl text-center flex justify-center items-center gap-2">
          {t.skills} <RocketIcon className=" size-8 xl:size-20" />
        </h3>
        <hr
          className={`xl:w-[120px]  w-20 border-t-4 xl:border-t-8 mt-2 xl:mt-3 text-center  ${
            theme === "dark" ? "border-dull-brown" : "border-coral-blue"
          }`}
        />
      </div>
      <div className="flex overflow-clip [mask-image:linear-gradient(to_right,transparent,#161c1e_10%,#161c1e_90%,transparent)]">
        <motion.div
          className="flex flex-none gap-12 pr-12 xl:gap-24 xl:pr-24 mt-0"
          animate={{
            x: "-50%",
          }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity}}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <Fragment key={i}>
              {logos.map((logo) => (
                <Image key={logo.name} src={logo.image} alt={logo.name} className="xl:hover:scale-150 md:hover:scale-110 cursor-pointer h-40 transition duration-300" />
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
      <p className="mt-4 text-center text-lg md:font-semibold">{t.skillsNote}</p>
    </section>
  );
}
