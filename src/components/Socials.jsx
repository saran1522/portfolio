import React from "react";
import { socialsData } from "../utils/socialsData";
import { IoMailOutline } from "react-icons/io5";
import { PiNotepadLight } from "react-icons/pi";
import SocialButton from "./SocialButton";

function Socials() {
  return (
    <div className="flex justify-center gap-4 max-md:flex-wrap max-md:gap-2 md:gap-5">
      {socialsData.map((social) => {
        return (
          <SocialButton
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
