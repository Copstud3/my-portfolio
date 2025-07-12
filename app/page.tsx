import React from "react";
import SmoothScrollWrapper from "./components/smooth-scroll-wrapper";
import Navbar from "./components/navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
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
