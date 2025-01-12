import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="text-center mb-6 md:font-semibold text-lg -mx-4">
      <p>All Rights Reserved. &copy; {currentYear}.</p>
    </div>
  );
};

export default Footer;
