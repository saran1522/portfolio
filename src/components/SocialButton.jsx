import React from "react";

function SocialButton({ name, icon: Icon, url }) {
  return (
    <a
      href={url}
      className="dark: flex items-center justify-center gap-1 rounded-xl border border-gray-600 px-3 py-2 text-center text-base font-light md:mt-0 lg:mt-0"
      target="_blank"
    >
      {name}
      <Icon size={18} />
    </a>
  );
}

export default SocialButton;
