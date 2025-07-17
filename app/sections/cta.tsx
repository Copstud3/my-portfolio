"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const ctaLinks = [
  { name: "X(Twitter)", href: "https://x.com/copstud3" },
  { name: "LinkedIn", href: "https://linkedin.com/in/copstud3" },
  { name: "Github", href: "https://github.com/copstud3" },
];

const date = new Date();
const year = date.getFullYear();
const isMobile = typeof window !== "undefined" ? window.innerWidth < 900 : false;
const isSmallDesktop = typeof window !== "undefined" ? window.innerWidth < 1300 : false;


export default function CTA() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: isMobile ? "-100% top" : isSmallDesktop ? "-50% top" : "-30% top",
        toggleActions: "play reverse play reverse",
      },
    })

    tl.from(".let", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "expo.out"
    })
    .from(".let-text", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "expo.out"
    })
    .from(".links", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "expo.out"
    })
  })

  return (
    <section className="text-center " id="contact">
      <p className="font-gilroy text-[35px] md:text-[60px] md:w-[700px] mx-auto leading-[40px] md:leading-[70px] tracking-tighter md:tracking-[-4px] pt-20 let">
        Let&apos;s create something impactful together.
      </p>
      <p className="md:w-[650px] max-sm:pt-3 pt-3 mx-auto font-gilroy text-black/50 max-sm:px-5 text-[14px] md:text-[18px] let-text">
        I love turning ideas into scalable digital products that actually make a
        difference and are built to deliver real results for users and
        businesses alike.
      </p>

      <div className="flex items-center gap-9 justify-center pt-4 links">
        {ctaLinks.map((link, index) => (
          <ul key={index}>
            <li className="font-gilroy text-base tracking-tight md:text-[20px]">
              <a href={link.href} className="hover:underline">
                {link.name}
              </a>
            </li>
          </ul>
        ))}
      </div>

      <a
        href="mailto:victorchris73@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Chris,%20I%20would%20like%20to%20work%20with%20you%20on%20a%20project."
        className="px-8 py-3 rounded-full w-fit mx-auto inset-ring md:inset-ring-2 inset-ring-black font-gilroy md:text-[20px] cursor-pointer text-black transition-all duration-300 ease-in-out mt-[20px] hover:text-[25px] inline-block text-center"
      >
        Let&apos;s Connect!
      </a>

      {/* <div className="w-[700px] h-[1px] bg-black/30 mx-auto mt-10" /> */}

      <p className="font-gilroy font-bold text-center text-[45px] md:text-[100px] lg:text-[150px] xl:text-[200px] tracking-tighter md:tracking-[-10px] uppercase bg-gradient-to-b from-black/50 from-10% to-[#f5f5f5] to-80% text-transparent bg-clip-text pt-10 ">
        Connect with me
      </p>

      <p className="text-center font-gilroy text-[14px] md:text-[18px] text-black/70 pb-10 lg:pb-5">
        Built by{" "}
        <a href="https://x.com/copstud3" className="underline">
          Chris
        </a>{" "}
        - {year}
      </p>
    </section>
  );
}
