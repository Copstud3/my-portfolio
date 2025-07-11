"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Github", href: "https://github.com/copstud3" },
];

const formatDate = () => {
  const date = new Date();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = dayNames[date.getDay()];
  const day = date.getDate();
  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const dayWithSuffix = day + getOrdinalSuffix(day);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const utcHours = date.getUTCHours();
  const watHours = (utcHours + 1) % 24;
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const ampm = watHours >= 12 ? "pm" : "am";
  const displayHours = watHours % 12 || 12;
  return `${dayName}, ${dayWithSuffix} ${monthName}, ${year} ${displayHours}:${minutes}:${seconds}${ampm} WAT`;
};

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentTime(formatDate());
    const interval = setInterval(() => {
      setCurrentTime(formatDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on navigation
  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <nav className="flex items-center justify-between px-3 md:px-[50px] lg:px-20 xl:px-40 pt-5 relative" ref={menuRef}>
      <Link href="/">
        <div className="flex items-center gap-3">
          <Image
            src={"/images/profile.jpg"}
            alt="profile"
            width={300}
            height={300}
            className="rounded-full w-10 md:w-14"
          />
          <div className="flex flex-col -space-y-1">
            <span className="font-nunito text-[#191919] font-semibold max-sm:tracking-tight">
              Christopher Chukwuebuka
            </span>
            <span className="font-nunito text-[#9f9f9f] max-sm:text-sm">
              Full stack developer | Rustacean 🦀
            </span>
          </div>
        </div>
      </Link>

      {/* Desktop nav */}
      <div className="items-center gap-9 max-sm:hidden flex">
        {navLinks.map((link, index) => (
          <ul key={index}>
            <li className="text-[#191919] font-nunito text-[18px] tracking-tight">
              <a href={link.href} className="hover:underline">
                {link.name}
              </a>
            </li>
          </ul>
        ))}
      </div>

      {/* Desktop time */}
      <div className="max-sm:hidden">
        <p className="font-nunito text-black/50  text-[18px] tracking-tight">
          {currentTime}
        </p>
      </div>

      {/* Hamburger menu */}
      <button
        className="space-y-1.5 md:hidden z-30 relative"
        aria-label="Toggle menu"
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        <span
          className={`block w-6 h-[3px] rounded-full bg-black transition-all duration-300 ${
            mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-[3px] rounded-full bg-black transition-all duration-300 ${
            mobileMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-[3px] rounded-full bg-black transition-all duration-300 ${
            mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute top-20 inset-0 h-[200px] bg-[#f5f5f5] z-20 flex flex-col items-center  gap-3 md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`text-[#191919] font-nunito text-base tracking-tight hover:underline transition-all duration-300 ${
              mobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
            onClick={handleNavClick}
          >
            {link.name}
          </a>
        ))}
        <p
          className={`font-nunito text-black/50 text-base tracking-tight transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
            }`}
          style={{ transitionDelay: `${navLinks.length * 50}ms` }}
        >
          {currentTime}
        </p>
      </div>
    </nav>
  );
}