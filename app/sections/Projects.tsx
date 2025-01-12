import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
import { translations } from "../translations";
import LayersImg from "@/public/images/layers.webp";
import Quickmed from "@/public/images/quickmed.webp"
import Nike from "@/public/images/nike-prototype.webp"
import NextJS from "@/public/images/nextjs.svg";
import Tailwind from "@/public/images/tailwind-css.svg";
import Ts from "@/public/images/typescript.svg";
import framerIcon from "@/public/images/framer.svg";
import reactIcon from "@/public/images/react js_logo.svg";
import jsIcon from "@/public/images/javascript.svg";



type TranslationType = (typeof translations)[keyof typeof translations];

interface ProjectsProps {
  t: TranslationType;
  theme: string | undefined; // theme can be undefined initially
}

export default function Projects({ t, theme }: ProjectsProps) {
  return (
    <section className="mb-32">
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold text-2xl md:text-4xl xl:text-6xl text-center md:text-left">
          {t.projectButton}
        </h3>
        <hr
          className={`xl:w-[120px] w-20 border-t-4 xl:border-t-8 mt-2 xl:mt-4 text-center  ${
            theme === "dark" ? "border-dull-brown" : "border-coral-blue"
          }`}
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-8 md:max-w-md md:mx-auto lg:max-w-4xl  mt-4">
      <ProjectCard
        theme={theme} link={`https://layers-tawny.vercel.app`} github="https://github.com/Copstud3/Layers"      
         className={`mt-8 hover:scale-105 transition-all duration-300 cursor-pointer  ${
          theme === "dark" ? "border-dull-brown" : "border-coral-blue"
        }`}
        title="Layers"
        description="An amazing landing page for a design SaaS with sign up and login pages."
      >
        <div className="flex flex-col justify-center items-center">
          <Image src={LayersImg} alt="sss" width={500} className="rounded-lg" />
          <ul className="list-none mt-2 flex justify-center items-center gap-4">
            <li>
              <Image src={NextJS} className="h-10 w-10" alt="nextJs" />
            </li>
             <li><Image src={reactIcon} className="h-10 w-10"alt="nextJs"/></li>
             <li>
              <Image src={Tailwind} className="h-10 w-10" alt="nextJs" />
            </li>
            <li><Image src={Ts} className="h-10 w-10"alt="nextJs"/></li>
            <li><Image src={framerIcon} className="h-10 w-10"alt="nextJs"/></li>
           
          </ul>
        </div>
      </ProjectCard>
     {/*Second project card*/}
      <ProjectCard
        theme={theme}
        className={`mt-8 hover:scale-105 transition-all duration-300 cursor-pointer${
          theme === "dark" ? "border-dull-brown" : "border-coral-blue"
        }`}
        title="QuickMed" github="https://github.com/Copstud3/QuickMed" link="https://quickmed-nine.vercel.app"
        description="A landing page designed for healthcare providers, offering seamless navigation, visually appealing UI components, and a responsive design that adapts to all devices."
      >
        <div className="flex flex-col justify-center items-center">
          <Image src={Quickmed} alt="sss" width={500} className="rounded-lg" />

          <ul className="list-none mt-2 flex justify-center items-center gap-4">
            <li>
              <Image src={jsIcon} className="h-10 w-10" alt="nextJs" />
            </li>
            <li>
              <Image src={reactIcon} className="h-10 w-10" alt="nextJs" />
            </li>
            <li><Image src={Tailwind} className="h-10 w-10"alt="nextJs"/></li>
          </ul>
        </div>
      </ProjectCard>
      {/*Third Project Card*/}
      <ProjectCard
        theme={theme}
        className={`mt-8 hover:scale-105 transition-all duration-300 cursor-pointer lg:col-span-2 lg:max-w-[432px] lg:mx-auto ${
          theme === "dark" ? "border-dull-brown" : "border-coral-blue"
        }`}
        title="Nike website clone" github="https://github.com/Copstud3/nikewebsite" link="https://nike-prototype.netlify.app/"
        description="This is a personal project for my portfolio, featuring the website from one of the most famous shoe brand in the world, Nike."
      >
        <div className="flex flex-col justify-center items-center">
          <Image src={Nike} alt="sss" width={500} className="rounded-lg" />

          <ul className="list-none mt-2 flex justify-center items-center gap-4">
            <li>
              <Image src={jsIcon} className="h-10 w-10" alt="nextJs" />
            </li>
            <li>
              <Image src={reactIcon} className="h-10 w-10" alt="nextJs" />
            </li>
            <li><Image src={Tailwind} className="h-10 w-10"alt="nextJs"/></li>
          </ul>
        </div>
      </ProjectCard>
     
      </div>
      <div className="text-center mt-10 xl:mx-72">
        <p className="md:font-semibold text-lg">{t.projectNote}</p>
      </div>
    </section>
  );
}
