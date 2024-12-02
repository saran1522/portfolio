import { socialsData } from "../utils/socialsData";
import SocialButton from "./SocialButton";

function Socials() {
  return (
    <div className="flex justify-center gap-4 max-md:flex-wrap max-md:gap-2 md:gap-5">
      {socialsData.map((social) => {
        return (
          <SocialButton
            key={social.name}
            name={social.name}
            icon={social.icon}
            url={social.url}
          />
        );
      })}
    </div>
  );
}

export default Socials;
