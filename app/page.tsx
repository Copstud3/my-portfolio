import React from "react";
import SmoothScrollWrapper from "../app/components/smooth-scroll-wrapper";
import Navbar from "../app/components/navbar";
import Hero from "../app/sections/hero";
import Projects from "../app/sections/projects";
import About from "../app/sections/about";
import CTA from "../app/sections/cta";

export default function Home() {
  return (
    <main>
      <SmoothScrollWrapper>
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <CTA />
      </SmoothScrollWrapper>
    </main>
  );
}
