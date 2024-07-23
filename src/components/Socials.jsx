import React from "react";
import { socialsData } from "../utils/socialsData";
import { IoPaperPlaneOutline, IoMailOutline } from "react-icons/io5";
import { PiNotepadLight } from "react-icons/pi";
import SocialButton from "./SocialButton";

function Socials() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <div className="flex gap-4 md:gap-5">
        {socialsData.map((social) => {
          return (
            <a
              href={social.url}
              key={social.icon}
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl p-3 font-light text-primary-600 shadow-[0_0_15px_rgba(0,0,0,0.130)] dark:bg-primary-400 dark:text-gray-300"
              target="_blank"
            >
              <span className="lg:text-xl">
                <social.icon />
              </span>
              <span>{social.name}</span>
            </a>
          );
        })}
      </div>
      <div className="flex gap-2 md:mt-4">
        <SocialButton
          name="Blogs"
          icon={PiNotepadLight}
          url="https://hashnode.com/@saran1522"
        />
        <SocialButton
          name="Mail"
          icon={IoMailOutline}
          url={`mailto:saransinha205@gmail.com`}
        />
        {/* <SocialButton
          name="Resume"
          icon={IoPaperPlaneOutline}
          url="https://drive.google.com/file/d/1G_4VmpaTkMZv040p3GsdvZ04H-Ozm1EV/view?usp=drive_link"
        /> */}
      </div>
    </div>
  );
}

export default Socials;
