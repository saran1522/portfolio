import React from "react";

function SocialButton({ name, icon: Icon, url }) {
  return (
    <a
      href={url}
      className="flex items-center justify-center gap-2 rounded-xl bg-gray-800 px-3 py-2 text-center font-light text-white md:mt-0 lg:mt-0 dark:border dark:border-gray-500 dark:bg-transparent dark:text-gray-300"
      target="_blank"
    >
      {name}
      <Icon size={18} />
    </a>
  );
}

export default SocialButton;
