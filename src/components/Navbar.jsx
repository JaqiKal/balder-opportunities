import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="logo">Logo</div>
      <div className="links">
        <a
          href="#about"
          className="p-2 hover:underline"
        >
          About
        </a>
        <a
          href="#services"
          className="p-2 hover:underline"
        >
          Services
        </a>
        <a
          href="#contact"
          className="p-2 hover:underline"
        >
          Contact
        </a>
        <a
          href="#careers"
          className="p-2 hover:underline"
        >
          Careers
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
