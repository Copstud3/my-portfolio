"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Navbar from "../components/navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    const leftText = SplitText.create(".left-text", { type: "lines words" });
    const rightText = SplitText.create(".right-text", { type: "lines words" });
    gsap.set(".connect-btn", { opacity: 0 });

    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "-20% top",
        toggleActions: "play reset play reset",
      },
    });

    textTl
      .from(
        leftText.lines,
        {
          y: 100,
          opacity: 0,
          ease: "power3.out",
          stagger: 0.3,
        },
        "a"
      )
      .from(
        leftText.words,
        {
          opacity: 0,
          ease: "power3.out",
          stagger: 0.1,
        },
        "a"
      )

      .from(
        rightText.lines,
        {
          y: 100,
          opacity: 0,
          ease: "power3.out",
          stagger: 0.3,
        },
        "b"
      )
      .from(
        rightText.words,
        {
          opacity: 0,
          ease: "power3.out",
          stagger: 0.1,
        },
        "b"
      )

      .to(".connect-btn", {
        opacity: 1,
        duration: 0.5,
        ease: "expo.in",
      }, 'c')
      .to(".connect-btn", {scale: 1.5, duration: 0.5, ease: "expo.out"}, 'c')
      .to(".connect-btn", {scale: 1, duration: 0.5, ease: "expo.in"});
  });
  return (
    <section className="min-h-screen flex flex-col  hero">
      <Navbar />
      <div className="text-[#191919] pt-15 lg:pt-[100px] text-[30px] md:text-[48px] lg:text-[52px] xl:text-[65px] font-gilroy lg:leading-[55px] xl:leading-[70px] capitalize tracking-tight relative">
        <p className="absolute left-[20px] md:left-[50px] lg:left-[80px] xl:left-[160px] left-text">
          I develop <span className="text-black/30">digital</span> solutions{" "}
          <br />
          that run <span className="text-black/30">smooth</span>, <br /> looks
          <span className="text-black/30"> good</span>, <br /> and
          <span className="text-black/30"> drives</span> results.
        </p>
        <p className="max-sm:pt-2 absolute top-[250px] md:top-[380px] min-[65rem]:top-[280px] lg:top-[270px] xl:top-[310px] right-[20px] md:right-[50px] lg:right-[80px] xl:right-[160px] text-right text-black font-gilroy md:w-[800px] mx-auto right-text">
          I bring ideas to <span className="text-black/30">life</span> with{" "}
          <br />
          clean <span className="text-black/30">code</span> and smart{" "} <br />
          <span className="text-black/30"> architecture</span> across <br />
          <span className="text-black/30"> industries.</span>
        </p>
      </div>
      <div className="h-50 hidden md:block min-[65rem]:hidden lg:hidden" />
      <button
        onClick={() => {
          window.location.href =
            "mailto:victorchris73@gmail.com?subject=Web Development Inquiry&body=Hi%20Chris,%20I%20would%20like%20to%20work%20with%20you%20on%20a%20project.";
        }}
        className="px-8 py-3 rounded-full w-fit mx-auto inset-ring-2 inset-ring-black font-gilroy text-[20px] hover:text-[30px] cursor-pointer text-black transition-all duration-300 ease-in-out [@media(min-height:600px)]:mt-[420px] [@media(min-height:650px)]:mt-[500px] lg:mt-[450px] xl:mt-[500px] connect-btn"
      >
        Connect With Me!
      </button>
    </section>
  );
}
