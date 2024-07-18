import React from "react";

function SocialButton({ name, icon: Icon, url }) {
  return (
    <a
      href={url}
      className="mt-6 flex items-center gap-2 rounded-xl bg-gray-800 p-3 font-light text-white md:mt-0 lg:mt-0 dark:border dark:border-gray-500 dark:bg-transparent dark:text-gray-300"
      target="_blank"
    >
      {name}
      <Icon size={18} />
    </a>
  );
}

export default SocialButton;
