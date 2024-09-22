import React from "react";
import { CiBrightnessUp } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import Navbar from "./Navbar";

function Header({ isDark, handleThemeChange }) {
  return (
    <div className="flex justify-center text-primary-600 dark:text-white">
      {/* <Navbar isDark={isDark} handleThemeChange={handleThemeChange} /> */}
    </div>
  );
}

export default Header;
