"use client";

import { LanguageSwitcher } from "../../components/languageSwitcher";
import { ThemeToggle } from "../../components/themeToggle";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-4 right-[30%] md:right-[3%] justify-center items-center flex gap-4 ">
      <LanguageSwitcher />
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
