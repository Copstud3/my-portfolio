"use client"

import { Star, ExternalLink, ArrowRight, Code, Palette, Zap, Atom, ChartPie, Gem, Flame } from "lucide-react";
import React, { useState } from "react";
import { projects } from "../constants/projects"; // Adjust path as needed
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const iconMap = {
  Palette,
  Code,
  Zap,
  Star,
  Atom,
  ChartPie,
  Gem,
  Flame
} as const;

const isMobile = typeof window !== "undefined" ? window.innerWidth < 900 : false;

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  useGSAP(() => {
    gsap.set(".feature", { xPercent: -150})
    gsap.set(".feature-text", { xPercent: 150})
    gsap.set(".project-card", {
      opacity: 0,
      y: 100,
      scale: 0.8,
      transformOrigin: "center center"
    });


    const header = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: isMobile ? "-10% top" : "-30% top",
      }
    });

    const cards = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: isMobile ? "-7% top" : "-25% top",
      }
    });

    header.to(".feature", { xPercent: 0, duration: 1, ease: "expo.out" }, "a")
    .to(".feature-text", { xPercent: 0, duration: 1, ease: "expo.out" }, "a")
    if (isMobile) {
      // Animate each card individually when it enters viewport on mobile
      document.querySelectorAll(".project-card").forEach((card, i) => {
      gsap.to(card, {
        scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.in",
        delay: i * 0.01,
      });
      });
    } else {
      // Animate all cards together with stagger on desktop/tablet
      cards.to(".project-card", {
      opacity: 1,
      y: 0,
      scale: 1,
      ease: "elastic.out(1, 0.5)",
      stagger: {
        each: 0.5,
        grid: "auto",
        from: "start"
      }
      });
    }


    
  })

  return (
    <section className="min-h-screen px-3 md:px-[50px] lg:px-20 xl:px-40 overflow-hidden" id="projects">
      <div className="flex flex-col md:flex-row md:items-center justify-between lg:pt-10 mb-16 md:mb-8 xl:mb-16">
        <p className="font-gilroy max-sm:text-left text-[40px] lg:text-[67px] xl:text-[75px] tracking-tighter lg:tracking-[-5px] feature">
          Featured Projects
        </p>
        <p className="font-gilroy text-base md:text-[15px] lg:text-base md:w-[400px] lg:w-[500px] text-black/50 feature-text">
          A curated set of projects from pixels to backend to mix of both built
          with performance, usability, and growth in mind.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:mx-2">
        {projects.map((project, index) => (
          <div 
            key={project.title} 
            className="group relative border border-black/10 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 cursor-pointer project-card"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
            
            {/* Content */}
            <div className="relative p-8 flex flex-col h-full min-h-[400px] z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-xl ${project.accent} group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(iconMap[project.iconName], { className: "w-6 h-6" })}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-black/50 bg-black/5 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex z-20"
                    style={{ position: "relative" }}
                  >
                    <ExternalLink className="w-5 h-5 text-black/30 group-hover:text-black/60 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-[32px] md:text-[40px] font-gilroy tracking-tighter mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 font-gilroy text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech: string, techIndex: number): React.ReactNode => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 text-sm rounded-full border border-black/10 text-black/60 transition-all duration-300 hover:bg-black/5 ${
                      hoveredProject === index ? 'animate-pulse' : ''
                    }`}
                    style={{ 
                      animationDelay: `${techIndex * 100}ms` 
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Interactive Elements */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-black/40">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm">Live</span>
                  </div>
                  <div className="flex items-center gap-1 text-black/40">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">Featured</span>
                  </div>
                </div>
                
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center min-[79rem]:inset-ring inset-ring-black/50 lg:group-hover:inset-ring-black rounded-2xl lg:px-3 lg:py-3 gap-2 text-black lg:text-black/50 group-hover:text-black/80 transition-colors hover:text-black cursor-pointer"
                >
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 w-32 h-1 bg-gradient-to-r from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Hover Border Effect */}
            <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />
          </div>
        ))}
      </div>

      {/* Background Decorations */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div> */}
    </section>
  );
}