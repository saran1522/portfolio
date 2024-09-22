import React from "react";
import { CiBrightnessUp } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

function Navbar({ isDark, handleThemeChange }) {
  return (
    <div className="flex max-w-full justify-center text-primary-600 dark:text-gray-400">
      <ul className="fixed top-3 z-10 m-auto flex max-w-[98%] flex-wrap items-center justify-center gap-4 rounded-full bg-transparent px-8 py-5 text-lg font-semibold shadow-[0_0_15px_rgba(0,0,0,0.1)] backdrop-blur-lg max-md:gap-3 max-md:px-6 lg:gap-16 dark:bg-[#ffffff0b]">
        <li>
          <a href="#home" className="z-20 cursor-pointer">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="z-20 cursor-pointer">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="z-20 cursor-pointer">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="z-20 cursor-pointer">
            Contact
          </a>
        </li>
        <li className="z-20 cursor-pointer" onClick={handleThemeChange}>
          {isDark ? <CiBrightnessUp size={24} /> : <IoMoonOutline size={24} />}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
