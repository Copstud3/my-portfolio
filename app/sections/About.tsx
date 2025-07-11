"use client"

import React from "react";
import { backend, extras, frontend } from "../constants/skills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const isMobile = typeof window !== "undefined" ? window.innerWidth < 900 : false;


export default function About() {
  useGSAP(() => {
    gsap.set(".about", { xPercent: -170})
    gsap.set(".about-text", { xPercent: 150})
    gsap.set(".about-p", { opacity: 0, yPercent: 50})

    const aboutHeader = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: isMobile ? "-20% top" : "-70% top",
      }
    });

     aboutHeader.to(".about", { xPercent: 0, duration: 1, ease: "expo.out" }, "a")
    .to(".about-text", { xPercent: 0, duration: 1, ease: "expo.out" }, "a")
    .to(".about-p", { opacity: 1, yPercent: 0, duration: 1, ease: "expo.out" })
    

  })
  return (
    <section className="min-h-screen px-3 md:px-[50px] lg:px-20 xl:px-40 max-sm:pt-20 pt-20 " id="about">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <p className="font-gilroy text-[40px] lg:text-[67px] xl:text-[75px] tracking-tighter lg:tracking-[-5px] about">About Me</p>
        <p className="font-gilroy text-base md:text-[15px] lg:text-base md:w-[400px] lg:w-[500px] text-black/50 about-text">
          A collection of exquisite tools I use to deliver scalable digital
          products that drive results.
        </p>
      </div>

      <div className="max-sm:pt-5">
        <p className="font-gilroy text-[14px] md:text-[20px] about-p">
          I&apos;m a Full Stack Developer passionate about building fast, scalable,
          and user-focused web apps. On the frontend with great attention to details, I work with React,
          Next.js, TypeScript, and Tailwind CSS—crafting slick interfaces with
          Framer Motion and GSAP. While, on the backend, I use Node.js, Express, PostgreSQL, and Prisma to ship
          reliable APIs, and I&apos;ve maintained production systems with
          clean code and solid deployments. Lately, I&apos;m diving into Rust for
          high-performance backend work and exploring Web3 to stay future-ready.
          I love turning ideas into polished digital experiences.
        </p>
      </div>

      <p className="font-gilroy text-[30px] md:text-[50px] tracking-tighter md:tracking-[-3px] pt-5">Tools</p>

      <p className="font-gilroy text-[20px] md:text-[30px] tracking-tighter md:tracking-[-2px] max-sm:mt-5 max-sm:text-center">
        Frontend
      </p>
      <div className="max-sm:hidden flex justify-between items-center mt-5 overflow-x-auto scrollbar-thin scrollbar-thumb-black/20 max-sm:space-x-2 max-sm:flex-nowrap">
        {frontend.map((skill, index) => (
          <div
        key={index}
        className="flex items-center gap-3 mb-4 px-4 py-3 hover:bg-black/10 rounded-lg cursor-pointer flex-shrink-0">
        <Image
          src={skill.img}
          alt={skill.name}
          className="w-12 h-12 object-contain"
        />
        <span className="font-gilroy text-[17px] xl:text-[20px]">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="lg:hidden grid grid-cols-3 items-center gap-3 mt-5">
        {frontend.map((skill, index) => (
          <div
        key={index}
        className="flex flex-col items-center justify-center gap-1 mb-1 py-1 hover:bg-black/10 rounded-lg cursor-pointer"
          >
        <Image
          src={skill.img}
          alt={skill.name}
          className="w-12 h-12 object-contain"
        />
        <span className="font-gilroy text-[14px] text-center">{skill.name}</span>
          </div>
        ))}
      </div>

      <p className="font-gilroy text-[20px] md:text-[30px] tracking-tighter md:tracking-[-2px] mt-10 max-sm:text-center">Backend 
      </p>
      <div className="max-sm:hidden flex justify-between items-center mt-5 overflow-x-auto scrollbar-thin scrollbar-thumb-black/20 max-sm:space-x-2 max-sm:flex-nowrap">
        {backend.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mb-4 px-4 py-3 hover:bg-black/10 rounded-lg cursor-pointer"
          >
            <Image
              src={skill.img}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />
            <span className="font-gilroy text-[17px] xl:text-[20px]">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="lg:hidden grid grid-cols-3 items-center gap-3 mt-5">
        {backend.map((skill, index) => (
          <div
        key={index}
        className="flex flex-col items-center justify-center gap-1 mb-1 py-1 hover:bg-black/10 rounded-lg cursor-pointer"
          >
        <Image
          src={skill.img}
          alt={skill.name}
          className="w-12 h-12 object-contain"
        />
        <span className="font-gilroy text-[14px] text-center">{skill.name}</span>
          </div>
        ))}
      </div>

      <p className="font-gilroy text-[20px] md:text-[30px] tracking-tighter md:tracking-[-2px] mt-10 max-sm:text-center">Extras </p>
      <div className="max-sm:hidden flex justify-between items-center mt-5">
        {extras.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mb-4 px-4 py-3 hover:bg-black/10 rounded-lg cursor-pointer"
          >
            <Image
              src={skill.img}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />
            <span className="font-gilroy text-[17px] xl:text-[20px]">{skill.name}</span>
          </div>
        ))}
      </div>


      <div className="lg:hidden grid grid-cols-3 items-center gap-3 mt-5">
        {extras.map((skill, index) => (
          <div
        key={index}
        className="flex flex-col items-center justify-center gap-1 mb-1 py-1 hover:bg-black/10 rounded-lg cursor-pointer"
          >
        <Image
          src={skill.img}
          alt={skill.name}
          className="w-12 h-12 object-contain"
        />
        <span className="font-gilroy text-[14px] text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
