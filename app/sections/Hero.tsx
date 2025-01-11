"use client";
import { TypedEffect } from "../../components/typedEffect";
import Image from "next/image";
import { translations } from "../translations";
import { useLanguage } from "../languageContext";
import Link from "next/link";
import { useTheme } from "next-themes"; // Assuming you are using next-themes for theme management

import ghostface from "@/public/images/A Ghost Story.jpeg";
import { Download, GithubIcon, Linkedin, XIcon } from "lucide-react";

export default function Hero() {
  const { language } = useLanguage();
  const { theme } = useTheme(); // Use theme context
  const t = translations[language];
  return (
    <section
      className={`flex flex-col gap-4 xl:gap-6 justify-center items-center h-lvh xl:max-w-7xl mx-auto`}
    >
      <Image
        src={ghostface}
        alt="profile image"
        className="rounded-full max-sm:w-[130px]"
        width={200}
        height={200}
      />
      <h1 className="text-2xl md:text-4xl">{t.title}</h1>
      <div className="text-center text-2xl md:text-5xl font-bold xl:text-7xl">
        <TypedEffect strings={t.subtitle} />
      </div>
      <p className="font-medium text-lg md:text-xl text-center xl:text-2xl">
        {t.description}
      </p>
      <div className="flex gap-4 text-xl">
        <Link
          href="/CHRISTOPHER CHUKWUEBUKA - CV.pdf"
          download="CHRISTOPHER CHUKWUEBUKA - CV.pdf"
          target="_blank"
          className={`py-2 px-6 border-2 rounded-sm transition-all duration-300 hover:translate-y-1 flex justify-center items-center gap-3 ${
            theme === "dark" ? "border-dull-brown" : "border-coral-blue"
          }`}
        >
          {t.resumeButton} <Download />
        </Link>
      </div>
    </section>
  );
}
