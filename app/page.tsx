"use client";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import { translations } from "./translations";
import { useLanguage } from "./languageContext";
import Skills from "./sections/Skills";
import About from "./sections/About";
import { useTheme } from "next-themes";
import Projects from "./sections/Projects";
import { motion } from "framer-motion";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language]; // Get the translations for the selected language
  const { theme } = useTheme();

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col mx-6 md:mx-8 xl:mx-20 md:tracking-wide"
    >
      <Navbar />
      <Hero />
      <About t={t} theme={theme} />
      {/* Pass only the relevant part of translations to the Skills component */}
      <Skills t={t} theme={theme} />
      <Projects t={t} theme={theme} />
      <Contact t={t} theme={theme}/>
      <Footer />
    </motion.main>
  );
}
