import { CiBrightnessUp } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import NavLink from "./NavLink";

function Navbar({ isDark, handleThemeChange }) {
  return (
    <div className="flex max-w-full items-center justify-center">
      <ul className="fixed top-3 z-10 m-auto flex max-w-[98%] flex-wrap items-center justify-center rounded-full bg-transparent px-8 py-5 shadow-[0_0_15px_rgba(0,0,0,0.1)] backdrop-blur-lg max-md:w-[98%] max-md:gap-4 max-md:px-4 max-md:font-normal lg:gap-12 dark:bg-[#ffffff15]">
        <NavLink title="Home" />
        <NavLink title="Projects" />
        <NavLink title="Skills" />
        <NavLink title="Contact" />
        <li className="z-20 cursor-pointer" onClick={handleThemeChange}>
          {isDark ? <CiBrightnessUp size={24} /> : <IoMoonOutline size={24} />}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
