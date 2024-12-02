function NavLink({ title }) {
  return (
    <li>
      <a
        href={`#${title.toLowerCase()}`}
        className="z-20 cursor-pointer rounded-full transition-all delay-75 hover:bg-[#f2f6f6] hover:px-3 hover:py-2 dark:hover:bg-[#ffffff0b]"
      >
        {title}
      </a>
    </li>
  );
}

export default NavLink;
