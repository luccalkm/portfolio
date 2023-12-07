import { useState } from "react";
import { SocialIcon } from "../common/SocialIcon";
import github from "../../assets/icons8-github-100.png";
import linkedin from "../../assets/icons8-linkedin-circled-100.png";
import mail from "../../assets/icons8-circled-envelope-100.png";

export const SocialMedia = () => {
  const [showSocial, setShowSocial] = useState(false);

  const handleClick = () => {
    setShowSocial(!showSocial);
  };

  return (
    <div
      className={`bg-contacts bg-center bg-origin-content bg-contain bg-no-repeat bg-white ${
        showSocial && "scale-100"
      } fixed z-20 m-8 bottom-0 right-0 py-2 rounded-full w-16 h-16 cursor-pointer`}
      onClick={handleClick}
    >
      <SocialIcon
        position={{ x: -20, y: -1 }}
        color="bg-transparent"
        showSocial={showSocial}
        link={github}
      />
      <SocialIcon
        delay={150}
        color="bg-transparent"
        position={{ x: -36, y: -1 }}
        showSocial={showSocial}
        link={linkedin}
      />
      <SocialIcon
        delay={300}
        color="bg-transparent"
        position={{ x: -52, y: -1 }}
        showSocial={showSocial}
        link={mail}
      />
    </div>
  );
};
