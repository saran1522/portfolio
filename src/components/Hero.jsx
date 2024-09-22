import React from "react";
import Socials from "./Socials";

function Hero() {
  return (
    <div className="pt-32 text-primary-600 dark:text-gray-300">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-50 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:bg-[#ffffff0b]">
          <img src="/pfp5.png" className="size-28 rounded-full" alt="" />
        </div>
        <p className="p-4 text-center tracking-wide lg:w-[70%] lg:text-xl lg:leading-snug">
          I am Saran Sinha, a full-stack developer based in India. I build web
          apps, solve algorithmic problems and write technical blogs. Want to
          know more? Keep scrolling!
        </p>
        <div>
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default Hero;
