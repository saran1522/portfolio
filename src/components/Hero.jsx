import React from "react";
import Socials from "./Socials";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-primary-600 dark:text-gray-300">
      <img src="/pfp4.png" className="h-56" alt="" />
      <h3 className="text-center text-5xl font-normal">Hi, I am Saran Sinha</h3>
      <p className="p-4 text-center font-light leading-10 lg:w-[80%] lg:text-xl lg:leading-10">
        I'm a full-stack developer based in India. Alongside development, I also
        solve Data Structures and Algorithmic challenges and share my knowledge
        through technical blogs. Always learning and growing. Curious to know
        more? Keep scrolling!
      </p>
      <div>
        <Socials />
      </div>
    </div>
  );
}

export default Hero;
