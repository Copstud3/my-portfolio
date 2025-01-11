"use client";

import { LanguageSwitcher } from "../../components/languageSwitcher";
import { ThemeToggle } from "../../components/themeToggle";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:right-4 flex justify-center items-center gap-4">
      <LanguageSwitcher />
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
