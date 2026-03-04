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
    <section className="max-w-360">
      <p>A version 2 of this website is coming....</p>
    </section>
  );
}
