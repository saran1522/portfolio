import Socials from "./Socials";

function Hero() {
  return (
    <div className="pt-32 text-lg">
      <div className="flex flex-col items-center justify-center gap-4">
        <img src="/pfp5.png" className="size-28 rounded-full" alt="" />
        <p className="p-4 text-center tracking-wide lg:w-[70%] lg:leading-snug">
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
