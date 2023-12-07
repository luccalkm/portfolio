import { useState } from "react";
import { SocialIcon } from "./SocialIcon";

export const SocialMedia = () => {
  const [showSocial, setShowSocial] = useState(false);

  const handleClick = () => {
    setShowSocial(!showSocial);
  };

  return (
    <div
      className="fixed z-20 m-8 bottom-0 right-0 py-2 bg-red-500 rounded-full w-16 h-16 border-y-sky-950 cursor-pointer duration-200"
      onClick={handleClick}
    >
      <SocialIcon
        position={{ x: 0, y: -20 }}
        color="bg-transparent"
        showSocial={showSocial}
        link="https://img.icons8.com/stickers/100/linkedin-circled.png"
      />
      <SocialIcon
        delay={150}
        color="bg-transparent"
        position={{ x: 0, y: -36 }}
        showSocial={showSocial}
      link="https://img.icons8.com/stickers/100/github.png"
      />
      <SocialIcon
      link="https://img.icons8.com/stickers/100/gmail-new.png"
        delay={300}
        color="bg-transparent"
        position={{ x: 0, y: -52 }}
        showSocial={showSocial}
      />
    </div>
  );
};
