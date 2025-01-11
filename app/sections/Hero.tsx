"use client";
import { TypedEffect } from "../../components/typedEffect";
import Image from "next/image";
import { translations } from "../translations";
import { useLanguage } from "../languageContext";
import Link from "next/link";
import { useTheme } from "next-themes"; // Assuming you are using next-themes for theme management

import ghostface from "@/public/images/A Ghost Story.jpeg";
import { Download } from "lucide-react";

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
      <div className="flex justify-center items-center gap-12 mt-6">
        <Link href="https://t.me/de3bug" target="_blank"> <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          className="w-10 h-10 hover:scale-[130%] transition duration-300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
            fill={theme === "dark" ? "#a49d91" : "#161c1e"}
          />
        </svg></Link>
        <Link href="https://x.com/copstud3" target="_blank"><svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          className="w-10 h-10 hover:scale-[130%] transition duration-300"
          viewBox="0 0 30 30"
          fill={theme === "dark" ? "#a49d91" : "#161c1e"}
        >
          <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
        </svg></Link>
        <Link href="https://linkedin.com/in/copstud3" target="_blank"><svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          className="w-10 h-10 hover:scale-[130%] transition duration-300"
          viewBox="0 0 50 50"
          fill={theme === "dark" ? "#a49d91" : "#161c1e"}
        >
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </svg></Link>
      </div>
    </section>
  );
}
