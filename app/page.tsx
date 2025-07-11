import React from "react";
import SmoothScrollWrapper from "./components/smooth-scroll-wrapper";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import About from "./sections/about";
import CTA from "./sections/cta";

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
