import React from "react";
import { CiBrightnessUp } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import Navbar from "./Navbar";

function Header({ isDark, handleThemeChange }) {
  return (
    <div className="flex justify-center">
      {/* <Navbar isDark={isDark} handleThemeChange={handleThemeChange} /> */}
    </div>
  );
}

export default Header;
