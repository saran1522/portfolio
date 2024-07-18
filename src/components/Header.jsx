import React from "react";
import { CiBrightnessUp } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

function Header({ isDark, handleThemeChange }) {
  return (
    <div className="flex justify-between p-5 text-primary-600 lg:text-3xl dark:text-white">
      <span>Saran Sinha</span>
      <div className="cursor-pointer" onClick={handleThemeChange}>
        {isDark ? <CiBrightnessUp size={24} /> : <IoMoonOutline size={24} />}
      </div>
    </div>
  );
}

export default Header;
